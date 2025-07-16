<template>
  <div class="sa-stats position-relative">
    <div class="row">
      <div class="col-sm-4" v-for="(stat, index) in stats" :key="index">
        <div
          class="sa-stat-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
        >
          <div class="card-body p-4">
            <div class="trezo-card-content d-flex justify-content-between">
              <div>
                <span class="d-block"> {{ stat.label }} </span>
                <h3>{{ stat.value }}</h3>
                <span :class="['trezo-badge', stat.badgeClass]">
                  {{ stat.change }}
                </span>
              </div>
              <div
                :class="[
                  'icon d-flex align-items-center justify-content-center rounded-circle',
                  stat.iconColor,
                  stat.bgColor,
                ]"
              >
                <i :class="stat.icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",
  setup() {
    const stats = ref([
      {
        label: "New Customers",
        value: "14.5k",
        change: "+7%",
        badgeClass: "shipped",
        icon: "ri-user-3-fill",
        iconColor: "text-primary",
        bgColor: "bg-primary-100",
      },
      {
        label: "Sales",
        value: "$64.5k",
        change: "-1.4%",
        badgeClass: "cancelled",
        icon: "ri-money-dollar-circle-fill",
        iconColor: "text-success",
        bgColor: "bg-success-100",
      },
      {
        label: "Products",
        value: "11.9k",
        change: "+1.1%",
        badgeClass: "shipped",
        icon: "ri-price-tag-3-fill",
        iconColor: "text-purple",
        bgColor: "bg-purple-100",
      },
    ]);

    return {
      stats,
    };
  },
});
</script>

<style lang="scss" scoped>
.sa-stats {
  margin: {
    top: -25px;
    left: 25px;
    right: 25px;
  }
}
.sa-stat-card {
  .trezo-card-content {
    h3 {
      font-size: 28px;
      margin: {
        top: 5px;
        bottom: 8px;
      }
    }
    .trezo-badge {
      border-radius: 30px;
      padding: {
        left: 11px;
        right: 11px;
      }
    }
    .icon {
      width: 48px;
      height: 48px;
      font-size: 24px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .sa-stats {
    margin: {
      left: 0;
      right: 0;
      top: 25px;
    }
  }
  .sa-stat-card {
    .trezo-card-content {
      h3 {
        font-size: 24px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
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
  .sa-stats {
    margin: {
      left: 40px;
      right: 40px;
    }
  }
}
</style>
