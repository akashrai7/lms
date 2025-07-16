<template>
  <div
    class="sales-by-category-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="trezo-card-header d-flex align-items-center justify-content-between"
      >
        <div class="trezo-card-title">
          <h5 class="mb-0">Sales By Category</h5>
        </div>
      </div>
      <div class="trezo-card-content">
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="radar"
            height="400"
            :options="salesByCategory"
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
  name: "SalesByCategoryChart",
  setup() {
    const isClient = ref(false);
    const sales = ref([
      {
        name: "Electronics",
        data: [20, 100, 70, 30, 50, 80, 70],
      },
      {
        name: "Non-electronics",
        data: [68, 80, 33, 80, 70, 40, 30],
      },
    ]);
    const salesByCategory = ref({
      chart: {
        height: 400,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      colors: ["#FC6829", "#757DFF"],
      plotOptions: {
        radar: {
          polygons: {
            fill: {
              colors: ["#f8f8f8", "#ffffff"],
            },
          },
        },
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        labels: {
          show: true,
          style: {
            colors: "#A8A8A8",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        show: false,
      },
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -4,
          offsetY: -0.5,
          strokeWidth: 0,
          shape: "square",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      sales,
      salesByCategory,
    };
  },
});
</script>

<style lang="scss" scoped>
.sales-by-category-card {
  .trezo-card-content {
    margin: {
      left: -20px;
      right: -20px;
    }
    .chart {
      margin: {
        top: -40px;
        left: -15px;
        bottom: -15px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sales-by-category-card {
    .trezo-card-content {
      margin: {
        left: 0;
        right: 0;
      }
      .chart {
        margin-bottom: -10px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sales-by-category-card {
    .trezo-card-content {
      margin: {
        left: 0;
        right: 0;
      }
      .chart {
        margin-bottom: -10px;
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sales-by-category-card {
    .trezo-card-content {
      margin: {
        left: 0;
        right: 0;
      }
      .chart {
        margin-bottom: -10px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .sales-by-category-card {
    .trezo-card-content {
      margin: {
        left: 0;
        right: 0;
      }
      .chart {
        margin-bottom: -10px;
      }
    }
  }
}
</style>
