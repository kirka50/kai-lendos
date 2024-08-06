<script setup lang="ts">
import { useThemeModeProvider } from '~/store/themeMode.store';
import { Theme } from '~/store/themeMode.types';

const colorMode = useColorMode();
colorMode.preference = Theme.Dark;
const useThemeMode = useThemeModeProvider();
const { themeState } = storeToRefs(useThemeMode);
const isDarkTheme = computed(() => themeState.value == Theme.Dark);

</script>
// TO-DO Создать остальную разметку, докинуть страниц, шапку, сохранять выбор темы
<template>
  <div class="flex justify-between border-b-2 p-5">
    <div class=" font-bold text-xl">
      KaiKane Lending
    </div>
    <div>
      <UiSwitch class="" :checked="isDarkTheme" @update:checked="useThemeMode.switchThemeMode"></UiSwitch>
    </div>
  </div>
  <div class="">
    <slot />
  </div>
</template>

<style scoped>

</style>