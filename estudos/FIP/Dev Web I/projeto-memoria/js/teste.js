const images = [
    "./media/memoria/cachorro.png", "./media/memoria/elefante.png",
    "./media/memoria/leão.png", "./media/memoria/numero1.png",
    "./media/memoria/numero2.png", "./media/memoria/numero3.png"
];
let cards = [...images, ...images];
let firstCard = null;
let secondCard = null;
let score = 0;
let matches = 0;
let time = 0;
let timer;

function startTimer() {
    timer = setInterval(() => {
        time++;
        document.getElementById("timer").textContent = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    cards = shuffle(cards);
    const board = document.getElementById("gameBoard");
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

function flipCard() {
    if (this === firstCard || this.classList.contains("flipped")) return;
    this.classList.add("flipped");
    this.style.backgroundImage = `url(${this.dataset.image})`;
    this.style.backgroundSize = "cover";
    this.style.backgroundPosition = "center";

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkMatch();
}

function checkMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        score += 10;
        matches++;
        firstCard = null;
        secondCard = null;
        document.getElementById("score").textContent = score;

        if (matches === images.length) {
            stopTimer();
            alert(`Parabéns! Você completou o jogo em ${time} segundos!`);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard.style.backgroundImage = "";
            secondCard.style.backgroundImage = "";
            firstCard = null;
            secondCard = null;
        }, 1000);
    }
}

createBoard();