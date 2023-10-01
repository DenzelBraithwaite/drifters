import decks from '../stores/decks.js';

let tutorial1Deck;
let tutorial2Deck;
let tutorial3Deck;
let survey1Deck;
let survey2Deck;
let survey3Deck;

decks.subscribe(decks => {
    tutorial1Deck = [...decks.tutorial1];
    tutorial2Deck = [...decks.tutorial2];
    tutorial3Deck = [...decks.tutorial3];
    survey1Deck = [...decks.survey1];
    survey2Deck = [...decks.survey2];
    survey3Deck = [...decks.survey3];
});

export function tutorialHandler(event, card) {
    const choice = event.detail;
    let nextCard;

    if (choice === 'left') {
        switch (card.id) {
            case 'tutorial1-1':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-2');
                break;
            case 'tutorial1-2':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-3');
                break;
            case 'tutorial1-3':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-4a');
                break;
            case 'tutorial1-4a':
            case 'tutorial1-4b':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-5');
                break;
            case 'tutorial1-5':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-6a');
                break;
            case 'tutorial1-6a':
            case 'tutorial1-6b':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-7');
                break;
            case 'tutorial1-7':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-8a');
                break;
            case 'tutorial1-8a':
            case 'tutorial1-8b':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-9');
                break;
            case 'tutorial1-9':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-10');
                break;
            case 'tutorial1-10':
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
                nextCard = survey1Deck.find(card => card.id === 'survey1-11');
                break;
            case 'survey1-11':
                nextCard = survey1Deck.find(card => card.id === 'survey1-12');
                break;
            case 'survey1-12':
                nextCard = survey1Deck.find(card => card.id === 'survey1-13a');
                break;
            case 'survey1-13a':
            case 'survey1-13b':
                nextCard = survey1Deck.find(card => card.id === 'survey1-14');
                break;
            case 'survey1-14':
                nextCard = survey1Deck.find(card => card.id === 'survey1-14');
                break;

            // Tutorial / Survey 2
            case 'tutorial2-1':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-2a');
                break;
            case 'tutorial2-2a':
            case 'tutorial2-2b':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-3');
                break;
            case 'tutorial2-3':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-4a');
                break;
            case 'tutorial2-4a':
            case 'tutorial2-4b':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-5');
                break;
            case 'tutorial2-5':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-6');
                break;
            case 'tutorial2-6':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-7');
                break;
            case 'tutorial2-7':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-8');
                break;
            case 'tutorial2-8':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-9a');
                break;
            case 'tutorial2-9a':
            case 'tutorial2-9b':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-10');
                break;
            case 'tutorial2-10':
                nextCard = survey2Deck.find(card => card.id === 'survey2-1');
                break;
            case 'survey2-1':
                nextCard = survey2Deck.find(card => card.id === 'survey2-2');
                break;
            case 'survey2-2':
                nextCard = survey2Deck.find(card => card.id === 'survey2-3a');
                break;
            case 'survey2-3a':
            case 'survey2-3b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-4');
                break;
            case 'survey2-4':
                nextCard = survey2Deck.find(card => card.id === 'survey2-5a');
                break;
            case 'survey2-5a':
            case 'survey2-5b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-6');
                break;
            case 'survey2-6':
                nextCard = survey2Deck.find(card => card.id === 'survey2-7');
                break;
            case 'survey2-7':
                nextCard = survey2Deck.find(card => card.id === 'survey2-8a');
                break;
            case 'survey2-8a':
            case 'survey2-8b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-9');
                break;
            case 'survey2-9':
                nextCard = survey2Deck.find(card => card.id === 'survey2-10');
                break;
            case 'survey2-10':
                nextCard = survey2Deck.find(card => card.id === 'survey2-11a');
                break;
            case 'survey2-11a':
            case 'survey2-11b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-12');
                break;
            case 'survey2-12':
                nextCard = survey2Deck.find(card => card.id === 'survey2-12');
                break;
                
            // Tutorial / Survey 3
            case 'tutorial3-1':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-2a');
                break;
            case 'tutorial3-2a':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-3-a');
                break;
            case 'tutorial3-2b':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-3a');
                break;
            case 'tutorial3-3a':
                    nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-4a-a');
                    break;
            case 'tutorial3-3-a':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-4-a');
                break;
            case 'tutorial3-4a-a':
            case 'tutorial3-4a-b':
            case 'tutorial3-4-a':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-5');
                break;
            case 'tutorial3-5':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-6a');
                break;
            case 'tutorial3-6a':
            case 'tutorial3-6b':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-7');
                break;
            case 'tutorial3-7':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-8a');
                break;
            case 'tutorial3-8a':
            case 'tutorial3-8b':
            case 'tutorial3-9':
            case 'tutorial3-10':
                nextCard = survey3Deck.find(card => card.id === 'survey3-1');
                break;
            case 'survey3-1':
                nextCard = survey3Deck.find(card => card.id === 'survey3-2a');
                break;
            case 'survey3-2a':
            case 'survey3-2b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-3a');
                break;
            case 'survey3-3a':
            case 'survey3-3b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-4a');
                break;
            case 'survey3-4a':
            case 'survey3-4b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-5');
                break;
            case 'survey3-5':
                nextCard = survey3Deck.find(card => card.id === 'survey3-6a');
                break;
            case 'survey3-6a':
            case 'survey3-6b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-7a');
                break;
            case 'survey3-7a':
            case 'survey3-7b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-8a');
                break;
            case 'survey3-8a':
            case 'survey3-8b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-9a');
                break;
            case 'survey3-9a':
            case 'survey3-9b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-10a');
                break;
            case 'survey3-10a':
            case 'survey3-10b':
            case 'survey3-10b-pt2':
                nextCard = survey3Deck.find(card => card.id === 'survey3-11');
                break;
            case 'survey3-11':
                nextCard = survey3Deck.find(card => card.id === 'survey3-12');
                break;
            case 'survey3-12':
                nextCard = survey3Deck.find(card => card.id === 'survey3-12');
                break;
            
            default:
                console.log('No card matched...');
            
        }

    } else if (choice === 'right') {
        switch (card.id) {
            case 'tutorial1-1':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-2');
                break;
            case 'tutorial1-2':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-3');
                break;
            case 'tutorial1-3':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-4b');
                break;
            case 'tutorial1-4a':
            case 'tutorial1-4b':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-5');
                break;
            case 'tutorial1-5':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-6b');
                break;
            case 'tutorial1-6a':
            case 'tutorial1-6b':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-7');
                break;
            case 'tutorial1-7':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-8b');
                break;
            case 'tutorial1-8a':
            case 'tutorial1-8b':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-9');
                break;
            case 'tutorial1-9':
                nextCard = tutorial1Deck.find(card => card.id === 'tutorial1-10');
                break;
            case 'tutorial1-10':
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
                nextCard = survey1Deck.find(card => card.id === 'survey1-11');
                break;
            case 'survey1-11':
                nextCard = survey1Deck.find(card => card.id === 'survey1-12');
                break;
            case 'survey1-12':
                nextCard = survey1Deck.find(card => card.id === 'survey1-13b');
                break;
            case 'survey1-13a':
            case 'survey1-13b':
                nextCard = survey1Deck.find(card => card.id === 'survey1-14');
                break;
            case 'survey1-14':
                nextCard = survey1Deck.find(card => card.id === 'survey1-14');
                break;

            // Tutorial / Survey 2
            case 'tutorial2-1':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-2b');
                break;
            case 'tutorial2-2a':
            case 'tutorial2-2b':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-3');
                break;
            case 'tutorial2-3':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-4b');
                break;
            case 'tutorial2-4a':
            case 'tutorial2-4b':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-5');
                break;
            case 'tutorial2-5':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-6');
                break;
            case 'tutorial2-6':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-7');
                break;
            case 'tutorial2-7':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-8');
                break;
            case 'tutorial2-8':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-9b');
                break;
            case 'tutorial2-9a':
            case 'tutorial2-9b':
                nextCard = tutorial2Deck.find(card => card.id === 'tutorial2-10');
                break;
            case 'tutorial2-10':
                nextCard = survey2Deck.find(card => card.id === 'survey2-1');
                break;
            case 'survey2-1':
                nextCard = survey2Deck.find(card => card.id === 'survey2-2');
                break;
            case 'survey2-2':
                nextCard = survey2Deck.find(card => card.id === 'survey2-3b');
                break;
            case 'survey2-3a':
            case 'survey2-3b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-4');
                break;
            case 'survey2-4':
                nextCard = survey2Deck.find(card => card.id === 'survey2-5b');
                break;
            case 'survey2-5a':
            case 'survey2-5b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-6');
                break;
            case 'survey2-6':
                nextCard = survey2Deck.find(card => card.id === 'survey2-7');
                break;
            case 'survey2-7':
                nextCard = survey2Deck.find(card => card.id === 'survey2-8b');
                break;
            case 'survey2-8a':
            case 'survey2-8b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-9');
                break;
            case 'survey2-9':
                nextCard = survey2Deck.find(card => card.id === 'survey2-10');
                break;
            case 'survey2-10':
                nextCard = survey2Deck.find(card => card.id === 'survey2-11b');
                break;
            case 'survey2-11a':
            case 'survey2-11b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-12');
                break;
            case 'survey2-11b':
                nextCard = survey2Deck.find(card => card.id === 'survey2-12');
                break;
            case 'survey2-12':
                nextCard = survey2Deck.find(card => card.id === 'survey2-12');
                break;

            // Tutorial / Survey 3
            case 'tutorial3-1':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-2b');
                break;
            case 'tutorial3-2a':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-3-a');
                break;
            case 'tutorial3-2b':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-3a');
                break;
            case 'tutorial3-3-a':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-4-a');
                break;
            case 'tutorial3-3a':
                    nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-4a-b');
                    break;
            case 'tutorial3-4a-a':
            case 'tutorial3-4a-b':
            case 'tutorial3-4-a':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-5');
                break;
            case 'tutorial3-5':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-6b');
                break;
            case 'tutorial3-6a':
            case 'tutorial3-6b':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-7');
                break;
            case 'tutorial3-7':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-8b');
                break;
            case 'tutorial3-8a':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-9');
                break;
            case 'tutorial3-8b':
            case 'tutorial3-10':
                nextCard = survey3Deck.find(card => card.id === 'survey3-1');
                break;
            case 'tutorial3-9':
                nextCard = tutorial3Deck.find(card => card.id === 'tutorial3-10');
                break;
            case 'tutorial3-10':
                    nextCard = survey3Deck.find(card => card.id === 'survey3-1');
                    break;
            case 'survey3-1':
                nextCard = survey3Deck.find(card => card.id === 'survey3-2b');
                break;
            case 'survey3-2a':
            case 'survey3-2b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-3b');
                break;
            case 'survey3-3a':
            case 'survey3-3b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-4b');
                break;
            case 'survey3-4a':
            case 'survey3-4b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-5');
                break;
            case 'survey3-5':
                nextCard = survey3Deck.find(card => card.id === 'survey3-6b');
                break;
            case 'survey3-6a':
            case 'survey3-6b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-7b');
                break;
            case 'survey3-7a':
            case 'survey3-7b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-8b');
                break;
            case 'survey3-8a':
            case 'survey3-8b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-9b');
                break;
            case 'survey3-9a':
            case 'survey3-9b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-10b');
                break;
            case 'survey3-10a':
            case 'survey3-10b-pt2':
                nextCard = survey3Deck.find(card => card.id === 'survey3-11');
                break;
            case 'survey3-10b':
                nextCard = survey3Deck.find(card => card.id === 'survey3-10b-pt2');
                break;
            case 'survey3-11':
                nextCard = survey3Deck.find(card => card.id === 'survey3-12');
                break;
            case 'survey3-12':
                nextCard = survey3Deck.find(card => card.id === 'survey3-12');
                break;

            default:
                console.log('No card matched...');
        }
    }

    return nextCard;
}