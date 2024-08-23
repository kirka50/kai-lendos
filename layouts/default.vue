<script setup lang="ts">
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
  <div class="flex justify-between border-b-2 py-1 px-40">
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
              <NuxtLink :to="item.href" class="hover:bg-active
              focus:bg-accent p-2 hover:bg-accent rounded-2xl border-2
              border-accent" :class="{'border-blue-500': route.meta.title === item.name}">
                {{item.name}}
              </NuxtLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  <CsThemePicker class="flex items-center"/>
  </div>
  <div class="px-96 mt-5">
    <slot />
  </div>
</template>

<style scoped>

</style>