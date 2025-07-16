<template>
  <div class="main-content-container overflow-hidden" id="audio_control2">
    <div class="row">
      <div class="col-xxl-8">
        <DashboardPodcastFeatured />
      </div>

      <div class="col-xxl-4">
        <DashboardPodcastPopularHosts />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <DashboardPodcastRecentlyPlayed />
      </div>
      <div class="col-lg-4">
        <DashboardPodcastPlayer />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-8">
        <DashboardPodcastMostPopular />
      </div>
      <div class="col-xxl-4">
        <DashboardPodcastUpcomingEpisodes />

        <DashboardPodcastTodayEarningsChart />
      </div>
    </div>
    <div class="row">
      <div class="col-xl-5 col-xxl-6 col-lg-5">
        <DashboardPodcastListenerAnalyticsChart />
      </div>
      <div class="col-xl-7 col-xxl-6 col-lg-7">
        <DashboardPodcastTopPodcasts />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";

export default defineComponent({
  name: "PodcastPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "podcast-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "podcast-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.podcast-page {
    .sidebar-area {
      background-color: #f6f7f9;
    }
    .header-area {
      padding: 12px 0 !important;
      &.sticky {
        padding-left: 25px !important;
        padding-right: 25px !important;
      }
    }
    .footer-area {
      border: var(--bs-border-width) var(--bs-border-style)
        var(--bs-border-color) !important;
    }
  }
}
</style>
