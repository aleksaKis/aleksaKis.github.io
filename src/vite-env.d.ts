/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_POSTHOG_KEY: string;
    readonly VITE_PUBLIC_POSTHOG_HOST: string;
    // more env variables...
}

interface ImportMeta {
    readonly VITE_PUBLIC_POSTHOG_KEY: ImportMetaEnv;
    readonly VITE_PUBLIC_POSTHOG_HOST: ImportMetaEnv;
}
