<template>
  <div
    class="d-flex align-items-center position-relative settings-box-wrap for-navbar-mode"
    style="gap: 25px"
  >
    <div class="cursor position-relative active-wrap2" @click="setSidebar">
      <div class="settings-box" :class="{ 'active-ltr': !navbarMode }">
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
          :class="{ 'opacity-1': !navbarMode, 'opacity-0': navbarMode }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': !navbarMode, 'opacity-1': navbarMode }"
        ></i>
        <span class="fw-semibold">Sidebar</span>
      </div>
    </div>

    <div class="cursor position-relative active-wrap1" @click="setNavbar">
      <div
        class="settings-box for-navbar"
        :class="{ 'with-navbar': navbarMode }"
      >
        <span class="mx-auto start-0 rounded-top-0 rounded-bottom-3"></span>
        <span class="mx-auto start-0 rounded-bottom-0 rounded-top-3"></span>
      </div>
      <div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px">
        <i
          class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"
          :class="{ 'opacity-1': navbarMode, 'opacity-0': !navbarMode }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': navbarMode, 'opacity-1': !navbarMode }"
        ></i>
        <span class="fw-semibold">Navbar</span>
      </div>
    </div>

    <label id="switch" class="switch-for-with-navbar">
      <input
        type="checkbox"
        class="position-absolute top-0 bottom-0 start-0 end-0 opacity-0 cursor"
        :checked="navbarMode"
        @change="toggleNavbar"
        id="slider"
      />
      <span class="sliders round"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "HorizontalLayout",
  setup() {
    const navbarMode = ref(false);

    const toggleNavbar = () => {
      navbarMode.value = !navbarMode.value;
      document.body.classList.toggle("with-navbar", navbarMode.value);
      localStorage.setItem("navbarMode", String(navbarMode.value));
    };

    const setNavbar = () => {
      navbarMode.value = true;
      document.body.classList.add("with-navbar");
      localStorage.setItem("navbarMode", "true");
    };

    const setSidebar = () => {
      navbarMode.value = false;
      document.body.classList.remove("with-navbar");
      localStorage.setItem("navbarMode", "false");
    };

    onMounted(() => {
      const savedMode = localStorage.getItem("navbarMode") === "true";
      navbarMode.value = savedMode;
      document.body.classList.toggle("with-navbar", savedMode);
    });

    return {
      navbarMode,
      toggleNavbar,
      setNavbar,
      setSidebar,
    };
  },
});
</script>
