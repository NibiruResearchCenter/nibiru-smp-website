<script setup lang="ts">
import nibiruLogo from '@public/nibiru-logo.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer p-20 pb-32 bg-base-200 text-base-content">
    <div>
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img alt="Nibiru Logo" :src="nibiruLogo" />
        </div>
      </div>
      <p>Nibiru SMP<br />Nibiru Project Presented</p>
    </div>

    <div>
      <span class="footer-title">Nibiru SMP</span>
      <RouterLink class="link link-hover" to="/about">About</RouterLink>
      <RouterLink class="link link-hover" to="/rules">Rules</RouterLink>
      <RouterLink class="link link-hover" to="/status">Status</RouterLink>
      <RouterLink class="link link-hover" to="/blog">Blog</RouterLink>
      <RouterLink class="link link-hover" to="/faq">FAQ</RouterLink>
    </div>
    <div>
      <span class="footer-title">Nibiru Project</span>
      <a href="https://nibiru.live" class="link link-hover">Official Website</a>
      <a href="https://space.bilibili.com/662964798" class="link link-hover">Bilibili</a>
      <a href="https://discord.gg/mirrorfield" class="link link-hover">Discord</a>
      <a href="https://www.youtube.com/@bestliveproject2276" class="link link-hover">Youtube</a>
      <a href="https://twitter.com/Nibiruen" class="link link-hover">Twitter</a>
    </div>
    <div>
      <span class="footer-title">Disclaimer</span>
      <p>Nibiru SMP is a Minecraft server managed by Nibiru Project.</p>
      <p>This is not an official Minecraft product.</p>
      <p>This is not approved by or associated with MOJANG AB or Microsoft Corporation.</p>
      <p>We are using community softwares and official softwares to run this server.</p>
      <p>You need a legit copy of Minecraft before you could apply for the whitelist.</p>
    </div>
  </footer>
</template>
