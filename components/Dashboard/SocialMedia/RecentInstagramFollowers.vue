<template>
  <div
    class="recent-instagram-followers-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="trezo-card-header d-flex align-items-center justify-content-between"
      >
        <div class="trezo-card-title">
          <h5 class="mb-0 fw-semibold">Recent Instagram Followers</h5>
          <p class="fw-normal">Check out your latest followers</p>
        </div>

        <div class="trezo-card-subtitle">
          <div class="trezo-card-header-menu position-relative">
            <div class="dropdown action-opt">
              <button
                class="btn bg-transparent p-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="ri-more-2-fill"></i>
              </button>

              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <button class="dropdown-item">This Day</button>
                </li>
                <li>
                  <button class="dropdown-item">This Week</button>
                </li>
                <li>
                  <button class="dropdown-item">This Month</button>
                </li>
                <li>
                  <button class="dropdown-item">This Year</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="trezo-card-content">
        <ul class="p-0 m-0 list-unstyled">
          <li
            v-for="(follower, index) in followers"
            :key="index"
            class="d-flex align-items-center justify-content-between"
          >
            <div class="user d-flex align-items-center">
              <img
                :src="follower.image"
                class="rounded-circle"
                alt="user-image"
              />
              <span class="d-block fw-medium text-black">
                {{ follower.name }}
              </span>
            </div>
            <div class="action d-flex align-items-center">
              <button type="button" class="follow-btn d-inline-block border-0">
                Follow Back
              </button>
              <button
                type="button"
                class="message-btn d-flex align-items-center justify-content-center border-0 p-0"
              >
                <i class="ri-message-2-line"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "@/assets/images/users/user69.jpg";
import image2 from "@/assets/images/users/user70.jpg";
import image3 from "@/assets/images/users/user71.jpg";
import image4 from "@/assets/images/users/user72.jpg";
import image5 from "@/assets/images/users/user73.jpg";
import image6 from "@/assets/images/users/user74.jpg";

export default defineComponent({
  name: "RecentInstagramFollowers",
  setup() {
    // Reactive data for followers
    const followers = ref([
      {
        name: "Mason Lee",
        image: image1,
      },
      {
        name: "Mia Patel",
        image: image2,
      },
      {
        name: "James Nguyen",
        image: image3,
      },
      {
        name: "Benjamin Kim",
        image: image4,
      },
      {
        name: "Elijah Watson",
        image: image5,
      },
      {
        name: "Daniel Flores",
        image: image6,
      },
    ]);

    return {
      followers,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-instagram-followers-card {
  .trezo-card-header {
    margin-bottom: 20px;

    .trezo-card-title {
      h5 {
        font-size: 20px;
      }
      p {
        color: #8695aa;
      }
    }
  }
  .trezo-card-content {
    margin: {
      left: -25px;
      right: -25px;
    }
    ul {
      li {
        margin-bottom: 10px;
        border-bottom: 1px solid #f6f7f9;
        padding: {
          left: 25px;
          right: 25px;
          bottom: 10px;
        }
        .user {
          gap: 10px;

          img {
            width: 34px;
          }
        }
        .action {
          gap: 10px;

          .follow-btn {
            font-size: 12px;
            border-radius: 4px;
            padding: 3.5px 10px;
            color: var(--primaryColor);
            background-color: #ecf0ff;
            transition: var(--transition);

            &:hover {
              color: var(--whiteColor);
              background-color: var(--primaryColor);
            }
          }
          .message-btn {
            width: 25px;
            height: 25px;
            border-radius: 4px;
            color: var(--purpleColor);
            background-color: #f3e8ff;
            transition: var(--transition);

            &:hover {
              color: var(--whiteColor);
              background-color: var(--purpleColor);
            }
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

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .recent-instagram-followers-card {
    .trezo-card-header {
      .trezo-card-title {
        h5 {
          font-size: 16px;
        }
        p {
          margin-top: 2px;
        }
      }
    }
    .trezo-card-content {
      margin: {
        left: -17px;
        right: -17px;
      }
      ul {
        li {
          padding: {
            left: 17px;
            right: 17px;
          }
          .action {
            gap: 5px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .recent-instagram-followers-card {
    .trezo-card-content {
      margin: {
        left: -20px;
        right: -20px;
      }
      ul {
        li {
          padding: {
            left: 20px;
            right: 20px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .recent-instagram-followers-card {
    .trezo-card-header {
      .trezo-card-title {
        h5 {
          font-size: 18px;
        }
        p {
          margin-top: 1px;
        }
      }
    }
  }
}
</style>
