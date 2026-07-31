<script lang="ts">
</script>

<template>
  <UPageHero
    title="Hei! I'm Niza Sichi"
    :links="[{
      label: 'My GitHub',
      to: 'https://github.com/nizasichi',
      target: '_blank',
      icon: 'i-simple-icons-github',
      size: 'xl',
      color: 'neutral',
      variant: 'subtle'
    }, {
      label: 'My Linkedin',
      to: 'https://www.linkedin.com/in/nizasichi/',
      target: '_blank',
      icon: 'i-simple-icons-linkedin',
      size: 'xl',
      color: 'neutral',
      variant: 'subtle'

    }]"
  >
    <template #description>
      Graduate <strong> Software Engineer</strong> with a passion for backend development, <br> distributed systems, cloud infrastructure, and building things that work!
    </template>
  </UPageHero>
</template>
