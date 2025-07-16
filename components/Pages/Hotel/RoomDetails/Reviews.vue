<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h5 class="mb-4">Reviews</h5>

      <div
        class="default-table-area campaigns-table customer-ratings-table px-20"
      >
        <div class="table-responsive">
          <table class="table border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col">
                  <span class="fs-14 text-secondary fw-medium letter-spacing-1">
                    User ID
                  </span>
                </th>
                <th scope="col">
                  <span class="fs-14 text-secondary fw-medium letter-spacing-1">
                    Customer Name
                  </span>
                </th>
                <th scope="col">
                  <span class="fs-14 text-secondary fw-medium letter-spacing-1">
                    Ratings
                  </span>
                </th>
                <th scope="col">
                  <span class="fs-14 text-secondary fw-medium letter-spacing-1">
                    Reviews
                  </span>
                </th>
                <th scope="col">
                  <span class="fs-14 text-secondary fw-medium letter-spacing-1">
                    Date
                  </span>
                </th>
                <th scope="col" class="text-end">
                  <span
                    class="fs-10 text-secondary fw-medium letter-spacing-1"
                  ></span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="review in paginatedReviews" :key="review.id">
                <td
                  class="fs-14 text-secondary border-border-color-50"
                  style="padding-top: 17px; padding-bottom: 17px"
                >
                  #{{ review.id.toString().padStart(3, "0") }}
                </td>
                <td
                  class="border-border-color-50"
                  style="padding-top: 17px; padding-bottom: 17px"
                >
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        :src="review.avatar"
                        class="rounded-circle"
                        style="width: 30px; height: 30px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0 text-secondary-50">
                        {{ review.name }}
                      </h4>
                    </div>
                  </div>
                </td>
                <td
                  class="border-border-color-50"
                  style="padding-top: 17px; padding-bottom: 17px"
                >
                  <div class="d-flex align-items-center gap-1">
                    <i class="text-danger ri-star-fill"></i>
                    <span class="fs-12 text-body position-relative top-1">
                      {{ review.rating }}
                    </span>
                  </div>
                </td>
                <td
                  class="border-border-color-50"
                  style="padding-top: 17px; padding-bottom: 17px"
                >
                  <h4 class="fs-14 fw-semibold text-secondary mb-1">
                    {{ review.title }}
                  </h4>
                  <p
                    class="fs-14 text-body"
                    style="max-width: 617px; line-height: 1.8"
                  >
                    {{ review.content }}
                  </p>
                </td>
                <td
                  class="fs-14 text-secondary border-border-color-50"
                  style="padding-top: 17px; padding-bottom: 17px"
                >
                  {{ formatDate(review.date) }}
                </td>
                <td
                  class="text-end border-border-color-50"
                  style="padding-top: 17px; padding-bottom: 17px"
                >
                  <div
                    class="d-flex justify-content-end align-items-center gap-2"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i
                        class="material-symbols-outlined fs-16 text-primary-div-50"
                      >
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="deleteReview(review.id)"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
        >
          <span class="fs-13">
            Showing {{ showingStart }} to {{ showingEnd }} of
            {{ totalReviews }} Results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item">
                <button
                  class="page-link icon hover-bg"
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
                  :class="{ active: currentPage === page }"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </button>
              </li>
              <li class="page-item">
                <button
                  class="page-link icon hover-bg"
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
import { defineComponent, reactive, computed, toRefs } from "vue";

import image1 from "@/assets/images/user-166.png";
import image2 from "@/assets/images/user-167.png";
import image3 from "@/assets/images/user-168.png";
import image4 from "@/assets/images/user-169.png";
import image5 from "@/assets/images/user-170.png";
import image6 from "@/assets/images/user-171.png";
import image7 from "@/assets/images/user-172.png";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  title: string;
  content: string;
  date: Date;
}

export default defineComponent({
  name: "Reviews",
  setup() {
    const state = reactive({
      reviews: [
        {
          id: 1,
          name: "Joanna Watson",
          avatar: image1,
          rating: 5.0,
          title: "Amazing Ambiance and Delicious Food!",
          content:
            "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
          date: new Date(2025, 10, 13),
        },
        {
          id: 2,
          name: "Jenelia Anderson",
          avatar: image2,
          rating: 4.9,
          title: "Best Brunch Spot in Town",
          content:
            "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
          date: new Date(2025, 10, 14),
        },
        {
          id: 3,
          name: "Jonathon Ronan",
          avatar: image3,
          rating: 4.0,
          title: "Good Food, Slow Service",
          content:
            "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It's a nice spot, but they could work on speeding up their service.",
          date: new Date(2025, 10, 12),
        },
        {
          id: 4,
          name: "Sarah Johnson",
          avatar: image4,
          rating: 4.5,
          title: "Great Cocktails and Atmosphere",
          content:
            "The bar area at Trezo is fantastic. Their signature cocktails are creative and well-balanced. The atmosphere is lively but not too loud. Perfect for after-work drinks with colleagues.",
          date: new Date(2025, 10, 15),
        },
        {
          id: 5,
          name: "Michael Brown",
          avatar: image5,
          rating: 3.5,
          title: "Decent but Overpriced",
          content:
            "The food was good but not exceptional enough to justify the high prices. Portion sizes were a bit small for what you pay. Service was friendly but not particularly attentive.",
          date: new Date(2025, 10, 16),
        },
        {
          id: 6,
          name: "Emily Davis",
          avatar: image6,
          rating: 5.0,
          title: "Perfect Anniversary Dinner",
          content:
            "Trezo made our anniversary special. They gave us a complimentary dessert and the staff went above and beyond to make our evening memorable. The filet mignon was cooked to perfection!",
          date: new Date(2025, 10, 17),
        },
        {
          id: 7,
          name: "David Wilson",
          avatar: image7,
          rating: 4.2,
          title: "Excellent Wine Selection",
          content:
            "As a wine enthusiast, I was impressed with their curated wine list. The sommelier was knowledgeable and helped us pick the perfect pairing for our meal. The seafood pasta was outstanding.",
          date: new Date(2025, 10, 18),
        },
      ] as Review[],
      currentPage: 1,
      itemsPerPage: 3,
    });

    const totalReviews = computed(() => state.reviews.length);
    const totalPages = computed(() =>
      Math.ceil(totalReviews.value / state.itemsPerPage)
    );

    const paginatedReviews = computed(() => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.reviews.slice(start, end);
    });

    const showingStart = computed(() => {
      return (state.currentPage - 1) * state.itemsPerPage + 1;
    });

    const showingEnd = computed(() => {
      const end = state.currentPage * state.itemsPerPage;
      return end > totalReviews.value ? totalReviews.value : end;
    });

    const formatDate = (date: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "2-digit",
      };
      return date.toLocaleDateString("en-US", options);
    };

    const deleteReview = (id: number) => {
      if (confirm("Are you sure you want to delete this review?")) {
        state.reviews = state.reviews.filter(
          (review: { id: number }) => review.id !== id
        );
      }
    };

    const nextPage = () => {
      if (state.currentPage < totalPages.value) {
        state.currentPage++;
      }
    };

    const prevPage = () => {
      if (state.currentPage > 1) {
        state.currentPage--;
      }
    };

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        state.currentPage = page;
      }
    };

    return {
      paginatedReviews,
      totalReviews,
      totalPages,
      showingStart,
      showingEnd,
      formatDate,
      deleteReview,
      nextPage,
      prevPage,
      goToPage,
      ...toRefs(state),
    };
  },
});
</script>
