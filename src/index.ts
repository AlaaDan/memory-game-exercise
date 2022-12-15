const memoryCards = document.querySelectorAll('.memory-card')
let pickedCards: HTMLElement[] = [];
let foundPair = 0;

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
}

addClickEvent()