<template>
  <div
    class="followers-by-gender-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="trezo-card-header d-flex align-items-center justify-content-between"
      >
        <div class="trezo-card-title">
          <h5 class="mb-0 fw-semibold">Followers by Gender</h5>
          <p class="fw-normal">Understand your audience better!</p>
        </div>

        <div class="trezo-card-subtitle">
          <div class="trezo-card-header-menu position-relative">
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
                  <button class="dropdown-item" @click="updateTimeframe('day')">
                    This Day
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    @click="updateTimeframe('week')"
                  >
                    This Week
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    @click="updateTimeframe('month')"
                  >
                    This Month
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    @click="updateTimeframe('year')"
                  >
                    This Year
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="trezo-card-content">
        <div class="info text-center">
          <span class="d-block fw-medium text-black"> 54,500 </span>
          <span class="d-block text-xs"> Total Followers </span>
        </div>

        <div class="chart">
          <apexchart
            v-if="isClient"
            type="pie"
            height="201"
            :options="followersByGender"
            :series="gender"
          ></apexchart>
        </div>

        <div
          class="bottom-info d-flex align-items-center justify-content-between"
        >
          <div class="item d-flex">
            <div class="dot bg-primary rounded-circle"></div>
            <div>
              <span class="d-block fw-medium text-black">
                {{ malePercentage }}%
              </span>
              <span class="b-block mt-0 mb-0 text-xs"> Male Followers </span>
            </div>
          </div>
          <div class="item d-flex">
            <div class="dot bg-purple rounded-circle"></div>
            <div>
              <span class="d-block fw-medium text-black">
                {{ femalePercentage }}%
              </span>
              <span class="b-block mt-0 mb-0 text-xs"> Female Followers </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "FollowersByGenderChart",
  setup() {
    const isClient = ref(false);
    const gender = ref<number[]>([]);
    const malePercentage = ref(0);
    const femalePercentage = ref(0);
    const selectedTimeframe = ref<keyof typeof chartData>("day");

    const chartData = {
      day: [55, 45],
      week: [60, 40],
      month: [50, 50],
      year: [65, 35],
    };

    const followersByGender = ref({
      chart: {
        height: 201,
        type: "pie",
      },
      labels: ["Male Followers", "Female Followers"],
      colors: ["#605DFF", "#AD63F6"],
      legend: {
        show: false,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        y: {
          formatter: function (val: unknown) {
            return val + "%";
          },
        },
      },
      stroke: {
        width: 1,
      },
    });

    const updateTimeframe = (timeframe: "day" | "week" | "month" | "year") => {
      selectedTimeframe.value = timeframe;
      const data = chartData[timeframe];
      malePercentage.value = data[0];
      femalePercentage.value = data[1];
      gender.value = data; // Update the chart series
    };

    onMounted(() => {
      isClient.value = true;
      const initialData = chartData[selectedTimeframe.value];
      malePercentage.value = initialData[0];
      femalePercentage.value = initialData[1];
      gender.value = initialData; // Set initial chart data
      // followersByGenderService.loadChart(initialData); // Load the chart
    });

    onUnmounted(() => {
      // Clean up the chart
    });

    return {
      isClient,
      gender,
      followersByGender,
      malePercentage,
      femalePercentage,
      selectedTimeframe,
      updateTimeframe,
    };
  },
});
</script>

<style lang="scss" scoped>
.followers-by-gender-card {
  .trezo-card-header {
    margin-bottom: 20px;

    .trezo-card-title {
      h5 {
        font-size: 20px;
      }
      p {
        color: #8695aa;
      }
    }
  }
  .trezo-card-content {
    .info {
      span {
        font-size: 16px;

        &.text-xs {
          font-size: 12px;
        }
      }
    }
    .chart {
      margin: {
        top: 15px;
        bottom: 13px;
      }
    }
    .bottom-info {
      .item {
        gap: 10px;

        .dot {
          width: 10px;
          height: 10px;
        }
        span {
          margin: {
            top: -5.5px;
            bottom: -3px;
          }
          &.text-xs {
            font-size: 12px;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .followers-by-gender-card {
    .trezo-card-header {
      .trezo-card-title {
        h5 {
          font-size: 16px;
        }
        p {
          margin-top: 2px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .followers-by-gender-card {
    .trezo-card-header {
      .trezo-card-title {
        h5 {
          font-size: 18px;
        }
        p {
          margin-top: 1px;
        }
      }
    }
  }
}
</style>
