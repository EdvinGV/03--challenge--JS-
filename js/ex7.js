/* 7. Parašyti f-ją, kuri atspausdintų paduodamo skaičiaus daugybos lentelę 

TEST:
Multiplication(3) ➞

1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
Ir t.t.iki
10 * 3 = 30 */
console.clear();

function Multiplication(num) {
    let rezultatas = "";
    for (let i = 1; i <= 10; i++) {
        rezultatas = rezultatas + (i + "*" + num + "=" + (i * num) + "\r\n");

    }
    return rezultatas;
}
console.log(Multiplication(3));
