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
        skillsTags: [
          {
            skill: "Front-End Developer",
          },
          {
            skill: "Верстка",
          },
            {
          skill: "Js",
          skillIcon: "devicon:javascript"
            },
          {
            skill: "Vue",
            skillIcon: "devicon:vuejs"
          },
          {
            skill: "Figma",
            skillIcon: "devicon:react"
          },
        ]
      },
      workExp: [{
        workName: "Фриланс",
        workDate: "Январь 2023 - Май 2024",
        workTasks: ['Адаптивно - отзывчивая вёрстка по макетам',
          'Разработка модулей и компонентов на Vue','Создание веб-страниц с нуля',
          'Разработка компонентов на React'],
        taskDesc: 'Верстка лендосов, страниц магазина, создание дизайнов и макетов на figmа'
      }],
      wannableJobs:['Frontend разработчик','Js разработчик','Fullstack разработчик'],
      contactInfo: {
        "Телефон": {
          type:"phone",
          value: "+7(982)735-21-31",
          url:"+79827352131",
        },
        "Почта": {
          value: "reznickov.k@yandex.ru",
        },
        "Telegram": {
          value: "@kai_kane",
          url: "https://t.me/kai_Kane"
        },
        "Github": {
          value: "https://github.com/kirka50",
          url: "https://github.com/kirka50"
        },
        "HH.ru": {
          value: "Резюме",
          url: "https://ekaterinburg.hh.ru/resume/11c1b7cfff0be745f20039ed1f436d454b6b78"
        }

      }
    },

);

const date = new Date().getFullYear();

const copyPhone = async (phone: string) => {
  try {
    await navigator.clipboard.writeText(phone);
  }
  catch (error) {
    console.log(error);
  }
}
</script>
<!--TODO: Сделать резюме, основу взять из того сайта-->
<template>
  <div class="">
    <div class="gap-2 flex-col flex">
      <div class="flex flex-col items-center sm:items-center md:items-center xl:items-start lg:items-start">
        <div class="rounded-2xl w-fit overflow-hidden">
          <img src="@/assets/cv/person_image.jpg" class="h-56 w-56 object-right object-cover" alt=""/>
        </div>
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
          <div class="bg-gradient-to-b justify-evenly rounded-2xl
          bg-accent p-2 w-1/3 h-full flex flex-row flex-wrap gap-2 items-baseline">
<!--            <div class="w-fit">
              <Icon size="2em" name="twemoji:fire"/> Скилы:
            </div>-->
            <div v-for="skill in cvData.personData.skillsTags" :key="skill.skill">
              <Icon v-if="skill?.skillIcon" size="1.5em" :name="skill.skillIcon"></Icon> {{skill.skill}}
            </div>

          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-4 justify-between font-bold text-xl">
        <div class="flex flex-col justify-center text-center rounded-2xl bg-accent p-2 md:bg-background md:text-start md:block">
          <div>Желаемая должность</div>
          <ul class="font-light md:ml-10 md:list-disc">
            <li class="mt-4" v-for="job in cvData.wannableJobs">{{job}}</li>
          </ul>
        </div>
        <div>
          <div class="flex flex-col justify-center text-center rounded-2xl bg-accent p-2 md:bg-background md:text-start md:block">
            <div>Контактные данные</div>
            <ul class="font-light md:ml-10 md:list-disc">
              <li class="mt-4" v-for="(contact, label) in cvData.contactInfo">
                <UiPopover v-if="contact?.type == 'phone'">
                  <UiPopoverTrigger @click="copyPhone(contact.value)" class="underline underline-offset-4">
                    {{label}}: {{ contact.value }}
                  </UiPopoverTrigger>
                  <UiPopoverContent>
                    Скопированно
                  </UiPopoverContent>
                </UiPopover>
                <a v-else :class="contact?.url ? 'underline underline-offset-4 cursor-pointer': ''">{{ label }}: {{contact.value}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-between font-bold text-xl">
        <div>
          Должность
        </div>
        <div>
          Описание
        </div>
      </div>
      <div class="flex justify-between">
        <div>Опыт работы</div>
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