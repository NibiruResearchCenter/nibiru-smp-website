<script setup lang="ts">
import pages from "~/assets/pages.json";

const { getItems, getSingletonItem } = useDirectusItems();

const externalLinks = ref<ExternalLink[]>([]);

const fetchExternalLinks = async () => {
  const externalLinks = await getItems<ExternalLink>({
    collection: "nibiru_smp_external_link",
    params: {
      fields: ["name", "url", "icon"],
    },
  });

  return externalLinks;
};

const { locale } = useI18n();

const fetchDisclaimer = async () => {
  const disclaimer = await getItems<DisclaimerTranslation>({
    collection: "nibiru_smp_disclaimer_translations",
    params: {
      filter: {
        languages_code: {
          _eq: useRealLocaleCode(locale.value),
        },
      },
    },
  });

  return disclaimer[0].disclaimer;
};

const { data } = await useAsyncData("disclaimer", () => fetchDisclaimer(), {
  watch: [locale],
});

const icp = ref<IcpPutOn>();

const fetchIcp = async () => {
  const icp = await getSingletonItem<IcpPutOn>({
    collection: "put_on_record",
  });

  return icp;
};

onMounted(async () => {
  icp.value = await fetchIcp();
  externalLinks.value = await fetchExternalLinks();
});
</script>

<template>
  <footer class="footer p-20 pb-32 bg-base-200 text-base-content">
    <div>
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img alt="Nibiru Logo" src="~/assets/images/nibiru-logo.webp" />
        </div>
      </div>
      <p class="text-md">Nibiru SMP</p>
      <p class="text-sm font-sans">
        {{ icp?.name }} <br />
        <a class="link link-hover" href="https://beian.miit.gov.cn/">
          {{ icp?.icp }}
        </a>
      </p>
    </div>

    <div>
      <span class="footer-title">Nibiru SMP</span>
      <span v-for="page in pages" :key="page.key">
        <NuxtLink class="link link-hover" :to="page.path">
          {{ $t(page.key) }}
        </NuxtLink>
      </span>
    </div>
    <div>
      <span class="footer-title">{{ $t("nibiru_project") }}</span>
      <div v-for="e in externalLinks" :key="e.name">
        <span>
          <a :href="e.url" class="link link-hover">
            <div class="flex items-center">
              <object
                :data="useDirectusAsset(e.icon)"
                class="w-4 h-4 mr-1 invert"
                type="image/svg+xml"
              />
              <span>{{ e.name }}</span>
            </div>
          </a>
        </span>
      </div>
    </div>
    <div>
      <span class="footer-title">{{ $t("disclaimer") }}</span>
      <ContentMarkdownText :content="data" />
    </div>
  </footer>
</template>
