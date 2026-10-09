<script lang="ts">
    import Counter from "#lib/components/counter.svelte";

    const BIRTH_DAY = new Date("2009-02-07");

    let ageChars = $state(formatAge(0));
    refreshAge();

    $effect(() => {
        let interval: number;
        const timeout = setTimeout(() => {
            refreshAge();

            interval = window.setInterval(() => {
                refreshAge();
            }, 1000);
        }, 1000 - new Date().getMilliseconds());

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    });

    function refreshAge() {
        const now = new Date();
        const diff = now.getTime() - BIRTH_DAY.getTime();

        ageChars = formatAge(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    function formatAge(age: number) {
        return age.toFixed(8).padStart(12, "0");
    }
</script>

Hi, I'm alinco8! <br />

Currently, I'm
<span class="inline-flex items-baseline align-middle">
    {#each ageChars as char, index (index)}
        {#if char === "."}
            <span class="box-content inline-block w-[1ch] text-center">{char}</span>
        {:else}
            <Counter {char} id={index} />
        {/if}
    {/each}
</span>
years old and still learning new things every day.
