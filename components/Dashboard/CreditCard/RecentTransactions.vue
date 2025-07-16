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
            {{ selectedFilter }}
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li v-for="filter in dateFilters" :key="filter">
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="changeFilter(filter)"
              >
                {{ filter }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="default-table-area style-two recent-transactions py-19">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col" class="text-secondary">Date</th>
                <th scope="col" class="text-secondary">Description</th>
                <th scope="col" class="text-secondary">Category</th>
                <th scope="col" class="text-secondary">Amount ($)</th>
                <th scope="col" class="text-secondary">Status</th>
                <th scope="col" class="text-secondary">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="transaction in paginatedTransactions"
                :key="transaction.id"
              >
                <td class="text-body">{{ formatDate(transaction.date) }}</td>
                <td class="text-body">{{ transaction.description }}</td>
                <td class="text-body">{{ transaction.category }}</td>
                <td class="text-body">
                  ${{ transaction.amount.toLocaleString() }}
                </td>
                <td>
                  <span
                    class="d-inline-block rounded-pill fs-12 fw-medium border"
                    :class="statusClasses(transaction.status)"
                    style="padding: 1px 10px"
                  >
                    {{ transaction.status }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="viewTransaction(transaction)"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="editTransaction(transaction)"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="deleteTransaction(transaction.id)"
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
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap p-4 pt-3"
        >
          <span class="fs-13"
            >Showing {{ showingRange }} of
            {{ filteredTransactions.length }} Results</span
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
import { defineComponent, ref, computed, onMounted } from "vue";

interface Transaction {
  id: number;
  date: Date;
  description: string;
  category: string;
  amount: number;
  status: "Completed" | "Pending" | "Cancelled" | "Rejected";
}

export default defineComponent({
  name: "RecentTransactions",
  setup() {
    const transactions = ref<Transaction[]>([]);
    const dateFilters = ["Last 7 Days", "Last 15 Days", "Last 30 Days"];
    const selectedFilter = ref("Last 15 Days");
    const itemsPerPage = 6;
    const currentPage = ref(1);

    // Generate mock transactions
    const generateTransactions = (count: number): Transaction[] => {
      const categories = [
        "Dining",
        "Groceries",
        "Transportation",
        "Utilities",
        "Entertainment",
        "Sports",
      ];
      const statuses: ("Completed" | "Pending" | "Cancelled" | "Rejected")[] = [
        "Completed",
        "Pending",
        "Cancelled",
        "Rejected",
      ];

      return Array.from({ length: count }, (_, i) => {
        const daysAgo = Math.floor(Math.random() * 30);
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);

        return {
          id: i + 1,
          date,
          description: `Transaction ${i + 1}`,
          category: categories[Math.floor(Math.random() * categories.length)],
          amount: parseFloat((Math.random() * 1000).toFixed(2)),
          status: statuses[Math.floor(Math.random() * statuses.length)],
        };
      });
    };

    // Filter transactions based on selected date range
    const filteredTransactions = computed(() => {
      const today = new Date();
      let cutoffDate = new Date();

      if (selectedFilter.value === "Last 7 Days") {
        cutoffDate.setDate(today.getDate() - 7);
      } else if (selectedFilter.value === "Last 15 Days") {
        cutoffDate.setDate(today.getDate() - 15);
      } else {
        // Last 30 Days
        cutoffDate.setDate(today.getDate() - 30);
      }

      return transactions.value
        .filter((t) => t.date >= cutoffDate)
        .sort((a, b) => b.date.getTime() - a.date.getTime());
    });

    // Pagination
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

    // Methods
    const changeFilter = (filter: string) => {
      selectedFilter.value = filter;
      currentPage.value = 1; // Reset to first page when filter changes
    };

    const formatDate = (date: Date) => {
      return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    };

    const statusClasses = (status: string) => {
      switch (status) {
        case "Completed":
          return "bg-success-60 bg-opacity-10 border-success-60 text-success-60";
        case "Pending":
          return "bg-card-bg-c bg-opacity-10 border-card-bg-c text-card-bg-c";
        case "Cancelled":
          return "bg-danger-50 bg-opacity-10 border-danger-50 text-danger-50";
        case "Rejected":
          return "bg-danger-80 bg-opacity-10 border-danger-80 text-danger-80";
        default:
          return "";
      }
    };

    const viewTransaction = (transaction: Transaction) => {
      console.log("Viewing transaction:", transaction);
      // Implement view logic
    };

    const editTransaction = (transaction: Transaction) => {
      console.log("Editing transaction:", transaction);
      // Implement edit logic
    };

    const deleteTransaction = (id: number) => {
      if (confirm("Are you sure you want to delete this transaction?")) {
        transactions.value = transactions.value.filter((t) => t.id !== id);
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

    // Initialize
    onMounted(() => {
      transactions.value = generateTransactions(36);
    });

    return {
      transactions,
      dateFilters,
      selectedFilter,
      currentPage,
      filteredTransactions,
      paginatedTransactions,
      totalPages,
      showingRange,
      changeFilter,
      formatDate,
      statusClasses,
      viewTransaction,
      editTransaction,
      deleteTransaction,
      goToPage,
      prevPage,
      nextPage,
    };
  },
});
</script>
