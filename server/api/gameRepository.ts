import {gamesList} from "~/lib/RAWG/client";

export default defineEventHandler( async (event) => {
    const { data } = await gamesList({
        composable: 'useFetch'
    });

    return data.value.results.map((game) => ({
        id: game.id,
        name: game.name,
        rating: game.metacritic,
        platforms: game.platforms,
        releaseDate: game.released,
        timeToBeat: game.playtime,
        imageUrl: game.background_image
    }))
});