<template>
  <div class="main-content-container overflow-hidden">
    <DashboardPOSSystemStats />

    <div class="row">
      <div class="col-lg-8">
        <DashboardPOSSystemSalesAnalytics />
      </div>
      <div class="col-lg-4">
        <DashboardPOSSystemCustomerSegmentation />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-8">
        <DashboardPOSSystemCategoriesTab />
      </div>
      <div class="col-xxl-4">
        <DashboardPOSSystemOrderDetails />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";

export default defineComponent({
  name: "POSSystemPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white", "pos-system-page");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white", "pos-system-page");
    });
  },
});
</script>

<style lang="scss">
body {
  &.pos-system-page {
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
