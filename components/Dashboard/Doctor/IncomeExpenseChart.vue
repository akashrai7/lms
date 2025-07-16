<template>
  <div
    class="income-vs-expense-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">Income vs Expense</h5>
        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
          @change="handleTimeRangeChange"
        >
          <option value="This Day">This Day</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="bar"
            height="336"
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
  name: "IncomeExpenseChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<keyof typeof chartData>("This Week");
    const series = ref<{ name: string; data: number[] }[]>([]);
    const chartOptions = ref({
      chart: {
        type: "bar",
        height: 336,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#4936F5", "#C2CDFF"],
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "24px",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
        borderColor: "#ECEEF2",
      },
      xaxis: {
        categories: [] as string[],
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
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (val: number) => {
            return val + "K";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
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
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 15,
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

    const chartData = {
      "This Day": {
        series: [
          { name: "Income", data: [10] },
          { name: "Expense", data: [-8] },
        ],
        categories: ["Today"],
      },
      "This Week": {
        series: [
          { name: "Income", data: [70, 42, 70, 120, 40, 70, 90] },
          { name: "Expense", data: [-70, -44, -70, -120, -40, -70, -120] },
        ],
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      "This Month": {
        series: [
          { name: "Income", data: [200, 180, 250, 300] },
          { name: "Expense", data: [-150, -120, -200, -250] },
        ],
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      "This Year": {
        series: [
          { name: "Income", data: [900, 1100, 950, 1200] },
          { name: "Expense", data: [-800, -950, -900, -1100] },
        ],
        categories: ["Q1", "Q2", "Q3", "Q4"],
      },
    };

    const updateTimeframe = (timeframe: keyof typeof chartData) => {
      selectedTimeframe.value = timeframe;
      const data = chartData[timeframe];
      series.value = data.series;
      chartOptions.value = {
        ...chartOptions.value,
        xaxis: {
          ...chartOptions.value.xaxis,
          categories: data.categories,
        },
      };
    };

    const handleTimeRangeChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const timeframe = target.value as keyof typeof chartData;
      updateTimeframe(timeframe);
    };

    onMounted(() => {
      isClient.value = true;
      updateTimeframe(selectedTimeframe.value);
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
/* Add your styles here */
</style>
