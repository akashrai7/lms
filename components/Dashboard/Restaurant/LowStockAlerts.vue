<template>
  <div
    class="low-stock-alerts-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-2 mb-lg-20"
      >
        <h5 class="mb-0">Low Stock Alerts</h5>
        <div class="dropdown action-opt">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="ri-more-2-fill"></i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <button class="dropdown-item">This Day</button>
            </li>
            <li>
              <button class="dropdown-item">This Week</button>
            </li>
            <li>
              <button class="dropdown-item">This Month</button>
            </li>
            <li>
              <button class="dropdown-item">This Year</button>
            </li>
          </ul>
        </div>
      </div>

      <div class="trezo-card-content">
        <ul class="p-0 m-0 list-unstyled">
          <li
            v-for="(item, index) in lowStockItems"
            :key="index"
            class="d-flex align-items-center justify-content-between"
          >
            <span class="d-block text-black fw-semibold">{{ item.name }}</span>
            <span class="d-block text-danger fw-bold">{{ item.quantity }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LowStockAlerts",
  setup() {
    const lowStockItems = ref([
      { name: "Thai Bean Soup", quantity: 1 },
      { name: "Banana Shake", quantity: 3 },
      { name: "Chicken Tandoori", quantity: 5 },
      { name: "Thai Chicken Masala", quantity: 5 },
      { name: "Chicken Club Sandwich", quantity: 6 },
      { name: "Shrimp Fried Rice", quantity: 2 },
      { name: "Grilled Salmon", quantity: 4 },
    ]);

    return {
      lowStockItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.low-stock-alerts-card {
  .trezo-card-content {
    ul {
      li {
        margin-bottom: 13px;
        padding-bottom: 13px;
        border-bottom: 1px solid var(--borderColor);

        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom-width: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .low-stock-alerts-card {
    .trezo-card-content {
      ul {
        li {
          margin-bottom: 10px;
          padding-bottom: 10px;
        }
      }
    }
  }
}
</style>
