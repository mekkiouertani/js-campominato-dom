//inseriamo utility per generatore numeri casuali
//creiamo una const che conterra il numero delle bombe
//creiamo un array vuoto dove metteremo i numeri casuali(bombe sparse)
//creiamo una funziona che genera le bombe


//il nostro numero di bombe
const NUM_BOMBS = 16;

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

    //dichiaro la variabile del numero di quadratini
    let numSquare;

    //usiamo il ciclo for per stampare il numero di quadratini corrente
    if (selectLevel.value === 'easy'){
        numSquare = 100;
    } else if (selectLevel.value === 'medium'){
        numSquare = 90;
    } else if (selectLevel.value === 'hard'){
        numSquare = 42;
    } 
    let bombs = bombsGenerator(numSquare);
    //creiamo il ciclo for per far stampare i 100 quadratini
    for (let i = 0; i < numSquare; i++){
        let square = drawSquare(i, numSquare, bombs);
        //appendiamo i quadratini dentro il campo da gioco
        playGround.append(square);
    }
});
 
//funzione per stampare i quadrati
function drawSquare(squareIndex, numSquare, bombs){
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
        
        if(bombs.includes(parseInt(squareIndex +1))){
            square.classList.add('bg-danger');
            square.innerHTML = '<i class="fa-solid fa-bomb fa-beat"></i>';
        }
    });

    //aggiungiamo il return di square
    return square;
};

//creiamo una funzione che cra le bombe
function bombsGenerator(numSquare){
    
    //array che conterrà le bombe
    let bombList = [];
    console.log(bombList);

    //ciclo while 
    while (bombList.length < NUM_BOMBS){
        
        let randomBombs = getRndInteger (1, numSquare)
        console.log(randomBombs);

        if(!bombList.includes(randomBombs)){
            bombList.push(randomBombs);
        } 
    } 
    return bombList;
}

