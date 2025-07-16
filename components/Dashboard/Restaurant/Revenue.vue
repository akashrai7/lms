<template>
  <div
    class="revenue-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content position-relative">
        <span class="d-block"> Revenue </span>
        <h3>$3M</h3>
        <span class="trezo-badge finished"> +3.4% </span>
        <span class="text-xs d-block"> vs previous 30 days </span>
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="donut"
            height="90"
            :options="revenueChart"
            :series="revenue"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Revenue",
  setup() {
    const isClient = ref(false);
    const revenue = ref([80, 20]);
    const revenueChart = ref({
      chart: {
        height: 90,
        type: "donut",
      },
      labels: ["Revenue", "Revenue"],
      colors: ["#58F229", "#D8FFC8"],
      tooltip: {
        y: {
          formatter: function (val: any) {
            return "$" + val + "M";
          },
        },
      },
      stroke: {
        width: 0,
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
      dataLabels: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      revenue,
      revenueChart,
    };
  },
});
</script>

<style lang="scss" scoped>
.revenue-card {
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
      right: -15px;
      margin-top: 2px;
      max-width: 120px;
      position: absolute;
      transform: translateY(-50%);
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .revenue-card {
    .trezo-card-content {
      h3 {
        font-size: 28px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .revenue-card {
    .trezo-card-content {
      h3 {
        font-size: 30px;
      }
    }
  }
}
</style>
