/* 3. Parašyti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, 
antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. 
Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių. 


TEST:
basketballPoints(5, 25, 10) ➞ 85
basketballPoints(1, 1, 1) ➞ 6
basketballPoints(10, 20, 5) ➞ 65 */
console.clear();

function basketballPoints(a, b, c) {
    points = a + b * 2 + c * 3;
    return points;
}

console.log(basketballPoints(5, 25, 10));
console.log(basketballPoints(1, 1, 1));
console.log(basketballPoints(10, 20, 5));