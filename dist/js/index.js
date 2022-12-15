"use strict";
const memoryCards = document.querySelectorAll('.memory-card');
const overlayElem = document.querySelector('.overlay');
let pickedCards = [];
let foundPair = 0;
function hasWon() {
    var _a;
    if (foundPair === 8) {
        overlayElem === null || overlayElem === void 0 ? void 0 : overlayElem.classList.toggle('show');
        // Reset the game 
        (_a = document.querySelector('.close')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            location.reload;
            overlayElem === null || overlayElem === void 0 ? void 0 : overlayElem.classList.toggle('show');
            foundPair = 0;
            pickedCards = [];
            memoryCards.forEach((memoryCard) => {
                memoryCard.classList.remove('flip');
            });
        });
    }
}
function resetCards() {
    pickedCards = [];
}
function flipBackCards() {
    setTimeout(() => {
        pickedCards[0].classList.toggle('flip');
        pickedCards[1].classList.toggle('flip');
        resetCards();
    }, 1000);
}
function compareCards() {
    const cardOne = pickedCards[0].getAttribute('data-card');
    const cardtwo = pickedCards[1].getAttribute('data-card');
    if (cardOne === cardtwo) {
        foundPair++;
        resetCards();
        hasWon();
        console.log("Same pair");
    }
    else {
        console.log("Not the same");
        flipBackCards();
        //resetCards()
    }
}
function addCard(card) {
    pickedCards.push(card);
    // If pickedCards has 2 cards so we will compare
}
function shuffle() {
    memoryCards.forEach((memoryCard) => {
        const position = Math.floor(Math.random() * memoryCards.length);
        memoryCard.style.order = position.toString(); // Order is a Flexbox property and can't be used ourside of Felxbox 
    });
}
function addClickEvent() {
    memoryCards.forEach((memoryCard) => {
        memoryCard.addEventListener('click', (event) => {
            //console.log(event.target);
            const card = event.currentTarget; // currentTarget is usefull for this type of listner because when u click on memory it self using target then u will get different value, which we don't want
            //console.log(card);
            if (pickedCards.length < 2) {
                card.classList.toggle('flip');
                addCard(card);
            }
            if (pickedCards.length === 2) {
                compareCards();
            }
        });
    });
    shuffle();
}
addClickEvent();
