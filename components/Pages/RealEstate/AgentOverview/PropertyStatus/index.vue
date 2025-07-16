<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-6">
      <PagesRealEstateAgentOverviewPropertyStatusPropertiesForSaleChart />
    </div>
    <div class="col-lg-6 col-md-6">
      <PagesRealEstateAgentOverviewPropertyStatusPropertiesForRentChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyStatus",
});
</script>
