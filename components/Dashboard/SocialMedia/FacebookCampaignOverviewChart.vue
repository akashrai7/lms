<template>
  <div
    class="facebook-campaign-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="trezo-card-header d-sm-flex align-items-center justify-content-between"
      >
        <div class="trezo-card-title">
          <h5 class="mb-0 fw-semibold">Facebook Campaign Overview</h5>
          <p class="fw-normal">Track campaign success at a glance!</p>
        </div>
        <div class="trezo-card-subtitle">
          <div class="trezo-card-header-menu position-relative">
            <select
              class="form-select month-select form-control"
              aria-label="Default select example"
              @change="handleTimeRangeChange"
            >
              <option value="This Day">This Day</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      <div class="trezo-card-content">
        <span class="title fw-medium text-black d-block position-relative">
          <i class="ri-bookmark-line"></i>
          Summer Sale Boost
        </span>
        <div class="chart position-relative">
          <apexchart
            v-if="isClient"
            type="line"
            height="298"
            :options="chartOptions"
            :series="series"
          ></apexchart>

          <div class="items">
            <div class="item d-flex">
              <div class="dot bg-primary rounded-circle"></div>
              <div>
                <span class="d-block fw-medium text-black"> 45,000 </span>
                <span class="b-block mt-0 mb-0 text-xs"> Impressions </span>
              </div>
            </div>
            <div class="item d-flex">
              <div class="dot bg-success rounded-circle"></div>
              <div>
                <span class="d-block fw-medium text-black"> 4,200 </span>
                <span class="b-block mt-0 mb-0 text-xs"> Clicks </span>
              </div>
            </div>
            <div class="item d-flex">
              <div class="dot bg-orange rounded-circle"></div>
              <div>
                <span class="d-block fw-medium text-black"> 9.3% </span>
                <span class="b-block mt-0 mb-0 text-xs"> CTR </span>
              </div>
            </div>
            <div class="item d-flex">
              <div class="dot bg-purple rounded-circle"></div>
              <div>
                <span class="d-block fw-medium text-black"> $5.50 </span>
                <span class="b-block mt-0 mb-0 text-xs">
                  Cost Per Conversion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "FacebookCampaignOverviewChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<keyof typeof chartData>("This Week");
    const series = ref<{ name: string; type: string; data: number[] }[]>([]);
    const categories = ref<string[]>([]);

    // Chart data for different timeframes
    const chartData = {
      "This Day": {
        series: [
          {
            name: "Impressions",
            type: "column",
            data: [100, 200, 150, 300, 250],
          },
          { name: "Clicks", type: "column", data: [50, 100, 75, 150, 125] },
          { name: "CTR", type: "column", data: [10, 15, 20, 25, 30] },
          {
            name: "Cost Per Conversion",
            type: "line",
            data: [5, 10, 8, 12, 15],
          },
        ],
        categories: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM"],
      },
      "This Week": {
        series: [
          {
            name: "Impressions",
            type: "column",
            data: [400, 600, 200, 700, 480, 380, 600],
          },
          {
            name: "Clicks",
            type: "column",
            data: [500, 420, 520, 570, 300, 400, 180],
          },
          {
            name: "CTR",
            type: "column",
            data: [450, 400, 330, 300, 410, 530, 380],
          },
          {
            name: "Cost Per Conversion",
            type: "line",
            data: [480, 650, 500, 800, 550, 800, 900],
          },
        ],
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      "This Month": {
        series: [
          {
            name: "Impressions",
            type: "column",
            data: [1000, 1200, 1100, 1300],
          },
          { name: "Clicks", type: "column", data: [800, 900, 850, 950] },
          { name: "CTR", type: "column", data: [750, 780, 770, 790] },
          {
            name: "Cost Per Conversion",
            type: "line",
            data: [850, 870, 860, 880],
          },
        ],
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      "This Year": {
        series: [
          {
            name: "Impressions",
            type: "column",
            data: [4000, 5000, 4500, 5500],
          },
          { name: "Clicks", type: "column", data: [3000, 3500, 3200, 3800] },
          { name: "CTR", type: "column", data: [2800, 3000, 2900, 3100] },
          {
            name: "Cost Per Conversion",
            type: "line",
            data: [3300, 3500, 3400, 3600],
          },
        ],
        categories: ["Q1", "Q2", "Q3", "Q4"],
      },
    };

    // Chart options
    const chartOptions = ref({
      chart: {
        height: 298,
        type: "line",
        stacked: false,
        toolbar: { show: false },
      },
      colors: ["#605DFF", "#37D80A", "#FD5812", "#BF85FB"],
      stroke: {
        width: [5, 5, 5, 2],
        curve: "smooth",
        colors: ["transparent", "transparent", "transparent", "#BF85FB"],
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 3,
        },
      },
      xaxis: {
        categories: categories.value,
        axisTicks: { show: false, color: "#64748B" },
        axisBorder: { show: true, color: "#D5D9E2" },
        labels: {
          show: true,
          style: { colors: "#64748B", fontSize: "12px" },
        },
      },
      yaxis: {
        min: 0,
        labels: {
          style: { colors: "#64748B", fontSize: "12px" },
          formatter: (val: number) => `$${val}`,
        },
        axisBorder: { show: true, color: "#D5D9E2" },
        axisTicks: { show: false, color: "#D5D9E2" },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (y: number) => y?.toFixed(0) || "0",
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        itemMargin: { horizontal: 8, vertical: 0 },
        labels: { colors: "#64748B" },
        markers: {
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
        strokeDashArray: 8,
      },
    });

    // Load initial chart data
    const loadChart = () => {
      const data = chartData[selectedTimeframe.value];
      series.value = data.series;
      categories.value = data.categories;
      chartOptions.value.xaxis = {
        ...chartOptions.value.xaxis,
        categories: data.categories,
      };
    };

    // Handle time range change
    const handleTimeRangeChange = (event: Event) => {
      selectedTimeframe.value = (event.target as HTMLSelectElement).value as
        | "This Day"
        | "This Week"
        | "This Month"
        | "This Year";
      loadChart();
    };

    // Initialize chart on mount
    onMounted(() => {
      isClient.value = true;
      loadChart();
    });

    return {
      isClient,
      series,
      chartOptions,
      handleTimeRangeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.facebook-campaign-card {
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
    .title {
      font-size: 16px;
      padding-left: 22px;

      i {
        left: 0;
        top: 50%;
        font-size: 18px;
        position: absolute;
        color: var(--orangeColor);
        transform: translateY(-50%);
      }
    }
    .chart {
      padding-right: 150px;
      margin: {
        top: 5px;
        left: -15px;
        bottom: -25px;
      }
      .items {
        right: 0;
        top: 50%;
        position: absolute;
        transform: translateY(-50%);

        .item {
          gap: 10px;
          margin-bottom: 25px;

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
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .facebook-campaign-card {
    .trezo-card-header {
      .trezo-card-title {
        margin-bottom: 8px;

        h5 {
          font-size: 16px;
        }
        p {
          margin-top: 2px;
        }
      }
    }
    .trezo-card-content {
      .title {
        font-size: 14px;
        padding-left: 20px;

        i {
          font-size: 16px;
          margin-top: -1px;
        }
      }
      .chart {
        padding-right: 0;
        margin-bottom: 0;

        .items {
          top: 0;
          position: relative;
          padding-left: 17px;
          transform: translateY(0);

          .item {
            margin-bottom: 15px;

            span {
              margin: {
                top: -3px;
                bottom: -3px;
              }
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .facebook-campaign-card {
    .trezo-card-content {
      .chart {
        padding-right: 150px;
        margin-bottom: -25px;

        .items {
          top: 50%;
          padding-left: 0;
          position: absolute;
          transform: translateY(-50%);
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .facebook-campaign-card {
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
    .trezo-card-content {
      .title {
        font-size: 15px;

        i {
          font-size: 17px;
        }
      }
      .chart {
        margin-top: 0;
      }
    }
  }
}
</style>
