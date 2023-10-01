<template>
  <p :class="notify.class">{{ notify.text }}</p>
  <div v-for="user in users" v-bind:key="user.id">
    {{ user.id }}
    {{ user.name }}
    {{ user.email }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'

const users = ref([
  {
    id: '',
    name: '',
    email: ''
  }
])
const notify = ref({
  text: '',
  class: ''
})

onMounted(() => {
  fetchUser()
})

function fetchUser() {
  axios({
    method: 'get',
    url: '/user',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
  })
    .then(function (response) {
      notify.value.text = response.data.status
      notify.value.class = 'success'
      users.value = response.data.data.user
    })
    .catch(function (error) {
      notify.value.text = error.response.data.status
      notify.value.class = 'error'
    })
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/base.scss';
</style>
