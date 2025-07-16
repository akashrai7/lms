<template>
  <div
    class="revenue-vs-expense-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-2 mb-lg-20"
      >
        <h5 class="mb-0">Revenue vs Expense</h5>
        <select
          v-model="selectedTimeframe"
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
          @change="onTimeframeChange"
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
            type="bar"
            height="335"
            :options="revenueExpense"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";

interface SeriesData {
  name: string;
  data: number[];
}

interface ChartData {
  series: SeriesData[];
  categories: string[];
}

export default defineComponent({
  name: "RevenueExpenseChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<"Daily" | "Weekly" | "Monthly" | "Yearly">(
      "Daily"
    );

    // Define chart data for each timeframe
    const chartData: Record<
      "Daily" | "Weekly" | "Monthly" | "Yearly",
      ChartData
    > = {
      Daily: {
        series: [
          { name: "Revenue", data: [5, 7, 8, 6, 9, 10, 7] },
          { name: "Expense", data: [4, 6, 7, 5, 8, 9, 6] },
        ],
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      Weekly: {
        series: [
          { name: "Revenue", data: [25, 19, 32, 60] },
          { name: "Expense", data: [32, 25, 22, 40] },
        ],
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      Monthly: {
        series: [
          {
            name: "Revenue",
            data: [200, 220, 250, 230, 210, 240, 280, 260, 250, 270, 290, 310],
          },
          {
            name: "Expense",
            data: [180, 200, 210, 220, 200, 190, 230, 220, 210, 240, 260, 280],
          },
        ],
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
      },
      Yearly: {
        series: [
          { name: "Revenue", data: [2400, 2600, 2800, 3000, 3200] },
          { name: "Expense", data: [2000, 2200, 2400, 2600, 2800] },
        ],
        categories: ["2021", "2022", "2023", "2024", "2025"],
      },
    };

    // Reactive series and categories
    const series = ref(chartData[selectedTimeframe.value].series);
    const categories = ref(chartData[selectedTimeframe.value].categories);

    // Computed property for revenueExpense
    const revenueExpense = computed(() => ({
      chart: {
        type: "bar",
        height: 335,
        toolbar: {
          show: false,
        },
      },
      colors: ["#FFAA72", "#90C7FF"],
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          columnWidth: "50%",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        show: true,
        colors: ["transparent"],
      },
      grid: {
        show: true,
        borderColor: "#ECF0FF",
      },
      xaxis: {
        categories: categories.value,
        axisTicks: {
          show: true,
          color: "#DDE4FF",
        },
        axisBorder: {
          show: true,
          color: "#DDE4FF",
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
          formatter: (val: number) => `$${val}k`, // Simplified formatter
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
      tooltip: {
        y: {
          formatter: (val: number) => `$${val}k`, // Simplified formatter
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
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
    }));

    // Handle timeframe change
    const onTimeframeChange = () => {
      const data = chartData[selectedTimeframe.value];
      series.value = data.series;
      categories.value = data.categories;
    };

    // Set isClient to true on mount
    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      selectedTimeframe,
      series,
      revenueExpense,
      onTimeframeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.revenue-vs-expense-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -20px;
        bottom: -25px;
      }
    }
  }
}
</style>
