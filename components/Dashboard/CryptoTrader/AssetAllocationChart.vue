<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
    >
      <h5 class="mb-0">Asset Allocation</h5>

      <span>Last 30 Days</span>
    </div>

    <div>
      <span class="d-block">Total Value</span>
      <h3 class="fs-20 mb-0 mt-6">$17,485</h3>
    </div>

    <div style="margin: 0 0 -15px 0">
      <apexchart
        v-if="isClient"
        type="pie"
        height="235"
        :options="assetAllocation"
        :series="allocation"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AssetAllocationChart",
  setup() {
    const isClient = ref(false);
    const allocation = ref([30, 25, 20, 15, 10]);
    const assetAllocation = ref({
      chart: {
        height: 235,
        type: "pie",
      },
      labels: ["BTC 30%", "ETH 25%", "USDC 20%", "ADA 15%", "SHIB 10%"],
      colors: ["#605DFF", "#757DFF", "#9CAAFF", "#C2CDFF", "#DDE4FF"],
      legend: {
        show: true,
        fontSize: "11px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 8,
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
      allocation,
      assetAllocation,
    };
  },
});
</script>
