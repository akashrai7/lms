<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-lg-8 col-xxl-9">
        <DashboardSaaSPaymentChart />
      </div>
      <div class="col-lg-4 col-xxl-3">
        <DashboardSaaSActiveUserChart />

        <DashboardSaaSRevenueChart />

        <DashboardSaaSConversionChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <DashboardSaaSTopRefers />
      </div>
      <div class="col-lg-8">
        <DashboardSaaSActiveUsersChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8">
        <DashboardSaaSLatestTransaction />
      </div>
      <div class="col-lg-4">
        <DashboardSaaSUpgradePlans />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <DashboardSaaSActiveUsers />
      </div>
      <div class="col-lg-8">
        <DashboardSaaSProductTradeConditionChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8">
        <DashboardSaaSGrossRevenueChart />
      </div>
      <div class="col-lg-4">
        <DashboardSaaSSalesByCountry />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SaaSPage",
});
</script>
