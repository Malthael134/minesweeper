<script lang="ts">
	class Tile {
		row: Number;
		column: Number;
		constructor(r: Number, c: Number) {
			this.row = r;
			this.column = c;
		}
	}

	class Board {
		tiles: Tile[][];
		size: Number;
		mineCount: Number;
		constructor(size: Number, mineCount: Number) {
			this.size = size;
			this.tiles = [];
			this.mineCount = mineCount;
		}

		public SetSize(size: Number) {
			this.size = size;
		}

		public SetMineCount(mineCount: Number) {
			this.mineCount = mineCount;
		}

		public Start(): void {
			this.generateMines(this.mineCount);
			this.generateTiles();
		}

		private generateMines(mineCount: Number) {
			console.log(`Danger level: ${mineCount}`);
		}

		private generateTiles() {}
	}

    let boardSize = 9;
    let boardMineCount = 5;

	$: board = new Board(boardSize, boardMineCount);
</script>

<button
	type="button"
	on:click={() => {
		board.Start();
	}}
>
	Start Game
</button>

<div class="grid grid-cols-{board.size} grid-rows-{board.size}">
	{#each board.tiles as row}
		{#each row as tile}
			<div>
				{tile.row} | {tile.column}
			</div>
		{/each}
	{/each}
</div>
