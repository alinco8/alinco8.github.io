// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    function setAppTheme(theme: "light" | "dark" | null): void;
}

// oxlint-disable-next-line unicorn/require-module-specifiers -- declareするにはexport{}が必要
export {};
