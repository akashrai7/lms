<template>
  <div
    class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
  >
    <h3 class="mb-0">Featured NFT Artworks</h3>
    <div class="nft-controller">
      <div
        class="controller-icon prev position-static me-1"
        style="transform: unset"
      >
        <i class="ri-arrow-left-line"></i>
      </div>
      <div
        class="controller-icon next position-static"
        style="transform: unset"
      >
        <i class="ri-arrow-right-line"></i>
      </div>
    </div>
  </div>

  <Swiper
    :slidesPerView="1"
    :spaceBetween="25"
    :centeredSlides="false"
    :preventClicks="true"
    :loop="false"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :navigation="{
      prevEl: '.prev',
      nextEl: '.next',
    }"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    }"
    :modules="[SwiperAutoplay, SwiperNavigation]"
    class="nft-slide-two mb-4"
  >
    <SwiperSlide v-for="nft in nftItem" :key="nft.id">
      <div class="bg-white rounded-3 border-0 p-3 place-bid for-dark-card">
        <NuxtLink
          to="/nft-marketplace/nft-details"
          class="d-block mb-3 text-decoration-none position-relative"
        >
          <img :src="nft.image" class="rounded-3" alt="nft" />
          <span
            class="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0"
          >
            Place Bid
          </span>
        </NuxtLink>

        <div
          class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"
        >
          <NuxtLink
            to="/nft-marketplace/creator-details"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-shrink-0">
              <img
                :src="nft.creator.image"
                class="rounded-circle"
                style="width: 27px; height: 27px"
                alt="user"
              />
            </div>
            <div class="flex-grow-1 ms-2">
              <span class="fs-12">NFT ID: {{ nft.creator.id }}</span>
              <h4 class="fw-semibold fs-14 mb-0">
                {{ nft.creator.name }}
              </h4>
            </div>
          </NuxtLink>
          <img
            src="~/assets/images/verify.svg"
            class="cursor"
            alt="verify"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Verified"
          />
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <NuxtLink
            to="/nft-marketplace/nft-details"
            class="d-flex align-items-center text-decoration-none"
          >
            <div class="flex-grow-1 ms-2">
              <span class="fs-12 d-block mb-1">
                Highest Bid:
                <span class="fw-semibold text-secondary">
                  {{ nft.highestBid }} ETH
                </span>
              </span>
              <h4 class="fw-semibold fs-14 mb-0">{{ nft.bid }} ETH</h4>
            </div>
          </NuxtLink>
          <button class="bg-transparent p-0 border-0">
            <i
              class="ri-heart-fill fs-20 position-relative top-2"
              style="color: #ee3e08"
            ></i>
            <span class="text-secondary fs-12 fw-semibold">
              {{ nft.rating }}
              <span class="text-body">/10</span>
            </span>
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "~/assets/images/nft-10.png";
import image2 from "~/assets/images/nft-11.png";
import image3 from "~/assets/images/nft-12.png";
import userImage1 from "~/assets/images/user-76.gif";
import userImage2 from "~/assets/images/user-77.gif";
import userImage3 from "~/assets/images/user-78.gif";

export default defineComponent({
  name: "FeaturedNFTArtworks",
  setup() {
    const nftItem = ref([
      {
        id: 1,
        image: image1,
        creator: {
          image: userImage1,
          id: "35246",
          name: "Christmas Eve",
        },
        highestBid: "9.75",
        bid: "5.50",
        rating: "9.2",
      },
      {
        id: 2,
        image: image2,
        creator: {
          image: userImage2,
          id: "35247",
          name: "Humming Bird",
        },
        highestBid: "10.75",
        bid: "12.50",
        rating: "9.5",
      },
      {
        id: 3,
        image: image3,
        creator: {
          image: userImage3,
          id: "35249",
          name: "Cookies Live",
        },
        highestBid: "17.75",
        bid: "20.50",
        rating: "9.3",
      },
      {
        id: 4,
        image: image1,
        creator: {
          image: userImage1,
          id: "35246",
          name: "Christmas Eve",
        },
        highestBid: "9.75",
        bid: "5.50",
        rating: "9.2",
      },
      {
        id: 5,
        image: image2,
        creator: {
          image: userImage2,
          id: "35247",
          name: "Humming Bird",
        },
        highestBid: "10.75",
        bid: "12.50",
        rating: "9.5",
      },
      {
        id: 6,
        image: image3,
        creator: {
          image: userImage3,
          id: "35249",
          name: "Cookies Live",
        },
        highestBid: "17.75",
        bid: "20.50",
        rating: "9.3",
      },
    ]);
    return {
      nftItem,
    };
  },
});
</script>
