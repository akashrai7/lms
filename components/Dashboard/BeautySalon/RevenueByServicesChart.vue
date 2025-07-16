<template>
  <div
    class="revenue-by-services-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">Revenue By Services</h5>
        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
          @change="handleTimeRangeChange"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly" selected>Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="bar"
            height="322"
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

interface SeriesData {
  name: string;
  data: number[];
}

interface ChartData {
  series: SeriesData[];
  categories: string[];
}

export default defineComponent({
  name: "RevenueByServicesChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<keyof typeof chartData>("Monthly");
    const series = ref<SeriesData[]>([]);

    const chartOptions = ref<{
      chart: {
        type: string;
        height: number;
        stacked: boolean;
        toolbar: { show: boolean };
      };
      colors: string[];
      dataLabels: { style: { colors: string[] } };
      plotOptions: {
        bar: { borderRadius: number; borderRadiusWhenStacked: string };
      };
      fill: { opacity: number };
      grid: { show: boolean; borderColor: string };
      xaxis: {
        categories: string[];
        axisBorder: { show: boolean; color: string };
        axisTicks: { show: boolean; color: string };
        labels: { show: boolean; style: { colors: string; fontSize: string } };
      };
      yaxis: {
        min: number;
        labels: { show: boolean; style: { colors: string; fontSize: string } };
        axisBorder: { show: boolean; color: string };
        axisTicks: { show: boolean; color: string };
      };
      legend: {
        show: boolean;
        fontSize: string;
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
        type: "bar",
        height: 322,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#82FC5A", "#D7B5FD", "#90C7FF", "#9CAAFF"],
      dataLabels: {
        style: {
          colors: ["#343A46"],
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusWhenStacked: "last",
        },
      },
      fill: {
        opacity: 1,
      },
      grid: {
        show: true,
        borderColor: "#ECF0FF",
      },
      xaxis: {
        categories: [] as string[], // Will be dynamically updated
        axisBorder: {
          show: false,
          color: "#DDE4FF",
        },
        axisTicks: {
          show: false,
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
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
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
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 10,
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

    const chartData: Record<string, ChartData> = {
      Daily: {
        series: [
          { name: "Facial", data: [5, 7, 6, 8, 6, 7, 5] },
          { name: "Manicure", data: [2, 3, 4, 3, 2, 3, 4] },
          { name: "Pedicure", data: [1, 2, 2, 1, 2, 3, 2] },
          { name: "Hair Cut", data: [3, 4, 5, 4, 3, 4, 3] },
        ],
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      Weekly: {
        series: [
          { name: "Facial", data: [40, 45, 50, 55] },
          { name: "Manicure", data: [15, 20, 18, 22] },
          { name: "Pedicure", data: [10, 12, 15, 13] },
          { name: "Hair Cut", data: [25, 30, 28, 32] },
        ],
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      Monthly: {
        series: [
          {
            name: "Facial",
            data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43],
          },
          {
            name: "Manicure",
            data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27],
          },
          {
            name: "Pedicure",
            data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14],
          },
          {
            name: "Hair Cut",
            data: [21, 7, 25, 13, 22, 8, 21, 7, 25, 13, 22, 8],
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
          { name: "Facial", data: [500, 600, 700, 800, 900] },
          { name: "Manicure", data: [200, 250, 300, 350, 400] },
          { name: "Pedicure", data: [150, 170, 190, 210, 230] },
          { name: "Hair Cut", data: [300, 350, 400, 450, 500] },
        ],
        categories: ["2021", "2022", "2023", "2024", "2025"],
      },
    };

    const updateTimeframe = (timeframe: keyof typeof chartData) => {
      const data = chartData[timeframe];
      series.value = [...data.series]; // Ensure reactivity

      chartOptions.value = {
        ...chartOptions.value,
        xaxis: {
          ...(chartOptions.value.xaxis || {}),
          categories: [...data.categories],
        },
      };

      console.log("Updated Categories:", chartOptions.value.xaxis.categories);
    };

    const handleTimeRangeChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const timeframe = target.value as keyof typeof chartData;
      selectedTimeframe.value = timeframe;
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
.revenue-by-services-card {
  .trezo-card-content {
    .chart {
      margin: {
        top: -20px;
        left: -15px;
        bottom: -25px;
      }
    }
  }
}
</style>
