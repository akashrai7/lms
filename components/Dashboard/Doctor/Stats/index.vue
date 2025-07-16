<template>
  <div class="stats-list position-relative z-1">
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <Appointments />
      </div>
      <div class="col-lg-3 col-sm-6">
        <Patients />
      </div>
      <div class="col-lg-3 col-sm-6">
        <Operations />
      </div>
      <div class="col-lg-3 col-sm-6">
        <Earnings />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Appointments from "./Appointments.vue";
import Patients from "./Patients.vue";
import Operations from "./Operations.vue";
import Earnings from "./Earnings.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",
  components: {
    Appointments,
    Patients,
    Operations,
    Earnings,
  },
});
</script>

<style lang="scss" scoped>
.stats-list {
  margin-top: -25px;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .stats-list {
    margin-top: 25px;
  }
}
/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .stats-list {
    margin-top: 25px;
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .stats-list {
    margin-top: 25px;
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .stats-list {
    margin-top: 25px;
  }
}
</style>
