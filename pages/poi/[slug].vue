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
        "date_created",
        "date_updated",
        "translations.name",
        "translations.short_summary",
        "translations.description",
        "translations.tags",
        "x",
        "y",
        "z",
        "cover_image.id",
        "gallery.directus_files_id.id",
        "gallery.directus_files_id.uploaded_on",
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
  const gallery: { id: number; file_id: string; time: string }[] = [];

  if (data.value === null) {
    return gallery;
  }

  let i = 1;
  for (const image of data.value.gallery) {
    gallery.push({
      id: i,
      file_id: image.directus_files_id.id,
      time: image.directus_files_id.uploaded_on,
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
        <PoiGallery :gallery="gallery" />
        <div class="pt-4">
          <div class="lg:grid lg:grid-flow-row lg:grid-cols-4">
            <div
              class="col-span-3 bg-base-300 bg-opacity-90 p-8 my-4 rounded-2xl"
            >
              <h1 class="text-3xl font-bold text-white mb-4">
                POI: {{ data.translations[0].name }}
              </h1>
              <article>
                <ContentMarkdownText
                  class="prose md:prose-md lg:prose-lg text-white"
                  :content="data.translations[0].description"
                />
              </article>
            </div>
            <div class="bg-base-300 bg-opacity-80 p-4 mx-2 my-4 rounded-2xl">
              <div class="mx-1 my-3">
                <h1 class="text-white text-xl font-bold">
                  {{ $t("authors") }}
                </h1>
                <div
                  v-for="author in data.authors"
                  :key="author.minecraft_id_pair_id.username"
                  class="my-2 text-slate-100"
                >
                  <PoiMinecraftAvatar
                    :username="author.minecraft_id_pair_id.username"
                    :uuid="author.minecraft_id_pair_id.uuid"
                  />
                </div>
              </div>
              <div class="m-1 my-3">
                <h1 class="text-white text-xl font-bold">
                  {{ $t("position") }}
                </h1>
                <span class="badge badge-outline my-1 text-slate-200">
                  {{ data.x }}, {{ data.y }}, {{ data.z }}
                </span>
              </div>
              <div class="m-1 my-3">
                <h1 class="text-white text-xl font-bold">
                  {{ $t("created_at") }}
                </h1>
                <span class="badge badge-outline my-1 text-slate-200">
                  {{ useFormattedDatetime(data.date_created) }}
                </span>
              </div>
              <div class="m-1 my-3">
                <h1 class="text-white text-xl font-bold">
                  {{ $t("updated_at") }}
                </h1>
                <span class="badge badge-outline my-1 text-slate-200">
                  {{ useFormattedDatetime(data.date_created) }}
                </span>
              </div>
              <div class="m-1 my-3">
                <h1 class="text-white text-xl font-bold my-2">Tags</h1>
                <div class="flex flex-wrap">
                  <span
                    v-for="tag in data.translations[0].tags"
                    :key="tag"
                    class="badge badge-outline m-1 text-slate-200"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentMainArea>
  </main>
</template>
