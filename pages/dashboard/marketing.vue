<template>
  <div class="main-content-container overflow-hidden">
    <DashboardMarketingStatusContent />
    <div class="row">
      <div class="col-lg-8">
        <DashboardMarketingPerformanceOverviewChart />
      </div>
      <div class="col-lg-4">
        <DashboardMarketingNewMobileApp />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <DashboardMarketingHighlightsContent />

        <DashboardMarketingChannelsContent />
      </div>
      <div class="col-lg-8">
        <DashboardMarketingCampaignsContent />
        <div class="row">
          <div class="col-md-6">
            <DashboardMarketingExternalLinks />
          </div>
          <div class="col-md-6">
            <DashboardMarketingInstagramCampaignsChart />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-4">
        <DashboardMarketingNewMarketingTool />
      </div>
      <div class="col-lg-9 col-md-8">
        <DashboardMarketingInstagramSubscriberChart />
      </div>
    </div>
  </div>
  <DashboardMarketingCreateCampaignsModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarketingPage",
});
</script>
