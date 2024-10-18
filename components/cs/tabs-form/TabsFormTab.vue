<script setup lang="ts">
  import type {Tab} from "./TabsForm";

  const props = defineProps<Tab>()
</script>

<template>
  <div :class="`flex flex-col gap-[20px]
  p-5 bg-vbbackground
  ${isSelected ? 'bg-vbforeground text-primary-foreground' : ''} `">
    <a class="text-vblg">
      {{props.title}}
    </a>
    <p class="text-vbsm">
      {{props.subTitle}}
    </p>
  </div>
</template>

<style scoped>

</style>