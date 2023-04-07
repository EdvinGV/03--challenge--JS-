/* 1. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
padidinamas vienetu ir gražinamas rezultatas

TEST:
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2 */

console.clear()
function addition(skaicius) {
    skaicius = ++skaicius;
    return skaicius;
}

console.log(addition(0));
console.log(addition(10));
console.log(addition(-3));