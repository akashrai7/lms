<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-sm-6 col-xxl-3">
        <DashboardFinanceTotalIncome />
      </div>
      <div class="col-sm-6 col-xxl-3">
        <DashboardFinanceTotalExpenses />
      </div>
      <div class="col-sm-6 col-xxl-3">
        <DashboardFinanceAccountsReceivable />
      </div>
      <div class="col-sm-6 col-xxl-3">
        <DashboardFinanceAccountPayable />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <DashboardFinanceStaticChart />
      </div>
      <div class="col-lg-4">
        <div class="row">
          <div class="col-md-6 col-lg-12">
            <DashboardFinanceCashEndOfTheMonthChart />
          </div>
          <div class="col-md-6 col-lg-12">
            <DashboardFinanceWeeklyExpensesChart />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-4">
        <div class="row">
          <div class="col-md-6 col-xxl-12">
            <DashboardFinanceIncomeSourceChart />
          </div>
          <div class="col-md-6 col-xxl-12">
            <DashboardFinanceNetProfitChart />
          </div>
        </div>
      </div>
      <div class="col-xxl-8">
        <DashboardFinanceTransactionHistory />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-8 col-lg-7">
        <DashboardFinanceDebitCard />
      </div>
      <div class="col-xxl-4 col-lg-5">
        <DashboardFinanceExpenseBreakdownChart />
      </div>
    </div>

    <!-- Modal Card Add -->
    <DashboardFinanceAddCardDetailModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FinancePage",
});
</script>
