<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Patient Details" subTitle="Doctor" />

    <PagesDoctorPatientDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PatientDetailsPage",
});
</script>
