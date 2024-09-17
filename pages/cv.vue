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
          phone: 'true',
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
          image: "github.png",
          href: 'https://github.com/kirka50/',
        },
        {
          title: 'Грамоты/Бумажки',
          description: 'Тут все разные бумаги и грамоты. Cвидетельства о том что я молодец огурец',
          image: "papers.png",
          href: 'https://drive.google.com/drive/folders/1oNwehgOJLu2A25aTDGXEHZoH6qNfx7Oe?usp=sharing',
        },
        {
          title: 'TopBlog',
          description: 'Проект за 2,5 дня на хакатоне',
          image: "topblog.png",
          href: 'https://kirka50.github.io/TopBlog/',
        },
        {
          title: 'IIntegration',
          description: 'Лендос нашей команды, эх времена...',
          image: "IIntegration.png",
          href: 'https://kirka50.github.io/IIntegrationLendos/',
        },
      ],
      studyExp: [{
        studyDate: "2020 - 2024",
        studyName: "Оконченное высшее образование",
        course: "Информатика и вычислительная техника",
        faculty: "Инфокоммуникаций, информатики и управлений",
        major: "Программное обеспечение средств вычислительной техники и автоматизированных систем",
        studyFacility: 'УрТИСИ СибГУТИ'
      }]
    },

);

const date = new Date();
let currentDate = new Date();
let targetDate = new Date("2023-01-01");
let diffYears = targetDate.getFullYear() - currentDate.getFullYear();
let diffMonths = diffYears * 12 + targetDate.getMonth() - currentDate.getMonth();
let year = -Math.floor(diffMonths / 12) - 1 + " г.";
let month = -diffMonths % 12 + " м.";


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
            <p><strong class="font-bold">Возраст:</strong> {{ date.getFullYear() - 2002 }}</p>
            <p><strong class="font-bold">Место проживания:</strong> Екатеринбург</p>
          </div>
          <div class="bg-gradient-to-b justify-evenly rounded-2xl
          bg-accent p-2 w-1/3 h-full flex flex-row flex-wrap gap-2 items-baseline">
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
                <a v-if="contact?.phone" :href="`tel:` + contact?.url"
                   :class="contact?.url ? 'underline underline-offset-4 cursor-pointer': ''">{{ label }}:
                  {{ contact.value }}</a>
                <UiPopover v-else-if="contact?.type == 'copy'">
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
      <UiSeparator/>
      <a class="text-4xl font-bold">Опыт работы <a class="text-blue-500">{{ year + " " + month }}</a></a>
      <CsDateProfilerWork :work-exp="cvData.workExp"></CsDateProfilerWork>
    </div>
    <UiSeparator class="mt-6"/>
    <div class="mt-4 md:mt-10">
      <div>
        <p class="text-4xl">Портфолио</p>
        <div class="grid sm:grid-cols-2 text-center gap-2 mt-6">
          <PreviewCard v-for="card in cvData.portfolio" v-bind="card"/>
        </div>
      </div>
    </div>
    <UiSeparator class="mt-6"/>
    <div class="text-4xl font-bold mt-2 md:mt-10">
      <a>Образование</a>
      <CsDateProfilerStudy :study-exp="cvData.studyExp"/>
    </div>
    <UiSeparator class="mt-6"/>
    <div class="mt-2 md:mt-10">
      <p class="text-4xl">О себе</p>
      <div class="mt-10">
        <p>Основные языки программирования - TS/JS
          Больше года опыт работы с популярными фреймворками как: Vue, React. В некоторых моих проектах применяю технологии PWA. Имею опыт разработки на next и nuxt.
          Уверено разбираюсь в HTML/CSS, присутствует опыт работы с SASS/SCSS. Применял в своей работе ui библиотеки: Boostrap vue\react, shadcn, vuetify, material vue/react.
          Практикую и применяю методологии Atomic Desing, FSD
          Знаком с принципами SOLID, MVC, REST API
          Имею такие базовые навыки как: использование систем git, навыки написания "чистого кода", рефакторинг и оптимизация</p>
        <p class="mt-6 text-2xl">Работал над задачами:</p>
        <ul class="mt-2">
          <li>- Адаптивно-отзывчивая вёрстка</li>
          <li>- Создание бизнес моделей на стороне клиента</li>
          <li>- Обработка запросов/Взаимодействие с API</li>
        </ul>
        <p class="mt-6">Учавствую в хакатонах по ИИ, создавал отзывчивые веб страницы для кейсов, взаимодействовал с api по кейсам.
          Создавал макеты страниц их прототипы.</p>
        <p class="mt-6">Полностью выполнял задачи frontend разработчика в команде кейса</p>
        <p class="mt-6 text-2xl">Пример кейсов:</p>
        <ul class="mt-2 flex flex-col gap-2">
          <li>- Победитель Цифрового прорыва 2022 в Северо-Кавказском федеральном округе в кейсе «ИИ в поисках гренландского кита» - 1 место.</li>
          <li>- Финалист хакатона Полюс - 3 место,</li>
          <li>- Финалист Цифрового прорыва 2023 в Северо-Западном федеральном округе в кейсе «Минпросвещения России при участии проекта ТопБлог» - 3 место,</li>
          <li>- «Искусственный интеллект прогнозирует инфляцию» от ЦБ РФ - 4 место,</li>
          <li>- «Мой психолог ИИ: помоги нейросети выявить уровень стресса» от «Международной Академии исследования лжи» - 4 место,</li>
          <li>- Финалист Цифрового прорыва 2023 в Нижнем Новгороде в кейсе «Модель склонности клиента к приобретению машиноместа» - 5 место</li>
          <li>- «Алгоритм на страже экономической стабильности» от Центрального банка Российской Федерации - 5 место,</li>
          <li>- «ИИ фотобанк для Поискового отряда» от организации «ЛизаАлерт» - 12 место</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>