var x = 4321;
var rev = 0;
var rem = 0;

while( x > 0) {
    rem = x % 10;
    rev = rev * 10 + rem;
    x = parseInt(x/10);
}

console.log(rev);