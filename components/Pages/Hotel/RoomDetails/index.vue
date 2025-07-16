<template>
  <div class="row g-4 mb-4">
    <div class="col-lg-4">
      <div
        class="bg-white border-0 rounded-3 mb-3 bg-for-dark-room-details"
        style="padding: 13px"
      >
        <Swiper
          :spaceBetween="15"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="room-details-slide2"
        >
          <SwiperSlide>
            <img
              src="@/assets/images/room-10.jpg"
              class="rounded-3 w-100"
              alt="room"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="@/assets/images/room-11.jpg"
              class="rounded-3 w-100"
              alt="room"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="@/assets/images/room-12.jpg"
              class="rounded-3 w-100"
              alt="room"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="@/assets/images/room-13.jpg"
              class="rounded-3 w-100"
              alt="room"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="15"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="room-details-slide thumb"
      >
        <SwiperSlide>
          <img src="@/assets/images/room-10.jpg" class="rounded-3" alt="room" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/images/room-11.jpg" class="rounded-3" alt="room" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/images/room-12.jpg" class="rounded-3" alt="room" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/images/room-13.jpg" class="rounded-3" alt="room" />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="col-lg-8">
      <div
        class="bg-white border-0 rounded-3 mb-3 p-25 h-100 bg-for-dark-room-details"
      >
        <div
          class="d-flex flex-wrap align-items-center border-bottom pb-3 mb-3 pb-md-4 mb-md-4"
          style="gap: 15px"
        >
          <div class="flex-shrink-0">
            <img
              src="@/assets/images/user-190.jpg"
              class="rounded-circle"
              style="width: 85px"
              alt="user"
            />
          </div>
          <div class="flex-grow-1">
            <span class="d-block">Code: TRZ-32</span>
            <h3 class="fs-24 mt-6 mb-10">Serenity Suite</h3>
            <ul
              class="p-0 m-0 list-unstyled flex-wrap d-flex align-items-center gap-1 gap-sm-3"
            >
              <li class="d-flex align-items-center" style="gap: 7px">
                <i class="ri-phone-fill fs-18 text-danger"></i>
                <span class="fs-14">+321 1245 6457</span>
              </li>
              <li class="d-flex align-items-center" style="gap: 7px">
                <i class="ri-mail-line fs-18 text-danger"></i>
                <span class="fs-14">anderson350@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="d-flex align-items-center flex-wrap border-bottom pb-3 mb-3 pb-md-4 mb-md-4 gap-2 gap-sm-5"
        >
          <div class="d-flex align-items-center" style="gap: 10px">
            <img src="@/assets/images/schedule.svg" alt="schedule" />
            <div>
              <span class="fs-12 d-block">Check In</span>
              <span class="fw-semibold text-secondary">
                23 June 2025, 15:12 AM
              </span>
            </div>
          </div>
          <div class="d-flex align-items-center" style="gap: 10px">
            <img src="@/assets/images/schedule.svg" alt="schedule" />
            <div>
              <span class="fs-12 d-block">Check Out</span>
              <span class="fw-semibold text-secondary">
                25 June 2025, 14:20 PM
              </span>
            </div>
          </div>
        </div>

        <h3 class="fs-18 mb-12">Room Info</h3>
        <div class="default-table-area room-info-table mb-4 mt-15">
          <div class="table-responsive" style="border-radius: 0 !important">
            <table class="table align-middle">
              <tbody>
                <tr>
                  <td class="text-body">Room Code</td>
                  <td class="text-secondary text-end">L1-15</td>
                  <td class="text-body border-start">Bathroom</td>
                  <td class="text-secondary text-end">2</td>
                </tr>
                <tr>
                  <td class="text-body">Room Name</td>
                  <td class="text-secondary text-end">Moonlight</td>
                  <td class="text-body border-start">Air Conditioner</td>
                  <td class="text-secondary text-end">Yes</td>
                </tr>
                <tr>
                  <td class="text-body">Rate</td>
                  <td class="text-secondary text-end">$156/night</td>
                  <td class="text-body border-start">Free WiFi</td>
                  <td class="text-secondary text-end">Yes</td>
                </tr>
                <tr>
                  <td class="text-body">Bed</td>
                  <td class="text-secondary text-end">2 Beds</td>
                  <td class="text-body border-start">Heater</td>
                  <td class="text-secondary text-end">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="fs-18 mb-12">Description</h3>
        <p>
          This room captures the essence of boundless potential, symbolized by a
          surreal landscape where the sky meets the earth in a dazzling fusion
          of colors. The intricate design features flowing lines that blend
          together, representing the limitless paths we can take in life.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs } from "swiper/modules";

export default defineComponent({
  name: "RoomDetails",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper: any) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Thumbs],
    };
  },
});
</script>
