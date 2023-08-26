import { allDecks } from '../stores/allDecks';

let tutorialDeck;
let survey1Deck;
allDecks.subscribe(decks => {
    tutorialDeck = [...decks.tutorial];
    survey1Deck = [...decks.survey1];
});

export function tutorialHandler(event, card) {
    const choice = event.detail;
    let nextCard = {};

    if (choice === 'left') {
        switch (card.id) {
            case 'tutorial-1':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-2a');
                break;
                case 'tutorial-2a':
            case 'tutorial-2b':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-3');
                break;
            case 'tutorial-3':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-4a');
                break;
            case 'tutorial-4a':
            case 'tutorial-4b':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-5');
                break;
            case 'tutorial-5':
                    nextCard = tutorialDeck.find(card => card.id === 'tutorial-6a');
                break;
            case 'tutorial-6a':
            case 'tutorial-6b':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-7');
                break;
            case 'tutorial-7':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-8a');
                break;
            case 'tutorial-8a':
            case 'tutorial-8b':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-9');
                break;
            case 'tutorial-9':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-10');
                break;
            case 'tutorial-10':
                nextCard = survey1Deck.find(card => card.id === 'survey1-1');
                break;
            case 'survey1-1':
                nextCard = survey1Deck.find(card => card.id === 'survey1-2a');
                break;
            case 'survey1-2a':
            case 'survey1-2b':
                nextCard = survey1Deck.find(card => card.id === 'survey1-3');
                break;
            case 'survey1-3':
                nextCard = survey1Deck.find(card => card.id === 'survey1-4');
                break;
            case 'survey1-4':
                nextCard = survey1Deck.find(card => card.id === 'survey1-5a');
                break;
            case 'survey1-5a':
            case 'survey1-5b':
                nextCard = survey1Deck.find(card => card.id === 'survey1-6');
                break;
            case 'survey1-6':
                nextCard = survey1Deck.find(card => card.id === 'survey1-7a');
                break;
            case 'survey1-7a':
            case 'survey1-7b':
                nextCard = survey1Deck.find(card => card.id === 'survey1-8');
                break;
            case 'survey1-8':
                nextCard = survey1Deck.find(card => card.id === 'survey1-9');
                break;
            case 'survey1-9':
                nextCard = survey1Deck.find(card => card.id === 'survey1-10');
                break;
            case 'survey1-10':
                nextCard = {...survey1Deck.card10}
                nextCard = survey1Deck.find(card => card.id === 'survey1-10');
                break;
            
        }

    } else if (choice === 'right') {
        switch (card.id) {
            case 'tutorial-1':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-2b');
                break;
            case 'tutorial-2a':
            case 'tutorial-2b':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-3');
                break;
            case 'tutorial-3':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-4b');
                break;
            case 'tutorial-4a':
            case 'tutorial-4b':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-5');
                break;
            case 'tutorial-5':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-6b');
                break;
            case 'tutorial-6a':
            case 'tutorial-6b':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-7');
                break;
            case 'tutorial-7':
                    nextCard = tutorialDeck.find(card => card.id === 'tutorial-8b');
                break;
            case 'tutorial-8a':
            case 'tutorial-8b':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-9');
                break;
            case 'tutorial-9':
                nextCard = tutorialDeck.find(card => card.id === 'tutorial-10');
                break;
            case 'tutorial-10':
                nextCard = survey1Deck.find(card => card.id === 'survey1-1');
                break;
            case 'survey1-1':
                nextCard = survey1Deck.find(card => card.id === 'survey1-2b');
                break;
            case 'survey1-2a':
            case 'survey1-2b':
                nextCard = survey1Deck.find(card => card.id === 'survey1-3');
                break;
            case 'survey1-3':
                nextCard = survey1Deck.find(card => card.id === 'survey1-4');
                break;
            case 'survey1-4':
                nextCard = survey1Deck.find(card => card.id === 'survey1-5b');
                break;
            case 'survey1-5a':
            case 'survey1-5b':
                nextCard = survey1Deck.find(card => card.id === 'survey1-6');
                break;
            case 'survey1-6':
                nextCard = survey1Deck.find(card => card.id === 'survey1-7b');
                break;
            case 'survey1-7a':
            case 'survey1-7b':
                nextCard = survey1Deck.find(card => card.id === 'survey1-8');
                break;
            case 'survey1-8':
                nextCard = survey1Deck.find(card => card.id === 'survey1-9');
                break;
            case 'survey1-9':
                nextCard = survey1Deck.find(card => card.id === 'survey1-10');
                break;
            case 'survey1-10':
                nextCard = survey1Deck.find(card => card.id === 'survey1-10');
                break;
            
        }
    }

    return nextCard;
}