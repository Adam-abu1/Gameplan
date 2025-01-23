<template>
  <Card class="overflow-hidden game-card w-full h-full flex flex-col">
    <NuxtImg :src=imageUrl :alt=name class="w-full object-cover h-48" loading="lazy" fit="contain"/>
    <CardContent class="p-4">
      <h2 class="text-xl font-semibold mb-2">{{ name }}</h2>
      <p class="text-sm text-gray-600 mb-2">
        <span class="mr-1" v-for="platform in parentPlatforms">{{ platform }}</span>
      </p>
      <div class="flex justify-between text-sm mb-4">
        <span>MetaCritic Score: {{ rating }}/100</span>
        <span>Time to beat: {{ timeToBeat }}h</span>
      </div>
      <div ref="additional-details" class="transition ease-in-out delay-150 duration-400 h-0 invisible">
        <div class=" text-sm flex justify-between mb-2">
          <span>Release Date:</span>
          <span>{{ formattedDate }}</span>
        </div>
        <div class="text-sm flex justify-between">
          <span>Genres:</span>
          <span>"Genres to add"</span>
        </div>
      </div>
      <Button class="mx-auto flex" variant="ghost" @click="toggleDetails">
        {{ showOrHideButtonText }}
        <Icon name="i-material-symbols-keyboard-double-arrow-down-rounded" size="1.1rem"/>
      </Button>
    </CardContent>
    <CardFooter class="bg-gray-100 p-4">
      <div class="flex justify-between w-full">
        <Button class="gap-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                variant="outline">
          <Icon name="i-material-symbols-light-add" size="1.5rem"/>
          Wishlist
        </Button>
        <Button class="gap-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                variant="outline">
          <Icon name="i-material-symbols-light-add" size="1.5rem"/>
          Library
        </Button>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import type {Game} from "@/models/Game";
import { platformMapping } from "~/models/Platform";

const props = defineProps<Game>();

// Function to determine parent platform names
const getParentPlatforms = (platforms, mapping) => {
  const parentPlatforms = new Set(); // Use a Set to ensure unique values

  console.log(platforms)
  platforms.forEach(({ platform }) => {

    const { name } = platform;
    // Find the parent platform
    for (const [parent, children] of Object.entries(mapping)) {
      if (children.platformNames.includes(name)) {
        parentPlatforms.add(parent);
        break;
      }
    }
  });

  return Array.from(parentPlatforms); // Convert Set to an array
};

const parentPlatforms = getParentPlatforms( props.platforms, platformMapping );

const formattedDate = computed(() => new Date(props.releaseDate).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
)

const additionalDetails = useTemplateRef<HTMLElement | null>('additional-details');
const isAdditionalDetailsButtonOpen = ref(false);
const showOrHideButtonText = computed( () => isAdditionalDetailsButtonOpen.value ? "Less Details" : "More Details" );
/**
 * Toggles the more/less details button to show and hide the extra information in the card
 */
const toggleDetails = () => {
  if (additionalDetails.value) {
    isAdditionalDetailsButtonOpen.value = !isAdditionalDetailsButtonOpen.value;

    additionalDetails.value.classList.toggle('invisible');
    additionalDetails.value.classList.toggle('h-0');
    additionalDetails.value.classList.toggle('h-100');
  }
}
</script>
