<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Property List" subTitle="Real Estate" />

    <PagesRealEstatePropertyListAddProperty />
    <PagesRealEstatePropertyList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PropertyListPage",
});
</script>
