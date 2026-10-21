<script setup lang="ts">
// O logo fica em public/ para ter um link direto e estável (usado no logotipo do tenant Soset).
const logo = `${useRuntimeConfig().app.baseURL}logo-soset.png`
</script>

<template>
  <main class="page">
    <img :src="logo" alt="Soset" class="logo">
    <p class="tagline">Gestão para a indústria gráfica</p>
  </main>
</template>

<style>
html, body { margin: 0; background: #fff; color: #1e293b; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
.page { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem; padding: 0 16px; box-sizing: border-box; text-align: center; }
.logo { width: min(480px, 100%); height: auto; }
.tagline { margin: 0; font-size: 1.125rem; color: #475569; }
</style>
