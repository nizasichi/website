<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navlinks: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog', disabled: false },
  { label: 'Projects', to: '/projects', disabled: true },
  { label: 'About', to: '/about', disabled: true }
]
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="navlinks"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
