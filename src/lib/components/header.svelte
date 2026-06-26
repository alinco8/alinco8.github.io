<script lang="ts">
    import { siGithub, siModrinth, siCurseforge } from "simple-icons";

    import Button from "./button.svelte";
    import ThemeButton from "./theme-button.svelte";

    const links = [
        {
            label: "CurseForge",
            icon: siCurseforge,
            href: "https://www.curseforge.com/members/alinco8/projects",
            class: "text-or-2 hover:text-gr-1",
        },
        {
            label: "Modrinth",
            icon: siModrinth,
            href: "https://modrinth.com/user/alinco8",
            class: "text-gr-2 hover:text-or-1",
        },
        {
            label: "GitHub",
            icon: siGithub,
            href: "https://github.com/alinco8",
            class: "text-tx-2 hover:text-tx-1",
        },
    ];
</script>

<header class="flex w-full items-center justify-between p-2">
    <Button translate="no" href="/" variant="link">alinco8</Button>
    <div class="flex items-center gap-2">
        {#each links as link}
            <Button
                variant="link"
                href={link.href}
                class={link.class}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}>
                <svg class="size-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d={link.icon.path} />
                </svg>
            </Button>
        {/each}
    </div>
    <ThemeButton />
</header>
