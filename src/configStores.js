import { writable } from "svelte/store";

//* Config
/** @type {import('svelte/store').Writable<string>} */
export const fontSizeStore = writable("15px");
