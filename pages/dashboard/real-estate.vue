<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-xxl-4">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <DashboardRealEstateActiveTotalProperty />
          </div>
          <div class="col-md-6 col-xxl-12">
            <DashboardRealEstateRevenueChart />
          </div>
        </div>
      </div>
      <div class="col-xxl-8">
        <DashboardRealEstateNewListingsSoldPropertiesChart />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6">
        <DashboardRealEstatePropertiesForSaleChart />
      </div>
      <div class="col-lg-4 col-md-6">
        <DashboardRealEstatePropertiesForRentChart />
      </div>
      <div class="col-lg-4 col-md-6">
        <DashboardRealEstateNewCustomers />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xxl-5">
        <DashboardRealEstateMostSalesLocation />

        <DashboardRealEstateRecentProperty />
      </div>
      <div class="col-xxl-7">
        <DashboardRealEstateRentalIncomeChart />
        <div class="row">
          <div class="col-lg-6">
            <DashboardRealEstateSocialSearchChart />

            <DashboardRealEstateTopProperty />
          </div>
          <div class="col-lg-6">
            <DashboardRealEstateCustomerReviews />
          </div>
        </div>
      </div>
    </div>

    <DashboardRealEstateLatestTransaction />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RealEstatePage",
});
</script>
