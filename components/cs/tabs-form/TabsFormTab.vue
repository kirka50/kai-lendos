<script setup lang="ts">
  import type {Tab} from "./TabsForm";

  const props = defineProps<Tab>()
</script>

<template>
  <div :class="`flex flex-col gap-[20px]
  p-5 bg-vbbackground cursor-pointer
  ${isSelected ? 'bg-vbforeground text-primary-foreground' : ''} `">
    <div class="flex w-full justify-between">
      <a class="text-vblg">
        {{ props.title }}
      </a>
      <div :class="`h-[27px] w-[27px] justify-center items-center flex align-middle rounded md:hidden ${!isSelected ? 'bg-vbforeground' : 'bg-vbbackground'}`">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_346_4321)">
            <path d="M8 5L13 9.5L8 14" :stroke="`${isSelected ? '#0078EE' : '#FFFFFF'}`" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_346_4321">
              <rect width="19" height="19" fill="white" transform="matrix(0 1 -1 0 19 0)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <p class="text-vbsm md:w-5/6">
      {{props.subTitle}}
    </p>
  </div>
</template>

<style scoped>

</style>