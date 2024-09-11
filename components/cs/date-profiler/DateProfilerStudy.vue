<script setup lang="ts">
import type {DateProfilerStudyProps} from "~/components/cs/date-profiler/DateProfiler";

const props = defineProps<DateProfilerStudyProps>();
</script>

<template>
  <div class="flex flex-col gap-1 md:gap-2 lg:gap-6">
    <CsDateProfiler v-for="study in props.studyExp" :date-line="study.studyDate" :date-title="study.studyFacility">
      <template #dateDescription>
        <div class="md:flex gap-2 font-bold">
          <a>Направление:</a><p class="font-light">{{study.major}}</p>
        </div>
        <div class="md:flex gap-2 font-bold">
          <a>Факультет:</a><p class="font-light">{{study.faculty}}</p>
        </div>
        <div class="md:flex gap-2 font-bold">
          <a>Курс:</a><p class="font-light">{{study.course}}</p>
        </div>
      </template>
    </CsDateProfiler>
  </div>
</template>

<style scoped>

</style>