<template>
  <div class="card bg-white border-0 rounded-3">
    <div class="p-25">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
      >
        <h5 class="mb-0">Revenue Goal Progress</h5>

        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle border text-body rounded-2 bg-gray-100"
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
                @click="updateChartData('Daily')"
              >
                Daily
              </button>
            </li>
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

      <div style="margin: -20px 0 -25px -15px">
        <apexchart
          v-if="isClient"
          type="line"
          height="399"
          :options="orderSummary"
          :series="summary"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RevenueGoalProgress",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("Monthly");

    // Sample data for different time periods
    const dataSets = {
      Daily: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        prediction: [45, 52, 38, 60, 48, 52, 58],
        gained: [50, 48, 40, 55, 45, 60, 50],
      },
      Weekly: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        prediction: [120, 135, 125, 140],
        gained: [125, 130, 130, 145],
      },
      Monthly: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        prediction: [
          108, 130, 110, 140, 130, 115, 125, 115, 130, 140, 140, 130,
        ],
        gained: [135, 115, 128, 120, 125, 130, 135, 130, 135, 145, 120, 125],
      },
      Yearly: {
        categories: ["2019", "2020", "2021", "2022", "2023"],
        prediction: [1250, 1300, 1400, 1450, 1500],
        gained: [1300, 1350, 1420, 1480, 1520],
      },
    };

    const summary = ref<{ name: string; data: number[] }[]>([
      { name: "Prediction", data: [] },
      { name: "Gained", data: [] },
    ]);

    const orderSummary = ref<{
      chart: { type: string; height: number; toolbar: { show: boolean } };
      colors: string[];
      stroke: { width: number; curve: string; dashArray: number[] };
      grid: { show: boolean; borderColor: string };
      dataLabels: { enabled: boolean };
      xaxis: {
        categories: string[];
        axisTicks: { show: boolean; color: string };
        axisBorder: { show: boolean; color: string };
        labels: {
          show: boolean;
          style: { colors: string; fontSize: string; fontFamily: string };
        };
      };
      yaxis: {
        labels: {
          formatter: (val: string) => string;
          style: { colors: string; fontSize: string; fontFamily: string };
        };
        axisBorder: { show: boolean; color: string };
        axisTicks: { show: boolean; color: string };
      };
      tooltip: { y: { formatter: (val: string) => string } };
      fill: { opacity: number };
      legend: {
        show: boolean;
        fontSize: string;
        fontFamily: string;
        position: string;
        horizontalAlign: string;
        itemMargin: { horizontal: number; vertical: number };
        labels: { colors: string };
        markers: {
          size: number;
          offsetX: number;
          offsetY: number;
          shape: string;
        };
      };
    }>({
      chart: {
        type: "line",
        height: 399,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF", "#E9D5FF"],
      stroke: {
        width: 4,
        curve: "straight",
        dashArray: [0, 8],
      },
      grid: {
        show: true,
        borderColor: "#ECF0FF",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
        axisTicks: {
          show: false,
          color: "#DDE4FF",
        },
        axisBorder: {
          show: false,
          color: "#DDE4FF",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (val: string) => "$" + val + "K",
          style: {
            colors: "#8695AA",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
        axisBorder: {
          show: false,
          color: "#DDE4FF",
        },
        axisTicks: {
          show: false,
          color: "#DDE4FF",
        },
      },
      tooltip: {
        y: {
          formatter: (val: string) => val + "k",
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: true,
        fontSize: "12px",
        fontFamily: "Inter",
        position: "bottom",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 8,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "square",
        },
      },
    });

    // Function to update chart data based on selected period
    const updateChartData = (period: string) => {
      selectedPeriod.value = period;
      const data = dataSets[period as keyof typeof dataSets];

      summary.value = [
        { name: "Prediction", data: data.prediction },
        { name: "Gained", data: data.gained },
      ];

      orderSummary.value = {
        ...orderSummary.value,
        xaxis: {
          ...orderSummary.value.xaxis,
          categories: data.categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
      // Initialize with monthly data
      updateChartData("Monthly");
    });

    return {
      isClient,
      summary,
      orderSummary,
      selectedPeriod,
      updateChartData,
    };
  },
});
</script>
