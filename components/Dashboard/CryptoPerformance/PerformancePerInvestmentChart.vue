<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
    >
      <h5 class="mb-0 fw-semibold">Performance Per Investment</h5>
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

    <div style="margin: -15px 0 -14px 0">
      <apexchart
        v-if="isClient"
        type="rangeBar"
        height="411"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef, onMounted } from "vue";

export default defineComponent({
  name: "PerformancePerInvestmentChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref<keyof typeof datasets>("Last Month");

    // Define different datasets for each time period
    const datasets = {
      Today: [
        { x: "Bitcoin", y: [5, 10] },
        { x: "Ethereum", y: [3, 7] },
        { x: "Solana", y: [2, 6] },
        { x: "Tether", y: [1, 4] },
        { x: "USDC", y: [0, 3] },
        { x: "XRP", y: [1, 2] },
      ],
      "Last Week": [
        { x: "Bitcoin", y: [4, 8] },
        { x: "Ethereum", y: [3, 6] },
        { x: "Solana", y: [2, 7] },
        { x: "Tether", y: [1, 5] },
        { x: "USDC", y: [1, 4] },
        { x: "XRP", y: [0, 3] },
      ],
      "Last Month": [
        { x: "Bitcoin", y: [8, 2] },
        { x: "Ethereum", y: [5, 3] },
        { x: "Solana", y: [4, 8] },
        { x: "Tether", y: [3, 5] },
        { x: "USDC", y: [2, 5] },
        { x: "XRP", y: [1, 2] },
      ],
      "Last Year": [
        { x: "Bitcoin", y: [10, 15] },
        { x: "Ethereum", y: [8, 12] },
        { x: "Solana", y: [5, 10] },
        { x: "Tether", y: [3, 7] },
        { x: "USDC", y: [2, 6] },
        { x: "XRP", y: [1, 4] },
      ],
    };

    const series = shallowRef([
      {
        name: "Investment",
        data: datasets[selectedPeriod.value],
      },
    ]);

    // Chart options (unchanged)
    const chartOptions = {
      chart: {
        type: "rangeBar",
        height: 411,
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string) {
          return val + "%";
        },
        style: {
          fontSize: "12px",
          fontFamily: "Inter",
          fontWeight: "400",
        },
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        axisTicks: {
          show: true,
          color: "#64748B",
        },
        axisBorder: {
          show: true,
          color: "#64748B",
        },
        labels: {
          style: {
            colors: "#3A4252",
            fontFamily: "Inter",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        labels: {
          style: {
            colors: "#3A4252",
            fontFamily: "Inter",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
    };

    const updateChartData = (period: keyof typeof datasets) => {
      selectedPeriod.value = period;
      series.value = [
        {
          name: "Investment",
          data: datasets[period],
        },
      ];
    };

    onMounted(() => {
      setTimeout(() => {
        isClient.value = true;
      }, 100);
    });

    return {
      isClient,
      series,
      chartOptions,
      selectedPeriod,
      updateChartData,
    };
  },
});
</script>
