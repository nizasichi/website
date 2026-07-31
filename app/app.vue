<script setup>
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

      <UFooter>
        <template #left>
          <p class="text-sm text-muted">
            Niza Sichi  © {{ new Date().getFullYear() }}
          </p>
        </template>

        <template #right>
          <UButton
            to="https://github.com/nizasichi/website"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </template>
      </UFooter>
    </NuxtLayout>
  </UApp>
</template>
