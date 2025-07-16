<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Customers" subTitle="Real Estate" />

    <PagesRealEstateRealEstateCustomersAddNewCustomer />
    <PagesRealEstateRealEstateCustomers />
    <PagesRealEstateRealEstateCustomersAddNewCustomerModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RealEstateCustomersPage",
});
</script>
