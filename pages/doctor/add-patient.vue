<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Add Patient" subTitle="Doctor" />

    <PagesDoctorAddPatient />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddPatientPage",
});
</script>
