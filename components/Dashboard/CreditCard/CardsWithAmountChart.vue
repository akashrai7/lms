<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <h5 class="mb-4">Cards With Amount</h5>

    <div style="margin: -25px 0 -20px -10px">
      <apexchart
        v-if="isClient"
        type="bar"
        height="211"
        :options="cardsWithAmount"
        :series="amount"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CardsWithAmountChart",
  setup() {
    const isClient = ref(false);
    const amount = ref([
      {
        name: "Projects",
        data: [1870, 2000, 1490, 1410, 1680],
      },
    ]);
    const cardsWithAmount = ref({
      chart: {
        type: "bar",
        height: 211,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF"],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "11px",
          fontFamily: "Inter",
          fontWeight: "normal",
        },
      },
      fill: {
        opacity: 1,
      },
      xaxis: {
        categories: [
          "Rewards Card",
          "Cashback Card",
          "Travel Card",
          "Student Card",
          "Business Card",
        ],
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#64748B",
            fontSize: "11px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "11px",
            fontFamily: "Inter",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      amount,
      cardsWithAmount,
    };
  },
});
</script>
