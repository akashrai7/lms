<template>
  <div
    class="card border-0 rounded-3 bg-primary-div-60 p-25 performance-for-darkmode"
    style="padding-top: 15px; padding-bottom: 15px"
  >
    <div class="d-flex align-items-center justify-content-between">
      <div class="flex-grow-1">
        <span class="d-block">Crypto Market Cap</span>
        <h3 class="fs-20 mb-0" style="margin-top: 4px">$2.64T</h3>
      </div>
      <div class="flex-shrink-0">
        <i
          class="material-symbols-outlined d-flex align-items-center justify-content-center text-primary-div rounded-circle fs-24 bg-white"
          style="width: 53px; height: 53px"
        >
          payments
        </i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoMarketCap",
});
</script>
