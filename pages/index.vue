<script setup lang="ts">
const sampleGames = [
	{
		id: 1,
		title: "The Legend of Zelda: Breath of the Wild",
		platform: "Nintendo Switch",
		rating: 97,
		timeToBeat: 50,
		imageUrl: "/placeholder.svg?height=300&width=200"
	},
	{
		id: 2,
		title: "Red Dead Redemption 2",
		platform: "PlayStation 4, Xbox One, PC",
		rating: 97,
		timeToBeat: 60,
		imageUrl: "/placeholder.svg?height=300&width=200"
	},
	{
		id: 3,
		title: "Hades",
		platform: "PC, Nintendo Switch, PlayStation 5, Xbox Series X/S",
		rating: 93,
		timeToBeat: 25,
		imageUrl: "/placeholder.svg?height=300&width=200"
	},
];
console.log(sampleGames)
</script>

<template>
	<NuxtLayout />
</template>