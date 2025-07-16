<template>
  <div
    class="patient-distribution-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">Patient Distribution</h5>
        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
          @change="handleTimeRangeChange"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="donut"
            height="306"
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
  name: "PatientDistributionChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<keyof typeof chartData>("Weekly");
    const series = ref<number[]>([]);
    const labels = ref<string[]>([]);

    const chartData = {
      Daily: {
        series: [40, 20, 10],
        labels: ["Male", "Female", "Children"],
      },
      Weekly: {
        series: [50, 30, 20],
        labels: ["Male", "Female", "Children"],
      },
      Monthly: {
        series: [200, 150, 100],
        labels: ["Male", "Female", "Children"],
      },
      Yearly: {
        series: [2500, 2000, 1500],
        labels: ["Male", "Female", "Children"],
      },
    };

    const chartOptions = ref({
      chart: {
        height: 306,
        type: "donut",
      },
      labels: labels.value, // Bind reactive labels
      colors: ["#605DFF", "#58F229", "#5DA8FF"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        show: true,
        colors: ["#ffffff"],
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#3A4252",
                fontSize: "28px",
                fontWeight: "600",
              },
              total: {
                show: true,
                color: "#64748B",
              },
            },
          },
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 8,
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
      series.value = data.series; // Update series
      labels.value = data.labels; // Update labels
      chartOptions.value = {
        ...chartOptions.value, // Preserve other options
        labels: data.labels, // Update labels in chartOptions
      };
    };

    const handleTimeRangeChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const timeframe = target.value as keyof typeof chartData;
      updateTimeframe(timeframe);
    };

    onMounted(() => {
      isClient.value = true;
      updateTimeframe(selectedTimeframe.value); // Initialize with default data
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
.patient-distribution-card {
  .trezo-card-content {
    .chart {
      margin-top: -9px;
    }
  }
}
</style>
