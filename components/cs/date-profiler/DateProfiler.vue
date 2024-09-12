<script setup lang="ts">
import type {DateProfilerProps} from "~/components/cs/date-profiler/DateProfiler";

const props = defineProps<DateProfilerProps>()
</script>

<template>
    <div class="flex flex-col md:flex-row justify-between text-xl mt-8">
      <div class="font-light hidden md:block md:p-2 md:bg-accent rounded-2xl w-fit h-fit">
        {{ props.dateLine }}
      </div>
      <div class="md:w-1/2">
        <div>
          <div class="font-bold text-2xl">
            {{ props.dateTitle }}
          </div>
          <p class="text-xl font-light italic">{{ props.dateLine }}</p>
          <slot name="dateDescription"></slot>
        </div>
      </div>
    </div>
<!--    <div v-for="work in cvData.workExp" class="flex flex-col md:flex-row justify-between text-xl mt-8">
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
    </div>-->
</template>

<style scoped>

</style>