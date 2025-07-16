<template>
  <div
    class="sa-welcome-card trezo-card border-radius d-block border-0 shadow-none pb-0"
  >
    <div class="trezo-card-content">
      <div class="row">
        <div class="col-md-7">
          <div class="content">
            <span class="d-block fw-medium"> Hello Olivia ✋ </span>
            <h1 class="mb-0 fw-normal text-white">
              Welcome To Trezo – <strong>Your Store</strong>!
            </h1>
          </div>
        </div>
        <div class="col-md-5">
          <div class="image">
            <img src="@/assets/images/store.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SAWelcome",
});
</script>

<style lang="scss" scoped>
.sa-welcome-card {
  background: linear-gradient(104deg, #361e7d 2.4%, #403cff 112.33%);
  border-radius: 5px;

  .trezo-card-content {
    .content {
      padding-top: 20px;

      span {
        color: #c2cdff;
        margin-bottom: 5px;
      }
      h1 {
        font-size: 28px;

        strong {
          font-weight: 900;
        }
      }
    }
    .image {
      text-align: end;
    }
  }
}
.sa-stats {
  margin: {
    top: -25px;
    left: 25px;
    right: 25px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sa-welcome-card {
    .trezo-card-content {
      .content {
        padding-top: 0;
        text-align: center;

        h1 {
          font-size: 24px;
        }
      }
      .image {
        text-align: center;
        margin-top: 17px;
      }
    }
  }
  .sa-stats {
    margin: {
      left: 0;
      right: 0;
      top: 25px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .sa-welcome-card {
    .trezo-card-content {
      .content {
        padding-top: 12px;
        max-width: 320px;
      }
    }
  }
  .sa-stats {
    margin: {
      left: 0;
      right: 0;
      top: 25px;
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .sa-welcome-card {
    .trezo-card-content {
      padding: {
        left: 15px;
        right: 15px;
      }
    }
  }
  .sa-stats {
    margin: {
      left: 40px;
      right: 40px;
    }
  }
}
</style>
