<script setup lang="ts">
import { NibiruSmpAbout } from "~/utils/directus-model";

const { getItems } = useDirectusItems();
const { locale } = useI18n();

const fetchAbout = async () => {
  const data = await getItems<NibiruSmpAbout>({
    collection: "nibiru_smp_about",
    params: {
      fields: ["translations.title", "translations.content"],
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
    },
  });

  return data;
};

const { data } = await useAsyncData("nibiru_smp_about", () => fetchAbout(), {
  watch: [locale],
});
</script>

<template>
  <main>
    <Head>
      <Title>Nibiru SMP | {{ $t("pages.about") }}</Title>
    </Head>

    <ContentMainArea with-padding>
      <ContentPageTitle
        class="mx-4 sm:mx-20 md:mx-40 xl:mx-56"
        :with-margin-preset="false"
        :title="$t('title.about')"
      />
      <div v-for="(about, index) in data" :key="index">
        <div
          class="collapse collapse-arrow border border-base-300 bg-base-200 my-4"
        >
          <input type="checkbox" />
          <div class="collapse-title text-xl text-white font-medium">
            {{ about.translations[0].title }}
          </div>
          <div class="collapse-content">
            <div class="prose text-white">
              <ContentMarkdownText :content="about.translations[0].content" />
            </div>
          </div>
        </div>
      </div>
    </ContentMainArea>
  </main>
</template>
