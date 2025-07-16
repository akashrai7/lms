<template>
  <div
    class="d-flex align-items-center position-relative settings-box-wrap for-card-bg-gray"
    style="gap: 25px"
  >
    <!-- White Background Option -->
    <div class="cursor position-relative active-wrap2" @click="setWhite">
      <div
        class="settings-box bg-light-40"
        :class="{ 'white-style': !isGrayBg }"
      >
        <span class="bg-white"></span><span class="bg-white"></span
        ><span class="bg-white"></span> <span class="bg-white"></span
        ><span class="bg-white"></span><span class="bg-white"></span>
        <span class="bg-white"></span><span class="rounded-3 bg-white"></span
        ><span class="rounded-3 bg-white"></span>
        <span class="rounded-3 bg-white"></span
        ><span class="rounded-3 bg-white"></span>
        <span class="rounded-3 bg-white"></span
        ><span class="rounded-3 bg-white"></span>
      </div>
      <div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px">
        <i
          class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"
          :class="{ 'opacity-1': !isGrayBg, 'opacity-0': isGrayBg }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': !isGrayBg, 'opacity-1': isGrayBg }"
        ></i>
        <span class="fw-semibold">White</span>
      </div>
    </div>

    <!-- Gray Background Option -->
    <div class="cursor position-relative active-wrap1" @click="setGray">
      <div class="settings-box" :class="{ 'gray-style': isGrayBg }">
        <span></span><span></span><span></span><span></span><span></span
        ><span></span><span></span> <span class="rounded-3"></span
        ><span class="rounded-3"></span><span class="rounded-3"></span>
        <span class="rounded-3"></span><span class="rounded-3"></span
        ><span class="rounded-3"></span>
      </div>
      <div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px">
        <i
          class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"
          :class="{ 'opacity-1': isGrayBg, 'opacity-0': !isGrayBg }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': isGrayBg, 'opacity-1': !isGrayBg }"
        ></i>
        <span class="fw-semibold">Gray</span>
      </div>
    </div>

    <!-- Toggle Button -->
    <button
      class="card-bg settings-btn"
      id="card-bg"
      @click="toggleCardStyleBG"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CardStyleBG",
  setup() {
    const isGrayBg = ref(false);

    // Toggle between White and Gray
    const toggleCardStyleBG = () => {
      isGrayBg.value = !isGrayBg.value;
      updateBodyClass();
      localStorage.setItem("card-bg-gray", String(isGrayBg.value));
    };

    // Explicitly set White Background
    const setWhite = () => {
      isGrayBg.value = false;
      updateBodyClass();
      localStorage.setItem("card-bg-gray", "false");
    };

    // Explicitly set Gray Background
    const setGray = () => {
      isGrayBg.value = true;
      updateBodyClass();
      localStorage.setItem("card-bg-gray", "true");
    };

    // Update Body Class
    const updateBodyClass = () => {
      document.body.classList.toggle("card-bg-gray", isGrayBg.value);
    };

    // Initialize state from localStorage
    onMounted(() => {
      isGrayBg.value = localStorage.getItem("card-bg-gray") === "true";
      updateBodyClass();
    });

    return {
      isGrayBg,
      toggleCardStyleBG,
      setWhite,
      setGray,
    };
  },
});
</script>
