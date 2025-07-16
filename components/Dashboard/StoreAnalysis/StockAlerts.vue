<template>
  <div
    class="stock-alerts-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
      >
        <h5 class="mb-0">Stock Alerts</h5>
      </div>

      <div class="trezo-card-content">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col" class="fw-bold">Code</th>
                <th scope="col" class="fw-bold">Product</th>
                <th scope="col" class="fw-bold">Store</th>
                <th scope="col" class="fw-bold">Quantity</th>
                <th scope="col" class="fw-bold">Alert Quantity</th>
                <th scope="col" class="fw-bold"></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="stock in paginatedCustomers" :key="stock.code">
                <td class="fw-semibold text-body">{{ stock.code }}</td>
                <td>
                  <div class="employee-info d-flex align-items-center">
                    <div class="img border-radius">
                      <img
                        :src="stock.image"
                        class="border-radius"
                        alt="user-image"
                      />
                    </div>
                    <div>
                      <NuxtLink
                        to="/ecommerce/product-details"
                        class="d-block fw-semibold"
                      >
                        {{ stock.product }}
                      </NuxtLink>
                    </div>
                  </div>
                </td>
                <td class="fw-semibold text-body">{{ stock.store }}</td>
                <td class="fw-semibold text-body">{{ stock.quantity }}</td>
                <td>
                  <span class="trezo-badge cancelled">{{
                    stock.alertQuantity
                  }}</span>
                </td>
                <td>
                  <div
                    class="action-buttons d-flex justify-content-end align-items-center"
                  >
                    <button
                      type="button"
                      class="p-0 bg-transparent d-inline-block lh-1 border-0"
                    >
                      <i class="material-symbols-outlined"> visibility </i>
                    </button>
                    <button
                      type="button"
                      class="p-0 bg-transparent d-inline-block lh-1 border-0"
                    >
                      <i class="material-symbols-outlined"> edit </i>
                    </button>
                    <button
                      type="button"
                      class="p-0 bg-transparent d-inline-block lh-1 border-0"
                    >
                      <i class="material-symbols-outlined"> delete </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
        >
          <span class="fs-12 fw-medium">
            Showing {{ startIndex + 1 }} to {{ endIndex }} of
            {{ stocks.length }} Results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item">
                <button
                  class="page-link icon"
                  aria-label="Previous"
                  @click="prevPage"
                  :disabled="currentPage === 1"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_left</i>
                </button>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page">
                <button
                  class="page-link"
                  :class="{ active: page === currentPage }"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </button>
              </li>
              <li class="page-item">
                <button
                  class="page-link icon"
                  aria-label="Next"
                  @click="nextPage"
                  :disabled="currentPage === totalPages"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/stock-alerts/stock1.jpg";
import image2 from "@/assets/images/stock-alerts/stock2.jpg";
import image3 from "@/assets/images/stock-alerts/stock3.jpg";
import image4 from "@/assets/images/stock-alerts/stock4.jpg";
import image5 from "@/assets/images/stock-alerts/stock5.jpg";

export default defineComponent({
  name: "StockAlerts",
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const stocks = ref([
      {
        code: "#3421",
        product: "ZenX Laptop",
        store: "Store 01",
        quantity: 5,
        alertQuantity: 10,
        image: image1,
      },
      {
        code: "#3429",
        product: "Mackbook Pro",
        store: "Store 02",
        quantity: 3,
        alertQuantity: 15,
        image: image2,
      },
      {
        code: "#3425",
        product: "Smart Pencil",
        store: "Store 01",
        quantity: 2,
        alertQuantity: 7,
        image: image3,
      },
      {
        code: "#3424",
        product: "Banner Mockup",
        store: "Store 02",
        quantity: 4,
        alertQuantity: 12,
        image: image4,
      },
      {
        code: "#3422",
        product: "Clay Camera",
        store: "Store 01",
        quantity: 3,
        alertQuantity: 10,
        image: image5,
      },
      {
        code: "#3432",
        product: "Mackbook Pro",
        store: "Store 02",
        quantity: 3,
        alertQuantity: 15,
        image: image1,
      },
      {
        code: "#3433",
        product: "Smart Pencil",
        store: "Store 01",
        quantity: 2,
        alertQuantity: 7,
        image: image2,
      },
      {
        code: "#3434",
        product: "Banner Mockup",
        store: "Store 02",
        quantity: 4,
        alertQuantity: 12,
        image: image3,
      },
    ]);

    const totalPages = computed(() =>
      Math.ceil(stocks.value.length / itemsPerPage.value)
    );

    const paginatedCustomers = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return stocks.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endIndex = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, stocks.value.length)
    );

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    return {
      currentPage,
      itemsPerPage,
      stocks,
      paginatedCustomers,
      totalPages,
      startIndex,
      endIndex,
      goToPage,
      nextPage,
      prevPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.stock-alerts-card {
  .trezo-card-content {
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
                bottom: 11.4px;
                top: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &:nth-last-child(2),
              &:nth-last-child(3) {
                text-align: center;
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
                top: 10.5px;
                bottom: 10.5px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 29px;
                }
                a {
                  font-size: var(--fontSize);
                  margin-bottom: 2px;
                }
              }
              .trezo-badge {
                border-radius: 30px;
                padding: 1px 10px;
              }
              &:first-child {
                padding-left: 0;
              }
              &:nth-last-child(2),
              &:nth-last-child(3) {
                text-align: center;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
              }
            }
          }
        }
      }
    }
    .trezo-card-pagination {
      border-width: 0;
      border-radius: 0;
      padding: {
        left: 0;
        right: 0;
        top: 11.4px;
        bottom: 0;
      }
      p {
        font: {
          size: 12px;
          weight: 500;
        }
      }
    }
  }
}
</style>
