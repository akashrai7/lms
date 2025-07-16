<template>
  <div
    class="sales-by-gender-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
      >
        <h5 class="mb-0">Sales By Gender</h5>
      </div>

      <div class="trezo-card-content">
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="donut"
            height="133"
            :options="customerSatisfactionRate"
            :series="rate"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SalesByGenderChart",
  setup() {
    const isClient = ref(false);
    const rate = ref([70, 30]);
    const customerSatisfactionRate = ref({
      chart: {
        height: 133,
        type: "donut",
      },
      labels: ["Male", "Female"],
      colors: ["#3584FC", "#AD63F6"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "right",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 15,
        itemMargin: {
          horizontal: 0,
          vertical: 5,
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
            return val + "%";
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      rate,
      customerSatisfactionRate,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-by-gender-card {
  .trezo-card-content {
    margin: {
      left: -20px;
      right: -20px;
    }
    .chart {
      margin: {
        top: -5px;
        left: -15px;
        bottom: -8px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sales-by-gender-card {
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
  .sales-by-gender-card {
    .trezo-card-content {
      margin: {
        left: -20px;
        right: -20px;
      }
    }
  }
}
</style>
