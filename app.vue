<script setup>
useHead({
	htmlAttrs: {
		lang: 'en'
	},
	charset: 'utf-8',
	title: 'GamePlan',
	titleTemplate: title => title !== 'GamePlan' ? `${ title } . GamePlan` : title,
	meta: [
		{ name: 'description', content: 'A TMDB client built with Nuxt Image to show the potential of it ✨' },
		{ property: 'og:image', content: 'https://GamePlan.com' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:site', content: '@nuxt_js' },
		{ name: 'twitter:creator', content: '@nuxt_js' },
	],
	link: [
		{
			rel: 'icon',
			type: 'image/webp',
			href: '/Gameplan.webp',
		},
	]
})
</script>

<template>
	<NuxtPage />
</template>
