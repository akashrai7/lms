<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Agent Overview" subTitle="Real Estate" />

    <PagesRealEstateAgentOverview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgentOverviewPage",
});
</script>
