<template>
  <div
    class="recent-sales-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4"
      >
        <h5 class="mb-0">Recent Sales</h5>

        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
        >
          <option>Weekly</option>
          <option selected>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col" class="fw-bold">Ref</th>
                <th scope="col" class="fw-bold">Customer</th>
                <th scope="col" class="fw-bold">Grand Total</th>
                <th scope="col" class="fw-bold">Paid</th>
                <th scope="col" class="fw-bold">Payment Method</th>
                <th scope="col" class="fw-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="customer in paginatedCustomers" :key="customer.ref">
                <td class="fw-semibold text-body">#{{ customer.ref }}</td>
                <td>
                  <div class="employee-info d-flex align-items-center">
                    <div class="img rounded-circle">
                      <img
                        :alt="customer.name"
                        :src="customer.image"
                        class="rounded-circle"
                      />
                    </div>
                    <div>
                      <span class="d-block fw-semibold">{{
                        customer.name
                      }}</span>
                    </div>
                  </div>
                </td>
                <td class="fw-semibold text-body">
                  ${{ customer.grandTotal }}
                </td>
                <td
                  class="fw-semibold"
                  :class="
                    customer.paid === 'Paid' ? 'text-success' : 'text-danger'
                  "
                >
                  {{ customer.paid }}
                </td>
                <td class="fw-semibold text-body">
                  <div class="payment-method-info d-flex align-items-center">
                    <img
                      :alt="customer.paymentMethod"
                      :src="customer.paymentMethodImage"
                    />
                    <span class="d-block">{{ customer.paymentMethod }}</span>
                  </div>
                </td>
                <td>
                  <span
                    class="trezo-badge"
                    :class="customer.status.toLowerCase()"
                    >{{ customer.status }}</span
                  >
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
            {{ customers.length }} Results
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

import image1 from "@/assets/images/users/user40.jpg";
import image2 from "@/assets/images/users/user37.jpg";
import image3 from "@/assets/images/users/user54.jpg";
import image4 from "@/assets/images/users/user41.jpg";
import image5 from "@/assets/images/users/user43.jpg";
import paymentMethodImage1 from "@/assets/images/payment-method/paypal.svg";
import paymentMethodImage2 from "@/assets/images/payment-method/wise.svg";
import paymentMethodImage3 from "@/assets/images/payment-method/bank.svg";
import paymentMethodImage4 from "@/assets/images/payment-method/skrill.svg";

export default defineComponent({
  name: "RecentSales",
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const customers = ref([
      {
        ref: "001",
        name: "Johhna Loren",
        image: image1,
        grandTotal: 6240,
        paid: "Paid",
        paymentMethod: "Paypal",
        paymentMethodImage: paymentMethodImage1,
        status: "Completed",
      },
      {
        ref: "002",
        name: "Skyler Queen",
        image: image2,
        grandTotal: 5135,
        paid: "Due",
        paymentMethod: "Wise",
        paymentMethodImage: paymentMethodImage2,
        status: "Pending",
      },
      {
        ref: "003",
        name: "Jonathon Watson",
        image: image3,
        grandTotal: 4321,
        paid: "Paid",
        paymentMethod: "Bank",
        paymentMethodImage: paymentMethodImage3,
        status: "Completed",
      },
      {
        ref: "004",
        name: "Walter White",
        image: image4,
        grandTotal: 3124,
        paid: "Paid",
        paymentMethod: "Paypal",
        paymentMethodImage: paymentMethodImage1,
        status: "Completed",
      },
      {
        ref: "005",
        name: "David Carlen",
        image: image5,
        grandTotal: 2137,
        paid: "Due",
        paymentMethod: "Skrill",
        paymentMethodImage: paymentMethodImage4,
        status: "Failed",
      },
      {
        ref: "006",
        name: "Skyler Queen",
        image: image2,
        grandTotal: 5135,
        paid: "Due",
        paymentMethod: "Wise",
        paymentMethodImage: paymentMethodImage2,
        status: "Pending",
      },
      {
        ref: "007",
        name: "Jonathon Watson",
        image: image3,
        grandTotal: 4321,
        paid: "Paid",
        paymentMethod: "Bank",
        paymentMethodImage: paymentMethodImage3,
        status: "Completed",
      },
      {
        ref: "008",
        name: "Walter White",
        image: image4,
        grandTotal: 3124,
        paid: "Paid",
        paymentMethod: "Paypal",
        paymentMethodImage: paymentMethodImage1,
        status: "Completed",
      },
    ]);

    const totalPages = computed(() =>
      Math.ceil(customers.value.length / itemsPerPage.value)
    );

    const paginatedCustomers = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return customers.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endIndex = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, customers.value.length)
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
      customers,
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
.recent-sales-card {
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
                bottom: 12.8px;
                top: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 12px;
              padding: {
                top: 12.8px;
                bottom: 12.8px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 30px;
                }
                span {
                  &:nth-child(1) {
                    margin-bottom: 1px;
                    font-size: var(--fontSize);
                  }
                }
              }
              .payment-method-info {
                gap: 8px;
              }
              .trezo-badge {
                border-radius: 30px;
                padding: 1px 10px;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
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
        bottom: 0;
        top: 12.8px;
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
