<template>
  <div
    class="order-summary-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-2 mb-lg-20"
      >
        <h5 class="mb-0">Order Summary</h5>
        <select
          v-model="selectedTimeframe"
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
          @change="onTimeframeChange"
        >
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
            height="321"
            :options="orderSummary"
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
  name: "OrderSummaryChart",
  setup() {
    const isClient = ref(false);
    const selectedTimeframe = ref<"Weekly" | "Monthly" | "Yearly">("Weekly");

    // Define chart data for each timeframe
    const chartData: Record<
      "Weekly" | "Monthly" | "Yearly",
      { series: number[]; labels: string[] }
    > = {
      Weekly: {
        series: [10, 30, 45],
        labels: ["Served", "Processing", "Cancelled"],
      },
      Monthly: {
        series: [150, 200, 50],
        labels: ["Served", "Processing", "Cancelled"],
      },
      Yearly: {
        series: [1800, 2400, 600],
        labels: ["Served", "Processing", "Cancelled"],
      },
    };

    // Reactive series and labels
    const series = ref(chartData[selectedTimeframe.value].series);
    const labels = ref(chartData[selectedTimeframe.value].labels);

    // Chart options
    const orderSummary = ref({
      chart: {
        height: 321,
        type: "donut",
      },
      labels: labels.value,
      colors: ["#5DA8FF", "#FE7A36", "#BF85FB"],
      stroke: {
        width: 5,
        show: true,
        colors: ["#ffffff"],
      },
      dataLabels: {
        enabled: false,
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
                formatter: (
                  val: unknown,
                  opts: { w: { globals: { seriesTotals: number[] } } }
                ) => {
                  const total = opts.w.globals.seriesTotals.reduce(
                    (a: number, b: number) => a + b,
                    0
                  );
                  const percentage = (((val as number) / total) * 100).toFixed(
                    1
                  ); // Calculate percentage
                  return `${val}k (${percentage}%)`; // Show value in currency + percentage
                },
              },
              total: {
                show: true,
                color: "#64748B",
                formatter: (w: unknown) => {
                  return `${(
                    w as { globals: { seriesTotals: number[] } }
                  ).globals.seriesTotals.reduce(
                    (a: number, b: number) => a + b,
                    0
                  )}k`; // Show total in currency
                },
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
          vertical: 2,
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
      tooltip: {
        y: {
          formatter: function (val: unknown) {
            return val + "k";
          },
        },
      },
    });

    // Handle timeframe change
    const onTimeframeChange = () => {
      const data = chartData[selectedTimeframe.value];
      series.value = data.series;
      orderSummary.value.labels = data.labels;
    };

    // Set isClient to true on mount
    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      selectedTimeframe,
      series,
      orderSummary,
      onTimeframeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.order-summary-card {
  .trezo-card-content {
    margin: {
      left: -25px;
      right: -25px;
    }
    .chart {
      margin-top: -10px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .order-summary-card {
    .trezo-card-content {
      margin: {
        left: -17px;
        right: -17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .order-summary-card {
    .trezo-card-content {
      margin: {
        left: -20px;
        right: -20px;
      }
    }
  }
}
</style>
