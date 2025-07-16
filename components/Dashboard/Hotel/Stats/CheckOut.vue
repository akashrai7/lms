<template>
  <div
    class="card border-0 rounded-3 bg-primary-div-60 position-relative z-1 welcome-for-hotel"
    style="padding: 20px"
  >
    <div class="d-flex d-md-block justify-content-between align-items-center">
      <div>
        <span class="d-block">Check Out</span>
        <h3 class="fs-28 fw-900 mt-6 mb-11 lh-1">315</h3>
        <div>
          <span
            class="d-inline-block bg-card-text-c border-danger-50 border px-2 rounded-pill text-danger-50 fs-12 fw-medium"
            >-1.4%</span
          >
        </div>
      </div>

      <div class="d-flex justify-content-end" style="margin-top: -15px">
        <div
          class="bg-white rounded-circle d-flex align-items-center justify-content-end"
          style="width: 79px; height: 79px"
        >
          <img src="@/assets/images/point.svg" alt="point" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CheckOut",
});
</script>
