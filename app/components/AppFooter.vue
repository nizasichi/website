<script setup lang="ts">

</script>

<template>
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
      <UButton
        to="https://www.linkedin.com/in/nizasichi/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="Linkedin"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
