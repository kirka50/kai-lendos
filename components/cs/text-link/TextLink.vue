<script setup lang="ts">

const props = defineProps(
    {
      link: String
    }
)
</script>

<template>
  <NuxtLink class="text-blue-500 hover:text-cyan-500 dark:hover:text-cyan-500" :to="link">
    <slot></slot>
  </NuxtLink>
</template>