<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Dish Details" subTitle="Restaurant" />

    <PagesRestaurantDishDetails />
    <div class="mb-4"></div>
    <PagesRestaurantReviewsComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DishDetailsPage",
});
</script>
