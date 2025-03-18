import BaseRepository from "~/lib/RAWG/index";
import type { Game, GamesListData } from "~/models/rawgTypes";
import type {TransformedGame} from "~/models/Game";
import type {$Fetch} from "nitropack";

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

    constructor(private readonly api: $Fetch ) {
        super();
        this.api = api;
    }

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
    async fetchGames(params: GamesListData | undefined = undefined): Promise<TransformedGame[]> {
        try {
            this.validateOrdering(params?.query?.ordering);
            const gamesList = await this.api('/games', params);

            return gamesList.results.map((game: Game) => ({
                id: game.id,
                name: game.name,
                rating: game.metacritic,
                platforms: game.platforms,
                releaseDate: game.released,
                timeToBeat: game.playtime,
                imageUrl: game.background_image
            }));
        } catch (e) {
            throw e;
        }
    };

    /**
     * Fetch details of a specific game by its ID.
     * @param id The unique identifier for the game.
     * @returns The detailed information about the game.
     */
    // async fetchGameDetails(id: string): Promise<GameDetailsResponse> {
    //     return this.get<GameDetailsResponse>(`/games/${id}`);
    // }

    /**
     * Get a list of downloadable content (DLC) for a specific game.
     * @param id The unique identifier for the game.
     * @returns A list of DLCs associated with the game.
     */
    // async fetchGameDLCs(id: string): Promise<FetchGamesResponse> {
    //     return this.get<FetchGamesResponse>(`/games/${id}/additions`);
    // }

    /**
     * Get a list of games that are part of the same series.
     * @param id The unique identifier for the game.
     * @returns A list of games in the same series.
     */
    // async fetchGameSeries(id: string): Promise<FetchGamesResponse> {
    //     return this.get<FetchGamesResponse>(`/games/${id}/game-series`);
    // }

    /**
     * Get the parent games of a specific game.
     * @param id The unique identifier for the game.
     * @returns A list of parent games.
     */
    // async fetchParentGames(id: string): Promise<FetchGamesResponse> {
    //     return this.get<FetchGamesResponse>(`/games/${id}/parent-games`);
    // }

    /**
     * Get links to the stores where the game is available.
     * @param id The unique identifier for the game.
     * @returns A list of store links for the game.
     */
    // async fetchGameStores(id: string): Promise<GameStoreLinksResponse> {
    //     return this.get<GameStoreLinksResponse>(`/games/${id}/stores`);
    // }
}
