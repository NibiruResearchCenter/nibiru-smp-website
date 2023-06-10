<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { themeChange } from 'theme-change'

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

import mc_1 from '@public/backgrounds/mc-1.webp'
import mc_2 from '@public/backgrounds/mc-2.webp'
import mc_3 from '@public/backgrounds/mc-3.webp'
import mc_4 from '@public/backgrounds/mc-4.webp'
import mc_5 from '@public/backgrounds/mc-5.webp'
import mc_6 from '@public/backgrounds/mc-6.webp'

const images = [mc_1, mc_2, mc_3, mc_4, mc_5, mc_6]
const image = ref(images[0])

onMounted(() => {
  themeChange(false)
  image.value = images[Math.floor(Math.random() * images.length)]
})
</script>

<template>
  <div
    class="bg-blend-overlay bg-cover bg-center bg-base-200 min-h-screen"
    :style="{ 'background-image': 'url(' + image + ')' }"
  >
    <header>
      <NavbarComponent />
    </header>
    <RouterView />
    <FooterComponent />
  </div>
</template>
