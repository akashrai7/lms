<template>
  <div
    class="patient-retention-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h5 class="mb-0">Patient Retention</h5>
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
              <button
                class="dropdown-item"
                @click="updateTimeframe('This Day')"
              >
                This Day
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                @click="updateTimeframe('This Week')"
              >
                This Week
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                @click="updateTimeframe('This Month')"
              >
                This Month
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                @click="updateTimeframe('This Year')"
              >
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="trezo-card-content">
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="line"
            height="330"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PatientRetentionChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<keyof typeof chartData>("This Week");
    const series = ref<{ name: string; data: number[] }[]>([]);
    const categories = ref<string[]>([]);

    const chartData = {
      "This Day": {
        series: [
          { name: "Old Patient", data: [12, 15, 10, 8, 14] },
          { name: "New Patient", data: [9, 11, 8, 6, 12] },
        ],
        categories: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM"],
      },
      "This Week": {
        series: [
          { name: "Old Patient", data: [45, 52, 38, 24, 33, 26, 21] },
          { name: "New Patient", data: [35, 41, 62, 42, 13, 18, 29] },
        ],
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      "This Month": {
        series: [
          { name: "Old Patient", data: [160, 180, 175, 190] },
          { name: "New Patient", data: [120, 140, 135, 150] },
        ],
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      "This Year": {
        series: [
          { name: "Old Patient", data: [600, 700, 800, 750] },
          { name: "New Patient", data: [500, 550, 600, 580] },
        ],
        categories: ["Q1", "Q2", "Q3", "Q4"],
      },
    };

    const chartOptions = ref({
      chart: {
        height: 330,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: ["#26A0FC", "#26E7A6"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5],
      },
      grid: {
        show: true,
        borderColor: "#ECF0FF",
      },
      xaxis: {
        categories: categories.value, // Bind to reactive categories
        axisTicks: {
          show: true,
          color: "#E0E0E0",
        },
        axisBorder: {
          show: true,
          color: "#E0E0E0",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        min: 0,
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#E0E0E0",
        },
        axisTicks: {
          show: false,
          color: "#E0E0E0",
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
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

    const updateTimeframe = (timeframe: keyof typeof chartData) => {
      selectedTimeframe.value = timeframe;
      const data = chartData[timeframe];
      series.value = data.series;
      categories.value = data.categories; // Update reactive categories
      chartOptions.value = {
        ...chartOptions.value, // Preserve other options
        xaxis: {
          ...chartOptions.value.xaxis, // Preserve xaxis properties
          categories: data.categories, // Update categories
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
      updateTimeframe(selectedTimeframe.value); // Initialize with default data
    });

    return {
      isClient,
      series,
      chartOptions,
      updateTimeframe,
    };
  },
});
</script>

<style lang="scss" scoped>
.patient-retention-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -22px;
        left: -15px;
        bottom: -25px;
      }
    }
  }
}
</style>
