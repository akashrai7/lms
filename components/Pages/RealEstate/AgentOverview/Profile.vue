<template>
  <div
    class="card border-0 rounded-3 bg-white mb-4 text-center position-relative z-1 overflow-hidden"
  >
    <span
      class="bg-danger rounded-top-3 position-absolute z-n1 top-0 d-block w-100"
      style="height: 120px"
    ></span>
    <img
      src="@/assets/images/shape-9.png"
      class="position-absolute top-0 start-0"
      alt="shape"
    />
    <div class="card-body px-4 pb-4" style="padding-top: 35px">
      <img
        src="@/assets/images/user-70.png"
        class="rounded-circle mb-4"
        style="width: 160px; height: 160px"
        alt="user"
      />

      <h3 class="fs-16 mb-0">Sarah Johnson</h3>
      <span class="text-primary">sarah@email.com</span>

      <ul
        class="ps-0 my-4 list-unstyled d-flex flex-wrap justify-content-center gap-3"
      >
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="d-inline-block text-center rounded-circle text-decoration-none text-white"
            style="
              width: 30px;
              height: 30px;
              line-height: 30px;
              background-color: #3a559f;
            "
          >
            <i class="ri-facebook-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            class="d-inline-block text-center rounded-circle text-decoration-none text-white"
            style="
              width: 30px;
              height: 30px;
              line-height: 30px;
              background-color: #03a9f4;
            "
          >
            <i class="ri-twitter-x-line"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="d-inline-block text-center rounded-circle text-decoration-none text-white"
            style="
              width: 30px;
              height: 30px;
              line-height: 30px;
              background-color: #007ab9;
            "
          >
            <i class="ri-linkedin-fill"></i>
          </a>
        </li>
      </ul>

      <ul class="ps-0 mb-0 list-unstyled">
        <li class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-secondary">Agency:</span>
          <span>Realty Group</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-secondary">Phone:</span>
          <span>(123) 456-7890</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-secondary">License Number:</span>
          <span>RE123456</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-secondary">Years of Experience:</span>
          <span>10+</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-secondary">Areas of Expertise:</span>
          <span>Residential Sales</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-0">
          <span class="text-secondary">Location:</span>
          <span>74 Grim Avenue San Diego</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Profile",
});
</script>
