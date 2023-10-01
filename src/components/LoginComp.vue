<template>
  <form @submit.prevent="submit">
    <p :class="notify.class">{{ notify.text }}</p>
    <input v-model="users.email" class="form-control" placeholder="email" />
    <input v-model="users.password" class="form-control" placeholder="password" />
    <button type="submit" class="btn btn-primary">submit</button>
  </form>
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    data-bs-custom-class="custom-tooltip"
    data-bs-title="This top tooltip is themed via CSS variables."
  >
    Custom tooltip
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import {Tooltip} 'bootstrap'

const users = ref({
  email: null,
  password: null
})
const notify = ref({
  text: '',
  class: ''
})

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  )
})

function submit() {
  notify.value.text = ''

  axios({
    method: 'post',
    url: '/login',
    data: users.value
  })
    .then(function (response) {
      notify.value.text = response.data.status
      notify.value.class = 'success'
      localStorage.setItem('access_token', response.data.data.access_token)
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
