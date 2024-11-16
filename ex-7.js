function isPalindrome(string) {
  // Start coding here
  let rev = string.split("").reverse().join("");

    if (rev == string) {
        return true
    }
    return false

}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false