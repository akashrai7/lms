<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Patients List" subTitle="Doctor" />

    <PagesDoctorPatientsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PatientsListPage",
});
</script>
