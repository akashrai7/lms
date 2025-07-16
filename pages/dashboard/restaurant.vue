<template>
  <div class="row">
    <div class="col-xxl-6">
      <DashboardRestaurantStatsToday />

      <div class="row">
        <div class="col-sm-6">
          <DashboardRestaurantTotalOrdersChart />
        </div>
        <div class="col-sm-6">
          <DashboardRestaurantPendingOrdersChart />
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <div class="row">
        <div class="col-sm-6">
          <DashboardRestaurantRevenue />
        </div>
        <div class="col-sm-6">
          <DashboardRestaurantExpense />
        </div>
      </div>

      <DashboardRestaurantTopSellingItems />
    </div>
    <div class="col-lg-12">
      <DashboardRestaurantRecentOrdersList />
    </div>
    <div class="col-xxl-3">
      <DashboardRestaurantOrderSummaryChart />
    </div>
    <div class="col-xxl-6 col-lg-6">
      <DashboardRestaurantRevenueExpenseChart />
    </div>
    <div class="col-xxl-3 col-lg-6">
      <DashboardRestaurantLowStockAlerts />
    </div>
    <div class="col-lg-4 col-md-6 col-xl-6 col-xxl-4">
      <DashboardRestaurantStaffPerformanceScores />
    </div>
    <div class="col-lg-4 col-md-6 col-xl-6 col-xxl-4">
      <DashboardRestaurantRevenueByBranches />
    </div>
    <div class="col-lg-4 col-xl-12 col-xxl-4">
      <DashboardRestaurantTickets />
    </div>
    <div class="col-lg-12">
      <DashboardRestaurantCustomerRatings />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestaurantPage",
});
</script>
