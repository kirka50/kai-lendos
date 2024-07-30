<script setup lang="ts">
  const colorMode = useColorMode();
  const testSwitch = ref<boolean>();

  const initializeSwitch = (): void  => {
    testSwitch.value = colorMode.preference === 'dark';
  }
  
  onMounted(initializeSwitch)
  const updateSwitch = () => {
    testSwitch.value = !testSwitch.value;
    testSwitch.value ? colorMode.preference = 'dark' : colorMode.preference = 'light';
  }

</script>
// TO-DO Добавить глобальное состояние для выбора темы (Усилить безопастность состояния)
<template>
  <div class="flex justify-between border-b-2 p-5">
    <div class=" font-bold text-xl">
      KaiKane Lending
    </div>
    <div>
      <UiSwitch class="" :checked="testSwitch" @update:checked="updateSwitch"></UiSwitch>
    </div>
  </div>
  <div class="">
    <slot />
  </div>
</template>

<style scoped>

</style>