<template>
  <div class="card bg-white border-0 rounded-3 top-channels-for-dark">
    <div class="card-body p-25">
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Top Channels</h5>
        <a href="#" class="text-decoration-none hover">
          Browse All
          <i
            class="ri-arrow-right-s-line fs-22 lh-1 position-relative top-3"
          ></i>
        </a>
      </div>

      <ul class="px-0 mb-0 list-unstyled last-child-none pt-1">
        <li
          v-for="channel in channels"
          :key="channel.id"
          class="mb-14 pb-14 border-bottom"
        >
          <div class="d-flex align-items-center justify-content-between">
            <div class="flex-shrink-0">
              <div class="d-flex">
                <img
                  :src="channel.icon"
                  style="max-width: 25px"
                  :alt="channel.name"
                />
                <div class="ms-3">
                  <h4 class="mb-0 fs-14 fw-semibold">{{ channel.name }}</h4>
                  <span class="fs-12 d-block" style="margin-top: 2px">
                    {{ channel.category }}
                  </span>
                </div>
              </div>
            </div>

            <div class="flex-grow-1 ms-3">
              <div
                class="ms-auto"
                :style="{
                  position: 'relative',
                  width: '43px',
                  height: '43px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `conic-gradient(${channel.color} ${channel.percentage}%, #ffffff ${channel.percentage}%)`,
                }"
              >
                <div
                  style="
                    position: absolute;
                    width: 87%;
                    height: 87%;
                    background-color: #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <p class="text-body" style="font-size: 10px">
                    {{ channel.percentage }}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/facebook-real.svg";
import image2 from "~/assets/images/dribbble-real.svg";
import image3 from "~/assets/images/instagram-real.svg";
import image4 from "~/assets/images/google-real.svg";
import image5 from "~/assets/images/figma-real.svg";

interface Channel {
  id: number;
  name: string;
  category: string;
  icon: string;
  percentage: number;
  color: string;
}

export default defineComponent({
  name: "TopChannels",
  data() {
    return {
      channels: [
        {
          id: 1,
          name: "Facebook",
          category: "Community",
          icon: image1,
          percentage: 80,
          color: "#6f77f3",
        },
        {
          id: 2,
          name: "Dribbble",
          category: "Community",
          icon: image2,
          percentage: 75,
          color: "#5ba5fa",
        },
        {
          id: 3,
          name: "Instagram",
          category: "Reel",
          icon: image3,
          percentage: 80,
          color: "#fc7936",
        },
        {
          id: 4,
          name: "Google",
          category: "SEO & PPC",
          icon: image4,
          percentage: 100,
          color: "#58f229",
        },
        {
          id: 5,
          name: "Figma",
          category: "Community",
          icon: image5,
          percentage: 60,
          color: "#bf85fb",
        },
      ] as Channel[],
    };
  },
});
</script>
