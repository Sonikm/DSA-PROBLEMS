#include<iostream>
using namespace std;

int main()
{
   int marks;

   cout << "Enter the marks: " << endl;
   cin >> marks;

   if(marks >= 90) {
    cout << "A";
   }
   else if(marks >= 50)
   {
    cout << "C";
   }
   else if(marks >= 30)
   {
    cout << "D";
   }
   else {
    cout << "E";
   }
   
   

   return 0;
}

/**
 *  >=90 -> A
 *  >=80 -> B
 *  >=50 -> C
 *  >=30 -> D
*/