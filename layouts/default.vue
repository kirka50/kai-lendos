<script setup lang="ts">

import ThemePicker from "~/components/cs/ThemePicker/ThemePicker.vue";
</script>
<!--TODO: Создать остальную разметку, докинуть страниц, шапку, пересмотреть централизацию выбора темы-->
<template>
  <div class="flex justify-between border-b-2 p-5">
    <div class=" font-bold text-xl">
      KaiKane Lending
    </div>
    <ThemePicker>

    </ThemePicker>
  </div>
  <div class="">
    <slot />
  </div>
</template>

<style scoped>

</style>