<script setup lang="ts">
const { getItems, getSingletonItem } = useDirectusItems();

interface ExternalLink {
  name: string;
  url: string;
  icon: string;
}

interface DisclaimerTranslation {
  language_code: string;
  disclaimer: string;
}

interface IcpPutOn {
  name: string;
  icp: string;
}

const language = useLanguage();

const externalLinks = await getItems<ExternalLink>({
  collection: "nibiru_smp_external_link",
  params: {
    fields: ["name", "url", "icon"],
  },
});

const disclaimer = await getItems<DisclaimerTranslation>({
  collection: "nibiru_smp_disclaimer_translations",
  params: {
    filter: {
      languages_code: {
        _eq: language,
      },
    },
  },
});

const icp = await getSingletonItem<IcpPutOn>({
  collection: "put_on_record",
});
</script>

<template>
  <footer class="footer p-20 pb-32 bg-base-200 text-base-content">
    <div>
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img alt="Nibiru Logo" src="nibiru-logo.png" />
        </div>
      </div>
      <p class="text-md">Nibiru SMP</p>
      <p class="text-sm">
        {{ icp.name }} <br />
        <a class="link link-hover" href="https://beian.miit.gov.cn/">
          {{ icp.icp }}
        </a>
      </p>
    </div>

    <div>
      <span class="footer-title">Nibiru SMP</span>
      <NuxtLink class="link link-hover" to="/about">About</NuxtLink>
      <NuxtLink class="link link-hover" to="/rules">Rules</NuxtLink>
      <NuxtLink class="link link-hover" to="/posts">Posts</NuxtLink>
      <NuxtLink class="link link-hover" to="/faq">FAQ</NuxtLink>
    </div>
    <div>
      <span class="footer-title">Nibiru Project</span>
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
      <span class="footer-title">Disclaimer</span>
      <ContentMarkdownText :content="disclaimer[0].disclaimer" />
    </div>
  </footer>
</template>
