<script setup lang="ts">
import { useAuth } from "@/composables/useAuth";
const { user } = useAuth();
</script>

<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h3 class="mb-3 mb-lg-4">Profile Intro</h3>

      <div class="d-flex align-items-center mb-4">
        <div class="flex-shrink-0">
          <img
            src="~/assets/images/user-70.png"
            class="rounded-circle border border-2 wh-75"
            alt="user"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-17 mb-1 fw-semibold">{{ user?.firstName }} {{ user?.lastName }}</h4>
          <span class="fs-14">{{ user?.role }}</span>
        </div>
      </div>

      <h4 class="fw-semibold fs-14 mb-2">About Me</h4>
      <p>
        Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit
        mauris placerat nisi placerat. Pellentesque viverra lorem malesuada nunc
        tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec
        adipiscing.
      </p>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileIntro",
});
</script>
