<script setup lang="ts">
defineProps<{
  gallery: { id: number; file_id: string; time: string }[];
}>();

const imageId = ref(1);

const nextImage = () => {
  imageId.value++;
};

const prevImage = () => {
  imageId.value--;
};
</script>

<template>
  <div>
    <div class="relative w-full inline-block">
      <img
        :key="gallery[imageId].file_id"
        :src="useDirectusAsset(gallery[imageId].file_id)"
        class="w-full rounded-2xl"
      />
      <div class="absolute bottom-4 right-8">
        <span class="badge badge-sm uppercase">
          Shot On {{ useFormattedDatetime(gallery[imageId].time) }}
        </span>
      </div>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <button
          :class="
            'btn btn-ghost ' +
            (gallery[imageId].id === 1
              ? 'pointer-events-none cursor-not-allowed'
              : '')
          "
          @click="prevImage"
        >
          ❮
        </button>
        <button
          :class="
            'btn btn-ghost ' +
            (gallery[imageId].id === gallery.length
              ? 'pointer-events-none cursor-not-allowed'
              : '')
          "
          @click="nextImage"
        >
          ❯
        </button>
      </div>
    </div>
  </div>
</template>
