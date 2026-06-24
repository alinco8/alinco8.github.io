<script lang="ts">
    let timerId = $state(0);
    let eyeElement: HTMLSpanElement | null = null;

    const blink = () => {
        eyeElement?.animate(
            [{ transform: "scaleX(1)" }, { transform: "scaleX(0.1)" }, { transform: "scaleX(1)" }],
            {
                duration: 100,
                easing: "ease-in-out",
            },
        );
    };

    $effect(() => {
        timerId = setInterval(blink, 5000);

        return () => clearInterval(timerId);
    });
</script>

<h1 class="m-auto text-8xl font-bold">
    <p class="flex">
        <span bind:this={eyeElement} class="origin-[75%]">:</span>
        <span>P</span>
    </p>
</h1>
