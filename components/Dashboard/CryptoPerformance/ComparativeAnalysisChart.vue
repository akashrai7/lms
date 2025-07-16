<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
    >
      <h5 class="mb-0 fw-semibold">Comparative Analysis</h5>
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
              @click="updateChartData('Weekly')"
            >
              Weekly
            </button>
          </li>
          <li>
            <button
              class="dropdown-item text-secondary py-2 px-3"
              @click="updateChartData('Monthly')"
            >
              Monthly
            </button>
          </li>
          <li>
            <button
              class="dropdown-item text-secondary py-2 px-3"
              @click="updateChartData('Yearly')"
            >
              Yearly
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div style="margin: -10px 0 -20px 0">
      <apexchart
        v-if="isClient"
        type="bubble"
        height="385"
        :options="comparativeAnalysis"
        :series="analysis"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ComparativeAnalysisChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("Monthly");

    const chartData = {
      Weekly: [
        { name: "Bitcoin", data: [[50, 10, 30]] },
        { name: "Ethereum", data: [[150, 25, 45]] },
        { name: "Cardano", data: [[250, 40, 60]] },
        { name: "Solana", data: [[325, 20, 35]] },
        { name: "Tether", data: [[425, 30, 45]] },
        { name: "XRP", data: [[450, 10, 40]] },
      ],
      Monthly: [
        { name: "Bitcoin", data: [[100, 20, 50]] },
        { name: "Ethereum", data: [[300, 50, 70]] },
        { name: "Cardano", data: [[500, 80, 80]] },
        { name: "Solana", data: [[650, 40, 50]] },
        { name: "Tether", data: [[850, 60, 70]] },
        { name: "XRP", data: [[900, 20, 60]] },
      ],
      Yearly: [
        { name: "Bitcoin", data: [[200, 40, 100]] },
        { name: "Ethereum", data: [[600, 100, 140]] },
        { name: "Cardano", data: [[1000, 160, 160]] },
        { name: "Solana", data: [[1300, 80, 100]] },
        { name: "Tether", data: [[1700, 120, 140]] },
        { name: "XRP", data: [[1800, 40, 120]] },
      ],
    };

    const analysis = ref(
      chartData[selectedPeriod.value as keyof typeof chartData]
    );
    const comparativeAnalysis = ref({
      chart: {
        type: "bubble",
        height: 385,
        toolbar: { show: false },
      },
      colors: [
        "#757DFF",
        "#5DA8FF",
        "#BF85FB",
        "#1E8308",
        "#FE7A36",
        "#174EDE",
      ],
      dataLabels: { enabled: false },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      fill: { opacity: 1 },
      xaxis: {
        tickAmount: 8,
        min: 0,
        max: 1000,
        axisTicks: { show: true, color: "#64748B" },
        axisBorder: { show: true, color: "#64748B" },
        labels: {
          show: true,
          style: { colors: "#3A4252", fontSize: "12px", fontFamily: "Inter" },
        },
      },
      yaxis: {
        min: 0,
        labels: {
          formatter: (val: string) => "$" + val + "k",
          style: { colors: "#3A4252", fontSize: "12px", fontFamily: "Inter" },
        },
        axisBorder: { show: false, color: "#64748B" },
        axisTicks: { show: false, color: "#64748B" },
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        fontFamily: "Inter",
        horizontalAlign: "center",
        itemMargin: { horizontal: 10, vertical: 8 },
        labels: { colors: "#64748B" },
        markers: {
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
    });

    const updateChartData = (period: string) => {
      selectedPeriod.value = period;
      analysis.value = chartData[period as keyof typeof chartData];

      // Adjust x-axis max based on period if needed
      comparativeAnalysis.value.xaxis.max = period === "Yearly" ? 2000 : 1000;
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      analysis,
      comparativeAnalysis,
      selectedPeriod,
      updateChartData,
    };
  },
});
</script>
