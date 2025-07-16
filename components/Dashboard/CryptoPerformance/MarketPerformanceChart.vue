<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
    >
      <h5 class="mb-0 fw-semibold">Market Performance</h5>
      <div
        class="dropdown select-dropdown without-border position-relative"
        style="right: -5px"
      >
        <button
          class="dropdown-toggle bg-transparent border text-body rounded-2"
          style="padding-right: 20px"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ selectedPeriod }}
        </button>

        <ul
          class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
        >
          <li>
            <button
              class="dropdown-item text-secondary py-2 px-3"
              @click="updateChartData('Today')"
            >
              Today
            </button>
          </li>
          <li>
            <button
              class="dropdown-item text-secondary py-2 px-3"
              @click="updateChartData('Last Week')"
            >
              Last Week
            </button>
          </li>
          <li>
            <button
              class="dropdown-item text-secondary py-2 px-3"
              @click="updateChartData('Last Month')"
            >
              Last Month
            </button>
          </li>
          <li>
            <button
              class="dropdown-item text-secondary py-2 px-3"
              @click="updateChartData('Last Year')"
            >
              Last Year
            </button>
          </li>
        </ul>
      </div>
    </div>

    <apexchart
      v-if="isClient"
      type="pie"
      height="340"
      :options="marketPerformance"
      :series="performance"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MarketPerformanceChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("Last Month");
    const performance = ref([25, 18, 22, 35, 15, 28]);

    // Define different datasets for each time period
    const chartData = {
      Today: [10, 15, 20, 25, 10, 20],
      "Last Week": [15, 20, 18, 30, 12, 25],
      "Last Month": [25, 18, 22, 35, 15, 28],
      "Last Year": [30, 25, 20, 40, 20, 35],
    };

    const marketPerformance = ref({
      chart: {
        height: 340,
        type: "pie",
      },
      labels: [
        "Revenue Growth",
        "Profit Margins",
        "Cost of Goods Sold",
        "Market Share",
        "Sales Volume",
        "Return on Investment",
      ],
      colors: [
        "#37D80A",
        "#3584FC",
        "#FE7A36",
        "#AD63F6",
        "#FF4023",
        "#605DFF",
      ],
      stroke: {
        width: 0,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: true,
        fontSize: "12px",
        fontFamily: "Inter",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 6,
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
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
    });

    // Function to update chart data based on selected period
    const updateChartData = (period: string) => {
      selectedPeriod.value = period;
      performance.value = [...chartData[period as keyof typeof chartData]];
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      performance,
      marketPerformance,
      selectedPeriod,
      updateChartData,
    };
  },
});
</script>
