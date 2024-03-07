console.log("ok");

/*

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/

// MAIL
// creare un input per l mail
// creare un bottone per inviare il dato e farlo analizzare
// mettere un eventListener sul pulsante
let checkBtnElementDOM = document.querySelector('.check_btn');
checkBtnElementDOM.addEventListener('click', function(){

})
// test elemento bottone
console.dir(checkBtnElementDOM);
// recuperare il valore inserito
// fare un array con diverse mail
// fare una variabile che contenga il valore inserito dall'utente
// fare una variabile booleana con false per contenere l'esito della verifica mail
// fare un ciclo che confronti le mail e che nel caso modifichi in TRUE la variabile di controllo
// fare un if che verifichi la variabile di controllo e nel caso avvii una funzione che restituisca un messaggio

// DADI
// mettere un tasto che avvii il gioco dei dadi
// mettere un eventListener su di esso che avvii il lancio dei dadi
// due variabili : una per l'utente, una per il computer.
// generare due numeri random
// confrontare i numeri random e vedere se è patta oppure chi ha vinto
// restituire i valori ed il vincitore