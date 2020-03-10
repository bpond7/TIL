#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <string>
#include <cstring>
#include <stdio.h>

#define	BUFFER_MAX	400

class simple_udp{
	int sock;
	struct sockaddr_in addr;
public:
	simple_udp(int port){
		sock = socket(AF_INET, SOCK_DGRAM, 0);
		addr.sin_family = AF_INET;
		addr.sin_port = htons(port);
	}
};

std::string s1("hello");
simple_udp udp(4001);
int main(int argc, char **argv){
	//udp0.udp_send("hello");
	return 0;
}
