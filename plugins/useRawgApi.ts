export default defineNuxtPlugin( nuxtApp => {
    const rawgApi = $fetch.create({
        baseURL: useRuntimeConfig().public.rawgApiBaseURL,
        onRequest: ({ options }) => {
            const query = options.params || {};
            query.key = useRuntimeConfig().rawgApiKey;
            options.query = query;
        }
    });

    return {
        provide: {
            rawgApi
        }
    }
});