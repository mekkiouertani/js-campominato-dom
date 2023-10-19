//creiamo la base su html con div che sarà la scacchiera e un bottone
//OBIETTIVO: al click del bottone dobbiamo stampare dei quadrati per formare una scacchiera
//creiamo una funzione che creetà i vari quadrati
    //dichiarare il numero di quadratini che vogliamo
    //inserire la formula della radice quadrata
//dichiariamo il campo da gioco (playground) dentro il la funzione del click
//creiamo ciclo for per far stampare i quarati
//aggiungiamo classi per dare effetti ai quadrati
   
//BONUS
    //prendiamo il valore del selectValue
    //const numSquare diventa let con stringa vuota
    //assegniamo il valore scelto dall'utente a let numSquare 


 //prendiamo il valore di select
 const selectLevel = document.getElementById('select');    

 //dichiariamo il bottone dall'html
 const btn = document.querySelector('button');
 
 //creiamo evento sul click
 btn.addEventListener('click', function(){
     //dichiariamo il div dove stamperemo i nostri quadrati
     const playGround = document.getElementById('playground');
     //evitiamo di stampare infiniti campi da gioco
     playGround.innerHTML = '';
     
     //togliamo il valore alla variabile del numero di quadratini(sarà aggiunto nel ciclo for)
     let numSquare;
 
     //usiamo il ciclo for per stampare il numero di quadratini corrente
     if (selectLevel.value === 'easy'){
         numSquare = 100;
     } else if (selectLevel.value === 'medium'){
         numSquare = 90;
     } else if (selectLevel.value === 'hard'){
         numSquare = 42;
     } 
 
     //creiamo il ciclo for per far stampare i 100 quadratini
     for (let i = 0; i < numSquare; i++){
         let square = drawSquare(i, numSquare);
         //appendiamo i quadratini dentro il campo da gioco
         playGround.append(square);
     }
 });
 
 //funzione per stampare i quadrati
 function drawSquare(squareIndex, numSquare){
     //formula per il quadrato
     const squareWidth = Math.sqrt(numSquare);
     //creiamo il div che diventerà un quadrato
     const square = document.createElement('div');
     //diamo una dimensione al div per farlo diventare un quadrato
     square.style.width = `calc(100% / ${squareWidth})`;
     square.style.height = square.style.width;
     //aggiungiamo la classe con i bordi per vedere il div
     square.classList.add('square');
 
     //aggiungiamo il numero indice dentro il quadrato
     square.textContent = squareIndex + 1;
 
     //aggiungiamo evento per quando clicchiamo sul quadratino
     square.addEventListener('click', function(){
         square.classList.add('active');
         square.style.color = 'white';
         console.log('hai cliccato sul numero: ', this.textContent);
     });
 
     //aggiungiamo il return di square
     return square;
 };