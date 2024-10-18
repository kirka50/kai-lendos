<script setup lang="ts">
  import type {TabsFormProps} from "./TabsForm";
  const selectedTab = ref<number | null>(0)
  const selectedContent = computed(
      () => {
        return props.tabsFormContent[selectedTab.value]?.tabContent;
      }
  )
  const props = defineProps<TabsFormProps>()
</script>

<template>
  <div class="flex gap-11 ">
    <div class="w-1/2 flex flex-col gap-y-[20px]">
      <csTabsFormTab v-for="(tab, index) in props.tabsFormContent" :key="tab.title"
                     :tab-content="tab.tabContent"
                     :title="tab.title"
                     :sub-title="tab.subTitle"
                     :is-selected="selectedTab === index"
                     @click="selectedTab = index"

      />
    </div>
    <div>
      Kon {{selectedContent}}
    </div>
  </div>
</template>

<style scoped>

</style>