<template>
  <div
    class="card custom-shadow rounded-3 bg-white border mb-4"
    style="padding-bottom: 18px"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 position-relative custom-padding-30"
      style="top: -5px; padding-bottom: 12px"
    >
      <h3 class="mb-0 fs-18 fw-semibold">Top Podcasts</h3>
      <div
        class="dropdown select-dropdown without-border position-relative"
        style="right: -5px"
      >
        <button
          class="dropdown-toggle bg-transparent border text-body rounded-2"
          style="padding-right: 20px"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Last 28 days
        </button>

        <ul
          class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
        >
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Last 28 days
            </button>
          </li>
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Last 48 days
            </button>
          </li>
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Last 90 days
            </button>
          </li>
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Last Year
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="default-table-area style-three style-two top-podcasts">
      <div class="table-responsive">
        <table class="table align-middle border-0">
          <thead>
            <tr>
              <th
                scope="col"
                class="bg-body-bg"
                style="padding-top: 6.5px; padding-bottom: 6.5px"
              >
                <span class="fs-12 fw-medium text-body">Name</span>
              </th>
              <th
                scope="col"
                class="bg-body-bg"
                style="padding-top: 6.5px; padding-bottom: 6.5px"
              >
                <span class="fs-12 fw-medium text-body">Episodes</span>
              </th>
              <th
                scope="col"
                class="bg-body-bg"
                style="padding-top: 6.5px; padding-bottom: 6.5px"
              >
                <span class="fs-12 fw-medium text-body">Earnings</span>
              </th>
              <th
                scope="col"
                class="bg-body-bg"
                style="padding-top: 6.5px; padding-bottom: 6.5px"
              >
                <span class="fs-12 fw-medium text-body">Ratings</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(podcast, index) in podcasts" :key="index">
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      :src="podcast.image"
                      class="wh-44 rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-10 position-relative top-2">
                    <h6 class="mb-0 fs-14 fw-medium">{{ podcast.name }}</h6>
                    <span class="fs-12 text-body">{{ podcast.role }}</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="fs-14 fw-medium text-secondary">{{ podcast.episodes }}</span>
              </td>
              <td>
                <span class="fs-14 fw-medium text-secondary">{{ podcast.earnings }}</span>
              </td>
              <td>
                <ul class="ps-0 mb-0 list-unstyled d-flex gap-1">
                  <li v-for="star in 5" :key="star">
                    <i
                      :class="getStarClass(star, podcast.rating)"
                      class="fs-15"
                    ></i>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "@/assets/images/user-129.png"
import image2 from "@/assets/images/user-130.png"
import image3 from "@/assets/images/user-131.png"
import image4 from "@/assets/images/user-132.png"
import image5 from "@/assets/images/user-133.png"

export default defineComponent({
  name: "TopPodcasts",
  setup() {
    const podcasts = ref([
      {
        image: image1,
        name: "Tom Richards",
        role: "Content Strategist",
        episodes: 95,
        earnings: "$125,000",
        rating: 4.5,
      },
      {
        image: image2,
        name: "Amanda Garcia",
        role: "Social Media",
        episodes: 110,
        earnings: "$140,000",
        rating: 4.5,
      },
      {
        image: image3,
        name: "Lisa Kim",
        role: "Branding Consultant",
        episodes: 85,
        earnings: "$160,000",
        rating: 4,
      },
      {
        image: image4,
        name: "Michael Young",
        role: "Data Analytics",
        episodes: 130,
        earnings: "$90,000",
        rating: 3.5,
      },
      {
        image: image5,
        name: "Ravi Patel",
        role: "SEO & SEM",
        episodes: 75,
        earnings: "$85,000",
        rating: 3,
      },
    ]);

    // Function to determine star icons based on rating
    const getStarClass = (star: number, rating: number) => {
      if (star <= Math.floor(rating)) {
        return "ri-star-fill text-rating-color";
      } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
        return "ri-star-half-line text-rating-color";
      } else {
        return "ri-star-line text-rating-color";
      }
    };

    return {
      podcasts,
      getStarClass,
    };
  },
});
</script>