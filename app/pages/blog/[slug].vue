<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-CH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <UPage v-if="post">
    <ULink
      to="/blog"
      class="text-sm flex items-center gap-1"
    >
      <UIcon name="lucide:chevron-left" />
      Blog
    </ULink>

    <div class="flex flex-col gap-3 mt-8">
      <div class="flex text-xs text-muted items-center justify-center gap-2">
        <span v-if="post.date">{{ formatDate(post.date) }}</span>
        <span v-if="post.date && post.minRead">-</span>
        <span v-if="post.minRead">{{ post.minRead }} MIN READ</span>
      </div>

      <NuxtImg
        v-if="post.image"
        :src="post.image"
        :alt="post.title"
        class="rounded-lg w-full max-w-3xl mx-auto h-[300px] object-cover object-center block"
      />

      <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
        {{ post.title }}
      </h1>
      <p class="text-muted text-center max-w-2xl mx-auto">
        {{ post.description }}
      </p>

      <div class="flex items-center justify-center gap-2 mt-2">
        <UUser
          orientation="vertical"
          color="neutral"
          variant="outline"
          class="justify-center items-center text-center"
          name="Niza Sichi"
          :avatar="{ src: '/cloudy_192x192.png' }"
        />
      </div>
    </div>

    <UPageBody class="max-w-3xl mx-auto">
      <ContentRenderer
        v-if="post.body"
        :value="post"
      />
    </UPageBody>
  </UPage>
</template>
