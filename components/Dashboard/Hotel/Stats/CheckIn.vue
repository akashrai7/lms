<template>
  <div
    class="card border-0 rounded-3 bg-card-text-c position-relative z-1 welcome-for-hotel"
    style="padding: 20px"
  >
    <div class="d-flex d-md-block justify-content-between align-items-center">
      <div>
        <span class="d-block">Check In</span>
        <h3 class="fs-28 fw-900 mt-6 mb-11 lh-1">245</h3>
        <div>
          <span
            class="d-inline-block bg-success-80 border-success-60 border px-2 rounded-pill text-success-60 fs-12 fw-medium"
          >
            +3.4%
          </span>
        </div>
      </div>

      <div class="d-flex justify-content-end" style="margin-top: -15px">
        <div
          class="bg-white rounded-circle d-flex align-items-center justify-content-end"
          style="width: 79px; height: 79px"
        >
          <img src="@/assets/images/check-in-desk.svg" alt="check-in-desk" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CheckIn",
});
</script>
