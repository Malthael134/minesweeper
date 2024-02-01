import { writable } from "svelte/store";

/** @type {import('svelte/store').Writable<number>} */
export const boardSizeStore = writable(9);

/** @type {import('svelte/store').Writable<number>} */
export const mineCountStore = writable(5);

/** @type {import('svelte/store').Writable<boolean>} */
export const flagActiveStore = writable(false);
