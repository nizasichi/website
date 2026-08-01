<script setup lang="ts">
import type { UserProps } from '@nuxt/ui'

// Get all the blogs data
const { data: blogs } = await useAsyncData(`all-blogs`,
  () => {
    return queryCollection('blog').order('date', 'DESC').all()
  })
</script>

<template>
  <UPage>
    <UPageHero
      title="Latest Blogs"
      description="I write about whatever comes up on my mind! It could be CS, Software Engineering, Personal Stories, Ideas etc"
    />
    <UPageSection>
      <UBlogPosts orientation="vertical">
        <UBlogPost
          v-for="(blog, index) in blogs"
          :key="blog.path"
          v-bind="blog"
          variant="naked"
          :to="blog.path"
          orientation="horizontal"
          :authors="blog.authors as UserProps[]"
          :ui="{
            root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
            image: 'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
            header: index % 2 === 0 ? 'sm:-rotate-1 overflow-visible' : 'sm:rotate-1 overflow-visible'
          }"
        />
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
