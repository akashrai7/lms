<template>
  <div class="row">
    <div class="col-lg-4">
      <TodaySchedule />
    </div>
    <div class="col-lg-8">
      <TodayAppointments />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodaySchedule from "./TodaySchedule.vue";
import TodayAppointments from "./TodayAppointments.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Appointments",
  components: {
    TodaySchedule,
    TodayAppointments,
  },
});
</script>
