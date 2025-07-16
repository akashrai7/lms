<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Explore All" subTitle="NFT Marketplace" />

    <PagesNFTMarketplaceExploreAllPriceFilter />
    <PagesNFTMarketplaceExploreAll />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExploreAllPage",
});
</script>
