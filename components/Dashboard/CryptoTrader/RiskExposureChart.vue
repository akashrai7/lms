<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 position-relative z-1"
    >
      <h5 class="mb-0">Risk Exposure</h5>

      <div class="dropdown action-opt" style="right: -1px">
        <button
          class="btn bg-transparent p-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="ri-more-fill fs-26 text-body lh-1"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
          <li>
            <button class="dropdown-item" @click="updateChartData('daily')">
              Daily
            </button>
          </li>
          <li>
            <button class="dropdown-item" @click="updateChartData('weekly')">
              Weekly
            </button>
          </li>
          <li>
            <button class="dropdown-item" @click="updateChartData('monthly')">
              Monthly
            </button>
          </li>
          <li>
            <button class="dropdown-item" @click="updateChartData('yearly')">
              Yearly
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div style="margin: -51px -17px -50px">
      <div id="risk_exposure_chart"></div>
      <apexchart
        v-if="isClient"
        type="radar"
        height="340"
        :options="riskExposure"
        :series="risk"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RiskExposureChart",
  setup() {
    const isClient = ref(false);
    const currentPeriod = ref("daily"); // Track current period

    const chartData = {
      daily: [
        {
          name: "Risk",
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: "Risk",
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: "Risk",
          data: [30, 70, 80, 15, 45, 10],
        },
      ],
      weekly: [
        {
          name: "Risk",
          data: [60, 70, 40, 60, 90, 40],
        },
        {
          name: "Risk",
          data: [40, 50, 60, 70, 40, 60],
        },
        {
          name: "Risk",
          data: [50, 60, 70, 30, 60, 30],
        },
      ],
      monthly: [
        {
          name: "Risk",
          data: [40, 60, 50, 70, 80, 60],
        },
        {
          name: "Risk",
          data: [60, 40, 70, 50, 60, 40],
        },
        {
          name: "Risk",
          data: [70, 50, 60, 40, 70, 50],
        },
      ],
      yearly: [
        {
          name: "Risk",
          data: [30, 50, 60, 80, 70, 80],
        },
        {
          name: "Risk",
          data: [70, 60, 50, 30, 80, 60],
        },
        {
          name: "Risk",
          data: [60, 70, 80, 50, 60, 70],
        },
      ],
    };

    const risk = ref(chartData.daily);

    const categories = [
      "Market",
      "Technology",
      "Compliance",
      "Liquidity",
      "Operational",
      "Credit",
    ];

    const riskExposure = ref({
      chart: {
        height: 340,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: categories,
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
          },
        },
      },
      markers: {
        size: 3,
        strokeWidth: 0,
      },
      colors: ["#FD5812", "#37D80A", "#605DFF"],
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.4,
        },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return val + "%";
          },
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
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
    });

    // Method to update chart data based on selected period
    const updateChartData = (period: string) => {
      currentPeriod.value = period;
      risk.value = chartData[period as keyof typeof chartData];
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      risk,
      riskExposure,
      updateChartData,
    };
  },
});
</script>
