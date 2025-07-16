<template>
  <div class="main-content-container overflow-hidden">
    <DashboardCryptoPerformanceBreadcrumb />

    <div class="row g-4 mb-4">
      <div class="col-lg-6">
        <DashboardCryptoPerformancePerInvestmentChart />
      </div>
      <div class="col-lg-6">
        <div class="row g-4">
          <div class="col-lg-6 col-sm-6">
            <DashboardCryptoPerformancePortfolioValue />
          </div>
          <div class="col-lg-6 col-sm-6">
            <DashboardCryptoPerformanceCryptoMarketCap />
          </div>
          <div class="col-lg-12">
            <DashboardCryptoPerformanceTransactionsHistory />
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-4">
      <div class="col-lg-5">
        <DashboardCryptoPerformanceMarketPerformanceChart />
      </div>
      <div class="col-lg-7">
        <DashboardCryptoPerformanceMetricsChart />
      </div>
    </div>

    <DashboardCryptoPerformanceIndividualAssetPerformance />

    <div class="row g-4 mb-4">
      <div class="col-lg-4">
        <DashboardCryptoPerformanceRiskStabilityIndicatorsChart />
      </div>
      <div class="col-lg-8">
        <DashboardCryptoPerformanceComparativeAnalysisChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoPerformancePage",
});
</script>
