/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  }
  return n1 + n2;
};

console.log(crazySum(5, 5));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let boundary = function (n) {
  if ((n > 19 && n <= 100) || n === 400) {
    return true;
  }
  return false;
};

console.log(boundary(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let reverseString = function (stringa) {
  return stringa.split("").reverse().join("");
};

console.log(reverseString("ciao"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let upperFirst = function (stringa) {
  let split = stringa.split(" ");
  let parolaFinale = "";
  for (let i = 0; i < split.length; i++) {
    let firstLetter = split[i].charAt(0).toUpperCase();
    let rest = split[i].slice(1);

    parolaFinale += firstLetter + rest + " ";
  }

  return parolaFinale;
};

console.log(upperFirst("ciao come va"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let giveMeRandom = function (n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 11));
  }

  console.log(arr);
};

giveMeRandom(3);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let area = function (l1, l2) {
  return l1 * l2;
};

console.log(area(20, 30));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let crazyDiff = function (n) {
  let diff = n - 19;

  if (diff > 19) {
    return diff * 3;
  }

  return diff;
};

console.log(crazyDiff(50));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let codify = function (stringa) {
  let code = "code";
  let checkIfContainsCode = function () {
    if (
      stringa[0] === "c" &&
      stringa[1] === "o" &&
      stringa[2] === "d" &&
      stringa[3] === "e"
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (checkIfContainsCode()) {
    return stringa;
  } else {
    return code.concat(stringa);
  }
};

console.log(codify("epicode"));
console.log(codify("codecademy"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let check3and7 = function (int) {
  if (int % 3 === 0 || int % 7 === 0) {
    return true;
  }
  return false;
};

console.log(check3and7(4));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cutString = function (stringa) {
  let arr = stringa.split("");
  arr.pop();
  arr.shift();
  return arr.join("");
};

console.log(cutString("epicode"));
