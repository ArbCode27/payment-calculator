<script setup lang="ts">
import CalculatorForm from './components/CalculatorForm.vue'
import PeopleCard from './components/PeopleCard.vue'
import TotalCard from './components/TotalCard.vue'
import { store } from './store/payment'
</script>

<template>
  <main>
    <div
      class="hero min-h-screen"
      style="
        background-image: url(https://img.freepik.com/free-photo/informal-friendly-party-with-job-colleagues-cosy-cafe-with-delitious-snacks-warm-summer-day_8353-10571.jpg?t=st=1724283782~exp=1724287382~hmac=38e2c3a08fdfe44e5575eee2a98048cfcb296de3251e4509261968a7722bd0ff&w=996);
      "
    >
      <div class="hero-overlay bg-opacity-40"></div>
      <section
        class="w-full flex flex-col hero-content text-neutral-content text-center overflow-x-hidden"
      >
        <div class="text-white">
          <div v-if="store.people.length <= 0">
            <h1 class="mb-2 text-5xl font-bold">Hello there</h1>
            <p class="max-w-[580px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <TotalCard v-if="store.people.length > 0" />
        </div>
        <div>
          <CalculatorForm v-if="store.people.length <= 0" />
          <div
            v-if="store.people.length > 0"
            class="w-full flex flex-wrap justify-center items-center gap-6"
          >
            <PeopleCard v-for="item in store.people" :key="item.id" :item="item" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
