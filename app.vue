<script setup>
useHead({
	htmlAttrs: {
		lang: 'en'
	},
	charset: 'utf-8',
	title: 'Next Play',
	titleTemplate: title => title !== 'Next Play' ? `${ title } . Next Play` : title,
	meta: [
		{ name: 'description', content: 'A TMDB client built with Nuxt Image to show the potential of it ✨' },
		{ property: 'og:image', content: 'https://nextplay.com' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:site', content: '@nuxt_js' },
		{ name: 'twitter:creator', content: '@nuxt_js' },
	],
	link: [
		{
			rel: 'icon',
			type: 'image/webp',
			href: '/next-play.webp',
		},
	]
})
</script>

<template>
	<NuxtPage />
</template>
