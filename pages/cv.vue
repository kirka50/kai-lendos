<script setup lang="ts">

definePageMeta({
  title: "CV",
});
useHead({
  title:"Резюме"
})
const route = useRoute();
console.log(route.params)

const cvData = ref(
    {
      personData: {
        birthYear: 2002,
        livePlace: "Екатеринбург",
        skillsTags: [{
          skill: "Js",
          skillIcon
        }]
      }
    }
);

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
          <p class="text-4xl font-bold">Резников Кирилл Сергеевич</p>
        </div>
        <div class="flex justify-between mt-2">
          <div class="text-xl font-light">
            <p><strong class="font-bold">Возраст:</strong> {{date - 2002}}</p>
            <p><strong class="font-bold">Место проживания:</strong> Екатеринбург</p>
          </div>
          <div class="bg-gradient-to-b align-bottom rounded-2xl
          bg-accent p-2 w-1/3 h-full flex flex-row gap-2">
            <div class="w-fit">
              <Icon size="2em" name="twemoji:fire"/>
            </div>
            <div>React, Vue, Js,</div>
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