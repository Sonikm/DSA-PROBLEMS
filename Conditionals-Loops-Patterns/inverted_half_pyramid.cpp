#include<iostream>
using namespace std;

int main()
{

    /**
     *    ******
     *    *****
     *    ****
     *    ***
     *    **
     *    *
    */


   int rowCount = 8;

   for (int row = rowCount; row >0 ; row--)
   {
     for(int col= 0; col <= row; col++){
        cout << " * ";
     }

     cout << endl;
   }
   

   return 0;
}