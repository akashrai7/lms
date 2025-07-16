<template>
  <div
    class="customers-from-channels-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">Customers From Channels</h5>
      </div>

      <div class="trezo-card-content">
        <ul class="p-0 m-0 list-unstyled">
          <li
            v-for="channel in channels"
            :key="channel.name"
            class="d-flex align-items-center justify-content-between"
          >
            <div class="title d-flex align-items-center">
              <img :src="channel.icon" :alt="channel.name" />
              <div>
                <span class="d-block fw-semibold text-black">
                  {{ channel.name }}
                </span>
                <span class="d-block">{{ channel.description }}</span>
              </div>
            </div>
            <div class="percentage-progress d-flex align-items-center">
              <div
                class="progress trezo-progress w-100"
                role="progressbar"
                :aria-valuenow="channel.percentage"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  :class="channel.progressBarClass"
                  :style="{ width: channel.percentage + '%' }"
                ></div>
              </div>
              <span class="d-block percentage">{{ channel.percentage }}%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import iconFacebook from "@/assets/images/icons/facebook3.svg";
import iconDribbble from "@/assets/images/icons/dribbble2.svg";
import iconInstagram from "@/assets/images/icons/instagram2.svg";
import iconGoogle from "@/assets/images/icons/google3.svg";

export default defineComponent({
  name: "CustomersFromChannels",
  data() {
    return {
      channels: [
        {
          name: "Facebook",
          description: "Community",
          icon: iconFacebook,
          percentage: 50,
          progressBarClass: "",
        },
        {
          name: "Dribbble",
          description: "Community",
          icon: iconDribbble,
          percentage: 75,
          progressBarClass: "bg-secondary",
        },
        {
          name: "Instagram",
          description: "Reels",
          icon: iconInstagram,
          percentage: 30,
          progressBarClass: "bg-orange",
        },
        {
          name: "Google",
          description: "SEO & PPC",
          icon: iconGoogle,
          percentage: 20,
          progressBarClass: "bg-success",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.customers-from-channels-card {
  .trezo-card-content {
    ul {
      li {
        border-bottom: 1px solid var(--borderColor);
        padding-bottom: 14px;
        margin-bottom: 14px;

        .title {
          gap: 15px;

          span {
            &:nth-child(2) {
              font-size: 12px;
              margin-top: 2px;
            }
          }
        }
        .percentage-progress {
          width: 150px;
          gap: 12px;

          .trezo-progress {
            --bs-progress-height: 8px;
            .bg-secondary {
              background-color: var(--secondaryColor) !important;
            }
            .bg-orange {
              background-color: var(--orangeColor) !important;
            }
          }
          .percentage {
            font-size: 12px;
          }
        }
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom-width: 0;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .customers-from-channels-card {
    .trezo-card-content {
      ul {
        li {
          .percentage-progress {
            width: 130px;
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .customers-from-channels-card {
    .trezo-card-content {
      ul {
        li {
          .percentage-progress {
            width: 120px;
          }
        }
      }
    }
  }
}
</style>
