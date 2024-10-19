<script setup lang="ts">
  import type {TabContent} from "~/components/cs/tabs-form/TabsForm";
  const props = defineProps<TabContent>()
</script>

<template>
  <div class="w-full md:h-460 h-full bg-vbbackground p-5 ">
    <div class="overflow-y-scroll min-h-[250px] max-h-[306px] md:max-h-[340px]">
      <a class="text-vbxl">{{ props.tabContentTitle }}</a>
      <cs-tabs-form-tab-content-text-render class="mt-5"  :text="props.tabContentText"/>
    </div>
    <button class="w-full bg-vbsecondary p-3 text-vbprimary-foreground rounded">Кнопка действия</button>
  </div>
</template>

<style scoped>
</style>