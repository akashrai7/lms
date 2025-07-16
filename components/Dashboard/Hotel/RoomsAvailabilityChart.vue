<template>
  <div class="card bg-white border-0 rounded-3">
    <div class="card-body p-25">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-0 z-1 position-relative"
      >
        <h5 class="mb-0">Rooms Availability</h5>
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

      <div style="margin: -17px 0 0 0">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="380"
          :options="roomsAvailability"
          :series="rooms"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RoomsAvailabilityChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("Daily");
    const periods = ref(["Daily", "Weekly", "Monthly", "Yearly"]);
    const rooms = ref([72.5]); // Default value

    // Sample data for different periods
    const periodData = {
      Daily: [72.5],
      Weekly: [65.3],
      Monthly: [58.7],
      Yearly: [81.2],
    };

    const roomsAvailability = ref({
      chart: {
        height: 380,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              offsetY: -10,
              fontSize: "14px",
              fontFamily: "Inter",
              color: "#64748B",
              fontWeight: "400",
            },
            value: {
              fontSize: "36px",
              fontFamily: "Inter",
              color: "#3A4252",
              fontWeight: "700",
              formatter: function (val: string) {
                return val + "%";
              },
            },
          },
          track: {
            background: "#EEFFE5",
          },
        },
      },
      colors: ["#37D80A"],
      labels: ["Total Booked"],
      stroke: {
        dashArray: 7,
      },
    });

    const changePeriod = (period: string) => {
      selectedPeriod.value = period;
      // Update chart data based on selected period
      rooms.value = periodData[period as keyof typeof periodData];

      // You could also update other chart options if needed
      // roomsAvailability.value = {...}
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      rooms,
      roomsAvailability,
      selectedPeriod,
      periods,
      changePeriod,
    };
  },
});
</script>
