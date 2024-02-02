<script>
    import Board from "./Board.svelte";
	import Settings from "./Settings.svelte";
    import { Number, Bomb, Mine, Flag } from "$lib/components/index"
</script>

<div>
    <Settings />
    <Board />

    <!--
        <Flag />
        <Mine />
        <Bomb />
    -->
<!-- 
    <Number number={0} width="50" height="50" />
    <Number number={1} width="50" height="50" />
    <Number number={2} width="50" height="50" />
    <Number number={3} width="50" height="50" />
    <Number number={4} width="50" height="50" />
    <Number number={5} width="50" height="50" />
    <Number number={6} width="50" height="50" />
    <Number number={7} width="50" height="50" />
    <Number number={8} width="50" height="50" />
    <Number number={9} width="50" height="50" /> -->
</div>
