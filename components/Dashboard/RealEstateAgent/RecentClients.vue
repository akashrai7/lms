<template>
  <div class="card bg-white border-0 rounded-3">
    <div class="card-body p-25">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
      >
        <h5 class="mb-0">Recent Clients</h5>

        <div class="dropdown action-opt" style="right: -8px">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" style="stroke: #64748b"></i>
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

      <ul class="ps-0 mb-0 list-unstyled pt-3 border-top">
        <li
          v-for="client in clients"
          :key="client.id"
          class="mb-12 pb-12 border-bottom d-flex justify-content-between align-items-center"
        >
          <div class="d-flex align-items-center" style="gap: 14px">
            <div class="flex-shrink-0 position-relative" style="top: -2px">
              <img :src="client.avatar" style="max-width: 35px" alt="user" />
              <div
                class="position-absolute border border-1 border-white rounded-circle status-position2 bottom-0"
                :class="`bg-${
                  client.status === 'online' ? 'success' : 'body-color'
                }-60`"
                style="width: 12px; height: 12px"
              ></div>
            </div>
            <div class="flex-grow-1">
              <h4 class="fs-14 fw-semibold mb-0">{{ client.name }}</h4>
              <span class="fs-12 d-block" style="margin-top: 2px">
                {{ client.profession }}
              </span>
            </div>
          </div>
          <NuxtLink to="/social/profile" class="text-decoration-none">
            <i class="ri-arrow-right-line fs-18"></i>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import feather from "feather-icons";

import image1 from "@/assets/images/user-177.png";
import image2 from "@/assets/images/user-157.png";
import image3 from "@/assets/images/user-158.png";
import image4 from "@/assets/images/user-159.png";
import image5 from "@/assets/images/user-160.png";
import image6 from "@/assets/images/user-154.png";

interface Client {
  id: number;
  name: string;
  profession: string;
  avatar: string;
  status: "online" | "offline";
}

export default defineComponent({
  name: "RecentClients",
  setup() {
    const clients: Client[] = [
      {
        id: 1,
        name: "Johhna Loren",
        profession: "Doctor",
        avatar: image1,
        status: "online",
      },
      {
        id: 2,
        name: "Zinia Watson",
        profession: "Lawyer",
        avatar: image2,
        status: "online",
      },
      {
        id: 3,
        name: "Angela Carter",
        profession: "Businesswoman",
        avatar: image3,
        status: "online",
      },
      {
        id: 4,
        name: "Skyler White",
        profession: "Enterpreuner",
        avatar: image4,
        status: "offline",
      },
      {
        id: 5,
        name: "Jane Ronan",
        profession: "Editor",
        avatar: image5,
        status: "online",
      },
      {
        id: 6,
        name: "Viktor James",
        profession: "Editor",
        avatar: image6,
        status: "offline",
      },
    ];

    onMounted(() => {
      feather.replace();
    });

    return {
      clients,
    };
  },
});
</script>
