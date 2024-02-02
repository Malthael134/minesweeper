<script>

/** @type {string | null} */
export let text = null;

/** @type {number} */
export let max = 10;

/** @type {number} */
export let value = 5;

/** @type {string} */
export let width = "300px";

/** @type {string} */
export let height = "20px";

</script>


<div
    class="progress"
    style="
    --progress-width: {width};
    --progress-height: {height};
">
    {#if text !== null}
        <span>{text}</span>
    {/if}

    <progress
        class="progress"
        {value}
        {max}
    >5</progress>
</div>

<style>
.progress {
    display: flex;
    flex-direction: row;
    width: var(--progress-width);
    height: var(--progress-height);
}
.progress > span {
    margin-right: 10px;
}
.progress > progress {
    width: 100%;
    height: 100%;
}
</style>