<script setup lang="ts">
  import type {TabsFormProps} from "./TabsForm";
  const selectedTab = ref<number>(0)
  const selectedContent = computed(
      () => {
        return props.tabsFormContent[selectedTab.value]?.tabContent;
      }
  )
  const props = defineProps<TabsFormProps>()
</script>

<template>
  <div class="flex px-2.5 flex-col mx-auto md:flex-row md:max-h-460 gap-11 w-full">
    <div class="flex overflow-auto h-full md:w-1/2 md:max-h-[460px] flex-col gap-y-[20px]">
      <csTabsFormTab v-for="(tab, index) in props.tabsFormContent" :key="tab.title"
                     :tab-content="tab.tabContent"
                     :title="tab.title"
                     :sub-title="tab.subTitle"
                     :is-selected="selectedTab === index"
                     @click="selectedTab = index"

      />
    </div>
    <div class="md:max-h-[460px] md:w-1/2">
      <lazy-cs-tabs-form-tab-content v-bind="selectedContent" />
    </div>
  </div>
</template>

<style scoped>

</style>