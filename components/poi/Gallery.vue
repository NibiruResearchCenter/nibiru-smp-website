<script setup lang="ts">
const props = defineProps<{
  gallery: { id: number; file_id: string; time: string }[];
}>();

const imageId = ref(1);

const { getDateOnly } = useFormattedDatetime();

const nextImage = () => {
  if (props.gallery.length === imageId.value) {
    imageId.value = 1;
  } else {
    imageId.value++;
  }
};

const prevImage = () => {
  if (imageId.value === 1) {
    imageId.value = props.gallery.length;
  } else {
    imageId.value--;
  }
};
</script>

<template>
  <div>
    <div class="relative w-full overflow-hidden aspect-video rounded-2xl">
      <div
        class="flex absolute h-full transition-all duration-1000 ease-in-out"
        :style="{ left: `-${(imageId - 1) * 100}%` }"
      >
        <img
          v-for="image in gallery"
          :key="image.id"
          :src="useDirectusAsset(image.file_id)"
          class="w-full"
        />
      </div>

      <div class="absolute bottom-4 right-8">
        <span class="badge badge-sm uppercase">
          Shot On {{ getDateOnly(gallery[imageId - 1].time) }}
        </span>
      </div>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <button class="btn btn-ghost" @click="prevImage">❮</button>
        <button class="btn btn-ghost" @click="nextImage">❯</button>
      </div>
    </div>
  </div>
</template>
