<template>
  <div class="card image-full w-[300px] md:w-96 shadow-xl">
    <figure class="h-[200px] w-full">
      <img
        class="w-full h-full object-cover"
        src="https://img.freepik.com/free-photo/wooden-table-with-blurred-restaurant-scene_23-2148209996.jpg?t=st=1724298099~exp=1724301699~hmac=ac1c4578cbac8471189e33e73e12f9c033ca1972c4e4486a88948f8c8d4e9272&w=740"
        alt="restaurant"
      />
    </figure>
    <div class="card-body max-h-[280px]">
      <div class="w-full flex justify-between items-center text-white">
        <p class="card-title">Person: {{ item.person }}</p>
        <div>
          <div v-if="!item.paid" class="badge badge-error py-3 px-4">non-payment</div>
          <div v-if="item.paid" class="badge badge-success py-3 px-4">Paid</div>
        </div>
      </div>
      <h2 class="card-title text-[32px] text-white mt-4">{{ item.totalPerPerson }}$</h2>
      <div class="card-actions justify-end">
        <button @click="handlerPay" class="btn btn-success">Pay Now</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pay } from '@/store/payment'

const props = defineProps(['item'])

const handlerPay = () => {
  pay(props.item.id)
}
</script>
<style></style>
