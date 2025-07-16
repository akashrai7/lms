<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
    >
      <h5 class="mb-0">Spending Breakdown</h5>

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
            <button class="dropdown-item" @click="updateChartData('day')">
              This Day
            </button>
          </li>
          <li>
            <button class="dropdown-item" @click="updateChartData('week')">
              This Week
            </button>
          </li>
          <li>
            <button class="dropdown-item" @click="updateChartData('month')">
              This Month
            </button>
          </li>
          <li>
            <button class="dropdown-item" @click="updateChartData('year')">
              This Year
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div style="margin: -4px 0 -4px 0">
      <apexchart
        v-if="isClient"
        type="donut"
        height="284"
        :options="spendingBreakdown"
        :series="breakdown"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SpendingBreakdownChart",
  setup() {
    const isClient = ref(false);
    const breakdown = ref([35, 25, 12, 10, 10, 8]);
    const labels = [
      "Groceries",
      "Utilities",
      "Rent",
      "Entertainment",
      "Transportation",
      "Other",
    ];

    // Define different datasets for each time period
    const chartData = {
      day: [15, 10, 5, 8, 12, 10],
      week: [25, 20, 15, 10, 15, 15],
      month: [35, 25, 12, 10, 10, 8],
      year: [40, 30, 15, 5, 5, 5],
    };

    const spendingBreakdown = ref({
      chart: {
        height: 284,
        type: "donut",
      },
      labels: labels,
      colors: [
        "#37D80A",
        "#FE7A36",
        "#3584FC",
        "#FF4023",
        "#AD63F6",
        "#605DFF",
      ],
      stroke: {
        width: 2,
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
                show: false,
                color: "#3A4252",
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: "600",
                formatter: function (val: number, opts: any) {
                  if (
                    !opts ||
                    !opts.w ||
                    !opts.w.globals ||
                    !opts.w.globals.seriesTotals
                  ) {
                    return val + "k";
                  }
                  const total = opts.w.globals.seriesTotals.reduce(
                    (a: any, b: any) => a + b,
                    0
                  );
                  const percentage =
                    total > 0 ? ((val / total) * 100).toFixed(1) : "0";
                  return `${val}k (${percentage}%)`;
                },
              },
              total: {
                show: false,
                color: "#64748B",
                formatter: function (w: any) {
                  if (!w || !w.globals || !w.globals.seriesTotals) {
                    return "0k";
                  }
                  return `${w.globals.seriesTotals.reduce(
                    (a: any, b: any) => a + b,
                    0
                  )}k`;
                },
              },
            },
          },
        },
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "left",
        fontFamily: "Inter",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 0,
          vertical: 7,
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
          formatter: function (val: string) {
            return val + "k";
          },
        },
      },
    });

    // Function to update chart data based on selected period
    const updateChartData = (period: "day" | "week" | "month" | "year") => {
      breakdown.value = [...chartData[period]]; // Create a new array to trigger reactivity
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      breakdown,
      spendingBreakdown,
      updateChartData,
    };
  },
});
</script>
