<template>
  <div
    class="bs-welcome-card card mb-4 border-0 border-radius d-block border-0 shadow-none pb-0"
  >
    <div class="card-body p-4 pb-0">
      <div class="trezo-card-content">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="content position-relative z-1">
              <span class="sub-title d-block"> Hello Olivia! </span>
              <h1>Welcome To Your Beauty Lounge</h1>
              <p>You have 15.7% more bookings today.</p>
            </div>
          </div>

          <div class="col-md-6">
            <div class="image text-center mx-auto position-relative z-1">
              <img
                src="@/assets/images/girl-with-smile.png"
                alt="girl-with-smile"
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
  name: "WelcomeBeautySalon",
});
</script>

<style lang="scss" scoped>
.bs-welcome-card {
  background: linear-gradient(90deg, #eab9d2 0%, #eba2c7 100%);

  .trezo-card-content {
    padding-top: 11px;

    .content {
      top: -11px;
      max-width: 255px;
      margin-right: -15px;

      .sub-title {
        font-size: 18px;
        color: #000000;
        margin-bottom: 10px;
      }
      h1 {
        color: #000000;
        margin-bottom: 12px;
        font: {
          size: 28px;
          weight: 900;
        }
      }
      p {
        color: var(--blackColor);
      }
      &::before {
        top: -15px;
        left: -15px;
        z-index: -1;
        content: "";
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.04) 100%
        );
      }
    }
    .image {
      max-width: 237px;

      &::before {
        top: 30px;
        left: 50%;
        z-index: -1;
        content: "";
        width: 220px;
        height: 220px;
        border-radius: 50%;
        position: absolute;
        transform: translateX(-50%);
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.04) 100%
        );
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .bs-welcome-card {
    .trezo-card-content {
      padding-top: 0;
      text-align: center;

      .content {
        top: 0;
        max-width: 100%;
        margin-right: 0;

        .sub-title {
          font-size: 15px;
          margin-bottom: 8px;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
      }
      .image {
        max-width: 100%;
        margin-top: 17px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .bs-welcome-card {
    .trezo-card-content {
      .content {
        max-width: 100%;

        .sub-title {
          font-size: 16px;
        }
        h1 {
          font-size: 26px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .bs-welcome-card {
    .trezo-card-content {
      .content {
        max-width: 100%;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .bs-welcome-card {
    .trezo-card-content {
      .content {
        max-width: 100%;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .bs-welcome-card {
    .trezo-card-content {
      .content {
        margin-right: 0;
      }
    }
  }
}
</style>
