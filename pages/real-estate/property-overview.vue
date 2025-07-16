<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Property Overview" subTitle="Real Estate" />

    <PagesRealEstatePropertyOverview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyOverviewPage",
});
</script>
