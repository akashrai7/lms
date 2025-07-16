<template>
  <div
    class="card border-0 rounded-3 bg-white position-relative z-1 mb-4"
    style="padding: 10px"
  >
    <div class="row g-2" style="--bs-gutter-x: 10px">
      <div class="col-md-4">
        <NewBookings />
      </div>
      <div class="col-md-4">
        <CheckIn />
      </div>
      <div class="col-md-4">
        <CheckOut />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewBookings from "./NewBookings.vue";
import CheckIn from "./CheckIn.vue";
import CheckOut from "./CheckOut.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",
  components: {
    NewBookings,
    CheckIn,
    CheckOut,
  },
});
</script>
