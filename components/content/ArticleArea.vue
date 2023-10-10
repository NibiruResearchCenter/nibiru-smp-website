<script setup lang="ts">
defineProps<{
  content: string | null | undefined;
}>();
</script>

<template>
  <div class="min-h-screen">
    <div class="pt-16" />
    <div class="px-12 py-16 md:px-20 lg:px-40 xl:px-60 2xl:px-72">
      <div class="bg-black bg-opacity-70 rounded-xl p-8 2xl:p-12">
        <article
          class="max-w-none text-base-content prose prose-h1:text-center prose-headings:underline hover:prose-a:text-blue-500 dark:prose-invert md:prose-lg lg:prose-xl"
        >
          <ContentMarkdownText :content="content" />
        </article>
      </div>
    </div>
  </div>
</template>
