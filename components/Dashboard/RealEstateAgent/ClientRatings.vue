<template>
  <div class="bg-white border-0 rounded-3 mb-4 client-ratings-bg">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
      >
        <h3 class="mb-0">Client Ratings</h3>
        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle border text-body rounded-2 bg-gray-100"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ currentFilter }}
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li v-for="filter in filters" :key="filter">
              <button
                class="dropdown-item text-secondary py-2 px-3"
                :class="{ active: currentFilter === filter }"
                @click="changeFilter(filter)"
              >
                {{ filter }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :centeredSlides="false"
        :preventClicks="true"
        :loop="false"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          el: '.swiper-pagination-client-ratings',
          clickable: true,
        }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
          1850: { slidesPerView: 3 },
        }"
        :modules="modules"
        class="client-ratings-slide"
      >
        <SwiperSlide v-for="(rating, index) in filteredRatings" :key="index">
          <div :class="`border-0 rounded-3 ${rating.bgColor} p-25`">
            <div class="d-flex align-items-center mb-4" style="gap: 12px">
              <div class="flex-shrink-0">
                <img
                  :src="rating.avatar"
                  style="width: 38px; height: 38px; top: -2px"
                  class="rounded-circle position-relative"
                  :alt="rating.name"
                />
              </div>
              <div class="flex-grow-1">
                <h6 class="fw-semibold fs-14" style="margin-bottom: 3px">
                  {{ rating.name }}
                </h6>
                <span class="fs-12 text-body">{{ rating.location }}</span>
              </div>
            </div>
            <p class="fs-16 text-secondary mb-20" style="line-height: 1.5">
              "{{ rating.comment }}"
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center" style="gap: 1px">
                <i
                  v-for="star in 5"
                  :key="star"
                  :class="getStarClass(star, rating.rating)"
                  class="lh-1"
                ></i>
                <span class="fs-12" style="margin-left: 2px">
                  {{ rating.rating.toFixed(1) }}
                </span>
              </div>
              <i class="ri-double-quotes-r fs-30 text-white lh-1"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="swiper-pagination-client-ratings text-center mt-4 lh-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import image1 from "@/assets/images/user-182.jpg";
import image2 from "@/assets/images/user-183.jpg";
import image3 from "@/assets/images/user-184.jpg";

interface Rating {
  id: number;
  name: string;
  location: string;
  avatar: string;
  comment: string;
  rating: number;
  date: string;
  bgColor: string;
}

export default defineComponent({
  name: "ClientRatings",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const currentFilter = ref<string>("Top Rated");
    const filters = ["Top Rated", "Latest", "Oldest"];

    const ratings = ref<Rating[]>([
      {
        id: 1,
        name: "David Carlen",
        location: "New Castle, United Kingdom",
        avatar: image1,
        comment:
          "Working with William was an absolute pleasure. His market knowledge and attention to detail helped us sell our home quickly and at a great price.",
        rating: 5.0,
        date: "2023-10-15",
        bgColor: "bg-border-color-50",
      },
      {
        id: 2,
        name: "Zinia Anderson",
        location: "New Brunchwick, Canada",
        avatar: image2,
        comment:
          "William's professionalism and responsiveness set him apart from other agents. He listened, and delivered outstanding results.",
        rating: 4.9,
        date: "2023-11-02",
        bgColor: "bg-danger-100",
      },
      {
        id: 3,
        name: "Walter White",
        location: "New York, USA",
        avatar: image3,
        comment:
          "Thanks to William, I felt confident every step of the way during my first home purchase. His friendly demeanor and expert advice helped us.",
        rating: 4.5,
        date: "2023-09-20",
        bgColor: "bg-success-90",
      },
      {
        id: 4,
        name: "Sarah Johnson",
        location: "Los Angeles, USA",
        avatar: image2,
        comment:
          "Exceptional service! William went above and beyond to find us the perfect home. His negotiation skills saved us thousands.",
        rating: 4.2,
        date: "2023-12-05",
        bgColor: "bg-border-color-50",
      },
      {
        id: 5,
        name: "Michael Brown",
        location: "Chicago, USA",
        avatar: image1,
        comment:
          "As a first-time seller, I was nervous, but William made the process smooth and stress-free. Highly recommend!",
        rating: 4.0,
        date: "2023-08-14",
        bgColor: "bg-danger-100",
      },
      {
        id: 6,
        name: "Walter White",
        location: "New York, USA",
        avatar: image3,
        comment:
          "Thanks to William, I felt confident every step of the way during my first home purchase. His friendly demeanor and expert advice helped us.",
        rating: 3.9,
        date: "2023-09-20",
        bgColor: "bg-success-90",
      },
    ]);

    const filteredRatings = computed(() => {
      const sorted = [...ratings.value];
      switch (currentFilter.value) {
        case "Top Rated":
          return sorted.sort((a, b) => b.rating - a.rating);
        case "Latest":
          return sorted.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        case "Oldest":
          return sorted.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        default:
          return sorted;
      }
    });

    const changeFilter = (filter: string) => {
      currentFilter.value = filter;
    };

    const getStarClass = (star: number, rating: number) => {
      if (star <= rating) {
        return "ri-star-fill text-danger";
      }
      if (star - 0.5 <= rating) {
        return "ri-star-half-line text-danger";
      }
      return "ri-star-line text-danger";
    };

    return {
      modules: [Autoplay, Pagination],
      currentFilter,
      filters,
      filteredRatings,
      changeFilter,
      getStarClass,
    };
  },
});
</script>
