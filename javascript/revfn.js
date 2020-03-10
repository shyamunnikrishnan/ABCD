function reverse(x) {
    rev = 0;
    rem = 0;

    while (x > 0) {
        rem = x % 10;
        rev = rev * 10 + rem;
        x = parseInt(x / 10);
    }

    console.log(rev)
}

var a = 716;

reverse(a);