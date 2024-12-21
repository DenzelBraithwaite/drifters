import { writable } from 'svelte/store';

const cardHovered = writable({
    hovered: false,
    left: false,
    center: false,
    right: false
});

export default cardHovered;