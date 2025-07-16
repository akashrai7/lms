<template>
  <div
    class="d-flex align-items-center position-relative settings-box-wrap for-card-radius"
    style="gap: 25px"
  >
    <div class="cursor position-relative active-wrap2" @click="setRounded">
      <div class="settings-box" :class="{ 'rounded-style': isRounded }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="rounded-3"></span>
        <span class="rounded-3"></span>
        <span class="rounded-3"></span>
        <span class="rounded-3"></span>
        <span class="rounded-3"></span>
        <span class="rounded-3"></span>
      </div>
      <div class="d-flex align-items-center" style="gap: 5px; margin-top: 10px">
        <i
          class="ri-checkbox-circle-fill position-relative top-1 fs-18 text-primary"
          :class="{ 'opacity-0': isRounded, 'opacity-1': !isRounded }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-1': isRounded, 'opacity-0': !isRounded }"
        ></i>
        <span class="fw-semibold">Radius</span>
      </div>
    </div>

    <div class="cursor position-relative active-wrap1" @click="setSquare">
      <div
        class="settings-box rounded-0"
        :class="{ 'square-style': !isRounded }"
      >
        <span class="rounded-0"></span>
        <span class="rounded-0"></span>
        <span class="rounded-0"></span>
        <span class="rounded-0"></span>
        <span class="rounded-0"></span>
        <span class="rounded-0"></span>
        <span class="rounded-0"></span>
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
          :class="{ 'opacity-0': !isRounded, 'opacity-1': isRounded }"
        ></i>
        <i
          class="ri-checkbox-blank-circle-line position-relative fs-18 text-light-40 position-absolute start-0 bottom-0"
          :class="{ 'opacity-1': !isRounded, 'opacity-0': isRounded }"
        ></i>
        <span class="fw-semibold">Square</span>
      </div>
    </div>

    <button
      class="card-radius-square settings-btn"
      id="card-radius-square"
      @click="toggleCardStyleRadius"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CardStyleRadius",
  setup() {
    const isRounded = ref(false);

    const toggleCardStyleRadius = () => {
      isRounded.value = !isRounded.value;
      updateBodyClass();
      localStorage.setItem("card-radius", String(isRounded.value));
    };

    const setRounded = () => {
      isRounded.value = true;
      updateBodyClass();
      localStorage.setItem("card-radius", "true");
    };

    const setSquare = () => {
      isRounded.value = false;
      updateBodyClass();
      localStorage.setItem("card-radius", "false");
    };

    const updateBodyClass = () => {
      document.body.classList.toggle("card-radius", isRounded.value);
    };

    onMounted(() => {
      isRounded.value = localStorage.getItem("card-radius") === "true";
      updateBodyClass();
    });

    return {
      isRounded,
      toggleCardStyleRadius,
      setRounded,
      setSquare,
    };
  },
});
</script>
