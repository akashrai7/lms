<template>
  <div class="card bg-white border-0 rounded-3">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
      >
        <h5 class="mb-0">Recent Transactions</h5>

        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle border text-body rounded-2 bg-transparent"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ timeRange }}
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li v-for="option in timeOptions" :key="option">
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="changeTimeRange(option)"
              >
                {{ option }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="default-table-area style-two py-14 recent-transactions2">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col" class="text-secondary">Date</th>
                <th scope="col" class="text-secondary">Asset</th>
                <th scope="col" class="text-secondary">Type</th>
                <th scope="col" class="text-secondary">Amount</th>
                <th scope="col" class="text-secondary">Price</th>
                <th scope="col" class="text-secondary">Total Value</th>
                <th scope="col" class="text-secondary">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="transaction in paginatedTransactions"
                :key="transaction.id"
              >
                <td>{{ formatDate(transaction.date) }}</td>
                <td class="fw-medium">{{ transaction.asset }}</td>
                <td>
                  <span
                    class="d-inline-block rounded-1 fs-12 fw-medium"
                    :class="
                      transaction.type === 'Buy'
                        ? 'bg-success-60 bg-opacity-25 text-success-60'
                        : 'bg-danger-80 bg-opacity-25 text-danger-80'
                    "
                    style="padding: 2px 8px"
                  >
                    {{ transaction.type }}
                  </span>
                </td>
                <td>{{ transaction.amount }} {{ transaction.assetSymbol }}</td>
                <td>${{ formatNumber(transaction.price) }}</td>
                <td>${{ formatNumber(transaction.totalValue) }}</td>
                <td>
                  <span
                    class="d-inline-block rounded-1 fs-12 fw-medium"
                    :class="getStatusClass(transaction.status)"
                    style="padding: 2px 8px"
                  >
                    {{ transaction.status }}
                  </span>
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
            Showing {{ showingFrom }}-{{ showingTo }} of
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
                  :class="{ active: page === currentPage }"
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
import { defineComponent } from "vue";

interface Transaction {
  id: number;
  date: Date;
  asset: string;
  assetSymbol: string;
  type: "Buy" | "Sell";
  amount: number;
  price: number;
  totalValue: number;
  status: "Done" | "Pending" | "Failed";
}

export default defineComponent({
  name: "RecentTransactions",
  data() {
    return {
      timeRange: "Last 30 Days",
      timeOptions: [
        "Last 7 Days",
        "Last 15 Days",
        "Last 30 Days",
        "Last 90 Days",
      ],
      transactions: [] as Transaction[],
      itemsPerPage: 6,
      currentPage: 1,
    };
  },
  computed: {
    filteredTransactions(): Transaction[] {
      const days = parseInt(this.timeRange.split(" ")[1]);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - days);

      return this.transactions
        .filter((tx) => new Date(tx.date) >= cutoffDate)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    },
    paginatedTransactions(): Transaction[] {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredTransactions.slice(start, end);
    },
    totalPages(): number {
      return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    },
    showingFrom(): number {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    showingTo(): number {
      const end = this.currentPage * this.itemsPerPage;
      return end > this.filteredTransactions.length
        ? this.filteredTransactions.length
        : end;
    },
  },
  methods: {
    changeTimeRange(range: string) {
      this.timeRange = range;
      this.currentPage = 1; // Reset to first page when changing time range
    },
    formatDate(date: Date): string {
      return new Date(date).toISOString().split("T")[0];
    },
    formatNumber(num: number): string {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
      });
    },
    getStatusClass(status: string): string {
      switch (status) {
        case "Done":
          return "bg-success-60 bg-opacity-25 text-success-60";
        case "Pending":
          return "bg-warning bg-opacity-25 text-warning";
        case "Failed":
          return "bg-danger-80 bg-opacity-25 text-danger-80";
        default:
          return "";
      }
    },
    goToPage(page: number) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    generateMockTransactions(count: number): Transaction[] {
      const assets = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Tether", symbol: "USDT" },
        { name: "USD Coin", symbol: "USDC" },
        { name: "Cardano", symbol: "ADA" },
        { name: "Tron", symbol: "TRX" },
        { name: "Solana", symbol: "SOL" },
        { name: "Polygon", symbol: "MATIC" },
      ];

      const types: ("Buy" | "Sell")[] = ["Buy", "Sell"];
      const statuses: ("Done" | "Pending" | "Failed")[] = [
        "Done",
        "Pending",
        "Failed",
      ];

      return Array.from({ length: count }, (_, i) => {
        const asset = assets[Math.floor(Math.random() * assets.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const price =
          type === "Buy"
            ? Math.random() * 10000 + 100
            : Math.random() * 10000 + 100;
        const amount =
          type === "Buy" ? Math.random() * 10 + 0.1 : Math.random() * 100 + 1;

        return {
          id: i + 1,
          date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000),
          asset: asset.name,
          assetSymbol: asset.symbol,
          type,
          amount: parseFloat(amount.toFixed(6)),
          price: parseFloat(price.toFixed(2)),
          totalValue: parseFloat((amount * price).toFixed(2)),
          status: statuses[Math.floor(Math.random() * statuses.length)],
        };
      });
    },
  },
  created() {
    // Generate mock data - in a real app, you would fetch this from an API
    this.transactions = this.generateMockTransactions(36);
  },
});
</script>
