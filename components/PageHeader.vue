<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink href="/" class="text-2xl font-bold">GamePlan</NuxtLink>
      <nav>
        <ul class="flex space-x-4">
<!--          <li><NuxtLink href="/">Home</NuxtLink></li>-->
<!--          <li><NuxtLink href="/wishlist">Wishlist</NuxtLink></li>-->
<!--          <li><NuxtLink href="/library">Library</NuxtLink></li>-->
<!--          <li><Button variant="outline">Search</Button></li>-->
        </ul>
      </nav>
      <input type="checkbox" class="hidden" id="colorMode" v-model="isDark" />
      <label for="colorMode" class="dark:text-white">
        <Icon name="i-material-symbols-dark-mode-outline" size="1.5rem"></Icon>
      </label>
    </div>
  </header>
</template>

<script setup lang="ts">

import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>