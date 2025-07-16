<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle
      pageTitle="Property Details"
      subTitle="Real Estate Agent"
    />

    <PagesRealEstateAgentPropertyDetails />
    <PagesRealEstateAgentPropertyDetailsReviews />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyDetailsPage",
});
</script>
