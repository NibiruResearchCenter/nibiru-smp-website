<script setup lang="ts">
const { getItems } = useDirectusItems();
const { locale } = useI18n();

const fetchAbout = async () => {
  const data = await getItems<AboutTranslation>({
    collection: "nibiru_smp_about_translations",
    params: {
      filter: {
        languages_code: useRealLocaleCode(locale.value),
      },
    },
  });

  if (data.length === 0) {
    return undefined;
  }

  return data[0].content;
};

const { data } = await useAsyncData(
  "nibiru_smp_about_translations",
  () => fetchAbout(),
  {
    watch: [locale],
  },
);
</script>

<template>
  <main>
    <ContentArticleArea>
      <ContentMarkdownText :content="data" />
    </ContentArticleArea>
  </main>
</template>
