<script>
    /* Import Bomb solid */
    import src from "$lib/assets/bomb-solid.svg";
    export let width = "50px";
    export let height = "50px";
</script>

<img
    style="
        --width: {width};
        --height: {height};
    "
    {src}
    alt="bomb"
/>

<style>
    img {
        width: var(--width);
        height: var(--height);
    }
</style>
