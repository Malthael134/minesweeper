<script>

import { boardSizeStore, mineCountStore } from "../../stores";

/** @type {string[]} */
let mineLocations = [];

/** @type {number} */
let tilesClicked = 0;

/** @type {Tile[][]} */
let board = [];

/**
 * @class
 */
class Tile {
    /** 
     * @constructor
     * @param {string} prop_id
     * @param {number} prop_row
     * @param {number} prop_column
     * @param {string} prop_text
     */
    constructor(prop_id, prop_row, prop_column, prop_text) {
        
        /** @member {string} */
        this.id = prop_id;

        /** @member {string} */
        this.class = `tile ${mineLocations.includes(this.id) ? "bomb" : ""}`;

        /** @member {number} */
        this.row = prop_row;

        /** @member {number} */
        this.column = prop_column;

        /** @member {string} */
        this.text = prop_text || "";

    }
}

/* Start game */
function startGame() {
    setMines();
    generateBoard();
}


function generateBoard() {
    board = [];
    for (let r = 0; r < $boardSizeStore; ++r) {
        board.push([]);
        for (let c = 0; c < $boardSizeStore; ++c) {
            board[r].push(new Tile( `${r}-${c}`, r, c, ''));
        }
    }
    board = board;
}

/* Set mines */
function setMines() {
    /** @type {number} */
    let minesLeft = $mineCountStore;

    mineLocations = [];

    while (minesLeft > 0) {

        /* Get random row and column */
        let row = Math.floor(Math.random() * $boardSizeStore);
        let column = Math.floor(Math.random() * $boardSizeStore);

        /* If the tile is not already a mine, set it as a mine */
        if (!mineLocations.includes(`${row}-${column}`)) {
            mineLocations.push(`${row}-${column}`);
            --minesLeft;
        }

    }
    console.log(mineLocations);
}

boardSizeStore.subscribe((value) => {
    startGame();
});

</script>


<div
    class="board"
    style="
        --board-size: {`${500/$boardSizeStore}px` + (` ${500/$boardSizeStore}px`.repeat($boardSizeStore-1))}
    "
>

{#each board as row}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#each row as tile}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class={tile.class}
            id={tile.id}
            on:click={() => {
                let position = tile.id.split('-');
                console.log(position)

                const tileElement = document.getElementById(tile.id);

                if (tileElement !== null && !tileElement.classList.contains('clicked')) {
                    ++tilesClicked;
                    tile.class += ' clicked';
                    console.log(tile.class);
                }
                if (mineLocations.includes(tile.id)) {
                    console.log('BOOM');

                }
            }}
        >{tile.text}</div>
    {/each}
{/each}

</div>


<style>

    .board {
        width: 500px;
        height: 500px;
        border: 10px solid #555;
        border-radius: 10px;
        
        margin: 0;
        padding: 0;

        display: grid;
        row-gap: 0;
        grid-template-rows: var(--board-size);
        grid-template-columns: var(--board-size);

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

    .board :nth-child(2n-1).tile:hover {
        cursor: pointer;
        background-color: #777;
    }
    .board :nth-child(2n).tile {
        background-color: #aaa;
    }
    .board :nth-child(2n).tile:hover {
        cursor: pointer;
        background-color: #bbb;
    }

</style>
