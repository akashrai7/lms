<template>
  <div class="card border-0 rounded-3 bg-white" style="padding: 10px">
    <div class="bg-success-90 p-25 rounded-3 mb-10 daily-limit-form-dark-mode">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <span class="d-block">Daily Limit</span>
          <h3 class="mb-0 fs-20 mt-6">
            $5,000
            <sub class="fs-14 fw-normal bottom-0 text-body"> /$2250 </sub>
          </h3>
        </div>
        <span
          class="d-inline-block bg-danger-70 border-danger-80 border px-2 rounded-pill text-danger-80 fs-12 fw-medium"
        >
          -45.9%
        </span>
      </div>

      <div class="progress-responsive mt-14">
        <div
          class="progress rounded-pill"
          style="height: 10px; background-color: #b2ff97"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="85"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar rounded-pill"
            style="width: 85%; height: 10px; background-color: #37d80a"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="bg-success rounded-3 mb-0 position-relative z-1"
      style="padding: 18px 25px"
    >
      <div class="d-flex align-items-center" style="gap: 10px">
        <div class="flex-shrink-0">
          <img
            src="@/assets/images/avatar-with-laptop.png"
            alt="avatar-with-laptop"
          />
        </div>
        <div class="flex-grow-1">
          <span class="d-block text-white">Get a Platinum Card</span>
          <span class="text-white mt-6 d-block">
            For
            <span class="fw-bold fs-20">Free</span>
          </span>
        </div>
      </div>

      <img
        src="@/assets/images/4dots.png"
        class="position-absolute bottom-0 end-0"
        alt="4dots"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DailyLimit",
});
</script>
