<template>
  <div class="card custom-shadow rounded-3 bg-white border mb-4">
    <div class="custom-padding-30">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-3"
      >
        <h3 class="mb-0 fw-semibold">Attendance Analytics</h3>
        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle bg-transparent border text-body rounded-2"
            style="padding-right: 35px"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            This Year
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                This Day
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                This Week
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                This Month
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div style="margin: -6px -1px -26px -17px">
        <apexchart
          v-if="isClient"
          type="bar"
          height="347"
          :options="attendanceAnalytics"
          :series="attendance"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AttendanceAnalyticsChart",
  setup() {
    const isClient = ref(false);

    const attendance = ref([
      {
        name: "Teachers",
        data: [500, 600, 250, 600, 200, 500, 600, 120, 250, 500, 200, 250],
      },
      {
        name: "Boys",
        data: [200, 300, 200, 400, 200, 250, 350, 120, 250, 300, 120, 200],
      },
      {
        name: "Girls",
        data: [150, 250, 200, 300, 300, 150, 200, 300, 200, 250, 400, 200],
      },
    ]);

    const attendanceAnalytics = ref({
      chart: {
        type: "bar",
        height: 347,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          horizontal: false,
          columnWidth: "20px",
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#605DFF", "#9CAAFF", "#DDE4FF"],
      xaxis: {
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
        axisTicks: {
          show: false,
          color: "#8695AA",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 1450,
        min: 0,
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
        fontFamily: "Inter",
        fontWeight: 400,
        offsetY: -1,
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
      fill: {
        type: "gradient",
        opacity: 1,
        gradient: {
          shade: "#605DFF",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 10],
          colorStops: [],
        },
      },
      grid: {
        show: true,
        strokeDashArray: 8,
        borderColor: "#ECF0FF",
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      attendance,
      attendanceAnalytics,
    };
  },
});
</script>
