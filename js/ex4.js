/* 4. Parašyti f-ją, kuriai būtų paduodami du parametrai (skaičiai), ir f-ja gražintų true  jei dviejų skaičių
sumą yra mažiau arba lygų 100 ir false jei daugiau už 100. 

TEST:
lessThan100(22, 15) ➞ true
lessThan100(83, 34) ➞ false
lessThan100(3, 77) ➞ true */
console.clear();
function lessThan100(x, y) {
    if (x + y <= 100) {
        return true;
    } else if (x + y > 100) {
        return false;
    }
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));