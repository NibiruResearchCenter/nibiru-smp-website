<script setup lang="ts">
const { getItems } = useDirectusItems();

interface SightFile {
  directus_files_id: string;
}

const fetchSights = async () => {
  const sights = await getItems<SightFile>({
    collection: "nibiru_smp_sights_files",
    params: {
      fields: ["directus_files_id"],
    },
  });

  return sights.map((s) => s.directus_files_id);
};

const images = ref<string[]>([]);
const image = ref<string>("");

onMounted(async () => {
  images.value = await fetchSights();
  image.value = images.value[Math.floor(Math.random() * images.value.length)];
});
</script>

<template>
  <div
    class="bg-blend-overlay bg-cover bg-center bg-base-200 min-h-screen"
    :style="{ 'background-image': 'url(' + useDirectusAsset(image) + ')' }"
  >
    <header>
      <NavigationNavbar />
    </header>
    <slot />
    <Footer />
  </div>
</template>
