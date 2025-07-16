<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Appointments" subTitle="Doctor" />

    <PagesDoctorAppointments />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppointmentsPage",
});
</script>
