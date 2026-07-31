<script setup>
import AppFooter from './components/AppFooter.vue'

const title = 'Niza Sichi - Software Engineer'
const description = 'Portfolio and personal site of Niza, a software engineer. Projects, writing, and ways to get in touch.'

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'public/cloudy_512x512.png',
  twitterCard: 'summary'
})
</script>

<template>
  <UApp>
    <AppHeader />
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
      <USeparator />

      <AppFooter />
    </NuxtLayout>
  </UApp>
</template>
