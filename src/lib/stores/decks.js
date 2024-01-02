import { get, writable } from 'svelte/store';
import tutorial1 from './decks/tutorial1';
import tutorial2 from './decks/tutorial2';
import tutorial3 from './decks/tutorial3';
import survey1 from './decks/survey1';
import survey2 from './decks/survey2';
import survey3 from './decks/survey3';
import chapter1 from './decks/chapter1';
import chapter2 from './decks/chapter2';
import chapter3 from './decks/chapter3';
import soldiers from './decks/soldiers';
import elves from './decks/elves';
import goblins from './decks/goblins';

// Combines all smaller decks into one master deck.
const decks = writable({
    tutorial1: get(tutorial1),
    tutorial2: get(tutorial2),
    tutorial3: get(tutorial3),
    tutorial4: [],
    survey1: get(survey1),
    survey2: get(survey2),
    survey3: get(survey3),
    survey4: [],
    chapter1: get(chapter1),
    chapter2: get(chapter2),
    chapter3: get(chapter3),
    soldiers: get(soldiers),
    elves: get(elves),
    goblins: get(goblins),
});

export default decks;