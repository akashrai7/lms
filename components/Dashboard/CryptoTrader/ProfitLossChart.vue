<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
    >
      <h5 class="mb-0">Profit & Loss</h5>

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

    <div style="margin: -21px 0 -20px 0">
      <apexchart
        v-if="isClient"
        type="area"
        height="280"
        :options="profitLossChart"
        :series="profitLoss.series"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "ProfitLossChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("daily");

    const chartData = {
      daily: {
        series: [
          { name: "Profit", data: [35, 45, 55, 35, 65, 38, 63] },
          { name: "Loss", data: [25, 15, 45, 25, 15, 20, 25] },
        ],
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      weekly: {
        series: [
          { name: "Profit", data: [150, 210, 180, 240] },
          { name: "Loss", data: [80, 120, 90, 110] },
        ],
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      monthly: {
        series: [
          { name: "Profit", data: [1200, 1500, 1800, 2100, 1900, 2200] },
          { name: "Loss", data: [500, 700, 600, 800, 750, 900] },
        ],
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yearly: {
        series: [
          { name: "Profit", data: [15000, 18000, 21000, 24000] },
          { name: "Loss", data: [6000, 7500, 9000, 10500] },
        ],
        categories: ["2020", "2021", "2022", "2023"],
      },
    };

    const profitLoss = ref(chartData.daily);

    const profitLossChart = ref({
      chart: {
        type: "area",
        height: 280,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#37D80A", "#EE3E08"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [2, 2],
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.5,
        },
      },
      xaxis: {
        categories: profitLoss.value.categories,
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#3A4252",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        labels: {
          formatter: function (val: string) {
            return val + "%";
          },
          style: {
            colors: "#3A4252",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        fontFamily: "Inter",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 10,
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

    const updateChartData = (period: string) => {
      selectedPeriod.value = period;
      profitLoss.value = chartData[period as keyof typeof chartData];

      // Update the xaxis categories
      profitLossChart.value = {
        ...profitLossChart.value,
        xaxis: {
          ...profitLossChart.value.xaxis,
          categories: profitLoss.value.categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      profitLoss,
      profitLossChart,
      updateChartData,
      selectedPeriod,
    };
  },
});
</script>
