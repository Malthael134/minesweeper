<script>

import {
    boardPixelStore,
    boardSizeStore,
    mineCountStore,
    tilesClickedStore,
    gameOverStore,
    mineLocationsStore,
    devModeStore,
    boardStore,
    gameStartedStore,
} from '../../stores';

import { fontSizeStore } from "../../configStores";

import {
    Number,
    Flag,
    Bomb,
    Burst,
} from "$lib/components"

import {
    Tile
} from '$lib/classes';

/**
 * @typedef {Object} NumberColour
 * @property {number} number
 * @property {string} color
 */

/** @type {NumberColour[]} */
let numbers = [
    { number: 1, color: "blue" },
    { number: 2, color: "green" },
    { number: 3, color: "red" },
    { number: 4, color: "navy" },
    { number: 5, color: "brown" },
    { number: 6, color: "teal" },
    { number: 7, color: "black" },
    { number: 8, color: "gray" }
];

/* Start game */
function startGame() {
    resetStats();
    setMines();
    generateBoard();
}

function resetStats() {
    $gameOverStore = false;
    $gameStartedStore = false;
    $tilesClickedStore = 0;

    $mineLocationsStore = [];
    $boardStore = [];

}

function generateBoard() {
    for (let r = 0; r < $boardSizeStore; ++r) {
        $boardStore.push([]);
        for (let c = 0; c < $boardSizeStore; ++c) {
            $boardStore[r].push(new Tile( `${r}-${c}`, r, c, ''));
        }
    }
    // $boardStore = $boardStore;
}

/* Set mines */
function setMines() {
    /** @type {number} */
    let minesLeft = $mineCountStore;

    while (minesLeft > 0) {

        /* Get random row and column */
        let row = Math.floor(Math.random() * $boardSizeStore);
        let column = Math.floor(Math.random() * $boardSizeStore);

        /* If the tile is not already a mine, set it as a mine */
        if (!$mineLocationsStore.includes(`${row}-${column}`)) {
            $mineLocationsStore.push(`${row}-${column}`);
            --minesLeft;
        }

    }
}

/**
 * @param {number} r
 * @param {number} c
 * @returns {void}
 */
function checkAdjacent(r, c) {

    let tileId = `${r}-${c}`;
    let tile = document.getElementById(tileId);

    if ($gameOverStore || tile?.classList.contains('clicked')) return;
    tile?.classList.add('clicked');
    //* Check out of bounds
    if (r < 0 || r >= $boardSizeStore || c < 0 || c >= $boardSizeStore) {
        return;
    }

    if ($mineLocationsStore.includes(`${r}-${c}`)) {
        console.warn('Game over');
        $gameOverStore = true;
        tile?.classList.add('clicked');
        return;
    }

    console.log('Checking', tileId);
    $boardStore[r][c].clicked = true;

    let adjacent = 0;

    //* Top
    adjacent += checkMine(r-1, c-1);
    adjacent += checkMine(r-1, c);
    adjacent += checkMine(r-1, c+1);

    //* Middle
    adjacent += checkMine(r, c-1);
    adjacent += checkMine(r, c+1);

    //* Bottom
    adjacent += checkMine(r+1, c-1);
    adjacent += checkMine(r+1, c);
    adjacent += checkMine(r+1, c+1);

    if (adjacent === 0) {

        //* Top
        checkAdjacent(r-1, c-1);
        checkAdjacent(r-1, c);
        checkAdjacent(r-1, c+1);

        //* Middle
        checkAdjacent(r, c-1);
        checkAdjacent(r, c+1);

        //* Bottom
        checkAdjacent(r+1, c-1);
        checkAdjacent(r+1, c);
        checkAdjacent(r+1, c+1);


    }

    $boardStore[r][c].adjacent = adjacent;
    ++$tilesClickedStore;

    if ($tilesClickedStore === ($boardSizeStore * $boardSizeStore - $mineCountStore)) {
        console.info('You won!');
        $gameOverStore = true;
    }

    return;

}

/**
 * @param {number} row
 * @param {number} column
 * @returns {number}
 */
function checkMine(row, column) {
    //* Check out of bounds
    if (row < 0 || row >= $boardSizeStore || column < 0 || column >= $boardSizeStore) {
        return 0;
    }

    //* If the tile is a mine, return 1
    if ($mineLocationsStore.includes(`${row}-${column}`)) {
        return 1;
    }

    return 0;

}

boardSizeStore.subscribe(() => {
    startGame();
})

</script>


<div class="board" style="
--font-size: {$fontSizeStore};
--board-pixel: {`${$boardPixelStore}px`};
--board-size: {`${$boardPixelStore/$boardSizeStore}px `.repeat($boardSizeStore)};
--tile-size: {`${$boardPixelStore/$boardSizeStore}px`};
">

{#key $boardSizeStore}
{#each $boardStore as row}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#each row as tile}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class={tile.class}
            id={tile.id}
            on:click={() => {
                let position = tile.id.split('-');

                let row = parseInt(position[0]);
                let column = parseInt(position[1]);

                const tileElement = document.getElementById(tile.id);

                if (tileElement === null) return;
                if (tileElement.classList.contains('clicked')) return; 
                if ($gameOverStore) return;

                tile.class += ' clicked';
                checkAdjacent(row, column);

            }}
        >
            {#if !tile.clicked}
                {#if tile.flagged}
                   <Flag
                        width={`${$boardPixelStore/$boardSizeStore-5}px`}
                        height={`${$boardPixelStore/$boardSizeStore-5}px`}
                    />
                {/if}
            {:else if tile.adjacent > 0}
                <Number
                    number={tile.adjacent}
                    color={numbers[tile.adjacent -1].color}
                    width={`${$boardPixelStore/$boardSizeStore-5}px`}
                    height={`${$boardPixelStore/$boardSizeStore-5}px`}
                />
            {/if}
        </div>
    {/each}
{/each}
{/key}
</div>

<style>
    .board {
        font-size: var(--font-size);

        width: var(--board-pixel);
        height: var(--board-pixel);
        background-color: #555;
        border: 10px solid #555;
        border-radius: 10px;
        
        margin: 0;
        padding: 0;

        display: grid;
        row-gap: 0;
        grid-template-rows: var(--board-size);
        grid-template-columns: var(--board-size);

    }

    .tile {
        width: var(--tile-size);
        height: var(--tile-size);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .board .tile.bomb {
        background-color: red !important;
    }
    .board .tile.clicked:not(.bomb) {
        background-color: #ddd;
    }

    .board :nth-child(2n-1).tile {
        background-color: #666;
    }

    .board :nth-child(2n-1).tile:hover:not(.clicked) {
        cursor: pointer;
        background-color: #777;
    }
    .board :nth-child(2n).tile {
        background-color: #aaa;
    }
    .board :nth-child(2n).tile:hover:not(.clicked) {
        cursor: pointer;
        background-color: #bbb;
    }
</style>
