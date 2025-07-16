<template>
  <div class="row">
    <div class="col-xxl-6">
      <DashboardBeautySalonWelcomeBeautySalon />
    </div>
    <div class="col-xxl-6">
      <div class="row">
        <div class="col-sm-6">
          <DashboardBeautySalonCustomerSatisfactionRateChart />
        </div>
        <div class="col-sm-6">
          <DashboardBeautySalonNewCustomers />
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <DashboardBeautySalonTopSellingProducts />
    </div>
    <div class="col-lg-4">
      <DashboardBeautySalonCustomersFromChannels />
    </div>
    <div class="col-lg-4">
      <DashboardBeautySalonFeaturedServices />
    </div>
    <div class="col-lg-8">
      <DashboardBeautySalonRecentAppointments />
    </div>
    <div class="col-lg-8">
      <DashboardBeautySalonRevenueByServicesChart />
    </div>
    <div class="col-lg-4">
      <DashboardBeautySalonTopStylistPerformance />
    </div>
  </div>

  <DashboardBeautySalonTopCustomers />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BeautySalonPage",
});
</script>
