import socket
from contextlib import closing

host = '127.0.0.1'
port = 4000
bufsize = 4096

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

with closing(sock):
	sock.bind((host, port))
	while True:
		print(sock.recv(bufsize))
