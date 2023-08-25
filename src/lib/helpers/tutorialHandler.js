import { allDecks } from '../stores/allDecks';

let tutorialDeck;
let survey1Deck;
allDecks.subscribe(decks => {
    tutorialDeck = {...decks.tutorial};
    survey1Deck = {...decks.survey1};
});

export function tutorialHandler(event, card) {
    const choice = event.detail;
    let nextCard = {};

    if (choice === 'left') {
        switch (card.id) {
            case 'tutorial-1':
                nextCard = {...tutorialDeck.card2a};
                break;
                case 'tutorial-2a':
            case 'tutorial-2b':
                nextCard = {...tutorialDeck.card3};
                break;
            case 'tutorial-3':
                nextCard = {...tutorialDeck.card4a};
                break;
            case 'tutorial-4a':
            case 'tutorial-4b':
                nextCard = {...tutorialDeck.card5}
                break;
            case 'tutorial-5':
                    nextCard = {...tutorialDeck.card6a}
                break;
            case 'tutorial-6a':
            case 'tutorial-6b':
                nextCard = {...tutorialDeck.card7}
                break;
            case 'tutorial-7':
                nextCard = {...tutorialDeck.card8a}
                break;
            case 'tutorial-8a':
            case 'tutorial-8b':
                nextCard = {...tutorialDeck.card9}
                break;
            case 'tutorial-9':
                nextCard = {...tutorialDeck.card10}
                break;
            case 'tutorial-10':
                nextCard = {...survey1Deck.card1}
                break;
            case 'survey1-1':
                nextCard = {...survey1Deck.card2a}
                break;
            case 'survey1-2a':
            case 'survey1-2b':
                nextCard = {...survey1Deck.card3}
                break;
            case 'survey1-3':
                nextCard = {...survey1Deck.card4}
                break;
            case 'survey1-4':
                nextCard = {...survey1Deck.card5a}
                break;
            case 'survey1-5a':
            case 'survey1-5b':
                nextCard = {...survey1Deck.card6}
                break;
            case 'survey1-6':
                nextCard = {...survey1Deck.card7a}
                break;
            case 'survey1-7a':
            case 'survey1-7b':
                nextCard = {...survey1Deck.card8}
                break;
            case 'survey1-8':
                nextCard = {...survey1Deck.card9}
                break;
            case 'survey1-9':
                nextCard = {...survey1Deck.card10}
                break;
            case 'survey1-10':
                nextCard = {...survey1Deck.card10}
                break;
            
        }

    } else if (choice === 'right') {
        switch (card.id) {
            case 'tutorial-1':
                nextCard = {...tutorialDeck.card2b};
                break;
            case 'tutorial-2a':
            case 'tutorial-2b':
                nextCard = {...tutorialDeck.card3};
                break;
            case 'tutorial-3':
                nextCard = {...tutorialDeck.card4b};
                break;
            case 'tutorial-4a':
            case 'tutorial-4b':
                nextCard = {...tutorialDeck.card5}
                break;
            case 'tutorial-5':
                nextCard = {...tutorialDeck.card6b}
                break;
            case 'tutorial-6a':
            case 'tutorial-6b':
                nextCard = {...tutorialDeck.card7}
                break;
            case 'tutorial-7':
                    nextCard = {...tutorialDeck.card8b}
                break;
            case 'tutorial-8a':
            case 'tutorial-8b':
                nextCard = {...tutorialDeck.card9}
                break;
            case 'tutorial-9':
                nextCard = {...tutorialDeck.card10}
                break;
            case 'tutorial-10':
                nextCard = {...survey1Deck.card1}
                break;
            case 'survey1-1':
                nextCard = {...survey1Deck.card2b}
                break;
            case 'survey1-2a':
            case 'survey1-2b':
                nextCard = {...survey1Deck.card3}
                break;
            case 'survey1-3':
                nextCard = {...survey1Deck.card4}
                break;
            case 'survey1-4':
                nextCard = {...survey1Deck.card5b}
                break;
            case 'survey1-5a':
            case 'survey1-5b':
                nextCard = {...survey1Deck.card6}
                break;
            case 'survey1-6':
                nextCard = {...survey1Deck.card7b}
                break;
            case 'survey1-7a':
            case 'survey1-7b':
                nextCard = {...survey1Deck.card8}
                break;
            case 'survey1-8':
                nextCard = {...survey1Deck.card9}
                break;
            case 'survey1-9':
                nextCard = {...survey1Deck.card10}
                break;
            case 'survey1-10':
                nextCard = {...survey1Deck.card10}
                break;
            
        }
    }

    return nextCard;
}