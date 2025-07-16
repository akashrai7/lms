<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <h5 class="mb-4 fw-semibold">Risk & Stability Indicators</h5>

    <div style="margin-bottom: -2px">
      <apexchart
        v-if="isClient"
        type="radar"
        height="355"
        :options="riskStabilityIndicators"
        :series="riskStability"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RiskStabilityIndicatorsChart",
  setup() {
    const isClient = ref(false);
    const riskStability = ref([
      {
        name: "Liquidity",
        data: [60, 80, 100, 120, 140, 150],
      },
      {
        name: "Volatility",
        data: [180, 160, 80, 140, 100, 80],
      },
      {
        name: "Operational",
        data: [100, 130, 140, 60, 40, 20],
      },
    ]);
    const riskStabilityIndicators = ref({
      chart: {
        height: 355,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0,
          opacityTo: 0.4,
        },
      },
      colors: ["#AD63F6", "#605DFF", "#37D80A"],
      yaxis: {
        show: true,
        tickAmount: 4,
      },
      legend: {
        show: true,
        fontSize: "12px",
        fontFamily: "Inter",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 6,
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
        customLegendItems: [
          "Liquidity 50%",
          "Volatility 20%",
          "Operational 30%",
        ],
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      riskStability,
      riskStabilityIndicators,
    };
  },
});
</script>
