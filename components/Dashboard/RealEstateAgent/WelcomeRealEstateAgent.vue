<template>
  <div class="border-0 rounded-3 bg-rating-color mb-4 p-25">
    <div class="welcome-real-estate-agent">
      <div class="row align-items-center g-4">
        <div class="col-lg-6 text-center text-lg-start">
          <div class="mb-12 mt-8">
            <span
              class="fs-16 text-card-text-c fw-medium d-inline-block"
              style="background-color: #212529; padding: 1px 13px"
            >
              Hello Olivia!
            </span>
          </div>
          <h2
            class="fs-32 text-white mx-auto ms-lg-0"
            style="letter-spacing: -0.5px; max-width: 480px"
          >
            Welcome Back! Ready to Close More Deals Today?
          </h2>
        </div>
        <div class="col-lg-6 text-lg-end text-center">
          <img
            src="@/assets/images/bank-real-estate.png"
            alt="bank-real-estate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeRealEstateAgent",
});
</script>
