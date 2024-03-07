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

// creo nodo bottone
const checkBtnElementDOM = document.querySelector('.check_btn');

// creo nodo input
const inputEmailElementDOM = document.getElementById('email');

// fare un array con diverse mail
let emailList = ["ciccio@gmail.com", "pino@msn.com", "cagnetti@precisetti.it", "castagneveryday@hotmail.it"];

// creo contenitore valore input
let userEmail;

// creao una variabile booleana per il controllo
let checkBoolean = false;

checkBtnElementDOM.addEventListener('click', function(){

  // recuper0 il valore inserito dall'input
  userEmail = inputEmailElementDOM.value;

  // controllo che il valore richiamato non sia vuoto
  if( userEmail === ''){
    console.log("Inserire una mail");
  }else{
    // ciclo for che confronti le mail nell'array con quela inserita dal'utente
  for(let indexEmail =0 ; indexEmail<emailList.length ; indexEmail++){
      // confronto le mail
      if(userEmail === emailList[indexEmail]){
        // console.log('okkkkkkk');modifico la variabile booleana
        checkBoolean = true;
      }
    }
    
  }

  // controllo se la variabile booleana è stata modificata in true
  if(checkBoolean === true){
    // approvo l'accesso
    console.log("email approvata");
  }else{
    // nego l'accesso
    console.log("email non corretta");
  }
})

// DADI
// mettere un tasto che avvii il gioco dei dadi
// mettere un eventListener su di esso che avvii il lancio dei dadi
// due variabili : una per l'utente, una per il computer.
// generare due numeri random
// confrontare i numeri random e vedere se è patta oppure chi ha vinto
// restituire i valori ed il vincitore