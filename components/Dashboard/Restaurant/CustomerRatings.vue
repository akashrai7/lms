<template>
  <div
    class="customer-ratings-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-2 mb-lg-20"
      >
        <h5 class="mb-0">Customer Ratings</h5>
        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
        >
          <option selected>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col" class="fw-bold">User ID</th>
                <th scope="col" class="fw-bold">Customer Name</th>
                <th scope="col" class="fw-bold">Ratings</th>
                <th scope="col" class="fw-bold">Reviews</th>
                <th scope="col" class="fw-bold">Date</th>
                <th scope="col" class="fw-bold"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rating in paginatedRatings" :key="rating.id">
                <td class="fw-semibold text-body">{{ rating.id }}</td>
                <td>
                  <div class="employee-info d-flex align-items-center">
                    <div class="img rounded-circle">
                      <img
                        :src="rating.image"
                        alt="user-image"
                        class="rounded-circle"
                      />
                    </div>
                    <div>
                      <span class="d-block fw-semibold">{{ rating.name }}</span>
                    </div>
                  </div>
                </td>
                <td class="fw-semibold text-body">
                  <div class="ratings lh-1">
                    <i class="ri-star-fill"></i>
                    <span class="d-inline-block lh-1 text-xs text-body">
                      {{ rating.rating }}
                    </span>
                  </div>
                </td>
                <td class="reviews">
                  <div class="reviews">
                    <span class="d-block fw-semibold">
                      {{ rating.reviewTitle }}
                    </span>
                    <p>{{ rating.review }}</p>
                  </div>
                </td>
                <td class="fw-semibold text-body">{{ rating.date }}</td>
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
            {{ ratings.length }} Results
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

import image1 from "@/assets/images/users/user58.jpg";
import image2 from "@/assets/images/users/user59.jpg";
import image3 from "@/assets/images/users/user60.jpg";

export default defineComponent({
  name: "CustomerRatings",
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = ref(3);

    const ratings = ref([
      {
        id: "#001",
        name: "Joanna Watson",
        image: image1,
        rating: 5.0,
        reviewTitle: "Amazing Ambiance and Delicious Food!",
        review:
          "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
        date: "13 Nov, 25",
      },
      {
        id: "#002",
        name: "Jenelia Anderson",
        image: image2,
        rating: 4.9,
        reviewTitle: "Best Brunch Spot in Town",
        review:
          "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
        date: "14 Nov, 25",
      },
      {
        id: "#003",
        name: "Jonathon Ronan",
        image: image3,
        rating: 4.0,
        reviewTitle: "Good Food, Slow Service",
        review:
          "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It’s a nice spot, but they could work on speeding up their service.",
        date: "15 Nov, 25",
      },
      {
        id: "#004",
        name: "Jenelia Anderson",
        image: image2,
        rating: 4.9,
        reviewTitle: "Best Brunch Spot in Town",
        review:
          "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
        date: "14 Nov, 25",
      },
      {
        id: "#005",
        name: "Jonathon Ronan",
        image: image3,
        rating: 4.0,
        reviewTitle: "Good Food, Slow Service",
        review:
          "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It’s a nice spot, but they could work on speeding up their service.",
        date: "15 Nov, 25",
      },
    ]);

    const totalPages = computed(() =>
      Math.ceil(ratings.value.length / itemsPerPage.value)
    );

    const paginatedRatings = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return ratings.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endIndex = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, ratings.value.length)
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
      ratings,
      paginatedRatings,
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
.customer-ratings-card {
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
                bottom: 15px;
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
              vertical-align: top;
              font-size: 12px;
              padding: {
                top: 15px;
                bottom: 15px;
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
              .reviews {
                white-space: normal;
                width: 620px;

                span {
                  margin-bottom: 5px;
                }
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
        top: 15px;
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
