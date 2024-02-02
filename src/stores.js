import { writable, readable } from "svelte/store";
import { Tile } from "$lib/classes";

//* Dev
/** @type {import('svelte/store').Readable<boolean>} */
export const devModeStore = readable(true);

//* Board properties
/** @type {import('svelte/store').Writable<number>} */
export const boardPixelStore = writable(500);

/** @type {import('svelte/store').Writable<number>} */
export const boardSizeStore = writable(9);

/** @type {import('svelte/store').Writable<string[]>} */
export const mineLocationsStore = writable([]);

/** @type {import('svelte/store').Writable<Tile[][]>} */
export const boardStore = writable([]);

//* Statistics
/** @type {import('svelte/store').Writable<number>} */
export const tilesClickedStore = writable(0);

/** @type {import('svelte/store').Writable<number>} */
export const mineCountStore = writable(5);

//* Settings
/** @type {import('svelte/store').Writable<boolean>} */
export const flagActiveStore = writable(false);

//* Game state
/** @type {import('svelte/store').Writable<boolean>} */
export const gameOverStore = writable(false);

/** @type {import('svelte/store').Writable<boolean>} */
export const gameStartedStore = writable(false);


