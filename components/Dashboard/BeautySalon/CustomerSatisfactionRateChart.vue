<template>
  <div
    class="customer-satisfaction-rate-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content">
        <span class="d-block"> Customer Satisfaction Rate </span>
        <h2 class="lh-1">88.5%</h2>
        <div class="chart">
          <apexchart
            v-if="isClient"
            type="pie"
            height="181"
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
  name: "CustomerSatisfactionRateChart",
  setup() {
    const isClient = ref(false);
    const rate = ref([80, 20]);
    const customerSatisfactionRate = ref({
      chart: {
        height: 181,
        type: "pie",
      },
      labels: ["Positive", "Negative"],
      colors: ["#9CAAFF", "#FFAA72"],
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        y: {
          formatter: function (val: unknown) {
            return val + "%";
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
.customer-satisfaction-rate-card {
  .trezo-card-content {
    h2 {
      font-size: 32px;
      margin: {
        top: 6px;
        bottom: 12px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .customer-satisfaction-rate-card {
    .trezo-card-content {
      h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .customer-satisfaction-rate-card {
    .trezo-card-content {
      h2 {
        font-size: 28px;
      }
    }
  }
}
</style>
