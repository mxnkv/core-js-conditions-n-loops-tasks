/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(n) {
  if (n < 0) return false;
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(q, k) {
  if (q.y === k.y) return true;
  if (q.x === k.x) return true;
  if (Math.abs(q.x - k.x) === Math.abs(q.y - k.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  if (a === b || a === c || b === c) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let roman = '';
  let n = num;
  for (n; n >= 10; n -= 10) roman += 'X';
  if (n === 9) {
    roman += 'IX';
    n -= 9;
  }
  if (n >= 5) {
    roman += 'V';
    n -= 5;
  }
  if (n === 4) {
    roman += 'IV';
    n -= 4;
  }
  for (n; n >= 1; n -= 1) roman += 'I';
  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(s) {
  let r = '';
  for (let i = 0; i < s.length; i += 1) {
    switch (s[i]) {
      case '-':
        r += 'minus ';
        break;
      case '1':
        r += 'one ';
        break;
      case '2':
        r += 'two ';
        break;
      case '3':
        r += 'three ';
        break;
      case '4':
        r += 'four ';
        break;
      case '5':
        r += 'five ';
        break;
      case '6':
        r += 'six ';
        break;
      case '7':
        r += 'seven ';
        break;
      case '8':
        r += 'eight ';
        break;
      case '9':
        r += 'nine ';
        break;
      case '0':
        r += 'zero ';
        break;
      default:
        r += 'point ';
        break;
    }
  }
  let result = '';
  for (let i = 0; i < r.length - 1; i += 1) result += r[i];
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(s, l) {
  for (let i = 0; i < s.length; i += 1) if (s[i] === l) return i;
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(n, d) {
  if (n === 0 && d === 0) return true;
  let an = n < 0 ? -n : n;
  while (an > 0) {
    const cd = an % 10;
    if (cd === d) return true;
    an = Math.floor(an / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(a) {
  if (a.length < 3) return -1;
  let ts = 0;
  for (let i = 0; i < a.length; i += 1) ts += a[i];
  let ls = 0;
  for (let i = 0; i < a.length; i += 1) {
    const rs = ts - ls - a[i];
    if (ls === rs) return i;
    ls += a[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(s) {
  const m = [];
  for (let i = 0; i < s; i += 1) {
    m[i] = [];
    for (let j = 0; j < s; j += 1) m[i][j] = 0;
  }
  let n = 1;
  let t = 0;
  let b = s - 1;
  let l = 0;
  let r = s - 1;
  while (t <= b && l <= r) {
    for (let i = l; i <= r; i += 1) {
      m[t][i] = n;
      n += 1;
    }
    t += 1;
    for (let i = t; i <= b; i += 1) {
      m[i][r] = n;
      n += 1;
    }
    r -= 1;
    if (t <= b)
      for (let i = r; i >= l; i -= 1) {
        m[b][i] = n;
        n += 1;
      }
    b -= 1;
    if (l <= r)
      for (let i = b; i >= t; i -= 1) {
        m[i][l] = n;
        n += 1;
      }
    l += 1;
  }
  return m;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const m = matrix;
  const n = m.length;
  for (let i = 0; i < n; i += 1)
    for (let j = i + 1; j < n; j += 1) {
      const t = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = t;
    }
  for (let i = 0; i < n; i += 1)
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      const t = m[i][j];
      m[i][j] = m[i][n - 1 - j];
      m[i][n - 1 - j] = t;
    }
  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const a = arr;
  const s = (i, j) => {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  };
  const mot = (x, y, z) => {
    if ((x - y) * (x - z) <= 0) return x;
    if ((y - x) * (y - z) <= 0) return y;
    return z;
  };
  const p = (l, r) => {
    const m = Math.floor((l + r) / 2);
    const v = mot(a[l], a[m], a[r]);
    let pi = l;
    if (v === a[m]) pi = m;
    else if (v === a[r]) pi = r;
    s(pi, r);
    let i = l;
    for (let j = l; j < r; j += 1) {
      if (a[j] <= v) {
        s(i, j);
        i += 1;
      }
    }
    s(i, r);
    return i;
  };
  if (a.length <= 1) return a;
  const qs = (l, r) => {
    if (l >= r) return;
    const pi = p(l, r);
    qs(l, pi - 1);
    qs(pi + 1, r);
  };
  qs(0, a.length - 1);
  return a;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(s, i) {
  if (s.length <= 1 || i <= 0) return s;
  let cur = s;
  let c = 0;
  for (let x = 1; x <= i; x += 1) {
    let e = '';
    let o = '';
    for (let j = 0; j < cur.length; j += 1) {
      if (j % 2 === 0) e += cur[j];
      else o += cur[j];
    }
    cur = e + o;
    if (cur === s) {
      c = x;
      break;
    }
  }
  if (c > 0) {
    const e = i % c;
    cur = s;
    for (let x = 0; x < e; x += 1) {
      let ev = '';
      let od = '';
      for (let j = 0; j < cur.length; j += 1) {
        if (j % 2 === 0) ev += cur[j];
        else od += cur[j];
      }
      cur = ev + od;
    }
  }
  return cur;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(num) {
  if (num < 10) return num;
  const ds = [];
  let t = num;
  while (t > 0) {
    ds.unshift(t % 10);
    t = Math.floor(t / 10);
  }
  const n = ds.length;
  let pi = -1;
  for (let i = n - 2; i >= 0; i -= 1) {
    if (ds[i] < ds[i + 1]) {
      pi = i;
      break;
    }
  }
  if (pi === -1) return num;
  let si = pi + 1;
  for (let i = pi + 2; i < n; i += 1) {
    if (ds[i] > ds[pi] && ds[i] < ds[si]) {
      si = i;
    }
  }
  const td = ds[pi];
  ds[pi] = ds[si];
  ds[si] = td;
  for (let i = pi + 1; i < n - 1; i += 1)
    for (let j = i + 1; j < n; j += 1) {
      if (ds[i] > ds[j]) {
        const tm = ds[i];
        ds[i] = ds[j];
        ds[j] = tm;
      }
    }
  let r = 0;
  for (let i = 0; i < n; i += 1) r = r * 10 + ds[i];
  return r;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
