<script setup lang="ts">
  import type {PreviewCardProps} from "./PreviewCard";
  const props = defineProps<PreviewCardProps>()
  const config = useRuntimeConfig()

  const getImageUrl = (image:string): string => {
    console.log(`${config.app.baseURL}portfolio/${image}`);
    return `${config.app.baseURL}portfolio/${image}`

  }
</script>

<template>
  <UiCard class="rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
    <UiCardHeader class="p-0 m-0 h-fit">
      <img :src="getImageUrl(props.image)" alt="1" class="object-cover h-36 md:h-64 lg:h-80" />
    </UiCardHeader>
    <UiCardFooter class="bg-black p-2 justify-center">
      {{props.title}}
    </UiCardFooter>
  </UiCard>
</template>

<style scoped>

</style>