<template>
  <div class="stats glass-bg text-primary-content">
    <div class="stat text-white">
      <div class="stat-title">Total Payment</div>
      <div class="stat-value">${{ grandTotal }}</div>
    </div>
    <div class="stat text-red-300">
      <div class="stat-title">Remaining</div>
      <div class="stat-value">${{ store.params.remaining }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getGrandTotal, store } from '@/store/payment'

const grandTotal = Math.round(getGrandTotal())
</script>
<style scoped>
.glass-bg {
  backdrop-filter: blur(0px) saturate(180%);
  -webkit-backdrop-filter: blur(0px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
