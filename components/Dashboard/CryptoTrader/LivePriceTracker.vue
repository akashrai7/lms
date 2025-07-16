<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
      >
        <h5 class="mb-0">Live Price Tracker</h5>
        <div class="dropdown action-opt" style="right: -1px">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="ri-more-fill fs-26 text-body lh-1"></i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <button class="dropdown-item" @click="setTimeRange('24h')">
                This Day
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="setTimeRange('7d')">
                This Week
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="setTimeRange('30d')">
                This Month
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="setTimeRange('1y')">
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="default-table-area style-two py-11">
        <div class="table-responsive">
          <table class="table align-middle">
            <tbody>
              <tr v-for="coin in paginatedCoins" :key="coin.id">
                <td class="text-body">
                  <div class="d-flex align-items-center" style="gap: 8px">
                    <img
                      :src="coin.image"
                      style="max-width: 22px"
                      :alt="coin.name"
                    />
                    <span class="fw-medium text-secondary fs-13"
                      >{{ coin.name }}
                      <span class="fw-normal fs-12 text-body"
                        >({{ coin.symbol.toUpperCase() }})</span
                      ></span
                    >
                  </div>
                </td>
                <td class="text-body text-end fs-13">
                  ${{ formatPrice(coin.current_price) }}
                </td>
                <td
                  class="text-end"
                  :class="getPriceChangeClass(coin.price_change_percentage_24h)"
                >
                  {{ formatPercentage(coin.price_change_percentage_24h) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap p-4"
          style="padding-top: 15px !important"
        >
          <span class="fs-13">
            Showing {{ showingRange }} of {{ coins.length }} results
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

              <!-- First page button (shown when not in first range) -->
              <li class="page-item" v-if="currentPage > 4">
                <button class="page-link" @click="goToPage(1)">1</button>
              </li>
              <li class="page-item disabled" v-if="currentPage > 4">
                <span class="page-link">...</span>
              </li>

              <!-- Dynamic page buttons -->
              <li class="page-item" v-for="page in visiblePages" :key="page">
                <button
                  class="page-link"
                  :class="{ active: currentPage === page }"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </button>
              </li>

              <!-- Last page indicators -->
              <li
                class="page-item disabled"
                v-if="currentPage < totalPages - 3"
              >
                <span class="page-link">...</span>
              </li>
              <li class="page-item" v-if="currentPage < totalPages - 3">
                <button class="page-link" @click="goToPage(totalPages)">
                  {{ totalPages }}
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
import { defineComponent } from "vue";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

export default defineComponent({
  name: "LivePriceTracker",
  data() {
    return {
      coins: [] as Coin[],
      currentPage: 1,
      itemsPerPage: 8,
      timeRange: "24h",
      isLoading: false,
      error: null as string | null,
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.coins.length / this.itemsPerPage);
    },
    paginatedCoins(): Coin[] {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.coins.slice(start, end);
    },
    showingRange(): string {
      const start = (this.currentPage - 1) * this.itemsPerPage + 1;
      const end = Math.min(
        this.currentPage * this.itemsPerPage,
        this.coins.length
      );
      return `${start}-${end}`;
    },
    visiblePages(): number[] {
      const pages = [];
      const maxVisible = 3; // Show 5 page numbers (can be adjusted)
      let startPage = 1;

      if (this.totalPages <= maxVisible) {
        // If total pages is less than max visible, show all
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Calculate start and end pages for sliding window
        if (this.currentPage <= 3) {
          startPage = 1;
        } else if (this.currentPage >= this.totalPages - 2) {
          startPage = this.totalPages - maxVisible + 1;
        } else {
          startPage = this.currentPage - 2;
        }

        // Add pages to the array
        for (let i = 0; i < maxVisible; i++) {
          pages.push(startPage + i);
        }
      }

      return pages;
    },
  },
  methods: {
    async fetchCoinData() {
      this.isLoading = true;
      this.error = null;

      try {
        // Using CoinGecko API
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=${this.timeRange}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        this.coins = data;
      } catch (err) {
        this.error =
          err instanceof Error ? err.message : "An unknown error occurred";
        console.error("Error fetching coin data:", err);
      } finally {
        this.isLoading = false;
      }
    },
    formatPrice(price: number): string {
      if (price < 1) {
        return price.toFixed(6);
      } else if (price < 10) {
        return price.toFixed(4);
      } else if (price < 1000) {
        return price.toFixed(2);
      } else {
        return price.toLocaleString("en-US", { maximumFractionDigits: 2 });
      }
    },
    formatPercentage(percent: number): string {
      return percent ? percent.toFixed(2) + "%" : "0.00%";
    },
    getPriceChangeClass(percent: number): string {
      if (percent > 0) return "text-success";
      if (percent < 0) return "text-danger";
      return "text-body";
    },
    setTimeRange(range: string) {
      this.timeRange = range;
      this.fetchCoinData();
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page: number) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.fetchCoinData();
    // Refresh data every 60 seconds
    setInterval(this.fetchCoinData, 60000);
  },
});
</script>
