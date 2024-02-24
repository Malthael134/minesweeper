<script lang="ts">
	import { Board } from '$lib/classes';
	import { Number } from '$lib/components';

	let boardSize = 9;
	let boardMineCount = 5;

	const BOARD_SIZE_EASY = 9;
	const BOARD_SIZE_NORMAL = 15;
	const BOARD_SIZE_HARD = 21;

	let board = new Board(boardSize, boardMineCount);
</script>

<div
	class="
		w-full h-dvh
		flex flex-col
		items-center justify-center
	"
>
	<div>Hi</div>
	<div
		class="
			grid
			w-8/12 aspect-square
			{board.size === BOARD_SIZE_EASY
			? `grid-cols-9 grid-rows-9`
			: board.size === BOARD_SIZE_NORMAL
				? `grid-cols-15 grid-rows-15`
				: board.size === BOARD_SIZE_HARD
					? `grid-cols-21 grid-rows-21`
					: ''}
		"
	>
		<!-- style="--board-size: {board.size}" -->
		{#each board.tiles as row}
			{#each row as tile}
				<div
					class="
						aspect-square
						{tile.mine ? 'bg-red-500' : 'bg-green-500'}
					"
				>
					<span
						class="
							w-full h-full
							flex
							justify-center items-center
						"
					>
						<Number />
					</span>
				</div>
			{/each}
		{/each}
	</div>
</div>
