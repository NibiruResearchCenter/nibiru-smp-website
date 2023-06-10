<script setup lang="ts">
import NavigationMenuComponent from './NavigationMenuComponent.vue'

import { useWindowScroll } from '@vueuse/core'

import nibiruLogo from '@public/nibiru-logo.png'

const { y } = useWindowScroll()
const maxY = 200

const factor = () => {
  if (y.value >= maxY) {
    return 1
  }
  return y.value / maxY
}
</script>

<template>
  <div
    class="top-0 fixed z-30 w-full flex justify-center"
    :style="{
      'background-color': 'hsl(var(--b2) / ' + factor() + ')'
    }"
  >
    <nav class="navbar">
      <div class="navbar-start">
        <a class="btn btn-ghost h-auto m-1" href="/">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img alt="Nibiru Logo" :src="nibiruLogo" />
            </div>
          </div>
          <span class="text-xl normal-case">Nibiru SMP</span>
        </a>
      </div>
      <div class="navbar-center">
        <NavigationMenuComponent />
      </div>
      <div class="navbar-end"></div>
    </nav>
  </div>
</template>
