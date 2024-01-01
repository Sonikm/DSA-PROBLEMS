#include<iostream>
using namespace std;

int main()
{

    /**
     *  Printing Solid rectangle
     * 
     *   * * * * *
     *   * * * * *
     *   * * * * *
     * 
    */
   

   // loop - row observe
    for (int row = 0; row < 3; row++)
    {
        // inner loop - col observe
        for (int col = 0; col < 5; col++)
        {
            cout << " * ";
        }

        cout << "\n";
        
    }
    

   return 0;
}