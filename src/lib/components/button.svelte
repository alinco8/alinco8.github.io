<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    import { cva, type VariantProps } from "class-variance-authority";

    const button = cva("p-2 rounded transition-colors", {
        variants: {
            intent: {
                ghost: "bg-transparent hover:bg-tx/10",
                primary: "bg-tx text-bg hover:bg-tx/90 not-disabled:cursor-pointer",
            },
        },
        defaultVariants: {
            intent: "primary",
        },
    });

    type Props = HTMLAttributes<HTMLButtonElement> &
        VariantProps<typeof button> & {
            children?: Snippet;
        };
    let { intent, class: className, children, ...props }: Props = $props();
</script>

<button class={[button({ intent }), className]} {...props}>
    {@render children?.()}
</button>
