// TODO: Build out repository layer for RAWG API

import type { Game } from "@/models/Game";

export const fetchGames = async (query: string): Promise<Game[]> => {
    // TODO: Change request format
    const response = await axios.get('https://api.rawg.io/api/games', { params: { search: query } });

    // TypeScript validates that the mapped object conforms to the Game interface
    return response.data.results.map((game: object): Game => ({
        id: game.id, // TypeScript ensures this is a number
        name: game.name, // Ensures this is a string
        metacritic: game.metacritic || undefined, // Optional number
        platforms: game.platforms.map((p: any) => p.platform.name), // Array of strings
        releaseDate: game.released, // Ensures this is a string
    }));
};