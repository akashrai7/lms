<template>
  <div class="card bg-white border-0 rounded-3">
    <div class="p-25">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
      >
        <div class="">
          <span class="d-block mb-10">Total Revenue</span>
          <div class="d-flex align-items-center" style="gap: 10px">
            <h3 class="mb-0 fs-32 lh-1">$1,528</h3>
            <div>
              <span
                class="d-inline-block bg-success-80 border-success-60 border px-2 rounded-pill text-success-60 fs-12 fw-medium"
                >+5.4%</span
              >
            </div>
          </div>
        </div>

        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle border text-body rounded-2 bg-gray-100"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ selectedPeriod }}
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="updateChartData('Daily')"
              >
                Daily
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="updateChartData('Weekly')"
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="updateChartData('Monthly')"
              >
                Monthly
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="updateChartData('Yearly')"
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div style="margin: -20px 0 -20px -15px">
        <apexchart
          v-if="isClient"
          type="bar"
          height="320"
          :options="totalRevenue"
          :series="revenue"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TotalRevenueChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref<keyof typeof chartData>("Monthly");

    // Sample data for different time periods
    const chartData = {
      Daily: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [5, 8, 12, 7, 10, 15, 9],
      },
      Weekly: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [35, 42, 28, 45],
      },
      Monthly: {
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
        data: [15, 11, 29, 54, 24, 37, 14, 29, 11, 14, 29, 48],
      },
      Yearly: {
        categories: ["2020", "2021", "2022", "2023", "2024", "2025"],
        data: [120, 145, 132, 168, 189, 210],
      },
    };

    const revenue = ref([
      {
        name: "Revenue",
        data: chartData[selectedPeriod.value].data,
      },
    ]);

    const totalRevenue = ref({
      chart: {
        type: "bar",
        height: 319,
        toolbar: {
          show: false,
        },
      },
      colors: ["#757DFF"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: chartData[selectedPeriod.value].categories,
        axisTicks: {
          show: true,
          color: "#DDE4FF",
        },
        axisBorder: {
          show: true,
          color: "#DDE4FF",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
      },
      yaxis: {
        min: 0,
        labels: {
          formatter: (val: string) => "$" + val + "k",
          style: {
            colors: "#8695AA",
            fontSize: "12px",
            fontFamily: "Inter",
          },
        },
        axisBorder: {
          show: false,
          color: "#DDE4FF",
        },
        axisTicks: {
          show: false,
          color: "#DDE4FF",
        },
      },
      tooltip: {
        y: {
          formatter: (val: string) => "$" + val + "k",
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        fontFamily: "Inter",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 10,
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
      grid: {
        show: true,
        borderColor: "#ECF0FF",
      },
    });

    const updateChartData = (
      period: "Daily" | "Weekly" | "Monthly" | "Yearly"
    ) => {
      selectedPeriod.value = period;
      revenue.value = [
        {
          name: "Revenue",
          data: chartData[period].data,
        },
      ];

      // Update x-axis categories
      totalRevenue.value = {
        ...totalRevenue.value,
        xaxis: {
          ...totalRevenue.value.xaxis,
          categories: chartData[period].categories,
        },
      };
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      revenue,
      totalRevenue,
      selectedPeriod,
      updateChartData,
    };
  },
});
</script>
