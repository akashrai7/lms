<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Rooms List" subTitle="Hotel" />

    <PagesHotelRoomsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoomsListPage",
});
</script>
