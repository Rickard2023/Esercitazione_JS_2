/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Nel linguaggio JavaScript esistono dei modi per far capire al computer che cosa vogliamo scrivere e come vogliamo utilizzare ciò che abbiamo scritto.
Il modo più semplice è utilizzare dei data types semplici come string, number, boolean, null, bigint e symbol. Alcuni, come number e bigint, dicono al computer che vogliamo utilizzare quel dato come un numero, mentre altri, come string, che vogliamo
utilizzarlo come stringa, cioè insieme di lettere. Particolare è il data type boolean, che invece contiene un valore che può essere solo vero o falso. Se è vero, il computer lo leggerà come un numero uno, se è falso come uno zero, e ciò è utile
quando vogliamo verificare che il nostro codice soddisfi o meno certe condizioni, come ad esempio se un valore number è più grande di un altro valore number o se un data type è, ad esempio, di tipo string.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Gli oggetti sono dei data type di tipo strutturale, cioè dei contenitori di dati. I dati contenuti sono definiti "membri" e possono variare per tipologia e quantittà.*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
number1 += 20; 
console.log(number1);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Riccardo Copparoni";
console.log(myName);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x -= 4;
console.log(x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 

*/
let name1 = "john";
let name2 = "John";
console.log(name1 != name2);
console.log(name1 === name2);