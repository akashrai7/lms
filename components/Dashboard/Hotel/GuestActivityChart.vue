<template>
  <div class="card border-0 rounded-3" style="background-color: #1f64f1">
    <div class="p-25">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20"
      >
        <h5 class="mb-0 text-white">Guest Activity</h5>
        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle border text-white rounded-2 bg-gray-100 after-opacity"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="
              background-color: #ffffff1a !important;
              border: none !important;
            "
          >
            {{ selectedPeriod }}
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li v-for="period in periods" :key="period">
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="changePeriod(period)"
              >
                {{ period }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div style="margin: -20px -20px -20px -12px">
        <apexchart
          v-if="isClient"
          type="area"
          height="290"
          :options="guestActivity"
          :series="guest"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "GuestActivityChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("Daily");
    const periods = ["Daily", "Weekly", "Monthly", "Yearly"];

    // Sample data for different time periods
    const dataSets = {
      Daily: {
        categories: [
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
        ],
        active: [15, 30, 20, 40, 35, 30, 25],
        returning: [10, 20, 15, 25, 30, 40, 30],
      },
      Weekly: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        active: [45, 52, 38, 58, 49, 60, 55],
        returning: [30, 40, 35, 45, 50, 60, 50],
      },
      Monthly: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        active: [120, 180, 150, 200],
        returning: [80, 120, 100, 150],
      },
      Yearly: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        active: [400, 420, 450, 500, 550, 600, 650, 630, 700, 750, 800, 850],
        returning: [300, 320, 350, 400, 450, 500, 550, 530, 600, 650, 700, 750],
      },
    };

    const guest = ref([
      {
        name: "Active Guests",
        data: dataSets.Daily.active,
      },
      {
        name: "Returning Guests",
        data: dataSets.Daily.returning,
      },
    ]);

    const guestActivity = ref({
      chart: {
        type: "area",
        height: 290,
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      colors: ["#ffffff", "#D8FFC8"],
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        width: [2, 2, 0],
        dashArray: [0, 6, 0],
      },
      grid: {
        show: true,
        borderColor: "#ffffff1a",
      },
      fill: {
        type: "gradient",
        gradient: {
          stops: [0, 90, 100],
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.2,
        },
      },
      xaxis: {
        categories: dataSets.Daily.categories,
        axisTicks: { show: false, color: "#ffffff1a" },
        axisBorder: { show: false, color: "#ffffff1a" },
        labels: {
          style: {
            colors: "#B1BBC8",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        labels: {
          style: {
            colors: "#B1BBC8",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
        axisBorder: { show: true, color: "#ffffff1a" },
        axisTicks: { show: false, color: "#ffffff1a" },
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        fontFamily: "Inter",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 6,
          offsetX: -2,
          offsetY: -0.5,
          shape: "circle",
        },
      },
    });

    const changePeriod = (period: string) => {
      selectedPeriod.value = period;
      const data = dataSets[period as keyof typeof dataSets];

      // Update chart data
      guest.value = [
        { name: "Active Guests", data: data.active },
        { name: "Returning Guests", data: data.returning },
      ];

      // Update x-axis categories
      guestActivity.value = {
        ...guestActivity.value,
        xaxis: {
          ...guestActivity.value.xaxis,
          categories: data.categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      guest,
      guestActivity,
      selectedPeriod,
      periods,
      changePeriod,
    };
  },
});
</script>
