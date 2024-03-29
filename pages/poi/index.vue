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
      filter: {
        status: {
          _eq: "published",
        },
      },
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
    <Head>
      <Title>Nibiru SMP | {{ $t("pages.poi") }}</Title>
    </Head>

    <ContentMainArea :with-padding="false" class="py-8">
      <ContentPageTitle with-margin-preset :title="$t('title.poi')" />
      <div>
        <div v-if="data === null">
          <h1>Loading...</h1>
        </div>
        <div v-else class="flex flex-wrap justify-center">
          <PoiSummaryCard v-for="poi in data" :key="poi.slug" :poi="poi" />
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
