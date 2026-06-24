<script>
    import { page } from "$app/state";
    import Button from "$lib/components/button.svelte";
</script>

<div class="m-auto flex flex-col items-center gap-2">
    <p class="text-8xl">{page.status}</p>
    <p class="text-tx flex items-center gap-4 text-2xl">
        {page.error?.message ?? "Unknown error"}
    </p>
    <a href="/"> <Button class="mt-4">Back to home</Button></a>
</div>
