<script setup lang="ts">
import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import customConfig from "~/custom-config";

const route = useRoute();
const viewport = await useViewport();
console.log(route.meta.title)

useSeoMeta(
    {
      title: "KaiLendos",
      ogTitle: "KaiLendos",
      description: 'Мой лендин сайт, тут моё резюме и всякая всячина',
      ogDescription: 'Мой лендин сайт, тут моё резюме и всякая всячина',
      ogImage: '@assets/cv/person_image.jpg',
      author: 'KaiKane',
      robots: 'index, follow',

    }
)

const menuItems = [{name: 'CV', href: customConfig.BASE_URL + 'cv'},{name: 'Проекты',
  href: customConfig.BASE_URL +  'projects'},{name: 'Приколюхи', href: customConfig.BASE_URL +  'other'}]
</script>
<template>
  <div class="flex justify-between border-b-2 py-1 lg:px-40 xl:px-56 md:px-10 sm:px-1">
    <div class="flex justify-between gap-10">
    <div v-if="viewport.isGreaterThan('xs')" class=" font-bold text-xl hover:bg-accent p-2 rounded-2xl">
      <NuxtLink  to="/" :class="{'text-blue-500': route.meta.title == 'KaiKane Lendos'}">
        KaiKane Lending
      </NuxtLink>
    </div>
      <NavigationMenu>
        <NavigationMenuList class="flex gap-3"  v-if="viewport.isGreaterThan('xs')">
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
        <NavigationMenuList>
          <NavigationMenuItem v-if="!viewport.isGreaterThan('xs')">
            <NavigationMenuTrigger>KaiKane Lendos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="flex p-6 gap-3">
                <li class="row-auto" v-for="item in menuItems" :key="item.href">
                  <NavigationMenuLink as-child>
                    <a :href="item.href" class="hover:bg-active
              focus:bg-accent p-2 hover:bg-accent rounded-2xl border-2
              border-accent" :class="{'text-blue-500': route.meta.title === item.name}">
                      {{ item.name }}
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  <CsThemePicker v-if="viewport.isGreaterThan('xs')" class="flex items-center"/>
  </div>
  <div class="xl:px-[16rem] lg:px-44 md:px-32 sm:px-2 px-1 mt-5">
    <slot />
  </div>
  <footer>
  </footer>
</template>

<style scoped>

</style>