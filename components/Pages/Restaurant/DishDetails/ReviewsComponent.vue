<template>
  <div
    class="reviews-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div
      class="trezo-card-header d-flex align-items-center justify-content-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Reviews</h5>
      </div>
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
            <tr v-for="review in paginatedReviews" :key="review.id">
              <td class="fw-semibold text-body">{{ review.code }}</td>
              <td>
                <div class="employee-info d-flex align-items-center">
                  <div class="img rounded-circle">
                    <img
                      alt="user-image"
                      :src="review.image"
                      class="rounded-circle"
                    />
                  </div>
                  <div>
                    <span class="d-block fw-semibold">{{ review.name }}</span>
                  </div>
                </div>
              </td>
              <td class="fw-semibold text-body">
                <div class="ratings lh-1">
                  <i class="ri-star-fill"></i>
                  <span class="d-inline-block lh-1 text-xs text-body">
                    {{ review.rating }}
                  </span>
                </div>
              </td>
              <td class="reviews">
                <div class="reviews">
                  <span class="d-block fw-semibold">
                    {{ review.title }}
                  </span>
                  <p>{{ review.content }}</p>
                </div>
              </td>
              <td class="fw-semibold text-body">{{ review.date }}</td>
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
          {{ reviews.length }} Results
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
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/users/user58.jpg";
import image2 from "@/assets/images/users/user59.jpg";
import image3 from "@/assets/images/users/user60.jpg";
import image4 from "@/assets/images/users/user61.jpg";
import image5 from "@/assets/images/users/user62.jpg";
import image6 from "@/assets/images/users/user63.jpg";
import image7 from "@/assets/images/users/user64.jpg";
import image8 from "@/assets/images/users/user65.jpg";
import image9 from "@/assets/images/users/user66.jpg";
import image10 from "@/assets/images/users/user67.jpg";
import image11 from "@/assets/images/users/user68.jpg";

interface Review {
  id: number;
  code: string;
  image: string;
  name: string;
  rating: number;
  title: string;
  content: string;
  date: string;
}

export default defineComponent({
  name: "ReviewsComponent",
  setup() {
    const reviews = ref<Review[]>([
      {
        id: 1,
        code: "#001",
        image: image1,
        name: "Joanna Watson",
        rating: 5.0,
        title: "Amazing Ambiance and Delicious Food!",
        content:
          "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
        date: "13 Nov, 25",
      },
      {
        id: 2,
        code: "#002",
        image: image2,
        name: "Jenelia Anderson",
        rating: 4.9,
        title: "Best Brunch Spot in Town",
        content:
          "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
        date: "14 Nov, 25",
      },
      {
        id: 3,
        code: "#003",
        image: image3,
        name: "Jonathon Ronan",
        rating: 4.0,
        title: "Good Food, Slow Service",
        content:
          "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It's a nice spot, but they could work on speeding up their service.",
        date: "15 Nov, 25",
      },
      {
        id: 4,
        code: "#004",
        image: image4,
        name: "Maria Garcia",
        rating: 5.0,
        title: "Exceptional Culinary Experience",
        content:
          "Every dish was a masterpiece! The chef's tasting menu was worth every penny. The wine pairing recommendations were perfect. Can't wait to return for special occasions.",
        date: "16 Nov, 25",
      },
      {
        id: 5,
        code: "#005",
        image: image5,
        name: "David Kim",
        rating: 4.5,
        title: "Great Cocktails and Atmosphere",
        content:
          "The bar area has a fantastic vibe. The mixologist created custom drinks based on our preferences. The small plates were perfect for sharing. Only minor complaint was the noise level when it got busy.",
        date: "17 Nov, 25",
      },
      {
        id: 6,
        code: "#006",
        image: image6,
        name: "Sarah Johnson",
        rating: 3.5,
        title: "Mixed Experience",
        content:
          "Some dishes were outstanding (the scallops!), while others were just okay. Service was friendly but inconsistent. The dessert menu needs more options for chocolate lovers.",
        date: "18 Nov, 25",
      },
      {
        id: 7,
        code: "#007",
        image: image7,
        name: "Michael Chen",
        rating: 5.0,
        title: "Perfect Anniversary Dinner",
        content:
          "Trezo made our anniversary special with personalized menus and a complimentary dessert. The steak was cooked perfectly, and the sommelier's wine recommendation was excellent. Worth every dollar.",
        date: "19 Nov, 25",
      },
      {
        id: 8,
        code: "#008",
        image: image8,
        name: "Emily Wilson",
        rating: 4.0,
        title: "Lovely Outdoor Seating",
        content:
          "The garden patio is beautiful in the evening. Food was very good though portions were slightly small for the price. The bread basket with homemade spreads was a highlight.",
        date: "20 Nov, 25",
      },
      {
        id: 9,
        code: "#009",
        image: image9,
        name: "Robert Taylor",
        rating: 4.7,
        title: "Impeccable Service",
        content:
          "What stood out most was the attentive yet unobtrusive service. The duck confit was perfectly crispy, and the seasonal vegetables were fresh and flavorful. Only wish they had more craft beer options.",
        date: "21 Nov, 25",
      },
      {
        id: 10,
        code: "#010",
        image: image10,
        name: "Olivia Martinez",
        rating: 4.8,
        title: "Vegetarian Paradise",
        content:
          "As a vegetarian, I appreciated the creative plant-based options that went beyond the usual pasta dishes. The roasted cauliflower steak with tahini sauce was incredible. Even my meat-loving friends were impressed.",
        date: "22 Nov, 25",
      },
      {
        id: 11,
        code: "#011",
        image: image11,
        name: "Daniel Brown",
        rating: 3.0,
        title: "Overpriced for Quality",
        content:
          "While the presentation was beautiful, the flavors didn't quite match the high prices. The lobster risotto lacked depth, and the tables were too close together. Probably won't return.",
        date: "23 Nov, 25",
      },
    ]);

    const currentPage = ref(1);
    const itemsPerPage = ref(3);

    const totalPages = computed(() =>
      Math.ceil(reviews.value.length / itemsPerPage.value)
    );

    const paginatedReviews = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return reviews.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endIndex = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, reviews.value.length)
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
      reviews,
      paginatedReviews,
      currentPage,
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
.reviews-card {
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
  }
}
</style>
