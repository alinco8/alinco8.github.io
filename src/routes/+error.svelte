<script>
    import { page } from "$app/state";
    import Button from "$lib/components/button.svelte";
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-4">
    <h1 class="text-4xl">
        {page.status}
        {page.error?.message ?? "Unknown error"}
    </h1>
    <Button variant="link" href="/">Go Home</Button>
</div>
