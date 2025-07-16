<template>
  <div
    class="d-flex align-items-center position-relative settings-box-wrap for-rtl-mode"
    style="gap: 25px"
  >
    <div class="cursor position-relative active-wrap2" @click="setLTR">
      <div class="settings-box" :class="{ 'active-ltr': !rtlMode }">
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
          :class="{ 'opacity-1': !rtlMode, 'opacity-0': rtlMode }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': !rtlMode, 'opacity-1': rtlMode }"
        ></i>
        <span class="fw-semibold">LTR</span>
      </div>
    </div>

    <div class="cursor position-relative active-wrap1" @click="setRTL">
      <div class="settings-box for-rtl" :class="{ 'active-rtl': rtlMode }">
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
          :class="{ 'opacity-1': rtlMode, 'opacity-0': !rtlMode }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-0': rtlMode, 'opacity-1': !rtlMode }"
        ></i>
        <span class="fw-semibold">RTL</span>
      </div>
    </div>

    <label id="switch" class="switch-for-rtl">
      <input
        type="checkbox"
        class="position-absolute top-0 bottom-0 start-0 end-0 opacity-0 cursor"
        :checked="rtlMode"
        @change="toggleRTL"
        id="slider"
      />
      <span class="sliders round"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RTLModeSwitch",
  setup() {
    const rtlMode = ref(false);

    const toggleRTL = () => {
      rtlMode.value = !rtlMode.value;
      document.body.classList.toggle("rtl", rtlMode.value);
      localStorage.setItem("rtlMode", String(rtlMode.value));
    };

    const setRTL = () => {
      rtlMode.value = true;
      document.body.classList.add("rtl");
      localStorage.setItem("rtlMode", "true");
    };

    const setLTR = () => {
      rtlMode.value = false;
      document.body.classList.remove("rtl");
      localStorage.setItem("rtlMode", "false");
    };

    onMounted(() => {
      const savedMode = localStorage.getItem("rtlMode") === "true";
      rtlMode.value = savedMode;
      document.body.classList.toggle("rtl", savedMode);
    });

    return {
      rtlMode,
      toggleRTL,
      setRTL,
      setLTR,
    };
  },
});
</script>
