<script>
	import { Number, Bomb, Burst, Flag } from '$lib/index';

	import { storeBoardSize, storeMineCount } from '../stores';

	/**
	 * @typedef {Object} Location
	 * @property {number} r
	 * @property {number} c
	 */

	/**
	 * @typedef {Object} Tile
	 * @property {boolean} isMine
	 * @property {boolean} isFlagged
	 * @property {number} row
	 * @property {number} column
	 */

	/** @class */
	class Board {
		/**
		 * @constructor
		 * @param {number} prop_boardSize
		 * @param {number} prop_mineCount
		 */
		constructor(prop_boardSize, prop_mineCount) {
			/** @type {number} */
			this.size = prop_boardSize;

			/** @type {number} */
			this.mineCount = prop_mineCount;

			/** @type {Location[]} */
			this.mineLocations = [];

			this.start();
		}

		/**
		 * @returns {void}
		 */
		start() {
			this.generateMines();
			this.generateTiles();
		}

		/**
		 * @returns {void}
		 */
		generateMines() {
			/** @type {number} */
			let minesLeft = this.mineCount;
			// console.log(minesLeft)

			if (this.mineCount > this.size) {
				return console.error('Too many mines!');
			}

			while (minesLeft > 0) {
				let r = Math.floor(Math.random() * this.size);
				let c = Math.floor(Math.random() * this.size);
				console.log(minesLeft);
				if (
					/* Not center */
					r != Math.ceil(this.size / 2) &&
					c != Math.ceil(this.size / 2) &&
					/* Not already a mine */
					!this.mineLocations.includes({ r: r, c: c })
				)
					continue;

				this.mineLocations.push({ r: r, c: c });

				--minesLeft;
			}
			console.log(this.mineLocations);
		}

		generateTiles() {
			/** @type {Tile[][]} */
			this.tiles = [];

			for (let r = 0; r < this.size; ++r) {
				/** @type {Tile[]} */
				let row = [];

				for (let c = 0; c < this.size; ++c) {
					let tile = {
						isMine: false,
						isFlagged: false,
						row: r,
						column: c
					};
					if (this.mineLocations.includes({ r: r, c: c })) {
						tile.isMine = true;
					}

					row.push(tile);
				}
				this.tiles.push(row);
			}
			console.table(this.tiles);
		}

		// /**
		//  * @returns {Tile}
		//  * @param {number} row
		//  * @param {number} column
		//  */
		// tileFactory(row, column) {
		// 	let isMine = false;

		// 	if (this.mineLocations.includes({ r: row, c: column })) {
		// 		isMine = true;
		// 		console.log(isMine);
		// 	}

		// 	return new Tile(isMine);
		// }
	}

	$: board = new Board($storeBoardSize, $storeMineCount);
</script>

<button on:click={() => {
    
}}>Start Game</button>

{#each board.mineLocations as location}
	<p>{location.r}, {location.c}</p>
{/each}

{board.mineLocations}
