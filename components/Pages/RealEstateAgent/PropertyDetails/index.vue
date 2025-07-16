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
        class="bg-white border-0 rounded-3 p-25 h-100 bg-for-dark-room-details"
      >
        <div
          class="d-flex align-items-center justify-content-between flex-wrap gap-2"
        >
          <div>
            <span class="d-block">Code: TRZ-32</span>
            <h3 class="fs-24 mt-8 mb-11">The Golden Haven</h3>
            <div class="d-flex align-items-center" style="gap: 5px">
              <i
                class="ri-map-pin-line text-primary fs-17 position-relative top-2"
              ></i>
              <span class="fw-semibold"
                >123 Sunshine Boulevard, Vancouver, BC</span
              >
            </div>
          </div>
          <ul
            class="p-0 m-0 list-unstyled d-flex align-items-center justify-content-end"
            style="gap: 3px"
          >
            <li>
              <i class="ri-star-fill fs-15 text-rating-color"></i>
            </li>
            <li>
              <i class="ri-star-fill fs-15 text-rating-color"></i>
            </li>
            <li>
              <i class="ri-star-fill fs-15 text-rating-color"></i>
            </li>
            <li>
              <i class="ri-star-fill fs-15 text-rating-color"></i>
            </li>
            <li>
              <i class="ri-star-fill fs-15 text-rating-color"></i>
            </li>
            <li>
              <span class="fs-12">5.0</span>
            </li>
          </ul>
        </div>

        <div
          class="border-top border-bottom my-4 d-flex justify-content-between flex-wrap gap-2"
          style="padding-top: 12px; padding-bottom: 12px"
        >
          <ul
            class="px-0 mb-0 list-unstyled d-flex align-items-center gap-1 gap-sm-4"
          >
            <li class="d-flex align-items-center gap-1 text-body">
              <i class="material-symbols-outlined fs-18">open_run </i>
              <span>425 sft</span>
            </li>
            <li class="d-flex align-items-center gap-1 text-body">
              <i class="material-symbols-outlined fs-18">bathtub </i>
              <span>2 Baths</span>
            </li>
            <li class="d-flex align-items-center gap-1 text-body">
              <i class="material-symbols-outlined fs-18">bed </i>
              <span>3 Beds</span>
            </li>
          </ul>

          <h2 class="fs-18 mb-0">$4,274/m</h2>
        </div>

        <h3 class="fs-18 mb-12">Property Description</h3>
        <p>
          Nestled in a serene neighborhood, this modern 3-bedroom home boasts an
          open-concept layout with abundant natural light. The chef’s kitchen
          features state-of-the-art appliances and a spacious island for
          entertaining.
        </p>
        <p>
          Enjoy the tranquility of a private backyard oasis with a patio and
          lush landscaping. Located minutes from top-rated schools, shopping,
          and parks, it offers convenience and comfort. This home is the perfect
          blend of style and functionality.
        </p>

        <h3 class="fs-18 mb-12 pt-md-2">Property Details</h3>
        <div class="default-table-area room-info-table mb-4 mt-15">
          <div class="table-responsive" style="border-radius: 0 !important">
            <table class="table align-middle">
              <tbody>
                <tr>
                  <td class="text-body">Beds</td>
                  <td class="text-secondary text-end">03</td>
                  <td class="text-body border-start">Ceiling Height</td>
                  <td class="text-secondary text-end">3.20 m</td>
                </tr>
                <tr>
                  <td class="text-body">Baths</td>
                  <td class="text-secondary text-end">02</td>
                  <td class="text-body border-start">Property Type</td>
                  <td class="text-secondary text-end">Villa</td>
                </tr>
                <tr>
                  <td class="text-body">Floor</td>
                  <td class="text-secondary text-end">Ground</td>
                  <td class="text-body border-start">Year Built</td>
                  <td class="text-secondary text-end">2010</td>
                </tr>
                <tr>
                  <td class="text-body">Garage</td>
                  <td class="text-secondary text-end">03</td>
                  <td class="text-body border-start">Status</td>
                  <td class="text-secondary text-end">For Sale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="fs-18 mb-12 pt-md-2">Amenities</h3>
        <div class="row gy-2">
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>A/C & Heating</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Parking</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>WiFi</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Pet Friendly</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Furniture</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Ceiling Height</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Play Ground</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Elevator</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Garage</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Fireplace</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Garden</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex align-items-center gap-2">
              <i
                class="ri-check-line fs-18 text-primary position-relative top-1"
              ></i>
              <span>Disabled Access</span>
            </div>
          </div>
        </div>

        <h3 class="fs-18 mb-12 mt-4 pt-1">Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.07665879064!2d-74.30914977179596!3d40.69667269554806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1744528848880!5m2!1sen!2sbd"
          class="rounded-3"
          style="border: 0; height: 250px; width: 100%; display: block"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs } from "swiper/modules";

export default defineComponent({
  name: "PropertyDetails",
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
