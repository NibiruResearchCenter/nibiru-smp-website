<script setup lang="ts">
import { NibiruSmpPoi } from "~/utils/directus-model";

const { getItemById } = useDirectusItems();
const { locale } = useI18n();

const slug = useRoute().params.slug as string;

const fetchPoi = async () => {
  const poi = await getItemById<NibiruSmpPoi>({
    collection: "nibiru_smp_poi",
    id: slug,
    params: {
      fields: [
        "slug",
        "translations.name",
        "translations.short_summary",
        "translations.description",
        "x",
        "y",
        "z",
        "cover_image.id",
        "gallery.directus_files_id",
        "authors.minecraft_id_pair_id.*",
      ],
      deep: {
        translations: {
          _filter: {
            languages_code: { _eq: useRealLocaleCode(locale.value) },
          },
        },
      },
    },
  });

  return poi;
};

const { data } = await useAsyncData("nibiru_smp_poi_single", () => fetchPoi(), {
  watch: [locale],
});

const gallery = computed(() => {
  const gallery: { id: number; file_id: string }[] = [];

  if (data.value === null) {
    return gallery;
  }

  let i = 1;
  for (const image of data.value.gallery) {
    gallery.push({
      id: i,
      file_id: image.directus_files_id,
    });
    i++;
  }

  return gallery;
});
</script>

<template>
  <main>
    <ContentMainArea with-padding>
      <div v-if="data === null">
        <Loading text-size="xl" infinity-size="lg" />
      </div>
      <div v-else>
        <div
          v-for="image in gallery"
          :key="image.id"
          class="carousel w-full rounded-2xl"
        >
          <div :id="'slide' + image.id" class="carousel-item relative w-full">
            <img :src="useDirectusAsset(image.file_id)" class="w-full" />
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a
                v-if="image.id !== 1"
                :href="'#slide' + (image.id - 1)"
                class="btn btn-ghost"
              >
                ❮
              </a>
              <a
                v-if="image.id !== gallery.length"
                :href="'#slide' + (image.id + 1)"
                class="btn btn-ghost"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContentMainArea>
  </main>
</template>
