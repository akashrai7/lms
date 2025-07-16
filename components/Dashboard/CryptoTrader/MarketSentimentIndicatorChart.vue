<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
    >
      <h5 class="mb-0">Market Sentiment Indicator</h5>

      <span>Last 30 Days</span>
    </div>

    <div style="margin: -30px 0 -26px 0">
      <apexchart
        v-if="isClient"
        type="radialBar"
        height="360"
        :options="marketSentimentIndicator"
        :series="indicator"
      ></apexchart>
    </div>

    <ul
      class="p-0 m-0 list-unstyled d-flex align-items-center mx-auto justify-content-center flex-wrap"
      style="gap: 13px; max-width: 315px"
    >
      <li class="d-flex align-items-center" style="gap: 5px">
        <span
          class="d-block rounded-circle"
          style="background-color: #00d26a; width: 12px; height: 12px"
        ></span>
        <span class="fs-12">Extreme Greed</span>
      </li>
      <li class="d-flex align-items-center" style="gap: 5px">
        <span
          class="d-block rounded-circle"
          style="background-color: #00d26a; width: 12px; height: 12px"
        ></span>
        <span class="fs-12">Greed</span>
      </li>
      <li class="d-flex align-items-center" style="gap: 5px">
        <span
          class="d-block rounded-circle"
          style="background-color: #fcd53f; width: 12px; height: 12px"
        ></span>
        <span class="fs-12">Neutral</span>
      </li>
      <li class="d-flex align-items-center" style="gap: 5px">
        <span
          class="d-block rounded-circle"
          style="background-color: #ff6723; width: 12px; height: 12px"
        ></span>
        <span class="fs-12">Fear</span>
      </li>
      <li class="d-flex align-items-center" style="gap: 5px">
        <span
          class="d-block rounded-circle"
          style="background-color: #f8312f; width: 12px; height: 12px"
        ></span>
        <span class="fs-12">Extreme Fear</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MarketSentimentIndicatorChart",
  setup() {
    const isClient = ref(false);
    const indicator = ref([100]);
    const marketSentimentIndicator = ref({
      chart: {
        type: "radialBar",
        height: 360,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#ffffff",
            strokeWidth: "100%",
          },
          dataLabels: {
            show: false,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          gradientToColors: ["#FF3D00"],
          stops: [0, 50, 100],
          colorStops: [
            { offset: 0, color: "#00C851", opacity: 1 }, // Extreme Greed
            { offset: 25, color: "#8BC34A", opacity: 1 }, // Greed
            { offset: 50, color: "#FFC107", opacity: 1 }, // Neutral
            { offset: 75, color: "#FF9800", opacity: 1 }, // Fear
            { offset: 100, color: "#FF3D00", opacity: 1 }, // Extreme Fear
          ],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Market Sentiment"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      indicator,
      marketSentimentIndicator,
    };
  },
});
</script>
