  function cardDeckBuilder(selector) {
        return {
            addCard: function (face, suit) {
                if (suit === 'H') {
                    suit = "\u2665";
                }
                else if (suit === 'C') {
                    suit = "\u2663";
                }
                else if (suit === 'D') {
                    suit = "\u2666";
                }
                else if (suit === 'S') {
                    suit = "\u2660";
                }


                let div = $('<div>').addClass('card').text(`${face} ${suit}`);
                div.click(this.reverseCard);
                $(selector).append(div);
            },

            reverseCard: function () {
                let allCards = $(selector + " .card").toArray();
                allCards.reverse();
                $(selector).append(allCards);
            }
        }
    }
