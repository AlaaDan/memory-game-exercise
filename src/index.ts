const memoryCards = document.querySelectorAll('.memory-card')
const overlayElem = document.querySelector('.overlay');
let pickedCards: HTMLElement[] = [];
let foundPair = 0;


function hasWon(): void{
    if (foundPair === 8){
        overlayElem?.classList.toggle('show');
        // Reset the game 
        document.querySelector('.close')?.addEventListener('click',()=>{
            location.reload;
            overlayElem?.classList.toggle('show');
            foundPair = 0;
            pickedCards = [];
            memoryCards.forEach((memoryCard)=>{
                memoryCard.classList.remove('flip')
            })

        });
    }
    
}

function resetCards(){
    pickedCards= []
}

function flipBackCards(): void{
    setTimeout(()=>{
        pickedCards[0].classList.toggle('flip');
        pickedCards[1].classList.toggle('flip');
        resetCards();
    }, 1000);
    
}

function compareCards(): void{
    const cardOne = pickedCards[0].getAttribute('data-card');
    const cardtwo = pickedCards[1].getAttribute('data-card');

    if(cardOne === cardtwo){
        foundPair++;
        resetCards();
        hasWon();
        console.log("Same pair")
    }else{
        console.log("Not the same")
        flipBackCards();
        //resetCards()
    }
}
function addCard(card: HTMLElement): void{
    pickedCards.push(card);
    // If pickedCards has 2 cards so we will compare
    
}
function shuffle(): void{
    memoryCards.forEach((memoryCard: any)=>{
        const position = Math.floor(Math.random() *memoryCards.length)
        memoryCard.style.order = position.toString() // Order is a Flexbox property and can't be used ourside of Felxbox 
    })

}
function addClickEvent (): void{
    memoryCards.forEach((memoryCard) =>{
        memoryCard.addEventListener('click', (event)=>{
            //console.log(event.target);
            const card: HTMLElement = event.currentTarget as HTMLElement; // currentTarget is usefull for this type of listner because when u click on memory it self using target then u will get different value, which we don't want
            //console.log(card);

            if(pickedCards.length < 2){
                card.classList.toggle('flip');
                addCard(card);
            }

            if(pickedCards.length === 2){
                compareCards();
            }
        });
    });
    shuffle();
}

addClickEvent()