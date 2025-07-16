<template>
  <div class="row">
    <div class="col-xxl-6">
      <div class="row">
        <div class="col-lg-4 col-6">
          <DashboardSocialMediaInstagramFollowers />
        </div>
        <div class="col-lg-4 col-6">
          <DashboardSocialMediaLinkedInFollowers />
        </div>
        <div class="col-lg-4 col-6">
          <DashboardSocialMediaTikTokFollowers />
        </div>
        <div class="col-lg-4 col-6">
          <DashboardSocialMediaFacebookFollowers />
        </div>
        <div class="col-lg-4 col-6">
          <DashboardSocialMediaXFollowers />
        </div>
        <div class="col-lg-4 col-6">
          <DashboardSocialMediaYouTubeSubscribers />
        </div>
      </div>
    </div>
    <div class="col-xxl-6">
      <DashboardSocialMediaLinkedInNetFollowersChart />
    </div>
    <div class="col-xxl-4 col-md-6">
      <DashboardSocialMediaSuggestions />
    </div>
    <div class="col-xxl-4 col-md-6">
      <DashboardSocialMediaFollowersByGenderChart />
    </div>
    <div class="col-xxl-4 col-md-12">
      <DashboardSocialMediaRecentInstagramFollowers />
    </div>
    <div class="col-lg-8">
      <DashboardSocialMediaFacebookCampaignOverviewChart />
    </div>
    <div class="col-lg-4">
      <DashboardSocialMediaUpgradePlan />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialMediaPage",
});
</script>
