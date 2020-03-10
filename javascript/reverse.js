// let x = 401;

    // let y = (x % 10) * 100;
    // x = Math.floor(x / 10);
    // y = y + (x % 10) * 10;
    // x = Math.floor(x / 10);

    // y = y + x;

    
    // let length = x.toString().length;
    // let y = 0;

    // for(i = 10; i= i * 10; i < x ) {
    //     y = y + (x % i) * Math.pow(10, (length / (i/10)));        
    // }
    
    // a = (x / i) * 10;

    // y = y + Math.floor(a);

    
    // console.log(y);

var x = 4321;
var rev = 0;
var rem = 0;

while( x > 0) {
    rem = x % 10;
    rev = rev * 10 + rem;
    x = parseInt(x/10);
}

console.log(rev);