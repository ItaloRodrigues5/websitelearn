const images = [
    "./media/memoria/cachorro.png", "./media/memoria/elefante.png",
    "./media/memoria/leão.png", "./media/memoria/numero1.png",
    "./media/memoria/numero2.png", "./media/memoria/numero3.png"
];

let cards = [...images, ...images];
let firstcard = null;
let secondcard = null;
let score = 0;
let matches = 0;
let time = 0;
let timer;

function startTimer(){
    timer = setInterval(() => {
        time++;
        document.getElementById("timer").textContent = time;
    }, 1000);
}

function stopTimer(){
    clearInterval(timer);
}

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

function checkMatch(){
    if(firstcard.dataset.image === secondcard.dataset.image){
        score += 10;
        matches++;
        firstcard = null;
        secondcard = null;
        document.getElementById("score").textContent = score;

        if(matches === images.length){
            stopTimer();
            alert(`Parabéns!! Você completou o jogo em ${time} segundos!`);
        }
    } else{
        setTimeout(() => {
            firstcard.classList.remove("flipped");
            secondcard.classList.remove("flipped");
            firstcard.style.backgroundImage = "";
            secondcard.style.backgroundImage = "";
            firstcard = null;
            secondcard = null;
        }, 1000);
    }
}

function flipCard(){
    if(this === firstcard || this.classList.contains("flipped")) return;
    this.classList.add("flipped");
    console.log(this.dataset.image);
    this.style.backgroundImage = `url(${this.dataset.image})`;
    this.style

    if(!firstcard){
        firstcard = this;
        return;
    }

    secondcard = this;
    checkMatch();
}

function createBoard(){
    cards = shuffle(cards);
    const board = document.getElementById("memorygame");
    board.innerHTML = "";
    cards.forEach((image, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;
        card.dataset.index = index;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
    
    startTimer();
}

document.addEventListener("DOMContentLoaded", function() {
    createBoard();
});