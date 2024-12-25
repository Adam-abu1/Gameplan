<template>
  <Card class="overflow-hidden">
    <Image src={game.imageUrl} alt={game.title} width={200} height={300} class="w-full object-cover h-48" />
    <CardContent class="p-4">
      <h2 class="text-xl font-semibold mb-2">{{ name }}</h2>
      <p class="text-sm text-gray-600 mb-2">
        <span v-for="platform in platforms">{{ platform.name }}</span>
      </p>
      <div class="flex justify-between text-sm">
        <span>Rating: {{ rating }}/100</span>
        <span>Time to beat: {{ timeToBeat }}h</span>
      </div>
    </CardContent>
    <CardFooter class="bg-gray-100 p-4">
      <div class="flex justify-between w-full">
        <Button variant="outline">Add to Wishlist</Button>
        <Button variant="outline">Add to Library</Button>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import type { Game } from "@/models/Game";

const props = defineProps<Game>();
</script>