// 1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.
// 2) Utilizzando const e/o let e template literal.
// Creare due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.
// 3) Utilizzando const e/o let. Dare la possibilità di inserire due parole.
// Verificare se le due parole hanno la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti
// stampare la più lunga delle due.



1)
const numero=parseInt(prompt('inserisci un numero'));
  if (numero % 2==0){
  console.log(numero + 'è  un numero pari');
  }else {
  console.log(numero + 1);
  }
};


2)
const numeri=[5, 10, 20,43,23];
  if (numeri[] %2==0){
    document.getElementById('verde').innerHTML=numeri ' '+'sono pari';
  }
  else{
    document.getElementById('rosso').innerHTML=numeri ' '+'sono dispari';
  };


  let string = 'Qui';
  let stringTwo = 'Qua';
  let rosso = 'red';
  let verde= 'green';
  document.getElementById('testo').innerHTML = `
    <ul>
      <li class="${colore}">
        ${string} Quo ${stringTwo}
        Andarono
        al mercato
      </li>
    </ul>
  `;


3)

let parola1=prompt('inserisci una parola');
let parola2=prompt('inserisci un altra parola');
  if(parola1.lenght==parola2.lenght){
    console.log(parola1, parola2);
  }else if(
    parola1.lenght<parola2.lenght){
      console.log(parola2);
    }else{
      console.log(parola1);
    }
  };
