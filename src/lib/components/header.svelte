<script lang="ts">
    import { LoaderCircleIcon, MoonIcon } from "@lucide/svelte";
    import { SunIcon } from "@lucide/svelte";
    import { SparklesIcon } from "@lucide/svelte";

    import Button from "./button.svelte";

    const themes = ["light", "dark", null] as const;
    let theme: (typeof themes)[number] | undefined = $state(undefined);

    const switchTheme = () => {
        if (theme === undefined) return;

        globalThis.setAppTheme((theme = themes[(themes.indexOf(theme) + 1) % themes.length]));
    };

    $effect(() => {
        theme = localStorage.getItem("theme") as (typeof themes)[number];
    });
</script>

<header class="flex w-full items-center justify-between px-2">
    <span></span>
    <Button intent="ghost" onclick={switchTheme}>
        {#if theme === "light"}
            <SunIcon class="h-6 w-6" />
        {:else if theme === "dark"}
            <MoonIcon class="h-6 w-6" />
        {:else if theme === null}
            <SparklesIcon class="h-6 w-6" />
        {:else}
            <LoaderCircleIcon class="h-6 w-6 animate-spin" />
        {/if}
    </Button>
</header>
