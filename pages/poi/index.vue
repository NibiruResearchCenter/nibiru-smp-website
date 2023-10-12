<script setup lang="ts">
const { getItems } = useDirectusItems();
const { locale } = useI18n();

const page = ref<number>(1);
const maxPage = ref<number>(1);

const fetchPois = async () => {
  const pois = await getItems<NibiruSmpPoi>({
    collection: "nibiru_smp_poi",
    params: {
      fields: [
        "slug",
        "translations.name",
        "translations.short_summary",
        "x",
        "y",
        "z",
        "cover_image.id",
      ],
      deep: {
        translations: {
          _filter: {
            languages_code: { _eq: useRealLocaleCode(locale.value) },
          },
        },
      },
      limit: 30 * page.value,
    },
  });

  return pois;
};

const { data } = await useAsyncData("nibiru_smp_poi", () => fetchPois(), {
  watch: [page, locale],
});

const disableLeft = computed(() => page.value === 1);
const disableRight = computed(() => page.value === maxPage.value);
const enumeratePages = computed(() => {
  const pages = [];
  for (let i = 1; i <= maxPage.value; i++) {
    pages.push(i);
  }
  return pages;
});

const nextPage = () => {
  if (page >= maxPage) {
    return;
  }

  page.value++;
};

const prevPage = () => {
  if (page.value === 0) {
    return;
  }

  page.value--;
};
</script>

<template>
  <main>
    <ContentMainArea :with-padding="false" class="py-8">
      <div
        class="text-center rounded-md text-white bg-base-300 bg-opacity-80 py-4 my-8 mx-24 sm:mx-48 md:mx-64 xl:mx-96 text-2xl"
      >
        <h1>{{ $t("poi.title") }}</h1>
      </div>
      <div>
        <div v-if="data === null">
          <h1>Loading...</h1>
        </div>
        <div
          v-for="poi in data"
          v-else
          :key="poi.slug"
          class="flex flex-wrap justify-center"
        >
          <PoiSummaryCard :poi="poi" />
        </div>
      </div>
      <div class="flex justify-center">
        <div class="join bg-base-300">
          <button
            class="join-item btn btn-primary"
            :disabled="disableLeft"
            @click="prevPage()"
          >
            &lt;
          </button>
          <select
            v-for="p in enumeratePages"
            :key="p"
            className="select w-24 max-w-xs text-center"
          >
            <option :selected="p === page">{{ p }}</option>
          </select>
          <button
            class="join-item btn btn-primary"
            :disabled="disableRight"
            @click="nextPage()"
          >
            &gt;
          </button>
        </div>
      </div>
    </ContentMainArea>
  </main>
</template>
