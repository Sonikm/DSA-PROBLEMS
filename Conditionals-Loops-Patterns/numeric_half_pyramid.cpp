#include<iostream>
using namespace std;

int main()
{

    /**
     *   1
     *   1 2
     *   1 2 3
     *   1 2 3 4
     *   1 2 3 4 5
    */

  int rowCount = 6;

   for (int row = 0; row < rowCount; row++)
   {
     for(int col= 0; col <= row; col++){
        cout << " " << col+1 << " ";
     }

     cout << endl;
   }
   

   return 0;
}