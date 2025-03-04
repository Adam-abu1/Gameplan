import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'https://api.rawg.io/docs/?format=openapi',
    output: './lib/RAWG/client',
    plugins: [{
        name: '@hey-api/client-nuxt',
        runtimeConfigPath: './lib/RAWG/clientConfig',
    }],
});