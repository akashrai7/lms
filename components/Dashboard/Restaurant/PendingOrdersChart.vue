<template>
  <div
    class="pending-orders-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content position-relative">
        <span class="d-block"> Pending Orders </span>
        <h3>113</h3>
        <span class="trezo-badge rejected"> -3.2% </span>
        <span class="text-xs d-block"> vs previous 30 days </span>
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="area"
            height="125"
            :options="pendingOrders"
            :series="orders"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PendingOrdersChart",
  setup() {
    const isClient = ref(false);
    const orders = ref([
      {
        name: "Orders",
        data: [15, 11, 9, 10, 7, 7, 3],
      },
    ]);
    const pendingOrders = ref({
      chart: {
        type: "area",
        height: 125,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#868DFF"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#868DFF",
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          // formatter: (val:any) => {
          //     return '$' + val + 'k'
          // },
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      orders,
      pendingOrders,
    };
  },
});
</script>

<style lang="scss" scoped>
.pending-orders-card {
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
  .pending-orders-card {
    .trezo-card-content {
      h3 {
        font-size: 28px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .pending-orders-card {
    .trezo-card-content {
      h3 {
        font-size: 30px;
      }
    }
  }
}
</style>
