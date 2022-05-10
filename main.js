const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

/*
sort the array randomly
select #grid to display board
create function to create the board
in this function you need to have blank images, so create image , set its attributes and append it. also set custom attribute to numbers, This function also need an event listener(click or mouseover) to flip the card.flip function will be callback func.
- have some css style to put in the middle of page
- now write flip function, In this function we need to get the attribute that we set on image, use 'this' carefully here. Now we know exactly which card we clicked. 




*/
const image2 = document.createElement('div')
cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function flipCard(){
  // which card has been clicked.. get the id.
  let cardId = this.getAttribute('data-id');
  // whichever card it is change src
  this.setAttribute('src', cardArray[cardId].img);
  console.log('I am being clicked! index is '+cardId)
  // console.log(cardId)

 
// but which two cards? Ones that i clicked on.  OK ? then save those? access those cards? 
//* I have saved those cards in an array
cardsChosen.push(cardArray[cardId].name);
cardsChosenId.push(cardId);
// todo: whenever you click two cards..DO Something. How do you know when you have two cards clicked? length property .. OK?

if(cardsChosen.length ===2){
  // ? whatever you want to do .. do it after few seconds
  // for that use setTimeout
  setTimeout(checkForMatch, 500)
}
}
// todo: CHECK FOR MATCH

function checkForMatch(){
  const cards = document.querySelectorAll('img')
  console.log(cards)

  //? this function will check what to do after two cards are clicked?
  const cardChosen1 = cardsChosenId[0]
  const cardChosen2 = cardsChosenId[1];
  /// this function  needs to change image to blank if two cards are not same. 
  if(cardChosen1!=cardChosen2){
    console.log('not same')
    // ? NOT SAME WHAT DO YOU NEED TO CHANGE NOW ? Just change that image src to img.
  }
  
  // console.log('ok I am gonna match now')
  
  //and if they are same change it to white. 
  
  if(cardChosen1===cardChosen2){
    console.log('same same');
    
    // * SAME WHAT DO YOU NEED TO CHANGE NOW ?
    cards[cardChosen1].setAttribute('src', 'images/white.png')
    cards[cardChosen2].setAttribute('src', 'images/white.png')
    //  ? MAKE SURE TO REMOVE EVENT LISTENER
}


}

// function twoCards (){

// }

function createBoard(){
  for(let i=0; i<cardArray.length; i++){
    // console.log(cardArray[i])
    const card = document.createElement('img');
    card.setAttribute('src','images/blank.png');
    card.setAttribute('data-id', i);
    grid.append(card);
    // *console logging the images that got created.
    // console.log(card, i);
    card.addEventListener('click', flipCard);
  }
}

createBoard()