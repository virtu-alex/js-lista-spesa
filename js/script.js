/*Descrizione:
Rivediamo l’esercizio della lista della spesa visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
Consigli:
Potete provare a fare l'esercizio una prima volta col for e poi convertire piano piano in while.
Lista della spesa (da convertire in array)
Uova
Pane
Latte
Biscotti
Pasta
Affettati
Formaggio
Verdura
Frutta*/


//AZIONE 1.1 --- RECUPERO LA MIA UL DALL'HTML
let list = document.getElementById('list')
//AZIONE 1.2 --- VARIABILE DI APPOGGIO
let myList = '';

//AZIONE 2 --- CREO IL MIO ARRAY
const groceryList = ["uova", "pane", "latte", "biscotti", "pasta", "affettati", "formaggio", "verdura", "frutta"];

//AZIONE 3 --- PROVA CON CICLO FOR
// for (let i = 0; i < groceryList.length; i++) {
//     myList += `<li>${groceryList[i]}</li>`;
// }


// AZIONE 4 --- RIPETO IL CICLO FOR MA TRASFORMANDOLO IN UN COSTRUTTO WHILE
let i = 0;
while (i < groceryList.length) {
    myList += `<li>${groceryList[i]}</li>`;
    i++;

}
//AZIONE 5 --- STAMPO IN PAGINA
list.innerHTML = myList
    // console.log(groceryList);