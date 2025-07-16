<template>
  <div class="main-content-container overflow-hidden">
    <DashboardCryptoTraderCryptoStatsPanel />

    <div class="row g-4 mb-4">
      <div class="col-xxl-8">
        <DashboardCryptoTraderPriceMovementChart />
      </div>

      <div class="col-xxl-4">
        <div class="row g-4">
          <div class="col-xxl-12 col-md-6">
            <DashboardCryptoTraderTradingVolumeChart />
          </div>

          <div class="col-xxl-12 col-md-6">
            <DashboardCryptoTraderPortfolioDistributionChart />
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-4">
      <div class="col-lg-8">
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <DashboardCryptoTraderProfitLossChart />
          </div>

          <div class="col-md-6">
            <DashboardCryptoTraderRiskExposureChart />
          </div>
        </div>

        <DashboardCryptoTraderRecentTransactions />
      </div>
      <div class="col-lg-4">
        <DashboardCryptoTraderLivePriceTracker />

        <DashboardCryptoTraderTradesPerMonthChart />
      </div>
    </div>

    <div class="row g-4 mb-4">
      <div class="col-xxl-4 col-md-6">
        <DashboardCryptoTraderAssetAllocationChart />
      </div>
      <div class="col-xxl-4 col-md-6">
        <DashboardCryptoTraderGainersLosers />
      </div>
      <div class="col-xxl-4">
        <DashboardCryptoTraderMarketSentimentIndicatorChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoTraderPage",
});
</script>
