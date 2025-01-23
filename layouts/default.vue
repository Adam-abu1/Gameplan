<template>
	<div class="layout dark:bg-gray-700 transition-colors">
    <PageHeader />
    <div class="game-cards grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center p-4">
      <GameCard v-for="game in gameArray"
        :key="game.id"
        :id="game.id"
        :name="game.name"
        :platforms="game.platforms"
        :rating="game.rating"
        :release-date="game.releaseDate"
        :time-to-beat="game.timeToBeat"
        :imageUrl="game.imageUrl"
      />
    </div>
	</div>
</template>
<script setup lang="ts" async>
import { GamesRepository } from "~/lib/RAWG/gameRepository";

const gameRepo = new GamesRepository();
const gameArray = await gameRepo.fetchGames();
</script>