<script setup lang="ts">
const { y } = useWindowScroll();
const maxY = 200;

const factor = () => {
  if (y.value >= maxY) {
    return 1;
  }
  return y.value / maxY;
};
</script>

<template>
  <div
    class="top-0 fixed z-30 w-full flex justify-center"
    :style="{
      'background-color': 'hsl(var(--b2) / ' + factor() + ')',
    }"
  >
    <nav class="navbar">
      <div class="navbar-start">
        <NavigationNavbarLogo />
      </div>
      <div class="navbar-center">
        <NavigationNavbarMenu />
      </div>
      <div class="navbar-end">
        <SelectorLanguage />
      </div>
    </nav>
  </div>
</template>
