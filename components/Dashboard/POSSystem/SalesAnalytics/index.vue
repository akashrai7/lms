<template>
  <div
    class="card custom-shadow for-dark-rounded-bg rounded-3 border mb-4 bg-body-bg"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3"
      style="padding: 14.5px 25px"
    >
      <h3 class="mb-0 fs-16 fw-normal text-secondary">Sales Analytics</h3>

      <div
        class="dropdown select-dropdown without-border position-relative"
        style="right: -5px"
      >
        <button
          class="dropdown-toggle bg-transparent border text-body rounded-2"
          style="padding-right: 20px"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Last Month
        </button>

        <ul
          class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
        >
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Last Day
            </button>
          </li>
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Last Week
            </button>
          </li>
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Last Month
            </button>
          </li>
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Last Year
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-body bg-white p-4 rounded-top-3 border-top">
      <SalesOverTime />
    </div>
    <div
      class="card-body bg-white px-4 rounded-bottom-3 border-top"
      style="padding-top: 40px; padding-bottom: 42px"
    >
      <SalesByCategory />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SalesOverTime from "./SalesOverTime.vue";
import SalesByCategory from "./SalesByCategory.vue";

export default defineComponent({
  name: "SalesAnalytics",
  components: {
    SalesOverTime,
    SalesByCategory,
  },
});
</script>
