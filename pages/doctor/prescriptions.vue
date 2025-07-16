<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Prescriptions" subTitle="Doctor" />

    <PagesDoctorPrescriptions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrescriptionsPage",
});
</script>
