#include <iostream>
using namespace std;

int gcd(int a, int b){
	if(!b) return a;
	return gcd(b, a%b);
}

int main(){
	int a, b, c;

	cout << "2 value: ";
	cin >> a >> b;
	c = gcd(a, b);
	cout << "gcd is " << c << endl;

	return 0;
}
