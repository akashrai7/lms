<template>
  <div
    class="sa-gross-revenue-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <div class="trezo-card-title">
          <span class="d-block">Gross Revenue</span>
          <div class="revenue d-flex align-items-center">
            <h3 class="mb-0 lh-1">$1,528</h3>
            <span class="trezo-badge shipped">+5.4%</span>
          </div>
          <span class="text-xs d-block">vs previous 30 days</span>
        </div>

        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
          @change="handleTimeRangeChange"
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly" selected>Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="chart">
          <apexchart
            v-if="isClient && chartOptions"
            type="line"
            height="315"
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
  name: "GrossRevenue",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<keyof typeof chartData>("Monthly");
    const series = ref<SeriesData[]>([]);
    const chartOptions = ref<any>(null);

    const chartData: Record<string, ChartData> = {
      Weekly: {
        series: [
          { name: "Sales Revenue", data: [108, 110, 105, 120, 115, 125, 130] },
          { name: "Sales Volume", data: [125, 135, 145, 125, 130, 115, 140] },
          { name: "Order Value", data: [125, 130, 115, 140, 125, 135, 145] },
        ],
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      Monthly: {
        series: [
          {
            name: "Sales Revenue",
            data: [108, 130, 110, 140, 130, 115, 125, 115, 125, 140, 140, 130],
          },
          {
            name: "Sales Volume",
            data: [140, 120, 125, 130, 110, 145, 135, 110, 130, 120, 130, 145],
          },
          {
            name: "Order Value",
            data: [125, 115, 128, 120, 125, 130, 135, 130, 135, 145, 120, 125],
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
          { name: "Sales Revenue", data: [150, 175, 190, 200, 220] },
          { name: "Sales Volume", data: [240, 250, 170, 200, 210] },
          { name: "Order Value", data: [170, 200, 210, 240, 250] },
        ],
        categories: ["2019", "2020", "2021", "2022", "2023"],
      },
    };

    const initializeChartOptions = (categories: string[]) => {
      return {
        chart: {
          type: "line",
          height: 315,
          toolbar: {
            show: false,
          },
        },
        colors: ["#757DFF", "#AD63F6", "#37D80A"],
        stroke: {
          width: 3,
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
          categories: categories,
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
            },
          },
        },
        yaxis: {
          labels: {
            formatter: (val: number) => `$${val}K`,
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
            formatter: (val: number) => `${val}k`,
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
            size: 6,
            offsetX: -2,
            offsetY: -0.5,
            shape: "square",
          },
        },
      };
    };

    const updateTimeframe = (timeframe: keyof typeof chartData) => {
      const data = chartData[timeframe];
      series.value = [...data.series];
      chartOptions.value = initializeChartOptions(data.categories);
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
.sa-gross-revenue-card {
  .trezo-card-title {
    h3 {
      font-size: 32px;
    }
    .revenue {
      gap: 10px;
      margin: {
        top: 9px;
        bottom: 10px;
      }
    }
    .trezo-badge {
      border-radius: 30px;
      padding: {
        left: 11px;
        right: 11px;
      }
    }
    .text-xs {
      font-size: 12px;
    }
  }
  .trezo-card-content {
    .chart {
      margin: {
        top: -21px;
        left: -14px;
        bottom: -22px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sa-gross-revenue-card {
    .trezo-card-header {
      .trezo-card-title {
        h3 {
          font-size: 26px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sa-gross-revenue-card {
    .trezo-card-header {
      .trezo-card-title {
        h3 {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
