<script lang="ts">
    import { page } from "$app/state";
    import Header from "$lib/components/header.svelte";

    import "./layout.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href="/favicon.ico" />

    <title>alinco8.dev</title>
    <meta name="description" content="Making things" />
    <link rel="canonical" href={page.url.href} />

    <meta property="og:title" content="alinco8.dev" />
    <meta property="og:description" content="Making things" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:image" content="https://alinco8.dev/ogp.webp" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="alinco8.dev" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="alinco8.dev" />
    <meta name="twitter:description" content="Making things" />
    <meta name="twitter:image" content="https://alinco8.dev/ogp.webp" />
</svelte:head>

<div class="bg-bg text-tx flex h-svh w-svw flex-col items-center transition-colors duration-300">
    <Header />
    <main class="mt-2 flex w-full flex-1 flex-col items-center px-4">
        {@render children()}
    </main>
</div>
