<template>
  <div class="main-content-container overflow-hidden">
    <div class="row g-4">
      <div class="col-lg-8">
        <DashboardHotelStats />

        <div class="row g-4 mb-4">
          <div class="col-lg-6">
            <DashboardHotelRoomsAvailabilityChart />
          </div>
          <div class="col-lg-6">
            <DashboardHotelGuestActivityChart />
          </div>
        </div>

        <DashboardHotelUpcomingVIPReservations />
      </div>
      <div class="col-lg-4">
        <DashboardHotelRecentBookings />
      </div>
    </div>

    <DashboardHotelPopularRooms />

    <DashboardHotelCustomerReviews />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HotelPage",
});
</script>
