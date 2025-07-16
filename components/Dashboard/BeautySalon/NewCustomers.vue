<template>
  <div
    class="new-customers-card card mb-4 border-0 border-radius d-block bg-white shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content">
        <span class="d-block"> New Customers This Month </span>
        <h2 class="lh-1">14.5K</h2>
        <span class="trezo-badge shipped"> +7% </span>
        <span class="text-xs d-block"> vs previous 30 days </span>
        <div class="customers-list d-flex align-items-center">
          <img
            src="@/assets/images/users/user36.jpg"
            class="rounded-circle"
            alt="user-image"
          />
          <img
            src="@/assets/images/users/user37.jpg"
            class="rounded-circle"
            alt="user-image"
          />
          <div
            class="d-flex align-items-center justify-content-center rounded-circle fw-bold bg-info text-white"
          >
            P
          </div>
          <img
            src="@/assets/images/users/user38.jpg"
            class="rounded-circle"
            alt="user-image"
          />
          <div
            class="d-flex align-items-center justify-content-center rounded-circle fw-bold bg-primary text-white"
          >
            S
          </div>
          <img
            src="@/assets/images/users/user43.jpg"
            class="rounded-circle"
            alt="user-image"
          />
          <div
            class="d-flex align-items-center justify-content-center rounded-circle fw-bold bg-black text-white"
          >
            +24
          </div>
        </div>
        <span class="d-block text-xs fw-medium text-black"> Joined Today </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewCustomers",
});
</script>

<style lang="scss" scoped>
.new-customers-card {
  .trezo-card-content {
    h2 {
      font-size: 32px;
      margin: {
        top: 6px;
        bottom: 7px;
      }
    }
    .trezo-badge {
      border-radius: 30px;
      margin-bottom: 6px;
      padding: 1px 10px;
    }
    span {
      &.text-xs {
        font-size: 12px;
      }
    }
    .customers-list {
      margin: {
        top: 71px;
        bottom: 5px;
      }
      img {
        width: 46px;
        margin-right: -20px;
        border: 2px solid var(--whiteColor);
        box-shadow: 0px 4px 4px 0px rgba(101, 96, 240, 0.1);

        &:last-child {
          margin-right: 0;
        }
      }
      div {
        width: 46px;
        height: 46px;
        margin-right: -20px;
        border: 2px solid var(--whiteColor);
        box-shadow: 0px 4px 4px 0px rgba(101, 96, 240, 0.1);

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .new-customers-card {
    .trezo-card-content {
      h2 {
        font-size: 24px;
      }
      .customers-list {
        margin-top: 15px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .new-customers-card {
    .trezo-card-content {
      .customers-list {
        margin-top: 68px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .new-customers-card {
    .trezo-card-content {
      h2 {
        font-size: 28px;
      }
    }
  }
}
</style>
