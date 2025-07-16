<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="mb-4">
        <PagesNFTMarketplaceCreatorDetailsCarterID />
      </div>
    </div>
    <div class="col-lg-8">
      <PagesNFTMarketplaceCreatorDetailsCarterNFTs />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreatorDetails",
});
</script>
