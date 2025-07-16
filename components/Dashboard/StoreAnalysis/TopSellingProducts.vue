<template>
  <div
    class="sa-top-selling-products-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
      >
        <h5 class="mb-0">Top Selling Products</h5>
      </div>

      <div class="trezo-card-content">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>
                  <div class="employee-info d-flex align-items-center">
                    <div class="img border-radius">
                      <img
                        :src="product.image"
                        class="border-radius"
                        alt="stock-image"
                      />
                    </div>
                    <div>
                      <NuxtLink :to="product.link" class="d-block fw-semibold">
                        {{ product.name }}
                      </NuxtLink>
                      <span class="d-block text-body">
                        <strong class="fw-semibold">{{ product.sold }}</strong>
                        sold
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="ratings lh-1">
                    <i
                      v-for="star in fullStars(product.rating)"
                      :key="'full-' + star"
                      class="ri-star-fill"
                    ></i>
                    <i
                      v-if="hasHalfStar(product.rating)"
                      class="ri-star-half-line"
                    ></i>
                    <i
                      v-for="star in emptyStars(product.rating)"
                      :key="'empty-' + star"
                      class="ri-star-line"
                    ></i>
                    <span class="d-inline-block lh-1 text-xs text-body">
                      {{ product.rating }}
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "@/assets/images/stock-alerts/stock1.jpg";
import image2 from "@/assets/images/stock-alerts/stock2.jpg";
import image3 from "@/assets/images/stock-alerts/stock3.jpg";
import image4 from "@/assets/images/stock-alerts/stock4.jpg";
import image5 from "@/assets/images/stock-alerts/stock5.jpg";
import image6 from "@/assets/images/stock-alerts/stock6.jpg";

export default defineComponent({
  name: "TopSellingProducts",
  setup() {
    // Define dynamic product data
    const products = ref([
      {
        name: "Tablet PC",
        sold: 2032,
        rating: 5.0,
        image: image1,
        link: "/ecommerce/product-details",
      },
      {
        name: "Laptop",
        sold: 1020,
        rating: 4.5,
        image: image2,
        link: "/ecommerce/product-details",
      },
      {
        name: "QCY Airpod",
        sold: 99,
        rating: 4.0,
        image: image3,
        link: "/ecommerce/product-details",
      },
      {
        name: "Zenbook X",
        sold: 89,
        rating: 3.5,
        image: image4,
        link: "/ecommerce/product-details",
      },
      {
        name: "Clay Camera",
        sold: 72,
        rating: 3.0,
        image: image5,
        link: "/ecommerce/product-details",
      },
      {
        name: "Laptop Mockup",
        sold: 72,
        rating: 2.5,
        image: image6,
        link: "/ecommerce/product-details",
      },
    ]);

    // Helper functions for star ratings
    const fullStars = (rating: number) => Math.floor(rating);
    const hasHalfStar = (rating: number) => rating % 1 !== 0;
    const emptyStars = (rating: number) => 5 - Math.ceil(rating);

    return {
      products,
      fullStars,
      hasHalfStar,
      emptyStars,
    };
  },
});
</script>

<style lang="scss" scoped>
.sa-top-selling-products-card {
  .trezo-card-content {
    margin-bottom: -11px;

    .basic-table {
      table,
      .table {
        thead {
          tr {
            th {
              font-size: 10px;
              letter-spacing: 1px;
              color: var(--bodyColor);
              text-transform: uppercase;
              background-color: transparent;
              padding: {
                bottom: 11px;
                top: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 12px;
              padding: {
                top: 11px;
                bottom: 11px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                .img {
                  width: 40px;
                }
                a {
                  font-size: var(--fontSize);
                  margin-bottom: 2px;
                }
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
              }
            }
            &:first-child {
              td {
                padding-top: 0;
                border-top-width: 0;
              }
            }
            &:last-child {
              td {
                border-bottom-width: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
