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

    const switchTheme = async (e: MouseEvent) => {
        const callback = () => {
            if (theme === undefined) return;

            shouldAnimate = globalThis.setAppTheme(
                (theme = themes[(themes.indexOf(theme) + 1) % themes.length]),
            );
        };

        if (
            !document.startViewTransition ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            callback();
            return;
        }

        let shouldAnimate = false;
        const transition = document.startViewTransition(callback);

        await transition.ready;

        if (!shouldAnimate) return;

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0% at ${e.clientX}px ${e.clientY}px)`,
                    `circle(150% at ${e.clientX}px ${e.clientY}px)`,
                ],
            },
            {
                duration: 600,
                easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                pseudoElement: "::view-transition-new(root)",
            },
        );
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

<Button variant="ghost" onclick={switchTheme}>
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
