function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
    const  validSuits = ['H', 'S', 'C', 'D'];

    if(!validFaces.includes(face)){
        throw new Error('Invalid face');
    }

    if(!validSuits.includes(suit)){
        throw new Error('Invalid suit');
    }

    let card = {
        face: face,
        suit: suit,
        toString: () => {
            let suitToChar = {
                'S': "\u2660",
                'H': "\u2665",
                'D': "\u2666",
                'C': "\u2663",
            }
            return `${card.face}${suitToChar[card.suit]}`
        }
    }
    return card;
}

try {

    let card = makeCard('1', 'H');
    console.log('' + card)
}
catch (err){
    console.error(err.message)
}
