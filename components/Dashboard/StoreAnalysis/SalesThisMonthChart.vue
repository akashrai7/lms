<template>
  <div
    class="sales-this-month-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content">
        <span class="d-block"> Sales This Month </span>
        <h3>$64.5K</h3>
        <span class="trezo-badge cancelled"> -1.4% </span>
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="line"
            height="115"
            :options="salesThisMonth"
            :series="sales"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesThisMonthChart",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Sale",
        data: [0, 41, 60, 65, 35, 62, 150],
      },
    ]);
    const salesThisMonth = ref({
      chart: {
        height: 115,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#605DFF"],
      stroke: {
        curve: "straight",
      },
      grid: {
        show: true,
        borderColor: "#ECF0FF",
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        axisBorder: {
          show: false,
          color: "#DDE4FF",
        },
        axisTicks: {
          show: false,
          color: "#DDE4FF",
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
        tickAmount: 4,
        max: 150,
        min: 0,
        labels: {
          show: false,
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
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
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
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val + "k";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sales,
      salesThisMonth,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-this-month-card {
  .trezo-card-content {
    h3 {
      font-size: 28px;
      margin: {
        top: 3px;
        bottom: 4px;
      }
    }
    .trezo-badge {
      border-radius: 30px;
      padding: 1px 10px;
    }
    .chart {
      margin: {
        top: -10px;
        left: -15px;
        bottom: -25px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sales-this-month-card {
    .trezo-card-content {
      h3 {
        font-size: 26px;
      }
    }
  }
}
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sales-this-month-card {
    .trezo-card-content {
      h3 {
        font-size: 26px;
      }
    }
  }
}
</style>
