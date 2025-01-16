export default abstract class BaseRepository {
    protected baseUrl: string;
    protected apiKey: string;

    constructor() {
        this.baseUrl = 'https://api.rawg.io/api';
        this.apiKey = process.env.NUXT_RAWG_API_KEY;
    }

    protected buildQueryParams(params: Record<string, any> = {}): string {
        const allParams = { ...params, key: this.apiKey };
        return new URLSearchParams(allParams).toString();
    }

    protected async get<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
        const queryParams = this.buildQueryParams(params);
        const url = `${this.baseUrl}${endpoint}?${queryParams}`;

        try {
            const { data, status, error } = await useAsyncData('games', () => {
                return $fetch(url);
            });

            if ( error.value ) {
                throw new Error(`Error fetching ${endpoint}: ${data.value}`);
            }

            return await data.value;
        } catch (error) {
            console.error('Error in fetching');
            throw new Error(error);
        }
    }
}
