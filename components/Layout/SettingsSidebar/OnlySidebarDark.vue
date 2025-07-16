<template>
  <div
    class="d-flex align-items-center position-relative settings-box-wrap for-sidebar-dark"
    style="gap: 25px"
  >
    <div class="cursor position-relative active-wrap2" @click="setLightMode">
      <div class="settings-box" :class="{ 'active-light': !isDarkMode }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px">
        <i
          class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"
          :class="{ 'opacity-1': !isDarkMode, 'opacity-0': isDarkMode }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': !isDarkMode, 'opacity-1': isDarkMode }"
        ></i>
        <span class="fw-semibold">Light</span>
      </div>
    </div>

    <div class="cursor position-relative active-wrap1" @click="setDarkMode">
      <div class="settings-box" :class="{ 'active-dark': isDarkMode }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px">
        <i
          class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"
          :class="{ 'opacity-1': isDarkMode, 'opacity-0': !isDarkMode }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': isDarkMode, 'opacity-1': !isDarkMode }"
        ></i>
        <span class="fw-semibold">Dark</span>
      </div>
    </div>

    <button
      class="sidebar-light-dark settings-btn"
      id="sidebar-light-dark"
      @click="toggleOnlySidebarDarkMode"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "OnlySidebarDark",
  setup() {
    const isDarkMode = ref(false);

    const toggleOnlySidebarDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      updateBodyClass();
      localStorage.setItem("sidebar-dark", String(isDarkMode.value));
    };

    const setDarkMode = () => {
      isDarkMode.value = true;
      updateBodyClass();
      localStorage.setItem("sidebar-dark", "true");
    };

    const setLightMode = () => {
      isDarkMode.value = false;
      updateBodyClass();
      localStorage.setItem("sidebar-dark", "false");
    };

    const updateBodyClass = () => {
      document.body.classList.toggle("sidebar-dark", isDarkMode.value);
    };

    onMounted(() => {
      isDarkMode.value = localStorage.getItem("sidebar-dark") === "true";
      updateBodyClass();
    });

    return {
      isDarkMode,
      toggleOnlySidebarDarkMode,
      setDarkMode,
      setLightMode,
    };
  },
});
</script>
