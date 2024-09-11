<script setup lang="ts">
import type {DateProfilerWorkProps} from "~/components/cs/date-profiler/DateProfiler";

const props = defineProps<DateProfilerWorkProps>()
</script>

<template>
  <div class="flex flex-col gap-1 md:gap-2 lg:gap-6">
    <CsDateProfiler v-for="work in props.workExp" :date-line="work.workDate" :date-title="work.workName">
      <template #dateDescription>
        <div>
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
      </template>
    </CsDateProfiler>
  </div>
</template>

<style scoped>

</style>