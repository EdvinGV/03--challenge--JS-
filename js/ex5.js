/* 
5. Parašyti f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. Gražiname true arba false

TEST:
isSameNum(4, 8) ➞ false
isSameNum(2, 2) ➞  true
isSameNum(2, "2") ➞ false */
console.clear();
function isSameNum(x, y) {
    if (x === y) { return true; }
    else if
        (x !== y) { return false; }

}
console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, "2"));