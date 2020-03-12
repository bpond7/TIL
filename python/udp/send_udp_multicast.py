from __future__ import print_function
import socket
import time
from contextlib import closing

def main():
	local_address = '172.20.10.4'
	multicast_group = '224.0.0.10'
	port = 4000
	bufsize = 4096

	with closing(socket.socket(socket.AF_INET, socket.SOCK_DGRAM)) as sock:
		sock.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_IF, socket.inet_aton(local_address))

		count = 0
		while True:
			msg = 'sendmsg : {0}'.format(count).encode('utf-8')
			print(msg)
			sock.sendto(msg, (multicast_group, port))
			count += 1
			time.sleep(0.5)

	return

if __name__ == '__main__':
	main()
