<script setup lang="ts">
const { getItems } = useDirectusItems();

interface SightFile {
  directus_files_id: string;
}

const sights = await getItems<SightFile>({
  collection: "nibiru_smp_sights_files",
  params: {
    fields: ["directus_files_id"],
  },
});

const images = sights.map((s) => s.directus_files_id);

const image = ref(images[Math.floor(Math.random() * images.length)]);
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
