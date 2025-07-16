<template>
  <div class="main-content-container overflow-hidden">
    <div class="row g-4 mb-4">
      <div class="col-lg-8">
        <DashboardCreditCardMyCards />
      </div>
      <div class="col-lg-4">
        <div class="row g-4">
          <div class="col-lg-12 col-sm-6">
            <DashboardCreditCardTotalBalance />
          </div>
          <div class="col-lg-12 col-sm-6">
            <DashboardCreditCardTotalExpense />
          </div>
        </div>
      </div>
    </div>
    <div class="row g-4 mb-4">
      <div class="col-lg-4">
        <DashboardCreditCardCardsWithAmountChart />
      </div>
      <div class="col-lg-4 col-md-6">
        <DashboardCreditCardDailyLimit />
      </div>
      <div class="col-lg-4 col-md-6">
        <DashboardCreditCardQuickTransfer />
      </div>
    </div>
    <div class="row g-4 mb-4">
      <div class="col-xxl-9">
        <DashboardCreditCardRecentTransactions />
      </div>
      <div class="col-xxl-3">
        <div class="row g-4">
          <div class="col-xxl-12 col-sm-6">
            <DashboardCreditCardCreditUtilizationRatioChart />
          </div>
          <div class="col-xxl-12 col-sm-6">
            <DashboardCreditCardMonthlySpendingChart />
          </div>
        </div>
      </div>
    </div>
    <div class="row g-4 mb-4">
      <div class="col-xxl-4 col-md-12 col-lg-6">
        <DashboardCreditCardSpendingBreakdownChart />
      </div>
      <div class="col-xxl-4 col-md-6">
        <DashboardCreditCardInterestChargeFeesChart />
      </div>
      <div class="col-xxl-4 col-md-6 col-lg-12">
        <DashboardCreditCardStatisticsChart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreditCardPage",
});
</script>
