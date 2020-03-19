import socket
import time
from contextlib import closing

host = '127.0.0.1'
port = 4000
count = 0

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

with closing(sock):
	while True:
		msg = '{0}'.format(count).encode('utf-8')
		print(msg)
		sock.sendto(msg, (host, port))
		count += 1
		time.sleep(1)

