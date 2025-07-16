<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
    >
      <h5 class="mb-0">Price Movement</h5>

      <ul
        class="p-0 m-0 list-unstyled d-flex align-items-center"
        style="gap: 6px"
      >
        <li v-for="(interval, index) in timeIntervals" :key="index">
          <button
            @click="changeTimeInterval(interval)"
            :class="[
              'p-0 border d-flex justify-content-center align-items-center rounded-1 hover-bg',
              activeInterval === interval
                ? 'bg-primary text-white'
                : 'bg-transparent text-body',
            ]"
            style="width: 40px; height: 30px"
          >
            {{ interval }}
          </button>
        </li>
      </ul>
    </div>

    <div style="margin: -18px 0 -15px 0">
      <apexchart
        v-if="isClient"
        type="candlestick"
        height="350"
        :options="priceMovement1"
        :series="price1"
      ></apexchart>
      <div style="margin-top: -11px">
        <apexchart
          v-if="isClient"
          type="bar"
          height="160"
          :options="priceMovement2"
          :series="price2"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PriceMovementChart",
  setup() {
    const isClient = ref(false);
    const activeInterval = ref("1h");
    const timeIntervals = ref(["1h", "1d", "1w", "1m"]);

    // Sample data generator for different time intervals
    const generateData = (interval: string) => {
      const now = new Date();
      const dataPoints =
        interval === "1h"
          ? 24
          : interval === "1d"
          ? 30
          : interval === "1w"
          ? 52
          : 12;

      const result = [];
      for (let i = 0; i < dataPoints; i++) {
        const basePrice = 50 + Math.random() * 50;
        const open = basePrice;
        const close = basePrice + (Math.random() * 10 - 5);
        const high = Math.max(open, close) + Math.random() * 5;
        const low = Math.min(open, close) - Math.random() * 5;

        let date;
        if (interval === "1h") {
          date = new Date(now.getTime() - (dataPoints - i) * 3600000);
        } else if (interval === "1d") {
          date = new Date(now.getTime() - (dataPoints - i) * 86400000);
        } else if (interval === "1w") {
          date = new Date(now.getTime() - (dataPoints - i) * 604800000);
        } else {
          date = new Date(
            now.getFullYear(),
            now.getMonth() - (dataPoints - i),
            1
          );
        }

        result.push({
          x: date,
          y: [open, high, low, close],
        });
      }
      return result;
    };

    const generateVolumeData = (interval: string) => {
      const dataPoints =
        interval === "1h"
          ? 24
          : interval === "1d"
          ? 30
          : interval === "1w"
          ? 52
          : 12;

      const result = [];
      for (let i = 0; i < dataPoints; i++) {
        result.push({
          x: i,
          y: Math.floor(Math.random() * 100) - 50,
        });
      }
      return result;
    };

    const price1 = ref([
      {
        name: "Price",
        data: generateData(activeInterval.value),
      },
    ]);

    const price2 = ref([
      {
        name: "Volume",
        data: generateVolumeData(activeInterval.value),
      },
    ]);

    const priceMovement1 = ref({
      chart: {
        id: "candlestickChart",
        type: "candlestick",
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#37D80A",
            downward: "#FF4023",
          },
          wick: { useFillColor: true },
        },
      },
      tooltip: {
        enabled: true,
        custom: function ({
          seriesIndex,
          dataPointIndex,
          w,
        }: {
          seriesIndex: number;
          dataPointIndex: number;
          w: any;
        }) {
          const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
          const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
          const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
          const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];

          return (
            '<div class="p-2">' +
            "<div>Open: <span>" +
            o +
            "</span></div>" +
            "<div>High: <span>" +
            h +
            "</span></div>" +
            "<div>Low: <span>" +
            l +
            "</span></div>" +
            "<div>Close: <span>" +
            c +
            "</span></div>" +
            "</div>"
          );
        },
      },
      fill: { opacity: 1 },
      xaxis: {
        type: "datetime",
        axisTicks: { show: true, color: "#64748B" },
        axisBorder: { show: true, color: "#64748B" },
        labels: {
          style: { colors: "#3A4252", fontSize: "12px", fontFamily: "Inter" },
          formatter: function (value: string | number | Date) {
            if (activeInterval.value === "1h") {
              return new Date(value).toLocaleTimeString();
            } else if (activeInterval.value === "1d") {
              return new Date(value).toLocaleDateString();
            } else {
              return new Date(value).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              });
            }
          },
        },
      },
      yaxis: {
        tooltip: { enabled: true },
        labels: {
          style: { colors: "#3A4252", fontSize: "12px", fontFamily: "Inter" },
          formatter: function (value: number) {
            return value.toFixed(2);
          },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
        strokeDashArray: 5,
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 300,
            },
          },
        },
      ],
    });

    const priceMovement2 = ref({
      chart: {
        type: "bar",
        height: 160,
        toolbar: { show: false },
        brush: {
          enabled: true,
          target: "candlestickChart",
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date().getTime() - 30 * 24 * 60 * 60 * 1000,
            max: new Date().getTime(),
          },
          fill: {
            color: "#ccc",
            opacity: 0.4,
          },
          stroke: {
            color: "#0D47A1",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: { opacity: 1 },
      colors: ["#605DFF"],
      xaxis: {
        type: "datetime",
        axisTicks: { show: true, color: "#64748B" },
        axisBorder: { show: true, color: "#64748B" },
        labels: {
          style: { colors: "#3A4252", fontSize: "12px", fontFamily: "Inter" },
          formatter: function (value: string | number | Date) {
            if (activeInterval.value === "1h") {
              return new Date(value).toLocaleTimeString();
            } else if (activeInterval.value === "1d") {
              return new Date(value).toLocaleDateString();
            } else {
              return new Date(value).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              });
            }
          },
        },
      },
      yaxis: {
        tooltip: { enabled: true },
        labels: {
          style: { colors: "#3A4252", fontSize: "12px", fontFamily: "Inter" },
          formatter: function (val: number) {
            return Math.abs(val) > 999
              ? (Math.abs(val) / 1000).toFixed(1) + "k"
              : val;
          },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      grid: {
        show: true,
        borderColor: "#F6F7F9",
        strokeDashArray: 5,
      },
    });

    const changeTimeInterval = (interval: string) => {
      activeInterval.value = interval;
      // Update chart data based on selected interval
      price1.value = [
        {
          name: "Price",
          data: generateData(interval),
        },
      ];

      price2.value = [
        {
          name: "Volume",
          data: generateVolumeData(interval),
        },
      ];
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      price1,
      priceMovement1,
      price2,
      priceMovement2,
      timeIntervals,
      activeInterval,
      changeTimeInterval,
    };
  },
});
</script>
