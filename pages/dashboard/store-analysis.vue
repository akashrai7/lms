<template>
  <div class="row">
    <div class="col-xxl-9">
      <DashboardStoreAnalysisSAWelcome />

      <DashboardStoreAnalysisStats />
    </div>
    <div class="col-xxl-3">
      <DashboardStoreAnalysisCustomerVisits />
    </div>
    <div class="col-lg-4">
      <DashboardStoreAnalysisTopSellingProducts />
    </div>
    <div class="col-lg-8">
      <DashboardStoreAnalysisGrossRevenue />
    </div>
    <div class="col-xxl-9">
      <DashboardStoreAnalysisRecentSales />
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-sm-6 col-xxl-12">
          <DashboardStoreAnalysisSalesByGenderChart />
        </div>
        <div class="col-sm-6 col-xxl-12">
          <DashboardStoreAnalysisSalesThisMonthChart />
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <DashboardStoreAnalysisSalesByCategoryChart />
    </div>
    <div class="col-lg-8">
      <DashboardStoreAnalysisStockAlerts />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StoreAnalysisPage",
});
</script>
