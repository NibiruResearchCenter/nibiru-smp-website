<script setup lang="ts">
const { y } = useWindowScroll();
const maxY = 200;

const factor = () => {
  if (y.value >= maxY) {
    return 1;
  }
  return y.value / maxY;
};

const { getItems } = useDirectusItems();

interface Language {
  language: string;
  native_name: string;
}

const languages = await getItems<Language>({
  collection: "site_language",
  params: {
    fields: ["language", "native_name"],
    filter: {
      language: {
        _in: supportedLanguages,
      },
    },
  },
});
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
        <a class="btn btn-ghost h-auto m-1" href="/">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img alt="Nibiru Logo" src="nibiru-logo.png" />
            </div>
          </div>
          <span class="text-xl normal-case">Nibiru SMP</span>
        </a>
      </div>
      <div class="navbar-center">
        <NavigationMenu />
      </div>
      <div class="navbar-end">
        <div title="Change Language" class="dropdown dropdown-end">
          <div tabindex="0" class="btn btn-ghost normal-case">
            <svg
              class="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path
                d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"
              />
              <path
                d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"
              />
            </svg>

            <svg
              width="12px"
              height="12px"
              class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path
                d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
              />
            </svg>
          </div>
          <div
            class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 w-56 overflow-y-auto shadow"
          >
            <ul class="menu menu-sm gap-1" tabindex="0">
              <span v-for="language in languages" :key="language.language">
                <li>
                  <button
                    :class="{ active: useLanguage() == language.language }"
                    @click="setLanguage(language.language)"
                  >
                    <span
                      class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                    >
                      {{ language.language.split("-")[0].toUpperCase() }}
                    </span>
                    <span>
                      {{ language.native_name }}
                    </span>
                  </button>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
