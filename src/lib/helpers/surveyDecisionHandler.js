// Hooks
import { get } from 'svelte/store'; 

// Stores 
import decks from '../stores/decks.js';
import player from '../stores/player.js';

export function surveyDecisionHandler(event, card) {
  let nextCard;
  const choice = event.detail;
  iconPointsHandler(choice, card);

  // Handles all left actions
    if (choice === 'left') {
      switch (card.id) {
        case 'tutorial1-1':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-2');
          break;
        case 'tutorial1-2':
        case 'tutorial1-2-1b':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-3');
          break;
        case 'tutorial1-3':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-4');
          break;
        case 'tutorial1-4':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-5');
          break;
        case 'tutorial1-5':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-6a');
          break;
        case 'tutorial1-6a':
        case 'tutorial1-6b':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-7');
          break;
        case 'tutorial1-7':
        case 'tutorial1-7-1b':
        case 'tutorial1-7-1b-1b':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-8');
          break;
        case 'tutorial1-8':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-9');
          break;
        case 'tutorial1-9':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-10');
          break;
        case 'tutorial1-10':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-11');
          break;
        case 'tutorial1-11':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-12');
          break;
        case 'tutorial1-12':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-13');
          break;
        case 'tutorial1-13':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-14');
          break;
        case 'tutorial1-14':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-15');
          break;
        case 'tutorial1-15':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-16');
          break;
        case 'tutorial1-16':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-17');
          break;
        case 'tutorial1-17':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-1');
          break;
        case 'survey1-1':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-2a');
          break;
        case 'survey1-2a':
        case 'survey1-2b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-3a');
          break;
        case 'survey1-3a':
        case 'survey1-3b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-4');
          break;
        case 'survey1-4':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-5a');
          break;
        case 'survey1-5a':
        case 'survey1-5b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-6a');
          break;
        case 'survey1-6a':
        case 'survey1-6b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-7');
          break;
        case 'survey1-7':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-8a');
          break;
        case 'survey1-8a':
        case 'survey1-8b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-9');
          break;
        case 'survey1-9':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-10a');
          break;
        case 'survey1-10a':
        case 'survey1-10b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-11');
          break;
        case 'survey1-11':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-12');
          break;
        case 'survey1-12':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-13a');
          break;
        case 'survey1-13a':
        case 'survey1-13b':
        case 'survey1-13b-1b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-14');
          break;
        case 'survey1-14':
        case 'survey1-15b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-15a');
          break;
        case 'survey1-15a':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-15a-1a');
          break;
        case 'survey1-15a-1a':
        case 'survey1-15a-1b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-16');
          break;
        case 'survey1-16':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-16');
          break;

        // Tutorial/Survey 2
        case 'tutorial2-1':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-2a');
          break;
        case 'tutorial2-2a':
        case 'tutorial2-2b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-3a');
          break;
        case 'tutorial2-3a':
        case 'tutorial2-3b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-4a');
          break;
        case 'tutorial2-4a':
        case 'tutorial2-4b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5a');
          break;
        case 'tutorial2-5a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5a-1a');
          break;
        case 'tutorial2-5a-1a':
        case 'tutorial2-5a-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5a-1a-1a');
          break;
        case 'tutorial2-5a-1a-1a':
        case 'tutorial2-5a-1a-1a-1b':
        case 'tutorial2-5b-1a-1a':
        case 'tutorial2-5b-1b':
        case 'tutorial2-5b-1b-1b':
        case 'tutorial2-5b-1b-1b-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-6');
          break;
        case 'tutorial2-5b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5b-1a');
          break;
        case 'tutorial2-5b-1a':
        case 'tutorial2-5b-1a-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5b-1a-1a');
          break;
        case 'tutorial2-6':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7a');
          break;
        case 'tutorial2-7a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7a-1a');
          break;
        case 'tutorial2-7a-1a':
        case 'tutorial2-7a-1a-1b':
        case 'tutorial2-7b-1a-1a':
        case 'tutorial2-7b-1a-1a-1b':
        case 'tutorial2-7b-1b-2':
        case 'tutorial2-7b-1b-1a-1a':
        case 'tutorial2-easter-egg-1':
        case 'tutorial2-easter-egg-2':
        case 'tutorial2-easter-egg-3':
        case 'tutorial2-easter-egg-4':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-8');
          break;
        case 'tutorial2-7a-1a-1b-1b': // intentional loop
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7a-1a-1b-1b');
          break;
        case 'tutorial2-7b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1a');
          break;
        case 'tutorial2-7b-1a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1a-1a');
          break;
        case 'tutorial2-7b-1a-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1b-2');
          break;
        case 'tutorial2-7b-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1b-1a');
          break;
        case 'tutorial2-7b-1b-1a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1b-1a-1a');
          break;
        case 'tutorial2-8':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-9');
          break;
        case 'tutorial2-9':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-1');
          break;
        case 'survey2-1':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-2a');
          break;
        case 'survey2-2a':
        case 'survey2-2b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-3');
          break;
        case 'survey2-3':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-4a');
          break;
        case 'survey2-4a':
        case 'survey2-4b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-5a');
          break;
        case 'survey2-5a':
        case 'survey2-5b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-6a');
          break;
        case 'survey2-6a':
        case 'survey2-6b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-7');
          break;
        case 'survey2-7':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-8a');
          break;
        case 'survey2-8a':
        case 'survey2-8b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-9a');
          break;
        case 'survey2-9a':
        case 'survey2-9b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-10a');
          break;
        case 'survey2-10a':
        case 'survey2-10b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-11');
          break;
        case 'survey2-11':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-12');
          break;
        case 'survey2-12':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-13');
          break;
        case 'survey2-13':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-14');
          break;
        case 'survey2-14':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-14');
          break;
          
        // Tutorial/Survey 3
        case 'tutorial3-1':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-2a');
          break;
        case 'tutorial3-2a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-3-a');
          break;
        case 'tutorial3-2b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-3a');
          break;
        case 'tutorial3-3a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-4a-a');
          break;
        case 'tutorial3-3-a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-4-a');
          break;
        case 'tutorial3-4a-a':
        case 'tutorial3-4a-b':
        case 'tutorial3-4-a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5');
          break;
        case 'tutorial3-5':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6a');
          break;
        case 'tutorial3-6a':
        case 'tutorial3-6b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-7');
          break;
        case 'tutorial3-7':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-8a');
          break;
        case 'tutorial3-8a':
        case 'tutorial3-8b':
        case 'tutorial3-9':
        case 'tutorial3-10':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-1');
          break;
        case 'survey3-1':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-2a');
          break;
        case 'survey3-2a':
        case 'survey3-2b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-3a');
          break;
        case 'survey3-3a':
        case 'survey3-3b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-4a');
          break;
        case 'survey3-4a':
        case 'survey3-4b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-5');
          break;
        case 'survey3-5':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-6a');
          break;
        case 'survey3-6a':
        case 'survey3-6b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-7a');
          break;
        case 'survey3-7a':
        case 'survey3-7b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-8a');
          break;
        case 'survey3-8a':
        case 'survey3-8b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-9a');
          break;
        case 'survey3-9a':
        case 'survey3-9b':
          player.update(p => {
            p.displayDecks = [
              ...p.displayDecks,
              {
                title: 'You',
                img: '/characters/jack-judicator.png'
              }
            ]
              return p;
          });
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-10a');
          break;
        case 'survey3-10a':
        case 'survey3-10b':
        case 'survey3-10b-pt2':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-11');
          break;
        case 'survey3-11':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-12');
          break;
        case 'survey3-12':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-12');
          break;

        // Tutorial/Survey 4
        case 'tutorial4-1':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-2a');
          break;
        case 'tutorial4-2a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-2a-1a');
          break;
        case 'tutorial4-2b':
        case 'tutorial4-2a-2a':
        case 'tutorial4-2a-2b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-3');
          break;
        case 'tutorial4-2a-1a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-2a-2a');
          break;
        case 'tutorial4-3':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-4a');
          break;
        case 'tutorial4-4a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-4a-1a');
          break;
        case 'tutorial4-4a-1a':
        case 'tutorial4-4a-1b':
        case 'tutorial4-4b-1a':
        case 'tutorial4-4b-1b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-5');
          break;
        case 'tutorial4-4b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-4b-1a');
          break;
        case 'tutorial4-5':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-6a');
          break;
        case 'tutorial4-6a':
        case 'tutorial4-6b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-7');
          break;
        case 'tutorial4-7':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-8a');
          break;
        case 'tutorial4-8a':
        case 'tutorial4-8b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-9a');
          break;
        case 'tutorial4-9a':
        case 'tutorial4-9b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-10');
          break;
        case 'tutorial4-10':
        case 'tutorial4-10-2a':
        case 'tutorial4-10-2b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-11');
          break;
        case 'tutorial4-10-1a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-10-2a');
          break;
        case 'tutorial4-11':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-1');
          break;
          case 'survey4-1':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-2');
          break;
        case 'survey4-2':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-3');
          break;
        case 'survey4-3':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-4');
          break;
        case 'survey4-4':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-5');
          break;
        case 'survey4-5':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-6');
          break;
        case 'survey4-6':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-7');
          break;
        case 'survey4-7':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-8');
          break;
        case 'survey4-8':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-9');
          break;
        case 'survey4-9':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-10');
          break;
        case 'survey4-10':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-11');
          break;
        case 'survey4-11':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-12');
          break;
        case 'survey4-12':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-12');
          break;
        
        default:
          console.log('No card matched...');
      }
    // Handles all right actions
    } else if (choice === 'right') {
      switch (card.id) {
        case 'tutorial1-1':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-2');
          break;
        case 'tutorial1-2':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-2-1b');
          break;
        case 'tutorial1-2-1b':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-3');
          break;
        case 'tutorial1-3':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-4');
          break;
        case 'tutorial1-4':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-5');
          break;
        case 'tutorial1-5':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-6b');
          break;
        case 'tutorial1-6a':
        case 'tutorial1-6b':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-7');
          break;
        case 'tutorial1-7':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-7-1b');
          break;
        case 'tutorial1-7-1b':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-7-1b-1b');
          break;
        case 'tutorial1-7-1b-1b':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-8');
          break;
        case 'tutorial1-8':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-9');
          break;
        case 'tutorial1-9':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-10');
          break;
        case 'tutorial1-10':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-11');
          break;
        case 'tutorial1-11':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-12');
          break;
        case 'tutorial1-12':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-13');
          break;
        case 'tutorial1-13':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-14');
          break;
        case 'tutorial1-14':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-15');
          break;
        case 'tutorial1-15':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-16');
          break;
        case 'tutorial1-16':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-17');
          break;
        case 'tutorial1-17':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-1');
          break;
        case 'survey1-1':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-2b');
          break;
        case 'survey1-2a':
        case 'survey1-2b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-3b');
          break;
        case 'survey1-3a':
        case 'survey1-3b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-4');
          break;
        case 'survey1-4':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-5b');
          break;
        case 'survey1-5a':
        case 'survey1-5b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-6b');
          break;
        case 'survey1-6a':
        case 'survey1-6b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-7');
          break;
        case 'survey1-7':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-8b');
          break;
        case 'survey1-8a':
        case 'survey1-8b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-9');
          break;
        case 'survey1-9':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-10b');
          break;
        case 'survey1-10a':
        case 'survey1-10b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-11');
          break;
        case 'survey1-11':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-12');
          break;
        case 'survey1-12':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-13b');
          break;
        case 'survey1-13a':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-14');
          break;
        case 'survey1-13b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-13b-1b');
          break;
        case 'survey1-13b-1b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-14');
          break;
        case 'survey1-14':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-15b');
          break;
        case 'survey1-15a':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-15a-1b');
          break;
        case 'survey1-15a-1a':
        case 'survey1-15a-1b':
        case 'survey1-15b':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-16');
          break;
        case 'survey1-16':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-16');
          break;


        // Tutorial/Survey 2
        case 'tutorial2-1':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-2b');
          break;
        case 'tutorial2-2a':
        case 'tutorial2-2b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-3b');
          break;
        case 'tutorial2-3a':
        case 'tutorial2-3b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-4b');
          break;
        case 'tutorial2-4a':
        case 'tutorial2-4b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5b');
          break;
        case 'tutorial2-5a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5a-1b');
          break;
        case 'tutorial2-5a-1a':
        case 'tutorial2-5a-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5a-1a-1a-1b');
          break;
        case 'tutorial2-5a-1a-1a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5a-1a-1a-1b');
          break;
        case 'tutorial2-5a-1a-1a-1b':
        case 'tutorial2-5b-1a-1a':
        case 'tutorial2-5b-1a-1b':
        case 'tutorial2-5b-1b-1b-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-6');
          break;
        case 'tutorial2-5b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5b-1b');
          break;
        case 'tutorial2-5b-1a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5b-1a-1b');
          break;
        case 'tutorial2-5b-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5b-1b-1b');
          break;
        case 'tutorial2-5b-1b-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-5b-1b-1b-1b');
          break;
        case 'tutorial2-6':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b');
          break;
        case 'tutorial2-7a':
        case 'tutorial2-7a-1a-1b-1b':
        case 'tutorial2-7b-1a-1a-1b':
        case 'tutorial2-7b-1b-2':
        case 'tutorial2-7b-1b-1a':
        case 'tutorial2-7b-1b-1a-1a':
        case 'tutorial2-easter-egg-4':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-8');
          break;
        case 'tutorial2-7a-1a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7a-1a-1b');
          break;
        case 'tutorial2-7a-1a-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7a-1a-1b-1b');
          break;
        case 'tutorial2-7b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1b');
          break;
        case 'tutorial2-7b-1a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1a-1b');
          break;
        case 'tutorial2-7b-1a-1a':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1a-1a-1b');
          break;
        case 'tutorial2-7b-1a-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-7b-1b-2');
          break;
        case 'tutorial2-7b-1b':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-easter-egg-1');
          break;
        case 'tutorial2-easter-egg-1':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-easter-egg-2');
          break;
        case 'tutorial2-easter-egg-2':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-easter-egg-3');
          break;
        case 'tutorial2-easter-egg-3':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-easter-egg-4');
          break;
        case 'tutorial2-8':
          nextCard = get(decks).tutorial2.find(card => card.id === 'tutorial2-9');
          break;
        case 'tutorial2-9':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-1');
          break;
        case 'survey2-1':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-2b');
          break;
        case 'survey2-2a':
        case 'survey2-2b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-3');
          break;
        case 'survey2-3':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-4b');
          break;
        case 'survey2-4a':
        case 'survey2-4b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-5b');
          break;
        case 'survey2-5a':
        case 'survey2-5b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-6b');
          break;
        case 'survey2-6a':
        case 'survey2-6b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-7');
          break;
        case 'survey2-7':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-8b');
          break;
        case 'survey2-8a':
        case 'survey2-8b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-9b');
          break;
        case 'survey2-9a':
        case 'survey2-9b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-10b');
          break;
        case 'survey2-10a':
        case 'survey2-10b':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-11');
          break;
        case 'survey2-11':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-12');
          break;
        case 'survey2-12':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-13');
          break;
        case 'survey2-13':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-14');
          break;
        case 'survey2-14':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-14');
          break;

          // Tutorial/Survey 3
        case 'tutorial3-1':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-2b');
          break;
        case 'tutorial3-2a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-3-a');
          break;
        case 'tutorial3-2b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-3a');
          break;
        case 'tutorial3-3-a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-4-a');
          break;
        case 'tutorial3-3a':
              nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-4a-b');
              break;
        case 'tutorial3-4a-a':
        case 'tutorial3-4a-b':
        case 'tutorial3-4-a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5');
          break;
        case 'tutorial3-5':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6b');
          break;
        case 'tutorial3-6a':
        case 'tutorial3-6b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-7');
          break;
        case 'tutorial3-7':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-8b');
          break;
        case 'tutorial3-8a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-9');
          break;
        case 'tutorial3-8b':
        case 'tutorial3-10':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-1');
          break;
        case 'tutorial3-9':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-10');
          break;
        case 'tutorial3-10':
              nextCard = get(decks).survey3.find(card => card.id === 'survey3-1');
              break;
        case 'survey3-1':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-2b');
          break;
        case 'survey3-2a':
        case 'survey3-2b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-3b');
          break;
        case 'survey3-3a':
        case 'survey3-3b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-4b');
          break;
        case 'survey3-4a':
        case 'survey3-4b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-5');
          break;
        case 'survey3-5':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-6b');
          break;
        case 'survey3-6a':
        case 'survey3-6b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-7b');
          break;
        case 'survey3-7a':
        case 'survey3-7b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-8b');
          break;
        case 'survey3-8a':
        case 'survey3-8b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-9b');
          break;
        case 'survey3-9a':
        case 'survey3-9b':
          player.update(p => {
            p.displayDecks = [
              ...p.displayDecks,
              {
                title: 'Kaz',
                img: '/characters/kaz.png'
              }
            ]
              return p;
          });
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-10b');
          break;
        case 'survey3-10a':
        case 'survey3-10b-pt2':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-11');
          break;
        case 'survey3-10b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-10b-pt2');
          break;
        case 'survey3-11':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-12');
          break;
        case 'survey3-12':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-12');
          break;

        // Tutorial/Survey 4
        case 'tutorial4-1':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-2b');
          break;
        case 'tutorial4-2a':
        case 'tutorial4-2a-2a':
        case 'tutorial4-2b':
        case 'tutorial4-2a-2b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-3');
          break;
        case 'tutorial4-2a-1a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-2a-2b');
          break;
        case 'tutorial4-3':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-4b');
          break;
        case 'tutorial4-4a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-4a-1b');
          break;
        case 'tutorial4-4a-1a':
        case 'tutorial4-4a-1b':
        case 'tutorial4-4b-1a':
        case 'tutorial4-4b-1b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-5');
          break;
        case 'tutorial4-4b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-4b-1b');
          break;
        case 'tutorial4-5':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-6b');
          break;
        case 'tutorial4-6a':
        case 'tutorial4-6b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-7');
          break;
        case 'tutorial4-7':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-8b');
          break;
        case 'tutorial4-8a':
        case 'tutorial4-8b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-9b');
          break;
        case 'tutorial4-9a':
        case 'tutorial4-9b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-10');
          break;
        case 'tutorial4-10':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-10-1a');
          break;
        case 'tutorial4-10-1a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-10-2b');
          break;
        case 'tutorial4-10-2a':
        case 'tutorial4-10-2b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-11');
          break;
        case 'tutorial4-11':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-1');
          break;
        case 'survey4-1':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-2');
          break;
        case 'survey4-2':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-3');
          break;
        case 'survey4-3':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-4');
          break;
        case 'survey4-4':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-5');
          break;
        case 'survey4-5':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-6');
          break;
        case 'survey4-6':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-7');
          break;
        case 'survey4-7':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-8');
          break;
        case 'survey4-8':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-9');
          break;
        case 'survey4-9':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-10');
          break;
        case 'survey4-10':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-11');
          break;
        case 'survey4-11':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-12');
          break;
        case 'survey4-12':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-12');
          break;

        default:
          console.log('No card matched...');
      }
    }

    return nextCard;
}

function iconPointsHandler(choice, card) {
  if (choice === 'left') {
    player.update(p => {
      if (card.actionLeft.heart) p.iconPoints.heart += card.actionLeft.heart;
      if (card.actionLeft.diamond) p.iconPoints.diamond += card.actionLeft.diamond;
      if (card.actionLeft.greenAura) p.iconPoints.greenAura += card.actionLeft.greenAura;
      if (card.actionLeft.yellowAura) p.iconPoints.yellowAura += card.actionLeft.yellowAura;
      if (card.actionLeft.brain) p.iconPoints.brain += card.actionLeft.brain;
      if (card.actionLeft.smiley) p.iconPoints.smiley += card.actionLeft.smiley;
      if (card.actionLeft.knife) p.iconPoints.knife += card.actionLeft.knife;
      if (card.actionLeft.cleaver) p.iconPoints.cleaver += card.actionLeft.cleaver;
      return p;
    });
  }

  if (choice === 'right') {
    player.update(p => {
      if (card.actionRight.heart) p.iconPoints.heart += card.actionRight.heart;
      if (card.actionRight.diamond) p.iconPoints.diamond += card.actionRight.diamond;
      if (card.actionRight.greenAura) p.iconPoints.greenAura += card.actionRight.greenAura;
      if (card.actionRight.yellowAura) p.iconPoints.yellowAura += card.actionRight.yellowAura;
      if (card.actionRight.brain) p.iconPoints.brain += card.actionRight.brain;
      if (card.actionRight.smiley) p.iconPoints.smiley += card.actionRight.smiley;
      if (card.actionRight.knife) p.iconPoints.knife += card.actionRight.knife;
      if (card.actionRight.cleaver) p.iconPoints.cleaver += card.actionRight.cleaver;
      return p;
    });
  }
}