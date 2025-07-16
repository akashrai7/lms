<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Marketplace" subTitle="NFT Marketplace" />

    <PagesNFTMarketplaceMarketplaceManageYourNFT />

    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
    >
      <h3 class="mb-0">Featured NFT Artworks</h3>
      <NuxtLink
        to="/nft-marketplace/creators"
        class="d-flex text-decoration-none"
      >
        <span>Browse All</span>
        <i class="ri-arrow-right-s-line fs-15"></i>
      </NuxtLink>
    </div>

    <PagesNFTMarketplaceMarketplaceFeaturedNFTArtworks />

    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
    >
      <h3 class="mb-0">Top Creators</h3>
      <NuxtLink
        to="/nft-marketplace/creators"
        class="d-flex text-decoration-none"
      >
        <span>Browse All</span>
        <i class="ri-arrow-right-s-line fs-15"></i>
      </NuxtLink>
    </div>

    <PagesNFTMarketplaceMarketplaceTopCreators />
  </div>
  <PagesNFTMarketplaceMarketplaceCreateNFT />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarketplacePage",
});
</script>
