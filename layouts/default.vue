<template>
	<div class="layout">
    <PageHeader />
    <div class="game-cards grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center p-4">
      <GameCard v-for="game in sampleGames"
        :key="game.id"
        :id="game.id"
        :name="game.name"
        :platforms="game.platforms"
        :rating="game.rating"
        :release-date="game.releaseDate"
        :time-to-beat="game.timeToBeat"
      />
    </div>
	</div>
</template>
<script setup lang="ts">
const sampleGames = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    platforms: [{
      id: 2,
      name: "Nintendo Switch"
    }],
    rating: 97,
    timeToBeat: 50,
    releaseDate: "",
    imageUrl: "/placeholder.svg?height=300&width=200"
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    platforms: [
    {
      id: 0,
      name: "PlayStation 4"
    },
    {
      id: 1,
      name: "Xbox One"
    },
    {
      id: 2,
      name: "PC"
    }],
    rating: 97,
    timeToBeat: 60,
    releaseDate: "",
    imageUrl: "/placeholder.svg?height=300&width=200"
  },
  {
    id: 3,
    name: "Hades",
    platforms: [
      {
        id: 2,
        name: "PC"
      },
      {
        id: 1,
        name: "Nintendo Switch"
      },
      {
        id: 3,
        name: "PlayStation 5"
      },
      {
        id: 4,
        name: "Xbox Series X/S"
      }
    ],
    rating: 93,
    timeToBeat: 25,
    releaseDate: "",
    imageUrl: "/placeholder.svg?height=300&width=200"
  },
];
console.log(sampleGames)
</script>