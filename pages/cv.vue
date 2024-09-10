<script setup lang="ts">

import PreviewCard from "~/components/cs/preview-card/PreviewCard.vue";

definePageMeta({
  title: "CV",
});
useHead({
  title: "Резюме"
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
            skill: "React",
            skillIcon: "devicon:react"
          },
        ]
      },
      workExp: [{
        workName: "Фриланс",
        workDate: "Январь 2023 - Май 2024",
        workTasks: ['Адаптивно - отзывчивая вёрстка по макетам',
          'Разработка модулей и компонентов на Vue', 'Создание веб-страниц с нуля',
          'Разработка компонентов на React'],
        taskDesc: 'Верстка лендосов, страниц магазина, создание дизайнов и макетов на figmа'
      }, {
        workName: "ООО 'Первый бит' - Web-Developer",
        workDate: "Май 2024 - Настоящее время",
        workTasks: ['Работа по модификации crm систем',
          'Верстка новых модулей для crm систем',
          'Разработка мобильных приложений на основе PWA',
          'Разработка интерфейсов для crm систем'],
        taskDesc: 'Занимаюсь разработкой интерфейсов cms и crm систем. Разрабатываю как десктоп, так и мобильные версии интерфейсов'
      }],
      wannableJobs: ['Frontend разработчик', 'Js разработчик', 'Fullstack разработчик'],
      contactInfo: {
        "Телефон": {
          type: "copy",
          value: "+7(982)735-21-31",
          url: "+79827352131",
        },
        "Почта": {
          type: "copy",
          value: "reznickov.k@yandex.ru",
          url: "reznickov.k@yandex.ru",
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
      },
      portfolio: [
        {
          title: 'GitHub',
          description: 'Мой крутой гитхаб',
          image: "portfolio/github.png",
          href: 'https://github.com/kirka50/',
        },
        {
          title: 'Грамоты/Бумажки',
          description: 'Мой крутой гитхаб',
          image: "portfolio/papers.png",
          href: 'https://github.com/kirka50/',
        },
        {
          title: 'TopBlog',
          description: 'Мой крутой гитхаб',
          image: "portfolio/topblog.png",
          href: 'https://github.com/kirka50/',
        },
        {
          title: 'IIntegration',
          description: 'Мой крутой гитхаб',
          image: "portfolio/IIntegration.png",
          href: 'https://github.com/kirka50/',
        },

      ]
    },
);

const date = new Date().getFullYear();

const copyPhone = async (phone: string) => {
  try {
    await navigator.clipboard.writeText(phone);
  } catch (error) {
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
            <p><strong class="font-bold">Возраст:</strong> {{ date - 2002 }}</p>
            <p><strong class="font-bold">Место проживания:</strong> Екатеринбург</p>
          </div>
          <div class="bg-gradient-to-b justify-evenly rounded-2xl
          bg-accent p-2 w-1/3 h-full flex flex-row flex-wrap gap-2 items-baseline">
            <!--            <div class="w-fit">
                          <Icon size="2em" name="twemoji:fire"/> Скилы:
                        </div>-->
            <div class="font-light" v-for="skill in cvData.personData.skillsTags" :key="skill.skill">
              <Icon v-if="skill?.skillIcon" size="1.5em" :name="skill.skillIcon"></Icon>
              {{ skill.skill }}
            </div>

          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-6 mt-4 justify-between font-bold text-xl">
        <div
            class="flex flex-col justify-center text-center rounded-2xl bg-accent p-2 md:bg-background md:text-start md:block">
          <div>Желаемая должность</div>
          <ul class="font-light md:ml-10 md:list-disc">
            <li class="mt-4" v-for="job in cvData.wannableJobs">{{ job }}</li>
          </ul>
        </div>
        <div>
          <div class="flex flex-col justify-center
          text-center rounded-2xl bg-accent p-2 md:bg-background
           md:text-start">
            <div>Контактные данные</div>
            <ul class="font-light md:ml-10 md:list-disc">
              <li class="mt-4" v-for="(contact, label) in cvData.contactInfo">
                <UiPopover v-if="contact?.type == 'copy'">
                  <UiPopoverTrigger @click="copyPhone(contact.value)" class="underline underline-offset-4">
                    {{ label }}: {{ contact.value }}
                  </UiPopoverTrigger>
                  <UiPopoverContent>
                    Скопированно
                  </UiPopoverContent>
                </UiPopover>
                <a v-else :href="contact?.url"
                   :class="contact?.url ? 'underline underline-offset-4 cursor-pointer': ''">{{ label }}:
                  {{ contact.value }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a class="text-4xl font-bold">Опыт работы</a>
      <div class="flex flex-col gap-1 md:gap-2 lg:gap-6">
        <div v-for="work in cvData.workExp" class="flex flex-col md:flex-row justify-between text-xl mt-8">
          <div class="font-light p-2 bg-accent rounded-2xl w-fit h-fit">
            {{ work.workDate }}
          </div>
          <div class="md:w-1/2">
            <div>
              <div class="font-bold">
                {{ work.workName }}
              </div>
              <div>
                <p class="text-xl font-light">
                  Задачи:
                </p>
                <ul class="list-disc font-light">
                  <li class="ml-10" v-for="task in work.workTasks"> {{ task }}</li>
                </ul>
              </div>
            </div>
            <div class="font-light ">
              <p>Описание задач:</p>
              <p class="ml-5">{{ work.taskDesc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UiSeparator class="mt-6"/>
    <div class="mt-4">
      <div>
        <p class="text-4xl">Портфолио</p>
        <div class="grid sm:grid-cols-2 text-center gap-2 mt-6">
          <PreviewCard v-for="card in cvData.portfolio" v-bind="card"/>
        </div>
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