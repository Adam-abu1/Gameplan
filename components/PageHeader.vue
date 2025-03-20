<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-4 flex gap-4 items-center">
      <NuxtLink href="/" class="text-2xl font-bold mr-auto">GamePlan</NuxtLink>
      <nav>
        <ul class="flex space-x-4">
<!--          <li><NuxtLink href="/">Home</NuxtLink></li>-->
<!--          <li><NuxtLink href="/wishlist">Wishlist</NuxtLink></li>-->
<!--          <li><NuxtLink href="/library">Library</NuxtLink></li>-->
<!--          <li><Button variant="outline">Search</Button></li>-->
        </ul>
      </nav>
      <Dialog>
        <DialogTrigger>
          <Icon name="icons:material-symbols-search-rounded" class="items-center flex" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search for Games (TITLE TO BE CHANGED)</DialogTitle>
            <DialogDescription>
              ENTER YOUR SEARCH TERMS HERE
            </DialogDescription>
          </DialogHeader>

          <Combobox by="label">
            <ComboboxAnchor class="w-full">
              <div class="relative w-full max-w-sm items-center">
                <ComboboxInput class="pl-10" :display-value="(val) => val?.label ?? ''" placeholder="Select framework..." />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
                  <Icon name="icons:material-symbols-search-rounded" class="items-center flex" />
                </span>
              </div>
            </ComboboxAnchor>

            <ComboboxList>
              <ComboboxEmpty>
                No framework found.
              </ComboboxEmpty>

              <ComboboxGroup>
                <ComboboxItem
                    v-for="framework in frameworks"
                    :key="framework.value"
                    :value="framework"
                >
                  {{ framework.label }}

                  <ComboboxItemIndicator>
                    <Icon name="icons:material-symbols-search-rounded" class="items-center flex" />
                  </ComboboxItemIndicator>
                </ComboboxItem>
              </ComboboxGroup>
            </ComboboxList>
          </Combobox>
          <DialogFooter>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <input type="checkbox" class="hidden" id="colorMode" v-model="isDark" />
      <label for="colorMode" class="dark:text-white">
        <Icon name="icons:material-symbols-dark-mode-outline" class="flex items-center" />
      </label>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const isDark = useDark();

const foundGames = reactive([]);
</script>