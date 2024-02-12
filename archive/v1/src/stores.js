import {
    writable,
} from "svelte/store";


/** @type {import("svelte/store").Writable<number>} */
export const storeBoardSize = writable(9);

/** @type {import("svelte/store").Writable<number>} */
export const storeMineCount= writable(5)

