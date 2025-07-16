<template>
  <div
    class="customer-visits-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="trezo-card-header d-flex align-items-center justify-content-between"
      >
        <div class="trezo-card-title">
          <h5 class="mb-0">Customer Visits</h5>
        </div>
      </div>
      <div class="trezo-card-content">
        <div
          class="content position-relative z-1 d-flex justify-content-between"
        >
          <div>
            <div
              class="icon rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="ri-user-fill"></i>
            </div>
            <span class="sub-title d-block"> Walk-In Customers </span>
            <h3>1.5K</h3>
            <span class="trezo-badge shipped"> +7% </span>
          </div>
          <div class="text-end">
            <div
              class="icon ms-auto rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="ri-user-add-fill"></i>
            </div>
            <span class="sub-title d-block"> Repeat Customers </span>
            <h3>2.1K</h3>
            <span class="trezo-badge cancelled"> -1.4% </span>
          </div>
          <div
            class="light text-primary rounded-circle d-flex align-items-center justify-content-center"
          >
            <i class="ri-flashlight-line"></i>
          </div>
        </div>
        <div
          class="progress trezo-progress bg-success w-100"
          role="progressbar"
          aria-valuenow="32"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar bg-primary" style="width: 32%"></div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <span class="d-block text-xs"> 32% </span>
          <span class="d-block text-xs"> 64% </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomerVisits",
});
</script>

<style lang="scss" scoped>
.customer-visits-card {
  .trezo-card-header {
    margin-bottom: 20px;
  }
  .trezo-card-content {
    .text-xs {
      font-size: 12px;
    }
    .content {
      margin-bottom: 22px;

      .icon {
        width: 25px;
        height: 25px;
        background-color: #f6f7f9;
      }
      .sub-title {
        max-width: 75px;
        line-height: 1.4;
        margin: {
          top: 7px;
          bottom: 5px;
        }
      }
      h3 {
        font-size: 28px;
        margin-bottom: 7px;
      }
      .trezo-badge {
        border-radius: 30px;
        padding: {
          left: 11px;
          right: 11px;
        }
      }
      &::before {
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1px;
        z-index: -1;
        content: "";
        position: absolute;
        transform: translateX(-50%);
        background: var(--borderColor);
      }
      .light {
        top: 50%;
        left: 50%;
        width: 33px;
        height: 33px;
        font-size: 18px;
        position: absolute;
        background-color: #dde4ff;
        transform: translateY(-50%) translateX(-50%);
      }
    }
    .trezo-progress {
      --bs-progress-height: 8px;
      margin-bottom: 5px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .customer-visits-card {
    .trezo-card-header {
      margin-bottom: 17px;
    }
    .trezo-card-content {
      .content {
        h3 {
          font-size: 24px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .customer-visits-card {
    .trezo-card-header {
      margin-bottom: 20px;
    }
  }
}
</style>
