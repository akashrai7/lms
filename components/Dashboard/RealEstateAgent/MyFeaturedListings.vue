<template>
  <div
    class="border-0 rounded-3 position-relative z-1 p-25 bg-card-text-c my-featured-listings-bg"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-1 mb-4"
    >
      <h5 class="mb-0">My Featured Listings</h5>
      <div class="">
        <div class="swiper-pagination-my-featured-listings"></div>
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
        el: '.swiper-pagination-my-featured-listings',
        clickable: true,
      }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 2,
        },
        1850: {
          slidesPerView: 2,
        },
      }"
      :modules="modules"
      class="my-featured-listings-slide"
    >
      <SwiperSlide v-for="(property, index) in featuredProperties" :key="index">
        <NuxtLink
          to="/real-estate-agent/property-details"
          class="text-decoration-none position-relative d-block"
        >
          <div
            class="position-relative z-1 bg-img rounded-top-2"
            :style="{
              'background-image': `url(${property.image})`,
              height: '202px',
            }"
          >
            <div class="position-absolute top-0 start-0 m-2">
              <span
                class="d-inline-block bg-card-text-c px-2 rounded-1 text-danger-50 fs-12 fw-medium"
                style="padding-top: 3px; padding-bottom: 3px"
                >{{ property.type }}</span
              >
            </div>
          </div>

          <div class="bg-white rounded-bottom-2" style="padding: 20px">
            <h3 class="fs-16 fw-semibold mb-6">{{ property.title }}</h3>
            <span class="text-body">{{ property.location }}</span>

            <ul
              class="px-0 pb-13 mb-13 border-bottom mt-13 list-unstyled d-flex justify-content-between align-items-center"
            >
              <li class="d-flex align-items-center gap-1 text-body">
                <i class="material-symbols-outlined fs-18">open_run</i>
                <span>{{ property.area }} Sft</span>
              </li>
              <li class="d-flex align-items-center gap-1 text-body">
                <i class="material-symbols-outlined fs-18">bed</i>
                <span>{{ property.bedrooms }} Bed</span>
              </li>
              <li class="d-flex align-items-center gap-1 text-body">
                <i class="material-symbols-outlined fs-18">bathtub</i>
                <span>{{ property.bathrooms }} Bath</span>
              </li>
            </ul>

            <div class="d-flex justify-content-between align-items-center">
              <h3 class="mb-0">${{ property.price }}/m</h3>
              <i
                class="ri-arrow-right-line wh-30 d-flex justify-content-center align-items-center bg-border-color rounded-circle hover-bg lh-1"
              ></i>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import image1 from "@/assets/images/property-1.jpg";
import image2 from "@/assets/images/property-2.jpg";

interface Property {
  id: number;
  image: string;
  type: string;
  title: string;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

export default defineComponent({
  name: "MyFeaturedListings",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const featuredProperties = ref<Property[]>([
      {
        id: 1,
        image: image1,
        type: "For Rent",
        title: "Luxury Comfort Villa",
        location: "London, United Kingdom",
        area: 425,
        bedrooms: 3,
        bathrooms: 2,
        price: 4274,
      },
      {
        id: 2,
        image: image2,
        type: "For Rent",
        title: "White House Villa",
        location: "New Castle, United Kingdom",
        area: 321,
        bedrooms: 2,
        bathrooms: 1,
        price: 4274,
      },
      {
        id: 3,
        image: image1,
        type: "For Rent",
        title: "Luxury Comfort Villa",
        location: "London, United Kingdom",
        area: 425,
        bedrooms: 3,
        bathrooms: 2,
        price: 4274,
      },
      {
        id: 4,
        image: image2,
        type: "For Rent",
        title: "White House Villa",
        location: "New Castle, United Kingdom",
        area: 321,
        bedrooms: 2,
        bathrooms: 1,
        price: 4274,
      },
    ]);

    return {
      modules: [Autoplay, Pagination],
      featuredProperties,
    };
  },
});
</script>
