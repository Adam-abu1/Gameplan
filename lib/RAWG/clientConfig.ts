import type { CreateClientConfig } from './client/client.gen';

export const createClientConfig: CreateClientConfig = (config) => ({
    ...config,
    composable: 'useFetch',
    baseUrl: 'https://api.rawg.io/api'
});