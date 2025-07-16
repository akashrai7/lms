<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Wallet" subTitle="Finance" />

    <PagesFinanceWallet />
    <PagesFinanceWalletAddCardDetailModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WalletPage",
});
</script>
