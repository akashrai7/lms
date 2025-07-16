<template>
  <div
    class="suggestions-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="trezo-card-header d-flex align-items-center justify-content-between"
      >
        <div class="trezo-card-title">
          <h5 class="mb-0 fw-semibold">Suggestions</h5>
          <p class="fw-normal">People you may know</p>
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
                  <a class="dropdown-item" href="javascript:;"> This Day </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;"> This Week </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;"> This Month </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:;"> This Year </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="trezo-card-content">
        <ul class="p-0 m-0 list-unstyled">
          <li
            v-for="(user, index) in users"
            :key="index"
            class="d-flex align-items-center justify-content-between"
          >
            <div class="user d-flex align-items-center">
              <img :src="user.image" class="rounded-circle" alt="user-image" />
              <div>
                <span class="d-block fw-medium text-black">
                  {{ user.name }}
                </span>
                <span class="text-xs">
                  {{ user.mutualFriends }} mutual friends
                </span>
              </div>
            </div>
            <div class="action d-flex align-items-center">
              <button
                type="button"
                class="d-flex align-items-center justify-content-center p-0 rounded-circle"
                @click="removeUser(index)"
              >
                <i class="ri-delete-bin-7-line"></i>
              </button>
              <button
                type="button"
                class="d-flex align-items-center justify-content-center p-0 rounded-circle"
                @click="addUser(user)"
              >
                <i class="ri-user-add-line"></i>
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

import image1 from "@/assets/images/users/user40.jpg";
import image2 from "@/assets/images/users/user37.jpg";
import image3 from "@/assets/images/users/user54.jpg";
import image4 from "@/assets/images/users/user41.jpg";
import image5 from "@/assets/images/users/user43.jpg";

interface User {
  name: string;
  image: string;
  mutualFriends: number;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Suggestions",
  setup() {
    const users = ref<User[]>([
      {
        name: "Sophia Adams",
        image: image1,
        mutualFriends: 12,
      },
      {
        name: "Liam Roberts",
        image: image2,
        mutualFriends: 8,
      },
      {
        name: "Olivia Martinez",
        image: image3,
        mutualFriends: 15,
      },
      {
        name: "Ethan Clarke",
        image: image4,
        mutualFriends: 10,
      },
      {
        name: "Isabella Cruz",
        image: image5,
        mutualFriends: 7,
      },
    ]);

    const removeUser = (index: number) => {
      users.value.splice(index, 1);
    };

    const addUser = (user: User) => {
      console.log("Added user:", user);
      // You can implement logic to add the user to your network
    };

    return {
      users,
      removeUser,
      addUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.suggestions-card {
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
        margin-bottom: 10.7px;
        border-bottom: 1px solid #f6f7f9;
        padding: {
          left: 25px;
          right: 25px;
          bottom: 10.7px;
        }
        .user {
          gap: 10px;

          img {
            width: 44px;
          }
          span {
            &.text-xs {
              font-size: 12px;
            }
          }
        }
        .action {
          gap: 5px;

          button {
            width: 34px;
            height: 34px;
            font-size: 16px;
            color: var(--orangeColor);
            border: 1px solid #ffc8c0;
            background-color: transparent;
            transition: var(--transition);

            &:hover {
              color: var(--whiteColor);
              border-color: var(--orangeColor);
              background-color: var(--orangeColor);
            }
            &:nth-child(2) {
              color: var(--primaryColor);
              border-color: #c2cdff;

              &:hover {
                color: var(--whiteColor);
                border-color: var(--primaryColor);
                background-color: var(--primaryColor);
              }
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
  .suggestions-card {
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
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .suggestions-card {
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
  .suggestions-card {
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
