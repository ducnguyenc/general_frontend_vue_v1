<template>
  <form @submit.prevent="submit" class="form">
    <p :class="notifyColor">{{ notify }}</p>
    <input v-model="users.name" class="form-control" placeholder="name" />
    <input v-model="users.email" class="form-control" placeholder="email" />
    <input v-model="users.password" class="form-control" placeholder="password" />
    <input
      v-model="users.password_confirmation"
      class="form-control"
      placeholder="password_confirmation"
    />
    <button type="submit" class="btn btn-primary">submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const users = ref({
  name: null,
  email: null,
  password: null,
  password_confirmation: null
})
const notify = ref('')
const notifyColor = ref('')

function submit() {
  notify.value = ''

  axios({
    method: 'post',
    url: '/register',
    data: users.value
  })
    .then(function (response) {
      notify.value = response.data.status
      notifyColor.value = 'success'
    })
    .catch(function (error) {
      notify.value = error.response.data.status
      notifyColor.value = 'error'
    })
}
</script>

<style scoped lang="scss">
.form {
  .btn {
    background-color: $colorError;
  }
}
</style>
