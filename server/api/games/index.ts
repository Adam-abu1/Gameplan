export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const query = getQuery(event);

    // Forward the request to the external API with your protected key
    return await $fetch(`${config.public.rawgApiBaseURL}/games`, {
        query: {
            ...query,
            key: config.rawgApiKey // Server-only key
        }
    })
})