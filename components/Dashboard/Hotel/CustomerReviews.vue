<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-1"
      >
        <h3 class="mb-0">Customer Reviews</h3>
        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle border text-body rounded-2 bg-gray-100"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ selectedRatingFilter || "Top Rated" }}
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="filterByRating(5)"
              >
                5 Star
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="filterByRating(4)"
              >
                4 Star
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="filterByRating(3)"
              >
                3 Star
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="filterByRating(2)"
              >
                2 Star
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="filterByRating(1)"
              >
                1 Star
              </button>
            </li>
            <li>
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="clearRatingFilter"
              >
                Clear Filter
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="default-table-area style-two campaigns-table customer-ratings-table px-20"
      >
        <div class="table-responsive">
          <table class="table border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-bold letter-spacing-1">
                    USER ID
                  </span>
                </th>
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-bold letter-spacing-1">
                    CUSTOMER NAME
                  </span>
                </th>
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-bold letter-spacing-1">
                    RATINGS
                  </span>
                </th>
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-bold letter-spacing-1">
                    REVIEWS
                  </span>
                </th>
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-bold letter-spacing-1">
                    DATE
                  </span>
                </th>
                <th scope="col" class="text-end bg-transparent opacity-0">
                  <span class="fs-10 text-body fw-bold letter-spacing-1">
                    ACTION
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="review in paginatedReviews" :key="review.id">
                <td
                  class="fs-12 fw-semibold text-body-color-50 border-border-color-50"
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
                    <span
                      class="fs-12 fw-semibold text-body position-relative top-1"
                    >
                      {{ review.rating.toFixed(1) }}
                    </span>
                  </div>
                </td>
                <td
                  class="border-border-color-50"
                  style="padding-top: 17px; padding-bottom: 17px"
                >
                  <h4 class="fs-12 fw-semibold text-secondary mb-1">
                    {{ review.title }}
                  </h4>
                  <p
                    class="fs-12 text-body"
                    style="max-width: 617px; line-height: 1.8"
                  >
                    {{ review.content }}
                  </p>
                </td>
                <td
                  class="fs-12 fw-semibold text-body border-border-color-50"
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
                      @click="viewReview(review)"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary"
                        >visibility</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="editReview(review)"
                    >
                      <i
                        class="material-symbols-outlined fs-16 text-primary-div-50"
                        >edit</i
                      >
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="deleteReview(review.id)"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger"
                        >delete</i
                      >
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mt-3"
        >
          <span class="fs-12 fw-medium"
            >Showing {{ showingRange }} of
            {{ filteredReviews.length }} Results</span
          >

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
import { defineComponent, ref, computed } from "vue";

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
  name: "CustomerReviews",
  setup() {
    const reviews = ref<Review[]>([
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
          "The bar area at Trezo is fantastic. The mixologist created custom cocktails based on our preferences, and they were all amazing. The small plates we ordered were perfect for sharing. Will definitely return for happy hour!",
        date: new Date(2025, 10, 15),
      },
      {
        id: 5,
        name: "Michael Brown",
        avatar: image5,
        rating: 3.5,
        title: "Decent but Overpriced",
        content:
          "The food quality was good but not exceptional enough to justify the high prices. Service was attentive but the portions were smaller than expected for the price point. Might give it another try for their lunch specials.",
        date: new Date(2025, 10, 11),
      },
      {
        id: 6,
        name: "Emily Davis",
        avatar: image6,
        rating: 5.0,
        title: "Perfect Anniversary Dinner",
        content:
          "Trezo made our anniversary special. They decorated our table with rose petals and gave us complimentary champagne. The steak was cooked to perfection and the chocolate soufflé was divine. Worth every penny!",
        date: new Date(2025, 10, 16),
      },
      {
        id: 7,
        name: "David Wilson",
        avatar: image7,
        rating: 2.0,
        title: "Disappointing Experience",
        content:
          "Our reservation was lost, and we had to wait 45 minutes for a table. When we finally got seated, two of our ordered dishes were unavailable. The manager did comp our drinks, but the overall experience was frustrating.",
        date: new Date(2025, 10, 10),
      },
    ]);

    const selectedRatingFilter = ref<number | null>(null);
    const itemsPerPage = ref(3);
    const currentPage = ref(1);

    const filteredReviews = computed(() => {
      if (selectedRatingFilter.value === null) {
        return [...reviews.value].sort((a, b) => b.rating - a.rating);
      }
      return reviews.value
        .filter(
          (review: { rating: number }) =>
            Math.floor(review.rating) === selectedRatingFilter.value
        )
        .sort(
          (a: { rating: number }, b: { rating: number }) => b.rating - a.rating
        );
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredReviews.value.length / itemsPerPage.value);
    });

    const paginatedReviews = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredReviews.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage.value,
        filteredReviews.value.length
      );
      return `${start}-${end}`;
    });

    const filterByRating = (rating: number) => {
      selectedRatingFilter.value = rating;
      currentPage.value = 1;
    };

    const clearRatingFilter = () => {
      selectedRatingFilter.value = null;
      currentPage.value = 1;
    };

    const formatDate = (date: Date): string => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "2-digit",
      };
      return date.toLocaleDateString("en-US", options);
    };

    const viewReview = (review: Review) => {
      alert(
        `Viewing review by ${review.name}\nRating: ${review.rating}\nTitle: ${review.title}`
      );
    };

    const editReview = (review: Review) => {
      alert(`Editing review by ${review.name}`);
    };

    const deleteReview = (id: number) => {
      if (confirm("Are you sure you want to delete this review?")) {
        reviews.value = reviews.value.filter(
          (review: { id: number }) => review.id !== id
        );
      }
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      reviews,
      selectedRatingFilter,
      itemsPerPage,
      currentPage,
      filteredReviews,
      totalPages,
      paginatedReviews,
      showingRange,
      filterByRating,
      clearRatingFilter,
      formatDate,
      viewReview,
      editReview,
      deleteReview,
      goToPage,
      prevPage,
      nextPage,
    };
  },
});
</script>
