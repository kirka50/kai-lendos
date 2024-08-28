<script setup lang="ts">

definePageMeta({
  title: "CV",
});
useHead({
  title:"Резюме"
})
const route = useRoute();
console.log(route.params)

const date = new Date().getFullYear();
</script>
<!--TODO: Сделать резюме, основу взять из того сайта-->
<template>
  <div class="">
    <div class="gap-2 flex-col flex">
      <div class="rounded-2xl w-fit overflow-hidden">
        <img src="@/assets/cv/person_image.jpg"  class="h-56 w-56 object-right object-cover" alt="" />
      </div>
      <div class="">
        <div>
          <p class="text-4xl">Резников Кирилл Сергеевич</p>
        </div>
        <div class="flex justify-between mt-2 h-32">
          <div class="text-xl font-light">
            <p>Возраст: {{date - 2002}}</p>
            <p>Место проживания: Екатеринбург</p>
          </div>
          <div class="bg-gradient-to-b align-bottom justify-end rounded-2xl bg-accent p-2 w-1/3 h-full flex items-center flex-wrap gap-2">
            <Icon size="2em" name="twemoji:fire"/>
            <UiBadge v-for="i in 10" class="h-1/6">
                Js
            </UiBadge>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          Должность
        </div>
        <div>
          Контактные данные
        </div>
      </div>
      <div class="flex justify-between">
        Опыт работы
        <div>
          Время
        </div>
        <div>
          Данные о работе
        </div>
      </div>
    </div>
    <UiSeparator/>
    <div>
      <div>
        Портфолио
      </div>
      <UiSeparator/>
      <div>
        Образование
      </div>
      <UiSeparator/>
      <div>
        О себе
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>