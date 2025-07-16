<template>
  <div class="main-content-container overflow-hidden">
    <DashboardNFTManageYourNFT />

    <div class="px-2 px-sm-5 position-relative mb-4">
      <DashboardNFTSlideItem />
    </div>

    <div class="row">
      <div class="col-xxl-4 col-lg-4">
        <DashboardNFTEthereumRateTab />
      </div>
      <div class="col-xxl-8 col-lg-8">
        <DashboardNFTActiveAuctions />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 col-xxl-9">
        <DashboardNFTFeaturedNFTArtworks />
      </div>
      <div class="col-lg-4 col-xxl-3">
        <DashboardNFTNewMobileApp />
      </div>
    </div>

    <div class="row">
      <div class="col-xxl-8 col-lg-7">
        <DashboardNFTMostPopularSellers />
      </div>
      <div class="col-xxl-4 col-lg-5">
        <DashboardNFTWorldwideTopCreators />
      </div>
    </div>

    <div class="row">
      <div class="col-xxl-3 col-sm-6 order-2 order-xxl-1">
        <DashboardNFTTopCollections />
      </div>
      <div class="col-xxl-6 col-lg-12 order-1 order-xxl-2">
        <DashboardNFTTopNFTs />
      </div>
      <div class="col-xxl-3 col-sm-6 order-3 order-xxl-3">
        <DashboardNFTHistoryOfBids />
      </div>
    </div>
  </div>
  <DashboardNFTCreateNFT />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NFTPage",
});
</script>
