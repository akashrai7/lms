<template>
  <div class="position-relative" ref="datePickerContainer">
    <input
      type="text"
      class="form-control position-relative border"
      style="width: 230px; height: 36px; padding-left: 35px"
      :placeholder="formattedDateRange"
      @focus="toggleDatePicker"
    />
    <i
      class="ri-calendar-line position-absolute top-50 start-0 translate-middle-y ps-3"
    ></i>
    <div :class="['date-picker', { active: isDatePickerActive }]">
      <CommonDatePicker v-model="selected" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from "date-fns";
import { computed, ref, onMounted, onBeforeUnmount } from "vue";

const selected = ref({ start: new Date(), end: new Date() });
const formattedDateRange = computed(() => {
  const { start, end } = selected.value;
  if (!start || !end) {
    return "Select a date range";
  }
  return `${format(start, "dd/MM/yyyy")} - ${format(end, "dd/MM/yyyy")}`;
});

// State to toggle the date-picker visibility
const isDatePickerActive = ref(false);
const datePickerContainer = ref<HTMLElement | null>(null);

const toggleDatePicker = () => {
  isDatePickerActive.value = true;
};

const closeDatePicker = () => {
  isDatePickerActive.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    datePickerContainer.value &&
    !datePickerContainer.value.contains(event.target as Node)
  ) {
    closeDatePicker();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss" scoped>
.date-picker {
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate(0px, 35px);
  display: none;
  z-index: 1;
  &.active {
    display: block;
  }
}
</style>
