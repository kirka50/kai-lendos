<script setup lang="ts">
import ThemePicker from "~/components/cs/ThemePicker/ThemePicker.vue";
import {
  NavigationMenu,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "~/components/ui/navigation-menu";

const route = useRoute();
console.log(route.meta.title)

const menuItems = [{name: 'CV', href: '/cv'},{name: 'Проекты', href: '/projects'},{name: 'Приколюхи', href: '/other'}]
</script>
<!--TODO: Создать остальную разметку, докинуть страниц, шапку, пересмотреть централизацию выбора темы-->
<template>
  <div class="flex justify-between border-b-2 p-1">
    <div class="flex justify-between gap-10">
    <div class=" font-bold text-xl hover:bg-accent p-2 rounded-2xl">
      <NuxtLink to="/" :class="{'text-blue-500': route.meta.title == 'KaiKane Lendos'}">
        KaiKane Lending
      </NuxtLink>
    </div>
      <NavigationMenu>
        <NavigationMenuList class="flex gap-3">
          <NavigationMenuItem v-for="item in menuItems" :key="item.href" >
            <NavigationMenuLink as-child>
              <a :href="item.href" class="hover:bg-active
              focus:bg-accent p-2 hover:bg-accent rounded-2xl border-2
              border-accent" :class="{'border-blue-500': route.meta.title === item.name}">
                {{item.name}}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  <theme-picker class="flex items-center"/>
  </div>
  <div class="">
    <slot />
  </div>
</template>

<style scoped>

</style>