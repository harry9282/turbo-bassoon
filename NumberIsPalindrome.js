"use strict";
function isPalindrome(num) {
    if (num < 0)
        return false;
    let reversed = 0;
    let orignal = num;
    while (num !== 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed === orignal;
}
;
//This would has been done by recursion as well but as recursion will intorduced extra space of stacks we avoided it 
