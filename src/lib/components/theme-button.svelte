<script lang="ts">
    import type { Component } from "svelte";

    import {
        LoaderCircleIcon,
        MoonIcon,
        SunIcon,
        MonitorIcon,
        type LucideProps,
    } from "@lucide/svelte";
    import { fly } from "svelte/transition";

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

{#snippet themeIcon({
    class: className,
    icon: Icon,
}: {
    class?: string;
    icon: Component<LucideProps>;
})}
    <span
        class="absolute top-0 left-0"
        in:fly={{ y: -10, duration: 200 }}
        out:fly={{ x: 10, duration: 200 }}>
        <Icon class={["size-6", className]} />
    </span>
{/snippet}

<Button intent="ghost" onclick={switchTheme}>
    <div class="relative size-6">
        {#if theme === "light"}
            {@render themeIcon({ icon: SunIcon })}
        {:else if theme === "dark"}
            {@render themeIcon({ icon: MoonIcon })}
        {:else if theme === null}
            {@render themeIcon({ icon: MonitorIcon })}
        {:else}
            {@render themeIcon({ icon: LoaderCircleIcon, class: "animate-spin" })}
        {/if}
    </div>
</Button>
