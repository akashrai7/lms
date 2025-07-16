<template>
  <div
    class="top-selling-products-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">Top Selling Products</h5>
        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
        >
          <option value="This Day">This Day</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
      </div>

      <div class="trezo-card-content position-relative">
        <Swiper
          :slidesPerView="1"
          :spaceBetween="25"
          :centeredSlides="false"
          :preventClicks="true"
          :loop="true"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :navigation="{
            prevEl: '.prev',
            nextEl: '.next',
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            506: {
              slidesPerView: 2,
            },
            668: {
              slidesPerView: 3,
            },
            705: {
              slidesPerView: 4,
            },
          }"
          :modules="modules"
          class="product-slider"
        >
          <SwiperSlide v-for="product in products" :key="product.id">
            <div class="product-item">
              <NuxtLink
                to="/ecommerce/product-details/"
                class="image d-block border-radius"
                :style="{ backgroundImage: `url(${product.image})` }"
              ></NuxtLink>
              <div class="content d-flex justify-content-between">
                <div class="title">
                  <h6 class="fw-semibold">
                    <NuxtLink
                      to="/ecommerce/product-details/"
                      class="text-black"
                    >
                      {{ product.name }}
                    </NuxtLink>
                  </h6>
                  <span class="price d-block fw-semibold">
                    ${{ product.price }}
                  </span>
                </div>
                <div class="sold">
                  <span class="trezo-badge shipped"> {{ product.sold }} </span>
                  <span class="d-block"> sold </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="product-controller">
          <div class="controller-icon prev">
            <i class="ri-arrow-left-line"></i>
          </div>
          <div class="controller-icon next">
            <i class="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import image1 from "@/assets/images/products/product24.jpg";
import image2 from "@/assets/images/products/product25.jpg";
import image3 from "@/assets/images/products/product26.jpg";
import image4 from "@/assets/images/products/product27.jpg";

export default defineComponent({
  name: "TopSellingProducts",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const products = ref([
      {
        id: 1,
        name: "Hair Treatment",
        image: image1,
        price: 23.5,
        sold: 321,
      },
      {
        id: 2,
        name: "Facial Kit",
        image: image2,
        price: 20.5,
        sold: 124,
      },
      {
        id: 3,
        name: "Winter Cream",
        image: image3,
        price: 12.43,
        sold: 99,
      },
      {
        id: 4,
        name: "Perfume",
        image: image4,
        price: 22.12,
        sold: 23,
      },
      {
        id: 5,
        name: "Hair Treatment",
        image: image1,
        price: 23.5,
        sold: 321,
      },
      {
        id: 6,
        name: "Facial Kit",
        image: image2,
        price: 20.5,
        sold: 124,
      },
      {
        id: 7,
        name: "Winter Cream",
        image: image3,
        price: 12.43,
        sold: 99,
      },
      {
        id: 9,
        name: "Perfume",
        image: image4,
        price: 22.12,
        sold: 23,
      },
    ]);

    return {
      modules: [Autoplay, Navigation],
      products,
    };
  },
});
</script>

<style lang="scss" scoped>
.top-selling-products-card {
  .trezo-card-content {
    .product-item {
      .image {
        height: 179px;
        border-radius: 5px;
        background: {
          position: center center;
          repeat: no-repeat;
          size: cover;
        }
      }
      .content {
        margin-top: 18px;

        .title {
          h6 {
            font-size: 14px;
            margin-bottom: 2px;
            a {
              color: var(--blackColor);
            }
          }
          .price {
            color: #3225ae;
          }
        }
        .sold {
          text-align: center;

          .trezo-badge {
            border-radius: 30px;
            margin-bottom: 2px;
            padding: 0 10px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
