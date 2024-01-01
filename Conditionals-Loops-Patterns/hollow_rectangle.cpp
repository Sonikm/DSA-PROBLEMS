#include<iostream>
using namespace std;

int main()
{

    /**
     *   * * * * *
     *   *       *
     *   *       *
     *   * * * * *
 
     *  if(row == 0 || row == rowCount - 1) {
     *  cout <<
     * }
     *  else if( col == 0 || col == colCount- 1){
     *  cout <<
     * }
    */

   int rowNo = 4;
   int colNo = 5;

   for(int row = 0; row < rowNo; row++){
     for (int col = 0; col < colNo; col++)
     {
        // first row and last row -> print 5 *
       if(row == 0 || row == rowNo-1) {
        cout << " * ";
       }
       // first col and last col -> print 1 *
       else if(col == 0 || col == colNo-1) {
         cout << " * ";
       }
       // print spaces
       else {
         cout << "   ";
       }
     }
    cout << endl;
     
   }

   

   return 0;
}