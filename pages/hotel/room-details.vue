<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Room Details" subTitle="Hotel" />

    <PagesHotelRoomDetails />
    <PagesHotelRoomDetailsReviews />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoomDetailsPage",
});
</script>
