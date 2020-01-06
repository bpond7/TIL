# Part1:classicRPyCの概要

RPyC2.60によるチュートリアルです。RPyC3はライブラリの再設計なので、いくつかの小さな変更がありますが、RPyC2.60に精通していれば、同様に利用することができます。

## サーバーの起動
このチュートリアルでは、サーバーとクライアントの両方を同じマシン（localhost）で実行します。サーバーの起動は以下の通りです。
~~~
$ python bin/rpyc_classic.py
~~~
実行結果は
~~~
INFO:SLAVE/18812:server started on [127.0.0.1]:18812
~~~
これはサーバーで実行されているパラメータを示します。
SLAVEはSlaveServiceを示します。（詳細は別途）

[127.0.0.1]\:18812は、サーバーがバインドするアドレスです。この場合はサーバーはローカルホストからの接続のみを受け入れます。 --host 0.0.0.0でサーバーを実行すると、どこからでも任意のコードを実行できます。

## クライアントの実行
次のステップでは、サーバーに接続するクライアントを実行します。サーバーへの接続を作成するために必要なコードは以下のようになります。
~~~
import rpyc
conn = rpyc.classic.connect("localhost")
~~~
サーバーがデフォルトのポート（TCP 18812）で実行されていない場合、port=パラメーターをclassic.connect()に渡す必要があります。

## modules Namespace
connectオブジェクトのmodulesプロパティは、サーバーのモジュール空間を公開します。つまり、リモートモジュールにアクセスできます。 方法は次のとおりです。
~~~
rsys = conn.modules.sys     # サーバー上のリモートモジュール
~~~
このドット表記は、最上位モジュールでのみ機能します。パッケージ内に含まれるモジュールのネストされたインポートが必要な場合は、ブラケット表記を使用してリモートモジュールをインポートする必要があります。
~~~
minidom = conn.modules["xml.dom.minidom"]
~~~
これだけでも、ほとんど何でもできるようになっています。 たとえば、サーバーのコマンドラインの表示方法は次のとおりです。
~~~
>>> rsys.argv
['bin/rpyc_classic.py']
~~~
サーバーのインポートメカニズムのモジュール検索パスを追加します。
~~~
>>> rsys.path.append('/tmp/totally-secure-package-location)
~~~
サーバープロセスの現在の作業ディレクトリを変更します。
~~~
>>> conn.modules.os.chdir('..')
~~~
またはサーバーの標準出力に何かを印刷することもできます。
~~~
>>> print("Hello World!", file=conn.modules.sys.stdout)
~~~

## builtins Namespace
classic接続のbuiltinsプロパティは、サーバーのpython環境で使用可能なすべての組み込み関数を公開します。たとえば、サーバー上のファイルにアクセスするために使用できます。
~~~
>>> f = conn.builtins.open('/home/oblivious/.ssh/id_rsa')
>>> f.read()
'-----BEGIN RSA PRIVATE KEY-----\nMIIJKQIBAAKCAgEA0...XuVmz/ywq+5m\n-----END RSA PRIVATE KEY-----\n'
~~~

## eval、execute Methods
classic接続には、evalおよびexecuteプロパティがあり、任意の式を直接評価したり、サーバー上で任意のステートメントを実行することもできます。 
~~~
>>> conn.execute('import math')
>>> conn.eval('2*math.pi')
6.283185307179586
~~~
しかし、これにはrpyc classic接続にグローバル変数の概念が必要です。これらは、新しい接続ごとに空の辞書として初期化されるnamespaceプロパティを介してアクセスできます。 したがって、インポート後は次のようになります。
~~~
>>> conn.namespace
{'__builtins__': <...>, 'math': <...>}
~~~
conn.builtins.compile()関数を使用して同じ機能を実現でき、conn.modules.builtins.compile()からもアクセスできるため、どちらも厳密に必要ではありません。リモートで作成した辞書を手動で送信します。

##  teleport method
関数を他の側に送信し、そこで機能を実行できる別の方法があります。
~~~
>>> def square(x):
...    return x**2
>>> fn = conn.teleport(square)
>>> fn(2)
~~~
これにより、予想どおり2の2乗が計算されますが、計算はリモートで行われます。さらに、テレポートされた関数は、リモート名前空間で自動的に定義されます。
~~~
>>> conn.eval('square(3)')
9

>>> conn.namespace['square'] is fn
True
~~~
また、テレポートされたコードは名前空間にアクセスできます。
~~~
>>> con.execute('import sys')
>>> conn.teleport(lambda: print(sys.version_info))
~~~
リモート端末にバージョンを出力します。現在、任意の関数をテレポートすることはできません。特に、重要なオブジェクトのクロージャに問題がある可能性があります。問題が発生した場合は、dillなどの外部ライブラリを確認する必要があります。