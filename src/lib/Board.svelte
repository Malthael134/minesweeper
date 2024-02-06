<script>

import {
    Number,
    Bomb,
    Burst,
    Flag
} from '$lib/index';

import {
    storeBoardSize,
    storeMineCount,
} from '../stores';

import Tile from '$lib/classes/Tile';


/**
 * @typedef {Object} Location
 * @property {number} r
 * @property {number} c
 */

/** @class */
class Board {
    /**
     * @constructor
     * @param {number} prop_boardSize
     * @param {number} prop_mineCount
     */
    constructor(
        prop_boardSize,
        prop_mineCount,
    ) {

        /** @type {number} */
        this.size = prop_boardSize;

        /** @type {number} */
        this.mineCount = prop_mineCount;

        /** @type {Location[]} */
        this.mineLocations = [];

        this.start()

    }

    /**
     * @returns {void}
     */
    start() {
        this.generateMines();
        this.generateTiles();
    }

    generateMines() {
        let minesLeft = this.mineCount;
        while (minesLeft > 0) {
            let r = Math.floor(Math.random() * this.size);
            let c = Math.floor(Math.random() * this.size);
            if (
                /* Not center */
                r != Math.ceil(this.size/2) &&
                c != Math.ceil(this.size/2) &&
                /* Not already a mine */
                this.mineLocations.includes({r: r, c: c})
            ) {

            }
        }
    }

    generateTiles() {
        /** @type {Tile[][]} */
        this.tiles = [];
        for (let r = 0; r < this.size; ++r) {
            let row = [];
            for (let c = 0; c < this.size; ++c) {
                row.push(this.tileFactory(
                    r,
                    c,
                ))
            }
        }
    }

    /**
     * @returns {Tile}
     * @param {number} row
     * @param {number} column
     */
    tileFactory(row, column) {
        let isMine = false

        if (this.mineLocations.includes({r: row, c: column})) {
            
        }

        return new Tile(
            true
        )
    }

}


$: board = new Board(
    $storeBoardSize,
    $storeMineCount,
);

</script>

<div>
</div>
