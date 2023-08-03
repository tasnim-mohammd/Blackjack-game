let player = {
    name: "",   // The user's name will be stored here
    chips: 200
};

let nameInput = document.getElementById("name-input");
let playerEl = document.getElementById("player-el");

function updatePlayerName() {
    player.name = nameInput.value.trim();
    playerEl.textContent = player.name + ": $" + player.chips;
}

// Call updatePlayerName when the user enters their name or clicks a button to update the display
nameInput.addEventListener("input", updatePlayerName);


let cards = [0, 0, 0, 0]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*30 ) + 1
    if (randomNumber > 25) {
        return 25
    } else if (randomNumber === 1) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let thirdCard = getRandomCard()
    let forthCard = getRandomCard()
    let fifthCard = getRandomCard()
    cards = [firstCard, secondCard, thirdCard, forthCard, fifthCard]
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }
    renderGame()
    sum = 0
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 200) {
        message = "Do you want to draw a new card?"
    } else if (sum === 100) {
        message = "You've got Blackjack!"
    }
    else if(sum >= 450){
        message = "You are succeeding, keep going!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true || hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function FourNewCards() {
    if (isAlive === true || hasBlackJack === false) {
       // cards = [];
        for (let i = 0; i < 4; i++) {
            let card = getRandomCard();
            sum += card;
            cards.push(card);
        }
        renderGame();
    }       
}
