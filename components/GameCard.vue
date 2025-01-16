<template>
  <Card class="overflow-hidden game-card w-full h-full flex flex-col">
    <NuxtImg :src=imageUrl :alt=name class="w-full object-cover h-48" loading="lazy" fit="contain"/>
    <CardContent class="p-4">
      <h2 class="text-xl font-semibold mb-2">{{ name }}</h2>
      <p class="text-sm text-gray-600 mb-2">
        <span v-for="platform in platforms">{{ platform.name }}</span>
      </p>
      <div class="flex justify-between text-sm mb-4">
        <span>Rating: {{ rating }}/100</span>
        <span>Time to beat: {{ timeToBeat }}h</span>
      </div>
      <div ref="additional-details" class="transition ease-in-out delay-150 duration-400 h-0 invisible">
        <div class=" text-sm flex justify-between mb-2">
          <span>Release Date:</span>
          <span>{{ releaseDate }}</span>
        </div>
        <div class="text-sm flex justify-between">
          <span>Genres:</span>
          <span>"Genres to add"</span>
        </div>
      </div>
      <Button class="mx-auto flex" variant="ghost" @click="openDetails">
        More Details
        <Icon name="i-material-symbols-keyboard-double-arrow-down-rounded" size="1.1rem" />
      </Button>
    </CardContent>
    <CardFooter class="bg-gray-100 p-4">
      <div class="flex justify-between w-full">
        <Button class="gap-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" variant="outline">
          <Icon name="i-material-symbols-light-add" size="1.5rem"/>
          Wishlist
        </Button>
        <Button class="gap-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" variant="outline">
          <Icon name="i-material-symbols-light-add"  size="1.5rem" />
          Library
        </Button>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import type { Game } from "@/models/Game";

const props = defineProps<Game>();
const additionalDetails = useTemplateRef<HTMLElement | null>('additional-details');


const openDetails = () => {
  if ( additionalDetails.value ) {
    additionalDetails.value.classList.add('h-100')
    additionalDetails.value.classList.remove('h-0', 'invisible');
  }
}
</script>
