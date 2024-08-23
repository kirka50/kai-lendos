<script setup lang="ts">
import {Card, CardContent} from "~/components/ui/card";



definePageMeta({
  title: 'KaiKane Lendos'
})
</script>

<template>
  <div class="flex flex-col items-center gap-2 text-xl">
    <Card class="w-full">
      <CardContent class="text-center">
        <div class="text-8xl font-light text-center">
          Привет
        </div>
        <div>
          Ты на моём лендосе
        </div>
        <div>
          Здесь круто, я тут иногда практикую свои навыки
        </div>
        <div>
          Тут находятся мой
          <CsTextLink link="/cv">CV</CsTextLink>
          ссылка на мои <CsTextLink link="/projects">Проекты</CsTextLink>, а так же мои любимые <CsTextLink link="/other">Приколюхи</CsTextLink>
        </div>
      </CardContent>
    </Card>
  </div>


</template>

<style scoped>

</style>