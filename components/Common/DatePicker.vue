<template>
  <VCalendarDatePicker
    v-if="date && (date as DatePickerRangeObject)?.start && (date as DatePickerRangeObject)?.end"
    v-model.range="date"
    v-bind="{ ...attrs, ...$attrs }"
    @dayclick="onDayClick"
  />
  <VCalendarDatePicker
    v-else
    v-model="date"
    v-bind="{ ...attrs, ...$attrs }"
    @dayclick="onDayClick"
  />
</template>

<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
import { defineEmits, defineProps, type PropType } from "vue";
import type {
  DatePickerDate,
  DatePickerRangeObject,
} from "v-calendar/dist/types/src/use/datePicker";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    type: [Date, Object] as PropType<
      DatePickerDate | DatePickerRangeObject | null
    >,
    default: null,
  },
});

const emit = defineEmits(["update:model-value", "close"]);

const date = computed({
  get: () => props.modelValue,
  set: (value: any) => {
    emit("update:model-value", value);
    emit("close");
  },
});

const attrs = {
  color: "primary",
  "is-dark": false,
  "first-day-of-week": 1,
};

function onDayClick(_: any, event: MouseEvent): void {
  const target = event.target as HTMLElement;
  target.blur();
}
</script>

<style lang="scss">
.vc-primary {
  --vc-accent-50: #e0f7fa;
  --vc-accent-100: #b2ebf2;
  --vc-accent-200: #268bd21a;
  --vc-accent-300: #4dd0e1;
  --vc-accent-400: #26c6da;
  --vc-accent-500: #00bcd4;
  --vc-accent-600: #605dff;
  --vc-accent-700: #0097a7;
  --vc-accent-800: #00838f;
  --vc-accent-900: #006064;
}
.vc-header {
  .vc-title {
    span {
      font-size: 16px;
    }
  }
}
</style>
