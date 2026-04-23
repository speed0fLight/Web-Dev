const cards = [];
const cards_type = [];

const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

// Populate the array with cards.
function init(){
  for(let i = 1; i < 14; i++){
    for(let suit of suits) {
      let cardImage = 'images/' + i + '_of_' + suit + '.png';
      cards.push(cardImage);
      
      // Push the card value, and suit. 
      cards_type.push([i,suit]);
    }
  }
}

// clickPile : This function increases the count
// and sets the discard pile image to the chosen card.
let clickCounter = 0;
const discardPileImageElement = document.querySelector("#discardImage");
const pileImageElement = document.querySelector("#pileImage");
const textCounter = document.querySelector('#cardCount');
const textCardType = document.querySelector('#cardType')
function clickPile() {
    // If the last card is drawn,
    // remove the visibility of the
    // cardback from the left.
    if (clickCounter >= cards.length ) {
        // Hide the left side cardback
        pileImageElement.src = '';
        return;
    }
    // Update text counter
    textCounter.innerHTML = `Card Count: ${clickCounter + 1}`;
    
    // Update type label
    textCardType.innerHTML = `Card Type: ${cards_type[clickCounter][0]} of ${cards_type[clickCounter][1]}`;

    // Show card drawn
    let chosenImage = cards[clickCounter];
    discardPileImageElement.src = chosenImage;

    clickCounter += 1;
}

// Reset everything back to the way it was
function clickDiscard() {
    clickCounter = 0;
    pileImageElement.src = 'images/cardback.png';
    discardPileImageElement.src = '';

    textCounter.innerHTML = 'Card Count:';
    textCardType.innerHTML = 'Card Type: None';
}
