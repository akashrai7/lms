<template>
  <div
    class="expense-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="trezo-card-content position-relative">
      <span class="d-block"> Expense </span>
      <h3>$132K</h3>
      <span class="trezo-badge rejected"> -1.2% </span>
      <span class="text-xs d-block"> vs previous 30 days </span>
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="180"
          :options="expenseChart"
          :series="expense"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Expense",
  setup() {
    const isClient = ref(false);
    const expense = ref([
      {
        name: "Up",
        data: [70, 42, 70, 120, 40, 70],
      },
      {
        name: "Down",
        data: [-70, -44, -70, -120, -40, -70],
      },
    ]);
    const expenseChart = ref({
      chart: {
        type: "bar",
        height: 180,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#BF85FB", "#5DA8FF"],
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: "4px",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 7,
        borderColor: "#ECEEF2",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
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
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false,
        labels: {
          style: {
            colors: "#64748B",
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
      tooltip: {
        y: {
          formatter: function (value: any) {
            return `${Math.abs(value).toFixed(2)}%`; // Ensure that negative values appear as positive in the tooltip
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      expense,
      expenseChart,
    };
  },
});
</script>

<style lang="scss" scoped>
.expense-card {
  .trezo-card-content {
    h3 {
      font-size: 32px;
      letter-spacing: -0.5px;
      margin: {
        top: 2px;
        bottom: 5px;
      }
    }
    .trezo-badge {
      border-radius: 30px;
      margin-bottom: 5px;
      padding: {
        top: 1px;
        bottom: 1px;
      }
    }
    .text-xs {
      font-size: 12px;
    }
    .chart {
      top: 50%;
      right: -8px;
      max-width: 120px;
      position: absolute;
      transform: translateY(-50%);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .expense-card {
    .trezo-card-content {
      h3 {
        font-size: 28px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .expense-card {
    .trezo-card-content {
      h3 {
        font-size: 30px;
      }
    }
  }
}
</style>
