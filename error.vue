<template>
  <div class="container-fluid">
    <div class="main-content d-flex flex-column p-0">
      <div class="m-auto text-center">
        <img
          src="~/assets/images/error.png"
          class="mw-430 mb-4 w-100"
          alt="error"
        />
        <h3 class="fs-24 mb-3">
          Looks like we did not find this page, please try again later.
        </h3>
        <p class="mb-4">
          But no worries! Our team is looking ever where while you wait safely.
        </p>
        <NuxtLink
          to="/dashboard"
          class="btn btn-primary py-2 px-4 fs-16 fw-medium"
        > 
          <span class="d-inline-block py-1">Back To Home</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorPage",
});
</script>
