<script setup lang="ts">
import { NibiruSmpPost } from "~/utils/directus-model";

const { getDateTime } = useFormattedDatetime();

defineProps<{
  post: NibiruSmpPost;
}>();
</script>

<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl m-4">
    <figure>
      <img :src="useDirectusAsset(post.cover_image.id)" alt="cover image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">{{ post.translations[0].title }}</h2>
      <p class="text-white">
        {{ $t("author") + ": " + post.author.name }}
      </p>
      <p>{{ post.translations[0].summary }}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">
          {{ getDateTime(post.date_created) }}
        </div>
        <div>
          <NuxtLink
            class="btn btn-outline btn-xs rounded-full ml-4 mr-1"
            :to="`/posts/` + post.slug"
          >
            Detail
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
