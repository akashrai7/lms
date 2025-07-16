<template>
  <div
    class="upgrade-plan-card card mb-4 border-0 border-radius d-block border-0 shadow-none"
  >
    <div class="trezo-card-content">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <h3 class="mb-0 text-white fw-semibold">
            Upgrade Plan To Manage 20K+ Patients
          </h3>
        </div>
        <div class="col-sm-6">
          <div class="text-center text-sm-end">
            <img src="@/assets/images/users.png" alt="users-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UpgradePlan",
});
</script>

<style lang="scss" scoped>
.upgrade-plan-card {
  background: linear-gradient(90deg, #4936f5 0%, #4737d6 100%);
  padding: {
    top: 18.5px;
    bottom: 18.5px;
    left: 25px;
    right: 25px;
  }
  .trezo-card-content {
    h3 {
      font-size: 20px;
      line-height: 1.5;
      max-width: 250px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .upgrade-plan-card {
    text-align: center;
    padding: {
      top: 17px;
      bottom: 17px;
    }
    .trezo-card-content {
      h3 {
        font-size: 16px;
        max-width: 100%;
        margin-bottom: 15px !important;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .upgrade-plan-card {
    text-align: start;
    padding: {
      top: 20px;
      bottom: 20px;
    }
    .trezo-card-content {
      h3 {
        margin-bottom: 0 !important;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .upgrade-plan-card {
    padding: {
      top: 20px;
      bottom: 20px;
    }
    .trezo-card-content {
      h3 {
        font-size: 18px;
      }
    }
  }
}
</style>
