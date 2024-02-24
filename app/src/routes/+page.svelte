<script>
	import { Minesweeper } from '$lib/components';

	import { CBoard } from '$lib/classes';

	let board = new CBoard();
</script>

<button on:click={board.StartGame} type="button">Start</button>

<Minesweeper bind:board />
