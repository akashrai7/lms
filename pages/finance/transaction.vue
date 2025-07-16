<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Transaction" subTitle="Finance" />

    <PagesFinanceTransaction />
    <PagesFinanceTransactionAddNewTransactionModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransactionPage",
});
</script>
