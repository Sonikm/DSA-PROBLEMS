/*
 ****
 ****
 ****
 ****
 */

function pattern1(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      row += "*";
    }
    console.log(row);
  }
}

//   pattern1(4, 4);

/**
 *    *
 *    **
 *    ***
 *    ****
 *    *****
 *    ******
 */

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// pattern2(6);

/**
 *    1
 *    1 2
 *    1 2 3
 *    1 2 3 4
 *    1 2 3 4 5
 *
 *    1 => 1
 *    2 => 1 2
 *    3 => 1 2 3
 *    4 => 1 2 3 4
 *    5 => 5
 *    6 => 6
 */

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += `${j}`;
    }
    console.log(pattern);
  }
}

//   pattern3(6);

/**
 *    *
 *    **
 *    ***
 *    ****
 *    *****
 *    ******
 *
 *    0 => 0
 *    1 => 1
 *    2 => 2
 *    3 => 3
 *    4 => 4
 *    5 => 5
 *    6 => 6
 */

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

//   pattern4(6);

/**
  
   rows --> 1 => 5 cols * * * * *
   rows --> 2 => 4 cols * * * *
   rows --> 3 => 3 cols * * *
   rows --> 4 => 2 cols * *
   rows --> 5 => 1 cols * 
   */
function pattern5(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = n; j >= i; j--) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

//   pattern5(6);

/**
  
   rows --> 1 => 5 cols 1 2 3 4 5
   rows --> 2 => 4 cols 1 2 3 4 
   rows --> 3 => 3 cols 1 2 3
   rows --> 4 => 2 cols 1 2
   rows --> 5 => 1 cols 1
   */
function pattern6(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n - i + 1; j++) {
      pattern += `${j}`;
    }
    console.log(pattern);
  }
}

// pattern6(6);

/**
   rows --> 1 => stars - - - - *
   rows --> 2 => stars - - - * * 
   rows --> 3 => stars - - * * *
   rows --> 4 => stars - * * * *
   rows --> 5 => stars * * * * *
   */
function pattern7(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n; j++) {
      if (n - i + 1 <= j) {
        pattern += `*`;
      } else {
        pattern += ` `;
      }
    }
    console.log(pattern);
  }
}

// pattern7(6);

/**
    _ _ _ _ * _ _ _ _
    _ _ _ * * * _ _ _
    _ _ * * * * * _ _ 
    _ * * * * * * * _
    * * * * * * * * *
    
    spaces, stars, spaces

   */
function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    console.log(pattern);
  }
}

// pattern8(6);
/**
 * * * * * * * * *
_ * * * * * * * _
 _ _ * * * * * _ _ 
 _ _ _ * * * _ _ _
 _ _ _ _ * _ _ _ _
    
    spaces, stars, spaces

   */
function pattern9(n) {
  for (let i = n - 1; i >= 0; i--) {
    let pattern = "";

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    console.log(pattern);
  }
}

// pattern9(6);

/*
 _ _ _ _ * _ _ _ _
 _ _ _ * * * _ _ _
 _ _ * * * * * _ _ 
 _ * * * * * * * _
 * * * * * * * * *
 * * * * * * * * *
_ * * * * * * * _
 _ _ * * * * * _ _ 
 _ _ _ * * * _ _ _
 _ _ _ _ * _ _ _ _
    
    spaces, stars, spaces

   */
function pattern9(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    console.log(pattern);
  }

  for (let i = n - 1; i >= 0; i--) {
    let pattern = "";

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }

    for (let j = 0; j < n - i - 1; j++) {
      pattern += " ";
    }

    console.log(pattern);
  }
}

// pattern9(6);

/*
   *
   * *
   * * *
   * * * *
   * * * * *
   * * * *
   * * *
   * *
   * 
    
    spaces, stars, spaces

   */

function pattern10(n) {
  for (i = 1; i <= 2 * n - 1; i++) {
    let pattern = "";
    let stars = i;
    if (i > n) stars = 2 * n - i;

    for (j = 0; j < stars; j++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

pattern10(5);
