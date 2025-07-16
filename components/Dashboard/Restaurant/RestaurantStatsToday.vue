<template>
  <div
    class="restaurant-welcome-card card mb-4 border-radius d-block border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="content">
              <span class="sub-title fw-medium d-inline-block">
                Hello Olivia!
              </span>
              <h1 class="text-white">Here Your Restaurant Stats Today.</h1>
              <div class="stats d-flex align-items-center">
                <div class="item position-relative">
                  <i class="material-symbols-outlined"> order_approve </i>
                  <span class="d-block text-white"> Total Orders </span>
                  <h6 class="mb-0 text-white">12051+</h6>
                </div>
                <div class="item position-relative">
                  <i class="material-symbols-outlined"> group </i>
                  <span class="d-block text-white"> Total Users </span>
                  <h6 class="mb-0 text-white">153k+</h6>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="image position-relative">
              <img
                src="@/assets/images/chowmein.png"
                class="main-image"
                alt="chowmein"
              />
              <img
                src="@/assets/images/icons/3dots1.png"
                class="shape1"
                alt="3dots1"
              />
              <img
                src="@/assets/images/icons/3dots2.png"
                class="shape2"
                alt="3dots2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RestaurantStatsToday",
});
</script>

<style lang="scss" scoped>
.restaurant-welcome-card {
  background-color: #fe7a36;

  .trezo-card-content {
    padding: {
      top: 23.5px;
      bottom: 23.5px;
    }
    .content {
      margin-right: -55px;

      .sub-title {
        font-size: 16px;
        color: #ffe8d4;
        padding: 1px 13px;
        margin-bottom: 12px;
        background-color: var(--darkColor);
      }
      h1 {
        font-size: 28px;
        margin-bottom: 0;
        letter-spacing: -0.5px;
      }
      .stats {
        margin-top: 25px;
        gap: 25px;

        .item {
          padding-left: 33px;

          i {
            color: var(--whiteColor);
            position: absolute;
            top: 2px;
            left: 0;
          }
          h6 {
            font-size: 16px;
            margin-top: 3px;
          }
        }
      }
    }
    .image {
      text-align: end;
      max-width: 217px;
      margin-left: auto;
      padding: {
        top: 10px;
        right: 22px;
        bottom: 10px;
      }
      .main-image {
        animation: spin 5s linear infinite;
      }
      .shape1 {
        right: 0;
        bottom: 0;
        position: absolute;
      }
      .shape2 {
        top: 0;
        left: 0;
        position: absolute;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .restaurant-welcome-card {
    .trezo-card-content {
      text-align: center;
      padding: {
        top: 5px;
        bottom: 5px;
      }
      .content {
        margin: {
          right: 0;
          bottom: 17px;
        }
        .sub-title {
          font-size: 14px;
        }
        h1 {
          font-size: 24px;
        }
        .stats {
          justify-content: center;
          margin-top: 12px;
          gap: 17px;
        }
      }
      .image {
        text-align: center;
        margin-right: auto;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .restaurant-welcome-card {
    .trezo-card-content {
      .content {
        margin-bottom: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .restaurant-welcome-card {
    .trezo-card-content {
      padding: {
        top: 20px;
        bottom: 20px;
      }
      .content {
        margin-right: 0;

        h1 {
          font-size: 26px;
        }
        .stats {
          margin-top: 20px;
        }
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .restaurant-welcome-card {
    .trezo-card-content {
      .content {
        max-width: 330px;
        margin-right: 0;

        h1 {
          font-size: 32px;
        }
        .stats {
          gap: 40px;
        }
      }
    }
  }
}
</style>
