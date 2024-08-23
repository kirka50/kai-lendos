<script setup lang="ts">
const colorMode = useColorMode();

const switchColorMode = () => {
  if (colorMode.preference == 'system') {
    colorMode.value == 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark';
    colorSwitch.value = !colorSwitch.value;
  } else {
    colorMode.preference == 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark';
    colorSwitch.value = !colorSwitch.value;
  }
}


const isDarkTheme = () => {
  if (colorMode.preference == 'system') {
    if (colorMode.value == 'dark') return true
  } else if (colorMode.preference == 'dark') return true
  return false
}

const colorSwitch = ref();

onMounted(() => {
  colorSwitch.value = isDarkTheme();
})
</script>

<template>
  <div>
<!--    //{{colorMode.value}} {{colorMode.forced}} {{colorMode.unknown}} {{colorMode.preference}}-->
    <UiSwitch class="" :checked="colorSwitch"  @update:checked="switchColorMode"></UiSwitch>
  </div>
</template>

<style scoped>

</style>