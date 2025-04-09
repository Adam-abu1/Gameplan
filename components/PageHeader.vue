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
      <SearchDialog
      :open="openDialog"
      />

      <input type="checkbox" class="hidden" id="colorMode" v-model="isDark" />
      <label for="colorMode" class="dark:text-white">
        <Icon name="icons:material-symbols-dark-mode-outline" class="flex items-center" />
      </label>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

const openDialog = ref(false);
const isDark = useDark();

</script>