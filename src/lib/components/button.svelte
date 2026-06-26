<script
    lang="ts"
    generics="U extends 'ghost' | 'primary' | 'link' = 'primary', T extends keyof SvelteHTMLElements = U extends 'link' ? 'a' : 'button'">
    import type { Snippet } from "svelte";
    import type { SvelteHTMLElements } from "svelte/elements";

    import { cva, type VariantProps } from "class-variance-authority";

    const button = cva("p-2 rounded transition-colors not-disabled:cursor-pointer", {
        variants: {
            variant: {
                ghost: "bg-transparent hover:bg-tx/10",
                primary: "bg-tx text-bg hover:bg-tx/90",
                link: "bg-transparent hover:bg-tx/10 hover:underline",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    });

    type PolyMorphicProps<T extends keyof SvelteHTMLElements> = SvelteHTMLElements[T] & {
        as?: T;
    };

    type Props<
        T extends keyof SvelteHTMLElements,
        U extends NonNullable<VariantProps<typeof button>["variant"]>,
    > = VariantProps<typeof button> & {
        variant?: U;
    } & PolyMorphicProps<T> & {
            children?: Snippet;
        };
    let {
        variant,
        class: className,
        children,
        as = (variant === "link" ? "a" : "button") as T,
        ...props
    }: Props<T, U> = $props();
</script>

<svelte:element this={as} class={[button({ variant }), className]} {...props}>
    {@render children?.()}
</svelte:element>
