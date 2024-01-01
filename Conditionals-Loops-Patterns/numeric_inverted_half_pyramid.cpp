#include<iostream>
using namespace std;

int main()
{

/**
 *   1 2 3 4 5 
 *   1 2 3 4 
 *   1 2 3
 *   1 2
 *   1
*/

  int n = 5;

  for (int row = 0; row < n; row++){
    for(int col = 0; col < n-row; col++ ) {
        cout << " " << col+1 << " ";
    }

    cout << endl;
  }

  

   return 0;
}

/**
 * || HOME WORK
 * 
 *  1) Full pyramid 
 *        *
 *       * *
 *      * * *
 *     * * * *
 *    * * * * *
 *  2) Inverted Full Pyramid
 *   * * * * *
 *    * * * *
 *     * * *
 *      * * 
 *       *
 * 
 *  3) Numeric Full pyramid
 * 
 *  4) Numeric inverted full pyramid
 * 
 *  5) Numeric Hollow Full Pyramid
 *           1
 *         1   2
 *       1       3
 *     1           4
 *   1   2   3   4   5
 * 
*/