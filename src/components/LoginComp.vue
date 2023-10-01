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
    data-bs-title="Tooltip on top"
  >
    Tooltip on top
  </button>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { Tooltip } from 'bootstrap'

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
