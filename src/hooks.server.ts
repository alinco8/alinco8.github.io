import type { Handle } from "@sveltejs/kit/hooks";

// src/hooks.server.ts
import themeSource from "#lib/theme.js?raw";
import { rolldown } from "rolldown";

const virtualModuleId = "virtual:theme";
const resolvedVirtualModuleId = "\0" + virtualModuleId;

const bundle = await rolldown({
    input: virtualModuleId,
    plugins: [
        {
            name: "virtual-theme",
            resolveId: (id) => (id === virtualModuleId ? resolvedVirtualModuleId : null),
            load: (id) => (id === resolvedVirtualModuleId ? themeSource : null),
        },
    ],
});

const { output } = await bundle.generate({ format: "iife", minify: true });
const themeScript = output[0].code;

export const handle: Handle = async ({ event, resolve }) =>
    resolve(event, {
        transformPageChunk: ({ html }) =>
            html.replace("%theme.inline%", `<script>${themeScript}</script>`),
    });
