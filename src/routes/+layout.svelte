<script lang="ts">
    import favicon from "$lib/assets/favicon.png";
    import Header from "$lib/components/header.svelte";

    import "./layout.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div
    class="bg-bg text-tx flex h-svh w-svw flex-col items-center pt-4 transition-colors duration-300">
    <Header />
    <main class="flex w-full flex-1 flex-col items-center px-4">
        {@render children()}
    </main>
</div>
