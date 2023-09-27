<template>
  <form @submit="submit" @submit.prevent method="post">
    <input type="text" name="name">
    <input type="text" name="password">
    <button type="submit">submit</button>
  </form>
</template>

<script setup>
import instance from "@/plugin/axios"
console.log(import.meta.env);
function submit() {
  instance({
    method: 'post',
    url: '/user/12345',
    data: {
      lastName: 'Lý',
      firstName: 'Thường Kiệt',
    }
  });
}
</script>
