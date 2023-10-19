<script setup lang="ts">
import { NibiruSmpPost } from "~/utils/directus-model";

const { getDateTime } = useFormattedDatetime();
const { getItemById } = useDirectusItems();
const { locale } = useI18n();

const slug = useRoute().params.slug as string;

const fetchPost = async () => {
  const post = await getItemById<NibiruSmpPost>({
    collection: "nibiru_smp_post",
    id: slug,
    params: {
      fields: [
        "slug",
        "translations.title",
        "translations.summary",
        "translations.article",
        "cover_image.id",
        "author.name",
        "author.avatar.id",
        "date_updated",
        "date_created",
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

  return post;
};

const { data } = await useAsyncData(
  "nibiru_smp_posts_single",
  () => fetchPost(),
  {
    watch: [locale],
  },
);
</script>

<template>
  <main>
    <ContentMainArea with-padding>
      <div v-if="data === null">
        <Loading text-size="xl" infinity-size="lg" />
      </div>
      <div v-else>
        <div>
          <figure>
            <img
              class="rounded-xl"
              :src="useDirectusAsset(data.cover_image.id)"
            />
          </figure>
        </div>
        <div>
          <ContentArticleArea>
            <h1 class="text-white">{{ data.translations[0].title }}</h1>
            <p class="not-prose text-center text-white">
              <PostsAuthorAvatar
                :name="data.author.name"
                :avatar="data.author.avatar.id"
              />
            </p>
            <p class="text-center text-white">
              {{ getDateTime(data.date_created) }}
            </p>
            <ContentMarkdownText
              class="text-white"
              :content="data.translations[0].article"
            />
          </ContentArticleArea>
        </div>
      </div>
    </ContentMainArea>
  </main>
</template>
