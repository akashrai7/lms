<template>
  <div
    class="revenue-by-branches-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
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
        <div class="text-center">
          <img src="@/assets/images/map.svg" alt="map" />
        </div>
        <ul class="p-0 mb-0 list-unstyled">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="d-flex align-items-center justify-content-between"
          >
            <div class="flag d-flex align-items-center">
              <img :src="item.flag" :alt="item.country" />
              <span class="d-block fw-medium">{{ item.country }}</span>
            </div>
            <div class="percentage-progress d-flex align-items-center">
              <div
                class="progress trezo-progress w-100"
                role="progressbar"
                :aria-valuenow="item.percentage"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  :class="getProgressBarClass(item.percentage)"
                  :style="{ width: item.percentage + '%' }"
                ></div>
              </div>
              <span class="d-block">{{ item.percentage }}%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import flagPortugal from "@/assets/images/flags/portugal.svg";
import flagGermany from "@/assets/images/flags/germany.svg";
import flagSpain from "@/assets/images/flags/spain.svg";
import flagCanada from "@/assets/images/flags/canada.svg";
import flagUSA from "@/assets/images/flags/usa.svg";

interface StockData {
  country: string;
  flag: string;
  percentage: number;
}

export default defineComponent({
  name: "RevenueByBranches",
  setup() {
    const items = ref<StockData[]>([
      {
        country: "Portugal",
        flag: flagPortugal,
        percentage: 85,
      },
      {
        country: "Germany",
        flag: flagGermany,
        percentage: 65,
      },
      {
        country: "Spain",
        flag: flagSpain,
        percentage: 45,
      },
      {
        country: "Canada",
        flag: flagCanada,
        percentage: 75,
      },
      {
        country: "USA",
        flag: flagUSA,
        percentage: 20,
      },
    ]);

    const getProgressBarClass = (percentage: number) => {
      if (percentage >= 75) return "bg-success";
      if (percentage >= 50) return "bg-secondary";
      if (percentage >= 25) return "bg-purple";
      return "bg-danger";
    };

    return {
      items,
      getProgressBarClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.revenue-by-branches-card {
  .trezo-card-content {
    ul {
      margin-top: 25px;

      li {
        border-top: 1px solid var(--borderColor);
        padding: {
          top: 12.7px;
          bottom: 12.7px;
        }
        .flag {
          gap: 8px;

          img {
            width: 24px;
          }
        }
        .percentage-progress {
          width: 150px;
          gap: 12px;

          .trezo-progress {
            --bs-progress-height: 5px;
          }
          .percentage {
            font-size: 12px;
          }
        }
        &:last-child {
          border-bottom: 1px solid var(--borderColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .revenue-by-branches-card {
    .trezo-card-content {
      ul {
        margin-top: 17px;

        li {
          padding: {
            top: 10px;
            bottom: 10px;
          }
          .percentage-progress {
            width: 130px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .revenue-by-branches-card {
    .trezo-card-content {
      ul {
        margin-top: 20px;
      }
    }
  }
}
</style>
