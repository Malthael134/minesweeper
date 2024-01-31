import { writable } from "svelte/store";

export const boardSizeStore = writable(9);

/** @type {import('svelte/store').Writable<boolean>} */
export const flagActiveStore = writable(false);

