// Hooks
import { get } from 'svelte/store';

// Stores 
import decks from '../stores/decks.js';
import player from '../stores/player.js';
import tutorial1 from '../stores/decks/tutorial1';
import tutorial2 from '../stores/decks/tutorial2';
import tutorial3 from '../stores/decks/tutorial3';
import tutorial4 from '../stores/decks/tutorial4';
import tutorialFinal from '../stores/decks/tutorialFinal';
import survey1 from '../stores/decks/survey1';
import survey2 from '../stores/decks/survey2';
import survey3 from '../stores/decks/survey3';
import survey4 from '../stores/decks/survey4';
import chapter1 from '../stores/decks/chapter1';
import chapter2 from '../stores/decks/chapter2';
import chapter3 from '../stores/decks/chapter3';
import chapter4 from '../stores/decks/chapter4';
import soldiers from '../stores/decks/soldiers';
import elves from '../stores/decks/elves';
import goblins from '../stores/decks/goblins';
import beings from '../stores/decks/beings';
import { healthCard, auraCard, sanityCard, impulseCard } from '../helpers/stats';

export function surveyDecisionHandler(choice, card) {
  // FIXME: This does seem to be helping and almost slving the issue, but first of 4 victims is never accurate, why are they different??
  decks.set({
    tutorial1: get(tutorial1),
    tutorial2: get(tutorial2),
    tutorial3: get(tutorial3),
    tutorial4: get(tutorial4),
    tutorialFinal: tutorialFinal(),
    survey1: get(survey1),
    survey2: get(survey2),
    survey3: get(survey3),
    survey4: get(survey4),
    chapter1: get(chapter1),
    chapter2: get(chapter2),
    chapter3: get(chapter3),
    chapter4: get(chapter4),
    soldiers: get(soldiers),
    elves: get(elves),
    goblins: get(goblins),
    beings: get(beings),
    health: healthCard,
    aura: auraCard,
    sanity: sanityCard,
    impulse: impulseCard,
});

  let nextCard;
  iconPointsHandler(choice, card);

  // Handles all left actions
    if (choice === 'left') {
      switch (card.id) {
        // Tutorial 1 (left)
        case 'tutorial1-1':
          // nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-2');
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-1');
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
        case 'tutorial1-7-1b-1b-1b':
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

        // Survey 1 (left)
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
        case 'survey1-16':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-16');
          break;

        // Tutorial 2 (left)
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

        // Survey 2 (left)
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
          case 'survey2-14':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-14');
          break;
          
        // Tutorial 3 (left)
        case 'tutorial3-1':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-2a');
          break;
        case 'tutorial3-2a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-3a');
          break;
        case 'tutorial3-2b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-3b');
          break;
        case 'tutorial3-3a':
        case 'tutorial3-3b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-4');
          break;
        case 'tutorial3-4':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5a');
          break;
        case 'tutorial3-5a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5a-1a');
          break;
        case 'tutorial3-5a-1a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6a');
          break;
        case 'tutorial3-5a-1b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5a-1b-1a');
          break;
        case 'tutorial3-5a-1b-1a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6a');
          break;
        case 'tutorial3-5a-1b-1b':
        case 'tutorial3-5b-1a':
        case 'tutorial3-5b-1b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6b');
          break;
        case 'tutorial3-5b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5b-1a');
          break;
        case 'tutorial3-6a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6a-1a');
          break;
        case 'tutorial3-6a-1a':
        case 'tutorial3-6a-1b':
        case 'tutorial3-6b-1a':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-7');
          break;
        case 'tutorial3-6b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6b-1a');
          break;
        case 'tutorial3-7':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-8a');
          break;
        case 'tutorial3-8a':
        case 'tutorial3-8b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-9');
          break;
        case 'tutorial3-9':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-10a');
          break;
        case 'tutorial3-10a':
        case 'tutorial3-10b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good');
          break;
        case 'tutorial3-11-good':
          nextCard = getNextCardBasedOnAlignment('tutorial3-11-good', 'left');
          break;
        case 'tutorial3-11-neutral':
          nextCard = getNextCardBasedOnAlignment('tutorial3-11-neutral', 'left');
          break;
        case 'tutorial3-11-evil':
          nextCard = getNextCardBasedOnAlignment('tutorial3-11-evil', 'left');
          break;
        case 'tutorial3-11-good-alignment-good-1a':
        case 'tutorial3-11-good-alignment-neutral-1a':
        case 'tutorial3-11-good-alignment-evil-1a':
        case 'tutorial3-11-good-alignment-good-1b':
        case 'tutorial3-11-good-alignment-neutral-1b':
        case 'tutorial3-11-good-alignment-evil-1b':
        case 'tutorial3-11-good-alignment-good-1c':
        case 'tutorial3-11-good-alignment-neutral-1c':
        case 'tutorial3-11-good-alignment-evil-1c':
        case 'tutorial3-11-good-alignment-good-1d':
        case 'tutorial3-11-good-alignment-neutral-1d':
        case 'tutorial3-11-good-alignment-evil-1d':
        case 'tutorial3-11-good-alignment-good-1e':
        case 'tutorial3-11-good-alignment-neutral-1e':
        case 'tutorial3-11-good-alignment-evil-1e':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-12');
          break;
        case 'tutorial3-12':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-1');
          break;
          
        // Survey 3 (left)
        case 'survey3-1':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-2');
          break;
        case 'survey3-2':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-3a');
          break;
        case 'survey3-3a':
        case 'survey3-3b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-4a');
          break;
        case 'survey3-4a':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-5a');
          break;
        case 'survey3-4b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-5b');
          break;
        case 'survey3-5a':
        case 'survey3-5b':
        case 'survey3-5c':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-6');
          break;
        case 'survey3-6':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-7');
          break;
        case 'survey3-7':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-7a');
          break;
        case 'survey3-7a':
        case 'survey3-7b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-8');
          break;
        case 'survey3-8':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-9a');
          break;
        case 'survey3-9a':
        case 'survey3-9b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-10a');
          break;
        case 'survey3-10a':
        case 'survey3-10b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-11a');
          break;
        case 'survey3-11a':
        case 'survey3-11a-1a':
        case 'survey3-11b':
        case 'survey3-11b-1b':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-12');
          break;
        case 'survey3-12':
          nextCard = get(decks).survey3.find(card => card.id === 'survey3-12');
          break;
        

        // Tutorial 4 (left)
        case 'tutorial4-1':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-2');
          break;
        case 'tutorial4-2':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-3a');
          break;
        case 'tutorial4-3a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-3a-1a');
          break;
        case 'tutorial4-3a-1a':
        case 'tutorial4-3a-1b':
        case 'tutorial4-3b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-4');
          break;
        case 'tutorial4-4':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-5a');
          break;
        case 'tutorial4-5a':
        case 'tutorial4-5b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-5a-1a');
          break;
        case 'tutorial4-5a-1a':
        case 'tutorial4-5a-1b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-6');
          break;
        case 'tutorial4-6':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-25');
          break;
        case 'tutorial4-7':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-6');
          break;
        case 'tutorial4-8':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-7');
          break;
        case 'tutorial4-9':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-8');
          break;
        case 'tutorial4-10':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-9');
          break;
        case 'tutorial4-11':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-10');
          break;
        case 'tutorial4-12':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-11');
          break;
        case 'tutorial4-13':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-12');
          break;
        case 'tutorial4-14':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-13');
          break;
        case 'tutorial4-15':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-14');
          break;
        case 'tutorial4-16':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-15');
          break;
        case 'tutorial4-17':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-16');
          break;
        case 'tutorial4-18':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-17');
          break;
        case 'tutorial4-19':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-18');
          break;
        case 'tutorial4-20':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-19');
          break;
        case 'tutorial4-21':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-20');
          break;
        case 'tutorial4-22':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-21');
          break;
        case 'tutorial4-23':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-22');
          break;
        case 'tutorial4-24':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-23');
          break;
        case 'tutorial4-25':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-6');
          break;
        case 'tutorial4-26':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-27');
          break;
        case 'tutorial4-27':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-1');
          break;

        // Survey 4 (left)
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
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-13');
          break;
        case 'survey4-13':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-14');
          break;
        case 'survey4-14':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-15');
          break;
        case 'survey4-15':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-16');
          break;
        case 'survey4-16':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-16-1a');
          break;
        case 'survey4-16-1a':
        case 'survey4-17':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-17');
          break;

        // Tutorial FINAL (left)
        case 'tutorial-final-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-2a');
          break;
        case 'tutorial-final-2a':
        case 'tutorial-final-2b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-3a');
          break;
        case 'tutorial-final-3a':
        case 'tutorial-final-3b':
        case 'tutorial-final-3b-1b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-4');
          break;
        case 'tutorial-final-4':
        case 'tutorial-final-4-1b':
        case 'tutorial-final-4-1b-1b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-5');
          break;
        case 'tutorial-final-5':
        case 'tutorial-final-5-1b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-6');
          break;
        case 'tutorial-final-6':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-7a');
          break;
        case 'tutorial-final-7a':
        case 'tutorial-final-7b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-8a');
          break;
        case 'tutorial-final-8a':
        case 'tutorial-final-8b':
        case 'tutorial-final-heart':
        case 'tutorial-final-diamond':
        case 'tutorial-final-green':
        case 'tutorial-final-yellow':
        case 'tutorial-final-brain':
        case 'tutorial-final-smiley':
        case 'tutorial-final-knife':
        case 'tutorial-final-cleaver':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-9');
          break;
        case 'tutorial-final-9':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-10');
          break;
        case 'tutorial-final-10':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-11');
          break;
        case 'tutorial-final-11':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-12');
          break;
        case 'tutorial-final-12':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-13');
          break;
        case 'tutorial-final-13':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-14');
          break;
        case 'tutorial-final-14':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-15a');
          break;
        case 'tutorial-final-15a':
        case 'tutorial-final-15b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-16');
          break;
        case 'tutorial-final-16':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-17a');
          break;
        case 'tutorial-final-17a':
        case 'tutorial-final-17b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-18');
          break;
        case 'tutorial-final-18':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-19');
          break;
        case 'tutorial-final-19':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-20a');
          break;
        case 'tutorial-final-20a':
        case 'tutorial-final-20b':
          if (get(player).icons.health === 'heart') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-heart-story-1');
          if (get(player).icons.health === 'diamond') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-diamond-story-1');
          break;
        case 'tutorial-final-heart-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-heart-story-2');
          break;
        case 'tutorial-final-heart-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-heart-story-3');
          break;
        case 'tutorial-final-diamond-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-diamond-story-2');
          break;
        case 'tutorial-final-diamond-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-diamond-story-3');
          break;
        case 'tutorial-final-heart-story-3':
        case 'tutorial-final-diamond-story-3':
          if (get(player).icons.aura === 'green') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-green-story-1');
          if (get(player).icons.aura === 'yellow') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-yellow-story-1');
          break;
        case 'tutorial-final-green-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-green-story-2');
          break;
        case 'tutorial-final-green-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-green-story-3');
          break;
        case 'tutorial-final-yellow-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-yellow-story-2');
          break;
        case 'tutorial-final-yellow-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-yellow-story-3');
          break;
        case 'tutorial-final-green-story-3':
        case 'tutorial-final-yellow-story-3':
          if (get(player).icons.sanity === 'brain') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-brain-story-1');
          if (get(player).icons.sanity === 'smiley') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-smiley-story-1');
          break;
        case 'tutorial-final-brain-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-brain-story-2');
          break;
        case 'tutorial-final-brain-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-brain-story-3');
          break;
        case 'tutorial-final-smiley-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-smiley-story-2');
          break;
        case 'tutorial-final-smiley-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-smiley-story-3');
          break;
        case 'tutorial-final-brain-story-3':
        case 'tutorial-final-smiley-story-3':
          if (get(player).icons.impulse === 'knife') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-knife-story-1');
          if (get(player).icons.impulse === 'cleaver') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-cleaver-story-1');
          break;
        case 'tutorial-final-knife-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-knife-story-2');
          break;
        case 'tutorial-final-knife-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-knife-story-3');
          break;
        case 'tutorial-final-cleaver-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-cleaver-story-2');
          break;
        case 'tutorial-final-cleaver-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-cleaver-story-3');
          break;
        case 'tutorial-final-knife-story-3':
        case 'tutorial-final-cleaver-story-3':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment');
          break;
        case 'tutorial-final-alignment':
          nextCard = getNextCardBasedOnAlignment('tutorial-final-alignment', 'left');
          break;
        case 'tutorial-final-alignment-good-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-good-2');
          break;
        case 'tutorial-final-alignment-evil-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-evil-2');
          break;
        case 'tutorial-final-alignment-neutral-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-neutral-2');
          break;
        case 'tutorial-final-alignment-good-2':
        case 'tutorial-final-alignment-evil-2':
        case 'tutorial-final-alignment-neutral-2':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-1');
          break;
        case 'tutorial-final-quit-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-2');
          break;
        case 'tutorial-final-quit-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-3');
          break;
        case 'tutorial-final-quit-3':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-4');
          break;
        case 'tutorial-final-quit-4':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-5');
          break;
        case 'tutorial-final-quit-5':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-6');
          break;
        case 'tutorial-final-quit-6':
            nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-7');
            break;
        case 'tutorial-final-quit-7':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-8');
          break;
        case 'tutorial-final-quit-8':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-1');
          break;

        default:
          console.log('No card matched...');
      }
    // Handles all right actions
    } else if (choice === 'right') {
      switch (card.id) {
        // Tutorial 1 (right)
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
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-7-1b-1b-1b');
          break;
        case 'tutorial1-7-1b-1b-1b':
            nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-7-1b-1b-1b');
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

        // Survey 1 (right)
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
        case 'survey1-16':
          nextCard = get(decks).survey1.find(card => card.id === 'survey1-16');
          break;

        // Tutorial 2 (right)
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

        // Survey 2 (right)
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
        case 'survey2-14':
          nextCard = get(decks).survey2.find(card => card.id === 'survey2-14');
          break;

        // Tutorial 3 (right)
        case 'tutorial3-1':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-2b');
          break;
          case 'tutorial3-2a':
          case 'tutorial3-2b':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-3b');
            break;
          case 'tutorial3-3a':
          case 'tutorial3-3b':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-4');
            break;
          case 'tutorial3-4':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5b');
            break;
          case 'tutorial3-5a':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5a-1b');
            break;
          case 'tutorial3-5a-1a':
          case 'tutorial3-5a-1b-1a':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6a');
            break;
          case 'tutorial3-5a-1b':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5a-1b-1b');
            break;
          case 'tutorial3-5a-1b-1b':
          case 'tutorial3-5b-1a':
          case 'tutorial3-5b-1b':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6b');
            break;
          case 'tutorial3-5b':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-5b-1b');
            break;
          case 'tutorial3-6a':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6a-1b');
            break;
          case 'tutorial3-6a-1a':
          case 'tutorial3-6a-1b':
          case 'tutorial3-6b-1a':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-7');
            break;
          case 'tutorial3-6b':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-6a-1b');
            break;
          case 'tutorial3-7':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-8b');
            break;
          case 'tutorial3-8a':
          case 'tutorial3-8b':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-9');
            break;
          case 'tutorial3-9':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-10b');
            break;
          case 'tutorial3-10a':
          case 'tutorial3-10b':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-evil');
            break;
          case 'tutorial3-11-good':
            nextCard = getNextCardBasedOnAlignment('tutorial3-11-good', 'right');
            break;
          case 'tutorial3-11-neutral':
            nextCard = getNextCardBasedOnAlignment('tutorial3-11-neutral', 'right');
            break;
          case 'tutorial3-11-evil':
            nextCard = getNextCardBasedOnAlignment('tutorial3-11-evil', 'right');
            break;
          case 'tutorial3-11-good-alignment-good-1a':
          case 'tutorial3-11-good-alignment-neutral-1a':
          case 'tutorial3-11-good-alignment-evil-1a':
          case 'tutorial3-11-good-alignment-good-1b':
          case 'tutorial3-11-good-alignment-neutral-1b':
          case 'tutorial3-11-good-alignment-evil-1b':
          case 'tutorial3-11-good-alignment-good-1c':
          case 'tutorial3-11-good-alignment-neutral-1c':
          case 'tutorial3-11-good-alignment-evil-1c':
          case 'tutorial3-11-good-alignment-good-1d':
          case 'tutorial3-11-good-alignment-neutral-1d':
          case 'tutorial3-11-good-alignment-evil-1d':
          case 'tutorial3-11-good-alignment-good-1e':
          case 'tutorial3-11-good-alignment-neutral-1e':
          case 'tutorial3-11-good-alignment-evil-1e':
            nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-12');
            break;
          case 'tutorial3-12':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-1');
            break;

          // Survey 3 (right)
          case 'survey3-1':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-2');
            break;
          case 'survey3-2':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-3b');
            break;
          case 'survey3-3a':
          case 'survey3-3b':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-4b');
            break;
          case 'survey3-4a':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-5a');
            break;
          case 'survey3-4b':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-5c');
            break;
          case 'survey3-5a':
          case 'survey3-5b':
          case 'survey3-5c':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-6');
            break;
          case 'survey3-6':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-7');
            break;
          case 'survey3-7':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-7b');
            break;
          case 'survey3-7a':
          case 'survey3-7b':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-8');
            break;
          case 'survey3-8':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-9b');
            break;
          case 'survey3-9a':
          case 'survey3-9b':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-10b');
            break;
          case 'survey3-10a':
          case 'survey3-10b':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-11b');
            break;
          case 'survey3-11a':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-11a-1a');
            break;
          case 'survey3-11b':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-11b-1b');
            break;
          case 'survey3-11a-1a':
          case 'survey3-11b-1b':
          case 'survey3-12':
            nextCard = get(decks).survey3.find(card => card.id === 'survey3-12');
            break;

        // Tutorial 4 (right)
        case 'tutorial4-1':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-2');
          break;
        case 'tutorial4-2':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-3b');
          break;
        case 'tutorial4-3a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-3a-1b');
          break;
        case 'tutorial4-3a-1a':
        case 'tutorial4-3a-1b':
        case 'tutorial4-3b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-4');
          break;
        case 'tutorial4-4':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-5b');
          break;
        case 'tutorial4-5a':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-5a-1b');
          break;
        case 'tutorial4-5a-1a':
        case 'tutorial4-5a-1b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-6');
          break;
        case 'tutorial4-5b':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-5a-1b');
          break;
        case 'tutorial4-6':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-7');
          break;
        case 'tutorial4-7':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-8');
          break;
        case 'tutorial4-8':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-9');
          break;
        case 'tutorial4-9':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-10');
          break;
        case 'tutorial4-10':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-11');
          break;
        case 'tutorial4-11':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-12');
          break;
        case 'tutorial4-12':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-13');
          break;
        case 'tutorial4-13':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-14');
          break;
        case 'tutorial4-14':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-15');
          break;
        case 'tutorial4-15':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-16');
          break;
        case 'tutorial4-16':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-17');
          break;
        case 'tutorial4-17':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-18');
          break;
        case 'tutorial4-18':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-19');
          break;
        case 'tutorial4-19':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-20');
          break;
        case 'tutorial4-20':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-21');
          break;
        case 'tutorial4-21':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-22');
          break;
        case 'tutorial4-22':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-23');
          break;
        case 'tutorial4-23':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-24');
          break;
        case 'tutorial4-24':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-25');
          break;
        case 'tutorial4-25':
          nextCard = get(decks).tutorial4.find(card => card.id === 'tutorial4-26');
          break;
        case 'tutorial4-26':
        case 'tutorial4-27':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-1');
          break;

        // Survey 4 (right)
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
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-13');
          break;
        case 'survey4-13':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-14');
          break;
        case 'survey4-14':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-15');
          break;
        case 'survey4-15':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-16');
          break;
        case 'survey4-16':
        case 'survey4-16-1a':
        case 'survey4-17':
          nextCard = get(decks).survey4.find(card => card.id === 'survey4-17');
          break;

        // Tutorial FINAL (right)
        case 'tutorial-final-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-2b');
          break;
        case 'tutorial-final-2a':
        case 'tutorial-final-2b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-3b');
          break;
        case 'tutorial-final-3a':
        case 'tutorial-final-3b':
        case 'tutorial-final-3b-1b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-3b-1b');
          break;
        case 'tutorial-final-4':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-4-1b');
          break;
        case 'tutorial-final-5':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-5-1b');
          break;
        case 'tutorial-final-5-1b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-6');
          break;
        case 'tutorial-final-6':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-7b');
          break;
        case 'tutorial-final-7a':
        case 'tutorial-final-7b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-8b');
          break;
        case 'tutorial-final-8a':
        case 'tutorial-final-8b':
        case 'tutorial-final-heart':
        case 'tutorial-final-diamond':
        case 'tutorial-final-green':
        case 'tutorial-final-yellow':
        case 'tutorial-final-brain':
        case 'tutorial-final-smiley':
        case 'tutorial-final-knife':
        case 'tutorial-final-cleaver':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-9');
          break;
        case 'tutorial-final-9':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-10');
          break;
        case 'tutorial-final-10':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-11');
          break;
        case 'tutorial-final-11':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-12');
          break;
        case 'tutorial-final-12':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-13');
          break;
        case 'tutorial-final-13':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-14');
          break;
        case 'tutorial-final-14':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-15b');
          break;
        case 'tutorial-final-15a':
        case 'tutorial-final-15b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-16');
          break;
        case 'tutorial-final-16':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-17b');
          break;
        case 'tutorial-final-17a':
        case 'tutorial-final-17b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-18');
          break;
        case 'tutorial-final-18':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-19');
          break;
        case 'tutorial-final-19':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-20b');
          break;
        case 'tutorial-final-20a':
        case 'tutorial-final-20b':
          if (get(player).icons.health === 'heart') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-heart-story-1');
          if (get(player).icons.health === 'diamond') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-diamond-story-1');
          break;
        case 'tutorial-final-heart-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-heart-story-2');
          break;
        case 'tutorial-final-heart-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-heart-story-3');
          break;
        case 'tutorial-final-diamond-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-diamond-story-2');
          break;
        case 'tutorial-final-diamond-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-diamond-story-3');
          break;
        case 'tutorial-final-heart-story-3':
        case 'tutorial-final-diamond-story-3':
          if (get(player).icons.aura === 'green') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-green-story-1');
          if (get(player).icons.aura === 'yellow') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-yellow-story-1');
          break;
        case 'tutorial-final-green-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-green-story-2');
          break;
        case 'tutorial-final-green-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-green-story-3');
          break;
        case 'tutorial-final-yellow-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-yellow-story-2');
          break;
        case 'tutorial-final-yellow-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-yellow-story-3');
          break;
        case 'tutorial-final-green-story-3':
        case 'tutorial-final-yellow-story-3':
          if (get(player).icons.sanity === 'brain') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-brain-story-1');
          if (get(player).icons.sanity === 'smiley') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-smiley-story-1');
          break;
        case 'tutorial-final-brain-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-brain-story-2');
          break;
        case 'tutorial-final-brain-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-brain-story-3');
          break;
        case 'tutorial-final-smiley-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-smiley-story-2');
          break;
        case 'tutorial-final-smiley-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-smiley-story-3');
          break;
        case 'tutorial-final-brain-story-3':
        case 'tutorial-final-smiley-story-3':
          if (get(player).icons.impulse === 'knife') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-knife-story-1');
          if (get(player).icons.impulse === 'cleaver') nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-cleaver-story-1');
          break;
        case 'tutorial-final-knife-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-knife-story-2');
          break;
        case 'tutorial-final-knife-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-knife-story-3');
          break;
        case 'tutorial-final-cleaver-story-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-cleaver-story-2');
          break;
        case 'tutorial-final-cleaver-story-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-cleaver-story-3');
          break;
        case 'tutorial-final-knife-story-3':
        case 'tutorial-final-cleaver-story-3':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment');
          break;
        case 'tutorial-final-alignment':
          nextCard = getNextCardBasedOnAlignment('tutorial-final-alignment', 'right');
          break;
        case 'tutorial-final-alignment-good-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-good-2');
          break;
        case 'tutorial-final-alignment-evil-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-evil-2');
          break;
        case 'tutorial-final-alignment-neutral-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-neutral-2');
          break;
        case 'tutorial-final-alignment-good-2':
        case 'tutorial-final-alignment-evil-2':
        case 'tutorial-final-alignment-neutral-2':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-1');
          break;

        case 'tutorial-final-4-1b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-4-1b-1b');
          break;
        case 'tutorial-final-4-1b-1b':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-1');
          break;
        case 'tutorial-final-quit-1':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-5');
          break;
          case 'tutorial-final-quit-2':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-3');
          break;
        case 'tutorial-final-quit-3':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-4');
          break;
        case 'tutorial-final-quit-4':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-5');
          break;
        case 'tutorial-final-quit-5':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-6');
          break;
        case 'tutorial-final-quit-6':
            nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-7');
            break;
        case 'tutorial-final-quit-7':
          nextCard = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-quit-8');
          break;
        case 'tutorial-final-quit-8':
          nextCard = get(decks).tutorial1.find(card => card.id === 'tutorial1-1');
          break;

        default:
          console.log('No card matched...');
      }
    } else if (choice === 'center') {
      // Tutorial 3 (center) - Much more rare then left and right, usually hideen
      switch (card.id) {
        case 'tutorial3-10a':
        case 'tutorial3-10b':
          nextCard = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-neutral');
          break;
      }
    }

    return nextCard;
}

function iconPointsHandler(choice, card) {
  if (choice === 'left') {
    player.update(p => {
      if (card.actionLeft.good) p.goodPoints += card.actionLeft.good;
      if (card.actionLeft.evil) p.evilPoints += card.actionLeft.evil;
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
      if (card.actionRight.good) p.goodPoints += card.actionRight.good;
      if (card.actionRight.evil) p.evilPoints += card.actionRight.evil;
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

  if (choice === 'center' && card.actionCenter) {
    player.update(p => {
      if (card.actionCenter.good) p.goodPoints += card.actionCenter.good;
      if (card.actionCenter.evil) p.evilPoints += card.actionCenter.evil;
      if (card.actionCenter.heart) p.iconPoints.heart += card.actionCenter.heart;
      if (card.actionCenter.diamond) p.iconPoints.diamond += card.actionCenter.diamond;
      if (card.actionCenter.greenAura) p.iconPoints.greenAura += card.actionCenter.greenAura;
      if (card.actionCenter.yellowAura) p.iconPoints.yellowAura += card.actionCenter.yellowAura;
      if (card.actionCenter.brain) p.iconPoints.brain += card.actionCenter.brain;
      if (card.actionCenter.smiley) p.iconPoints.smiley += card.actionCenter.smiley;
      if (card.actionCenter.knife) p.iconPoints.knife += card.actionCenter.knife;
      if (card.actionCenter.cleaver) p.iconPoints.cleaver += card.actionCenter.cleaver;
      return p;
    });
  }
}

// Show texted based on player's alignment.
function getNextCardBasedOnAlignment(cardId = '', action = '') {
  let cardToReturn;

  // Player Good
  if (get(player).goodPoints > get(player).evilPoints) {
    switch (cardId) {
      case 'tutorial3-11-good': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-good-1a') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-good-1b');
        break;
      case 'tutorial3-11-neutral': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-good-1a') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-good-1c');
        break;
      case 'tutorial3-11-evil': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-good-1d') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-good-1e');
        break;
      case 'tutorial-final-alignment':
        cardToReturn = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-good-1');
        break;
    }
    
    return cardToReturn;

    // Player Evil
  } else if (get(player).goodPoints < get(player).evilPoints) {
    switch (cardId) {
      case 'tutorial3-11-good': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-evil-1a') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-evil-1b');
        break;
      case 'tutorial3-11-neutral': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-evil-1a') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-evil-1c');
        break;
      case 'tutorial3-11-evil': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-evil-1d') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-evil-1e');
        break;
      case 'tutorial-final-alignment':
        cardToReturn = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-evil-1');
        break;
    }
    
    return cardToReturn;

    // Player Neutral
  } else if (get(player).goodPoints === get(player).evilPoints) {
    switch (cardId) {
      case 'tutorial3-11-good': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-neutral-1a') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-neutral-1b');
        break;
      case 'tutorial3-11-neutral': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-neutral-1a') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-neutral-1c');
        break;
      case 'tutorial3-11-evil': 
        action === 'left' ? cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-neutral-1d') : cardToReturn = get(decks).tutorial3.find(card => card.id === 'tutorial3-11-good-alignment-neutral-1e');
        break;
      case 'tutorial-final-alignment':
        cardToReturn = get(decks).tutorialFinal.find(card => card.id === 'tutorial-final-alignment-neutral-1');
        break;
    }
    
    return cardToReturn;
  }
}