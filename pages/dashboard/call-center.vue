<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-xxl-8">
        <DashboardCallCenterOverview />
      </div>
      <div class="col-xxl-4">
        <div class="row">
          <div class="col-xxl-12 col-md-6">
            <DashboardCallCenterInboundCallsChart />
          </div>
          <div class="col-xxl-12 col-md-6">
            <DashboardCallCenterOutboundCallsChart />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-xxl-6">
        <DashboardCallCenterAgentsPerformanceOverview />
      </div>
      <div class="col-lg-5 col-xxl-6">
        <DashboardCallCenterGeography />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-4">
        <DashboardCallCenterAgentAvgEarnings />
      </div>
      <div class="col-xxl-8">
        <DashboardCallCenterRecentCalls />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "CallCenterPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white");
    });
  },
});
</script>

<style lang="scss">
body {
  &.bg-white {
    .sidebar-area {
      border-right: var(--bs-border-width) var(--bs-border-style)
        var(--bs-border-color) !important;
    }
    .header-area {
      padding: 12px 0 !important;
      &.sticky {
        padding-left: 25px !important;
        padding-right: 25px !important;
      }
      &.mb-4 {
        margin-bottom: 0.5rem !important;
      }
    }
    .footer-area {
      border: var(--bs-border-width) var(--bs-border-style)
        var(--bs-border-color) !important;
    }
  }
}
</style>
