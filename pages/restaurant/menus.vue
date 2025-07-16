<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Menus" subTitle="Restaurant" />

    <PagesRestaurantMenus />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenusPage",
});
</script>
