<template>
  <div class="card bg-white border-0 rounded-3">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
      >
        <h5 class="mb-0">Transactions History</h5>

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
              <button class="dropdown-item" @click="filterByTime('day')">
                This Day
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="filterByTime('week')">
                This Week
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="filterByTime('month')">
                This Month
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="filterByTime('year')">
                This Year
              </button>
            </li>
            <li>
              <button class="dropdown-item" @click="resetFilters">
                All Time
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="default-table-area style-two transactions-history">
        <div class="table-responsive">
          <table class="table align-middle">
            <tbody>
              <tr
                v-for="transaction in paginatedTransactions"
                :key="transaction.id"
              >
                <td class="text-body">
                  <div class="d-flex align-items-center" style="gap: 8px">
                    <img
                      :src="transaction.image"
                      style="max-width: 22px"
                      :alt="transaction.name"
                    />
                    <span class="fw-medium text-secondary fs-13">
                      {{ transaction.name }}
                      <span class="fw-normal fs-12 text-body">
                        ({{ transaction.symbol }})
                      </span>
                    </span>
                  </div>
                </td>
                <td class="text-center">
                  <span
                    class="d-inline-block rounded-1 fs-12 fw-medium"
                    :class="getStatusClass(transaction.status)"
                    style="padding: 2px 8px"
                  >
                    {{ transaction.status }}
                  </span>
                </td>
                <td class="text-body text-end fs-13">
                  ${{ formatAmount(transaction.amount) }}
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
            Showing {{ showingRange }} of
            {{ filteredTransactions.length }} results
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
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/bitcoin.png";
import image2 from "@/assets/images/ethereum.png";
import image3 from "@/assets/images/binance.png";
import image4 from "@/assets/images/tether.png";
import image5 from "@/assets/images/xrp.png";
import image6 from "@/assets/images/cardano.png";
import image7 from "@/assets/images/solana.png";
import image8 from "@/assets/images/chainlink.png";

interface Transaction {
  id: number;
  name: string;
  symbol: string;
  image: string;
  status: "Sold" | "Withdraw" | "Deposit" | "Buy";
  amount: number;
  date: Date;
}

export default defineComponent({
  name: "TransactionsHistory",
  setup() {
    const transactions = ref<Transaction[]>([
      {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        image: image1,
        status: "Sold",
        amount: 68848.92,
        date: new Date(),
      },
      {
        id: 2,
        name: "Ethereum",
        symbol: "ETH",
        image: image2,
        status: "Withdraw",
        amount: 2565.77,
        date: new Date(Date.now() - 86400000),
      },
      {
        id: 3,
        name: "Binance",
        symbol: "BNB",
        image: image3,
        status: "Sold",
        amount: 2565.77,
        date: new Date(Date.now() - 172800000),
      },
      {
        id: 4,
        name: "Tether",
        symbol: "USDT",
        image: image4,
        status: "Sold",
        amount: 1.0,
        date: new Date(Date.now() - 259200000),
      },
      {
        id: 5,
        name: "XRP",
        symbol: "XRP",
        image: image5,
        status: "Withdraw",
        amount: 0.529105,
        date: new Date(Date.now() - 345600000),
      },
      {
        id: 6,
        name: "Cardano",
        symbol: "ADA",
        image: image6,
        status: "Deposit",
        amount: 0.45,
        date: new Date(Date.now() - 432000000),
      },
      {
        id: 7,
        name: "Solana",
        symbol: "SOL",
        image: image7,
        status: "Buy",
        amount: 150.25,
        date: new Date(Date.now() - 518400000),
      },
      {
        id: 8,
        name: "Chainlink",
        symbol: "LINK",
        image: image8,
        status: "Sold",
        amount: 15.3,
        date: new Date(Date.now() - 950400000),
      },
    ]);

    const itemsPerPage = 5;
    const currentPage = ref(1);
    const timeFilter = ref<string | null>(null);

    // Filter transactions based on time filter
    const filteredTransactions = computed(() => {
      if (!timeFilter.value) return transactions.value;

      const now = new Date();
      let startDate = new Date();

      switch (timeFilter.value) {
        case "day":
          startDate.setDate(now.getDate() - 1);
          break;
        case "week":
          startDate.setDate(now.getDate() - 7);
          break;
        case "month":
          startDate.setMonth(now.getMonth() - 1);
          break;
        case "year":
          startDate.setFullYear(now.getFullYear() - 1);
          break;
        default:
          return transactions.value;
      }

      return transactions.value.filter(
        (transaction: { date: Date }) =>
          transaction.date.getTime() >= startDate.getTime()
      );
    });

    // Pagination logic
    const totalPages = computed(() =>
      Math.ceil(filteredTransactions.value.length / itemsPerPage)
    );

    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredTransactions.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage,
        filteredTransactions.value.length
      );
      return `${start}-${end}`;
    });

    // Navigation methods
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

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    // Filter methods
    const filterByTime = (period: string) => {
      timeFilter.value = period;
      currentPage.value = 1; // Reset to first page when filtering
    };

    const resetFilters = () => {
      timeFilter.value = null;
      currentPage.value = 1;
    };

    const getStatusClass = (status: string) => {
      switch (status) {
        case "Sold":
        case "Deposit":
          return "bg-success-60 bg-opacity-25 text-success-60";
        case "Withdraw":
          return "bg-danger-80 bg-opacity-25 text-danger-80";
        case "Buy":
          return "bg-info bg-opacity-25 text-info";
        default:
          return "";
      }
    };

    const formatAmount = (amount: number) => {
      return amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      });
    };

    return {
      transactions,
      filteredTransactions,
      paginatedTransactions,
      currentPage,
      totalPages,
      showingRange,
      nextPage,
      prevPage,
      goToPage,
      filterByTime,
      resetFilters,
      getStatusClass,
      formatAmount,
    };
  },
});
</script>
