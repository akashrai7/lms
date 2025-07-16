<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Guests List" subTitle="Hotel" />

    <PagesHotelGuestsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GuestsListPage",
});
</script>
