<template>
  <div>
    <input id="my-drawer" type="checkbox" class="drawer-toggle relative z-[100000]" />
    <div class="drawer-content">
      <label for="my-drawer" class="btn btn-success drawer-button text-white">Open drawer</label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <form
        class="menu flex flex-col justify-center gap-6 text-base-content min-h-full w-80 p-4 glass-bg"
      >
        <label class="input input-bordered flex items-center gap-2">
          Total:
          <input v-model="total" type="number" class="grow" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          tip:
          <input v-model="tip" type="number" class="grow" />
          %
        </label>
        <label class="input input-bordered flex items-center gap-2">
          People:
          <input v-model="people" type="number" class="grow" />
        </label>
        <button @click.prevent="handlerSubmit" class="btn btn-primary">Calculate</button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { calculate, store } from '@/store/payment'
import { ref } from 'vue'

const total = ref(0)
const people = ref(0)
const tip = ref(0)

const handlerSubmit = () => {
  store.params.people = people.value
  store.params.tip = tip.value
  store.params.total = total.value

  calculate()
}
</script>
<style scoped>
.glass-bg {
  backdrop-filter: blur(0px) saturate(180%);
  -webkit-backdrop-filter: blur(0px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
