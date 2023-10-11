<template>
  <div>
    <ContentMainArea with-padding>
      <div class="bg-black bg-opacity-70 rounded-xl p-8 2xl:p-12">
        <article
          class="max-w-none text-base-content prose prose-h1:text-center prose-headings:underline hover:prose-a:text-blue-500 dark:prose-invert md:prose-lg lg:prose-xl"
        >
          <slot />
        </article>
      </div>
    </ContentMainArea>
  </div>
</template>
