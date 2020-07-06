#include <iostream>

using namespace std;

int main()
{
	double feet;

	do {
		cout << "feet(0 end) : ";
		cin >> feet;

		cout << feet * 12 << "inchi\n";
	} while ( feet != 0.0 );

	return 0;
}
