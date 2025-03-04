import BaseRepository from "~/lib/RAWG/index";
import type { Game, GameDetails} from "~/models/Game";
import {gamesList} from "~/lib/RAWG/client";

interface FetchGamesParams {
    page?: number;
    page_size?: number;
    search?: string;
    search_precise?: boolean;
    search_exact?: boolean;
    parent_platforms?: string;
    platforms?: string;
    stores?: string;
    developers?: string;
    publishers?: string;
    genres?: string;
    tags?: string;
    creators?: string;
    dates?: string;
    updated?: string;
    platforms_count?: number;
    metacritic?: string;
    exclude_collection?: number;
    exclude_additions?: boolean;
    exclude_parents?: boolean;
    exclude_game_series?: boolean;
    exclude_stores?: string;
    ordering?: string;
}

export class GamesRepository extends BaseRepository {
    private allowedOrdering: string[] = [
        "name",
        "released",
        "added",
        "created",
        "updated",
        "rating",
        "metacritic",
        "-name",
        "-released",
        "-added",
        "-created",
        "-updated",
        "-rating",
        "-metacritic",
    ];

    private validateOrdering(ordering?: string) {
        if (ordering && !this.allowedOrdering.includes(ordering)) {
            throw new Error(`Invalid ordering value: ${ordering}. Allowed values: ${this.allowedOrdering.join(", ")}`);
        }
    }

    /**
     * Fetch a list of games with optional filters.
     * @param params Query parameters for filtering games.
     * @returns A paginated list of games.
     */
    async fetchGames(params: FetchGamesParams = {}): Promise<Game[]> {
        this.validateOrdering(params.ordering);
        try {
            const { data } = await gamesList({
                composable: 'useFetch'
            });
            // console.log(data.value.results);
            return data.value.results.map((game) => ({
                id: game.id,
                name: game.name,
                rating: game.metacritic,
                platforms: game.platforms,
                releaseDate: game.released,
                timeToBeat: game.playtime,
                imageUrl: game.background_image
            }))
        } catch (e) {
            console.log('efds', e);
            throw e;
        }
    };

    /**
     * Fetch details of a specific game by its ID.
     * @param id The unique identifier for the game.
     * @returns The detailed information about the game.
     */
    async fetchGameDetails(id: string): Promise<GameDetailsResponse> {
        return this.get<GameDetailsResponse>(`/games/${id}`);
    }

    /**
     * Get a list of downloadable content (DLC) for a specific game.
     * @param id The unique identifier for the game.
     * @returns A list of DLCs associated with the game.
     */
    async fetchGameDLCs(id: string): Promise<FetchGamesResponse> {
        return this.get<FetchGamesResponse>(`/games/${id}/additions`);
    }

    /**
     * Get a list of games that are part of the same series.
     * @param id The unique identifier for the game.
     * @returns A list of games in the same series.
     */
    async fetchGameSeries(id: string): Promise<FetchGamesResponse> {
        return this.get<FetchGamesResponse>(`/games/${id}/game-series`);
    }

    /**
     * Get the parent games of a specific game.
     * @param id The unique identifier for the game.
     * @returns A list of parent games.
     */
    async fetchParentGames(id: string): Promise<FetchGamesResponse> {
        return this.get<FetchGamesResponse>(`/games/${id}/parent-games`);
    }

    /**
     * Get links to the stores where the game is available.
     * @param id The unique identifier for the game.
     * @returns A list of store links for the game.
     */
    async fetchGameStores(id: string): Promise<GameStoreLinksResponse> {
        return this.get<GameStoreLinksResponse>(`/games/${id}/stores`);
    }
}
