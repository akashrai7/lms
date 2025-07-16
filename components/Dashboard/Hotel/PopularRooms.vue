<template>
  <div
    class="border-0 rounded-3 bg-white position-relative z-1 mb-4 p-25 popular-rooms-bg"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
    >
      <h5 class="mb-0">Popular Rooms</h5>
      <div class="">
        <div class="swiper-pagination-popular-rooms"></div>
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
        el: '.swiper-pagination-popular-rooms',
        clickable: true,
      }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 4,
        },
        1850: {
          slidesPerView: 4,
        },
      }"
      :modules="modules"
      class="popular-rooms-slide"
    >
      <SwiperSlide v-for="(room, index) in rooms" :key="index">
        <NuxtLink
          :to="`/hotel/room-details/${room.id}`"
          class="text-decoration-none position-relative d-block"
        >
          <img :src="room.image" class="rounded-3" :alt="room.name" />

          <h3 class="mt-3 mb-6 fs-16 fw-semibold hover">
            {{ room.name }}
          </h3>
          <span class="text-body">
            Code
            <strong class="fw-semibold">{{ room.code }}</strong>
          </span>
          <div class="position-absolute top-0 end-0 m-2">
            <span
              :class="`d-inline-block ${room.status.class} border px-2 rounded-pill ${room.status.textClass} fs-12 fw-medium`"
            >
              {{ room.status.text }}
            </span>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import image1 from "@/assets/images/room-1.jpg";
import image2 from "@/assets/images/room-2.jpg";
import image3 from "@/assets/images/room-3.jpg";
import image4 from "@/assets/images/room-4.jpg";

export default defineComponent({
  name: "PopularRooms",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const rooms = [
      {
        id: 1,
        name: "The Velvet - F - 32045",
        code: "SJ-32056",
        image: image1,
        status: {
          text: "Booked",
          class: "bg-card-text-c border-danger-50",
          textClass: "text-danger-50",
        },
      },
      {
        id: 2,
        name: "Duluxe Room - G - 3215",
        code: "SJ-32057",
        image: image2,
        status: {
          text: "Available",
          class: "bg-success-80 border-success-60",
          textClass: "text-success-60",
        },
      },
      {
        id: 3,
        name: "The Garden Suite 101",
        code: "SJ-32058",
        image: image3,
        status: {
          text: "Booked",
          class: "bg-card-text-c border-danger-50",
          textClass: "text-danger-50",
        },
      },
      {
        id: 4,
        name: "The Tranquil S-02",
        code: "SJ-32059",
        image: image4,
        status: {
          text: "Available",
          class: "bg-success-80 border-success-60",
          textClass: "text-success-60",
        },
      },
      {
        id: 5,
        name: "The Velvet - F - 32045",
        code: "SJ-32056",
        image: image1,
        status: {
          text: "Booked",
          class: "bg-card-text-c border-danger-50",
          textClass: "text-danger-50",
        },
      },
      {
        id: 6,
        name: "Duluxe Room - G - 3215",
        code: "SJ-32057",
        image: image2,
        status: {
          text: "Available",
          class: "bg-success-80 border-success-60",
          textClass: "text-success-60",
        },
      },
      {
        id: 7,
        name: "The Garden Suite 101",
        code: "SJ-32058",
        image: image3,
        status: {
          text: "Booked",
          class: "bg-card-text-c border-danger-50",
          textClass: "text-danger-50",
        },
      },
      {
        id: 8,
        name: "The Tranquil S-02",
        code: "SJ-32059",
        image: image4,
        status: {
          text: "Available",
          class: "bg-success-80 border-success-60",
          textClass: "text-success-60",
        },
      },
    ];

    return {
      modules: [Autoplay, Pagination],
      rooms,
    };
  },
});
</script>
