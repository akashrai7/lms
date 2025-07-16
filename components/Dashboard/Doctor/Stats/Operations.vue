<template>
  <div
    class="operations-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div class="trezo-card-content d-flex justify-content-between">
        <div class="title">
          <span class="d-block"> Operations </span>
          <h2>12</h2>
          <span class="info-badge d-inline-block"> +5.4% </span>
        </div>
        <div class="icon">
          <img src="@/assets/images/icons/scissors.svg" alt="scissors" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Operations",
});
</script>

<style lang="scss" scoped>
.operations-card {
  .trezo-card-content {
    .title {
      h2 {
        margin: {
          top: 5px;
          bottom: 8px;
        }
        font: {
          size: 28px;
          weight: 900;
        }
      }
      .info-badge {
        font-size: 12px;
        padding: 0 10px;
        color: #1e8308;
        border-radius: 100px;
        border: 1px solid #82fc5a;
        background-color: #d8ffc8;

        &.down {
          border-color: #ffaa72;
          color: var(--dangerColor);
          background-color: #ffe8d4;
        }
      }
    }
    .icon {
      margin-top: 5px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .operations-card {
    .trezo-card-content {
      .title {
        h2 {
          font-size: 22px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .operations-card {
    .trezo-card-content {
      .title {
        h2 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
