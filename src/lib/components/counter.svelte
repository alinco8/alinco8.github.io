<script lang="ts">
    import { cubicInOut } from "svelte/easing";
    import { fly } from "svelte/transition";

    type Props = {
        class?: string;
        char: string;
        id: any;
    };
    let { class: className, char, id }: Props = $props();
</script>

<div class="relative box-content inline-block h-[1em] w-[1ch] overflow-clip rounded">
    {#key char}
        <span
            class="absolute inset-0 flex items-center justify-center"
            in:fly={{ y: 100, easing: cubicInOut }}
            out:fly={{ y: -100, easing: cubicInOut }}>
            {char}
        </span>
    {/key}
</div>
