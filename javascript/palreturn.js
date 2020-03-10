function checkPal(x) {
    let original = x;
    let rev = 0;
    let rem = 0;

    while(x > 0) {
        rem = x % 10;
        rev = (rev * 10) + rem;
        x = parseInt(x / 10);
    }

    if(original == rev) {
        return true;
    } else {
        return false;
    }
}

let num = 12321;

let pal = checkPal(num);

if (pal) {
    console.log(num + ' is a palindrome');
} else {
    console.log(num + ' is not a plaindrome');
}