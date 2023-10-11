<script setup lang="ts">
import { NibiruSmpPoi } from "~/utils/directus-model";

defineProps<{
  poi: NibiruSmpPoi;
}>();
</script>

<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl m-4">
    <figure>
      <img :src="useDirectusAsset(poi.cover_image.id)" alt="cover image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ poi.translations[0].name }}</h2>
      <p>{{ poi.translations[0].short_summary }}</p>
      <div class="card-actions justify-end">
        <div>
          <div class="tooltip" data-tip="Minecraft Coordinate (X, Y, Z)">
            <div class="badge badge-outline">
              {{ poi.x }}, {{ poi.y }}, {{ poi.z }}
            </div>
          </div>
          <NuxtLink
            class="btn btn-outline btn-sm ml-4 mr-1"
            :to="`/poi/` + poi.slug"
          >
            Detail
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
