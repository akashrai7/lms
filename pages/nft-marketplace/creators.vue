<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Creators" subTitle="NFT Marketplace" />

    <PagesNFTMarketplaceCreatorsFilterContent />
    <PagesNFTMarketplaceCreators />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreatorsPage",
});
</script>
