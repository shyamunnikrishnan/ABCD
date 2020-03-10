var x = 32123;
var rem = 0;
var rev = 0;

var y = x;

while (x > 0) {
    rem = x % 10;
    rev = rev*10 + rem;
    x = parseInt(x/10);
}

if ( y == rev) {
    console.log( y + ' is a palindrome.');    
} else {
    console.log( y + ' is not a palindrome.');    
}