<template>
  <div
    class="doctor-welcome-card card border-0 position-relative z-1 border-radius d-block border-0 shadow-none"
  >
    <div class="trezo-card-content">
      <div class="row">
        <div class="col-lg-6">
          <div class="content">
            <span class="sub-title d-block text-white"> Good Morning </span>
            <h1 class="text-white">Dr. Olivia John</h1>
            <span
              class="designation text-white fw-smeibold d-inline-block text-uppercase position-relative"
            >
              <img src="@/assets/images/icons/heart.png" alt="heart" />
              CARDIO SPECIALIST
            </span>
            <p>
              Today you have <span>15</span> Consultations and
              <span>12</span> Operations.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="image">
            <img src="@/assets/images/main-doctor.png" alt="doctor-image" />
          </div>
        </div>
      </div>
    </div>
    <div class="shape">
      <img src="@/assets/images/line.png" alt="line" />
    </div>
    <div class="star">
      <img src="@/assets/images/star.png" alt="star" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoctorWelcome",
});
</script>

<style lang="scss" scoped>
.doctor-welcome-card {
  padding: 8px 50px 0 50px;
  background: linear-gradient(272deg, #1f64f1 31.27%, #123a8b 98.4%);

  .trezo-card-content {
    .content {
      padding-top: 40px;

      .sub-title {
        font-size: 18px;
        margin-bottom: 5px;
      }
      h1 {
        margin-bottom: 10px;
        font: {
          size: 28px;
          weight: 900;
        }
      }
      .designation {
        font-size: 12px;
        padding-left: 20px;
        margin-bottom: 9px;

        img {
          left: 0;
          top: 50%;
          position: absolute;
          transform: translateY(-50%);
        }
      }
      p {
        color: #b1bbc8;

        span {
          color: var(--whiteColor);
        }
      }
    }
    .image {
      text-align: end;
    }
  }
  .shape {
    right: 0;
    bottom: 0;
    z-index: -1;
    position: absolute;
  }
  .star {
    top: 60px;
    right: 85px;
    z-index: -1;
    position: absolute;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .doctor-welcome-card {
    padding: 25px 17px 0;
    text-align: center;

    .trezo-card-content {
      .content {
        padding-top: 0;

        .sub-title {
          font-size: 14px;
        }
        h1 {
          font-size: 22px;
        }
      }
      .image {
        margin-top: 15px;
        text-align: center;
      }
    }
    .star {
      display: none;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .doctor-welcome-card {
    padding: 25px 20px 0;
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .doctor-welcome-card {
    padding-top: 40px;

    .trezo-card-content {
      .content {
        padding-top: 0;
        text-align: center;

        .sub-title {
          font-size: 16px;
        }
        h1 {
          font-size: 24px;
        }
      }
      .image {
        margin-top: 15px;
        text-align: center;
      }
    }
    .star {
      display: none;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .doctor-welcome-card {
    .trezo-card-content {
      .row {
        align-items: center;
      }
      .content {
        padding-top: 0;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .doctor-welcome-card {
    .trezo-card-content {
      .row {
        align-items: center;
      }
      .content {
        padding-top: 0;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .doctor-welcome-card {
    padding: {
      left: 105px;
      right: 80px;
    }
  }
}
</style>
