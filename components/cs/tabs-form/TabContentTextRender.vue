<script setup lang="ts">
  const props = defineProps<{ text: String }>()
</script>

<template>
  <div class="textContent flex flex-col gap-5" v-html="props.text"></div>
</template>

<style>
.textContent {
  font-size: 18px;
  line-height: 22px;
}
.textContent input {
  font-size: 18px;
  line-height: 22px;
  border-radius: 10px;
  border: 1px solid #FFFFFF;
}

.textContent input:hover {
  border-color: #0078EE;
}
.textContent p {
  color: #333;
}

.textContent ul {
  list-style-type: disc;
  margin-left: 20px;
}

.textContent ol {
  list-style-type: decimal;
  margin-left: 20px;
  color: green;
}

.textContent li {
  margin-left: 20px;
  margin-bottom: 5px;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 16px;
  color: #aaa;
  pointer-events: none;
  transition: all 0.3s ease;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  top: -20px;
  font-size: 12px;
  color: #000;
}

input:focus {
  outline: none;
  border-color: #000;
}
</style>