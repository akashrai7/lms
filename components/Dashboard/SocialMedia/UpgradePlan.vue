<template>
  <div
    class="upgrade-plan-card card mb-4 border-0 text-center mb-4 border-radius d-block bg-white shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content">
        <h3 class="fw-medium fs-24">Upgrade Your Plan!</h3>
        <p class="mx-auto">
          Access advanced features, enhanced support, and exclusive tools
          designed to help you achieve more.
        </p>
        <div class="image">
          <img src="@/assets/images/girl-with-dog.png" alt="girl-with-dog" />
        </div>
        <NuxtLink to="/dashboard/pricing" class="btn btn-primary text-white">
          <span class="d-inline-block position-relative">
            <i class="ri-fire-fill"></i>
            Upgrade Plan
          </span>
        </NuxtLink>
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
  .trezo-card-content {
    padding: {
      top: 5px;
      bottom: 5px;
    }
    h3 {
      margin-bottom: 10px;
    }
    p {
      line-height: 1.5;
      max-width: 275px;
      margin-bottom: 25px;
    }
    .btn {
      margin-top: 10px;
      font: {
        size: 16px;
        weight: 500;
      }
      padding: {
        left: 25px;
        right: 25px;
        top: 10px;
        bottom: 10px;
      }
      span {
        padding-left: 25px;

        i {
          left: 0;
          top: 50%;
          font-size: 20px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .upgrade-plan-card {
    .trezo-card-content {
      h3 {
        font-size: 18px;
      }
      p {
        max-width: 100%;
        margin-bottom: 20px;
      }
      .btn {
        margin-top: 5px;
        font-size: 14px;

        span {
          padding-left: 23px;

          i {
            font-size: 18px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .upgrade-plan-card {
    .trezo-card-content {
      .btn {
        font-size: 15px;
      }
    }
  }
}
</style>
