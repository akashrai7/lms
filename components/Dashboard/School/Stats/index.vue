<template>
  <div class="card-group custom-shadow mb-4 rounded-3">
    <DashboardSchoolStatsTotalStudents />

    <DashboardSchoolStatsTotalTeachers />

    <DashboardSchoolStatsAttendanceToday />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Stats",
});
</script>
