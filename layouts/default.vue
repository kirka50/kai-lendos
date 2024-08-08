<script setup lang="ts">
import ThemePicker from "~/components/cs/ThemePicker/ThemePicker.vue";
import {
  NavigationMenu,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "~/components/ui/navigation-menu";

const menuItems = ['CV','Проекты','Приколюхи']
</script>
<!--TODO: Создать остальную разметку, докинуть страниц, шапку, пересмотреть централизацию выбора темы-->
<template>
  <div class="flex justify-between border-b-2 p-5">
    <div class=" font-bold text-xl">
      KaiKane Lending
    </div>
    <NavigationMenu>
      <NavigationMenuList class="flex gap-3">
        <NavigationMenuItem v-for="item in menuItems" :key="item" >
          <NavigationMenuLink as-child>
            <a href="" class="hover:bg-active focus:bg-accent p-2 rounded-lg bg-gray-800">
              {{item}}
            </a>

          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <ThemePicker>
    </ThemePicker>
  </div>
  <div class="">
    <slot />
  </div>
</template>

<style scoped>

</style>