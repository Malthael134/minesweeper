<script lang="ts">
	import { Board } from '$lib/classes';

	let boardSize = 9;
	let boardMineCount = 5;

	const BOARD_SIZE_EASY = 9;
	const BOARD_SIZE_NORMAL = 15;
	const BOARD_SIZE_HARD = 21;

	let board = new Board(boardSize, boardMineCount);
</script>

<button
	type="button"
	on:click={() => {
		board.Start();
		board = board;
	}}
>
	Start Game
</button>

<div>Hi</div>

<div
	class="grid
        {
            board.size === BOARD_SIZE_EASY ? `grid-cols-9 grid-rows-9`  :
            board.size === BOARD_SIZE_NORMAL ? `grid-cols-15 grid-rows-15` :
            board.size === BOARD_SIZE_HARD ? `grid-cols-21 grid-rows-21` : ''
        }
    "
>
	<!-- style="--board-size: {board.size}" -->
	{#each board.tiles as row}
		{#each row as tile}
			<div class={tile.mine ? 'bg-red-500' : 'bg-green-500'}>
				{tile.coord.row}-{tile.coord.column}
			</div>
		{/each}
	{/each}
</div>

<!-- <style lang="postcss">
    .board {
        display: grid;
        grid-template-rows: repeat(var(--board-size), 1fr);
        grid-template-columns: repeat(var(--board-size), 1fr);

    }
</style> -->
