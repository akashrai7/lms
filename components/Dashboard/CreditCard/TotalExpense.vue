<template>
  <div
    class="card border-0 rounded-3 p-25 wallet-for-dark-mode"
    style="background: linear-gradient(90deg, #f3e8ff, #fff)"
  >
    <div class="d-flex align-items-center justify-content-between">
      <div class="flex-grow-1">
        <span class="d-block">Total Expense</span>
        <h3 class="fs-20 mt-6" style="margin-top: 5px; margin-bottom: 22px">
          $18,950
        </h3>
        <div class="d-flex align-items-center" style="gap: 10px">
          <span
            class="d-inline-block bg-danger-70 border-danger-80 border px-2 rounded-pill text-danger-80 fs-12 fw-medium"
          >
            -18.1%
          </span>
          <span class="fs-12">Last Month</span>
        </div>
      </div>
      <div class="flex-shrink-0">
        <i
          class="material-symbols-outlined d-flex align-items-center justify-content-center fs-35 text-primary-div rounded-circle"
          style="width: 75px; height: 75px; background-color: #f3e8ff"
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
  name: "TotalExpense",
});
</script>
