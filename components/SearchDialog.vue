<script setup lang="ts">

interface SearchDialogProps {
  open: boolean
}

const props = defineProps<SearchDialogProps>();

const query = ref("");
const searchTermDebounced = refDebounced( query, 300 );
const results = ref([]);
const loading = ref(false)
const router = useRouter()

const { data: searchResults, status } = await useFetch( '/api/games', {
  params: {
    query: { search: searchTermDebounced },
  },
  lazy: true
});

const results2 = computed( () => searchResults.map([{
  id: searchResults
}])

// Mock search function - in a real app, this would call your API
const searchGames = async () => {
  loading.value = true;
  const gamesRequest = await $fetch('api/games', { query: {
    search: query.value,
    ordering: "-metacritic"
  } } );
  // Simulate API call with timeout
  setTimeout(() => {
    // Mock data - in a real app, this would come from your API

    results.value = gamesRequest.results;
    loading.value = false;

  }, 500);


  console.log(results.value);
}

const handleSelect = (gameId: number) => {
  // Navigate to game details page
  router.push(`/games/${gameId}`)
  onOpenChange(false)
}

</script>
<template>
  <Dialog>
    <DialogTrigger>
      <Icon name="icons:material-symbols-search-rounded" class="items-center flex"/>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[600px] p-0">
      <DialogHeader>
        <DialogTitle>Search for Games (TITLE TO BE CHANGED)</DialogTitle>
        <DialogDescription>
          ENTER YOUR SEARCH TERMS HERE
        </DialogDescription>
      </DialogHeader>
      <Command class="rounded-lg border shadow-md">
        <CommandInput
            placeholder="Search games..."
            v-model="query"
            @update:modelValue="searchGames"
            class="h-12"
        />
        <CommandList>
          <CommandEmpty>
            <div v-if="loading" class="py-6 text-center">

              <p class="text-sm text-muted-foreground mt-2 flex justify-center gap-2">
                Searching games...
                <Icon name="i-svg-spinners-180-ring" class="items-center flex"/>
              </p>
            </div>

            <p v-else class="py-6 text-center text-sm">No games found.</p>
          </CommandEmpty>
          <CommandGroup heading="Games">
            <CommandItem :value="game.title" v-for="game in results" :key="game.id" @select="handleSelect(game.id)"
                         class="py-2">
              <div class="flex items-center gap-2">
                <NuxtImg
                    :src=" game.background_image || '/placeholder.svg'"
                    :alt="game.name"
                    width="80"
                    height="80"
                    class="rounded object-cover"
                />
                <div>
                  <p class="font-medium">{{ game.name }}</p>
                  <p class="text-sm text-muted-foreground">{{ game.platforms }}</p>
                </div>
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <DialogFooter>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>