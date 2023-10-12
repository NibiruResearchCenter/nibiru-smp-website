<script setup lang="ts">
defineProps<{
  gallery: { id: number; file_id: string; time: string }[];
}>();
</script>

<template>
  <div class="carousel w-full rounded-2xl">
    <div
      v-for="image in gallery"
      :id="'slide' + image.id"
      :key="image.id"
      class="carousel-item relative w-full"
    >
      <img :src="useDirectusAsset(image.file_id)" class="w-full" />
      <div class="absolute bottom-4 right-8">
        <span class="badge badge-sm uppercase">
          Shot On {{ useFormattedDatetime(image.time) }}
        </span>
      </div>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a
          :href="'#slide' + (image.id - 1)"
          :class="
            'btn btn-ghost ' +
            (image.id === 1 ? 'pointer-events-none cursor-not-allowed' : '')
          "
        >
          ❮
        </a>
        <a
          :href="'#slide' + (image.id + 1)"
          :class="
            'btn btn-ghost ' +
            (image.id === gallery.length
              ? 'pointer-events-none cursor-not-allowed'
              : '')
          "
        >
          ❯
        </a>
      </div>
    </div>
  </div>
</template>
