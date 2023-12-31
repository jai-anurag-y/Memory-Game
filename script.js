const cardArray = [
    {
        name: "fries",
        img: "imgs/fries.png"
    },
    {
        name: "cheeseburger",
        img: "imgs/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "imgs/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "imgs/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "imgs/milkshake.png"
    },
    {
        name: "pizza",
        img: "imgs/pizza.png"
    },
    {
        name: "fries",
        img: "imgs/fries.png"
    },
    {
        name: "cheeseburger",
        img: "imgs/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "imgs/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "imgs/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "imgs/milkshake.png"
    },
    {
        name: "pizza",
        img: "imgs/pizza.png"
    }
];

cardArray.sort(() => 0.5-Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector('#result');
let cardsChosenIds = [];
let counter = 0;


function createBoard()
{
    for (let i=0;i<cardArray.length;i++)
    {
        const card = document.createElement('img');
        card.setAttribute('data-id',i);
        card.setAttribute('src','imgs/blank.png');
        card.setAttribute('class','card');
        gridDisplay.appendChild(card);

        card.addEventListener('click',flipCard);
    }
}


function flipCard()
{
    const cardId = this.getAttribute('data-id');

    cardsChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if (cardsChosenIds[0] === cardsChosenIds[1]){
        cardsChosenIds.pop();
    }
    if (cardsChosenIds.length === 2)
    {
        setTimeout(checkMatch , 500);
    }
}


function checkMatch()
{
    const cards = document.querySelectorAll('.card');
    
    if (cardArray[cardsChosenIds[0]].name === cardArray[cardsChosenIds[1]].name)
    {
        cards[cardsChosenIds[0]].setAttribute('src','imgs/white.png');
        cards[cardsChosenIds[1]].setAttribute('src','imgs/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard);
        counter++;
    }
    else
    {
        cards[cardsChosenIds[0]].setAttribute('src','imgs/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src','imgs/blank.png');
    }
    cardsChosenIds = [];

    if (counter === 6)
    {
        resultDisplay.innerText = 'Congratualations !!! You found them all !';
    }
    else
    {
        resultDisplay.innerText = counter;
    }

}



createBoard();

