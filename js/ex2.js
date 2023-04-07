/* 2. Parašyti f - ją, kuriai būtų perduodamas vienas parametras skaičius(valandos) 
ir  konvertuotų valandos į sekundes, bei gražintų rezultatą 
TEST:
howManySeconds(2) ➞ 7200
howManySeconds(10) ➞ 36000
howManySeconds(24) ➞ 86400*/


console.clear()
function howManySeconds(valandos) {
    sekundes = valandos * 60 ** 2;
    return sekundes;
}

console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));
