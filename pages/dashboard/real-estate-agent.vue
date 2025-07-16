<template>
  <div class="main-content-container overflow-hidden">
    <DashboardRealEstateAgentWelcomeRealEstateAgent />

    <DashboardRealEstateAgentStats />
    <div class="row g-4 mb-4">
      <div class="col-lg-8">
        <DashboardRealEstateAgentTotalRevenueChart />
      </div>
      <div class="col-lg-4">
        <DashboardRealEstateAgentTopChannels />
      </div>
    </div>
    <div class="row g-4 mb-4">
      <div class="col-lg-4">
        <DashboardRealEstateAgentRecentClients />
      </div>
      <div class="col-lg-8">
        <DashboardRealEstateAgentMyFeaturedListings />
      </div>
    </div>
    <div class="row g-4 mb-4">
      <div class="col-lg-8">
        <DashboardRealEstateAgentRevenueGoalProgress />
      </div>
      <div class="col-lg-4">
        <DashboardRealEstateAgentSalesByCountry />
      </div>
    </div>
    <div class="row g-4 mb-4">
      <div class="col-lg-3">
        <DashboardRealEstateAgentDownloadApp />
      </div>
      <div class="col-lg-9">
        <DashboardRealEstateAgentLatestTransactions />
      </div>
    </div>

    <DashboardRealEstateAgentClientRatings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RealEstateAgentPage",
});
</script>
