<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-25"
      >
        <form class="position-relative table-src-form me-0">
          <input
            type="text"
            v-model="searchQuery"
            class="form-control border-0"
            placeholder="Search here...."
            @input="filterTransactions"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y text-secondary"
          >
            search
          </i>
        </form>
        <div class="d-flex flex-wrap align-items-center" style="gap: 15px">
          <button
            class="btn btn-outline-primary fw-medium rounded-3 hover-bg"
            data-bs-toggle="modal"
            data-bs-target="#transactionModal"
            @click="resetForm"
          >
            <span class="d-flex align-items-center" style="gap: 5px">
              <i class="ri-add-line d-none d-sm-inline-block fs-20 lh-1"></i>
              <span>Add Transaction</span>
            </span>
          </button>
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
              <li v-for="range in timeRanges" :key="range">
                <button
                  class="dropdown-item text-secondary py-2 px-3"
                  @click="filterByTimeRange(range)"
                >
                  {{ range }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="default-table-area style-two pyx-19 recent-transactions3">
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
                <th scope="col" class="text-secondary">Actions</th>
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
                <td>
                  {{ transaction.amount }}
                  {{ getAssetSymbol(transaction.asset) }}
                </td>
                <td>${{ formatPrice(transaction.price) }}</td>
                <td>${{ formatPrice(transaction.totalValue) }}</td>
                <td>
                  <span
                    class="d-inline-block rounded-1 fs-12 fw-medium"
                    :class="getStatusClass(transaction.status)"
                    style="padding: 2px 8px"
                  >
                    {{ transaction.status }}
                  </span>
                </td>
                <td>
                  <button
                    class="btn btn-sm btn-outline-secondary me-2"
                    @click="editTransaction(transaction)"
                  >
                    <i class="ri-edit-line"></i>
                  </button>
                  <button
                    class="btn btn-sm btn-outline-danger"
                    @click="confirmDelete(transaction.id)"
                  >
                    <i class="ri-delete-bin-line"></i>
                  </button>
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
            Showing {{ showingFrom }} to {{ showingTo }} of
            {{ filteredTransactions.length }} results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button
                  class="page-link icon hover-bg"
                  aria-label="Previous"
                  @click="prevPage"
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
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <button
                  class="page-link icon hover-bg"
                  aria-label="Next"
                  @click="nextPage"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Transaction Modal -->
      <div
        class="modal fade"
        id="transactionModal"
        tabindex="-1"
        aria-labelledby="transactionModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style="max-width: 550px"
        >
          <div class="modal-content rounded-0">
            <div class="modal-header border-0 p-4 border-bottom">
              <h1 class="modal-title fs-18" id="transactionModalLabel">
                {{ isEditing ? "Edit Transaction" : "Add New Transaction" }}
              </h1>
              <button
                type="button"
                class="btn-close campaigns-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label text-secondary">Date</label>
                      <input
                        type="date"
                        v-model="formData.date"
                        class="form-control h-60 border-border-color"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label text-secondary">Asset</label>
                      <select
                        v-model="formData.asset"
                        class="form-select form-control h-60 border-border-color"
                        required
                      >
                        <option
                          v-for="asset in assets"
                          :key="asset"
                          :value="asset"
                        >
                          {{ asset }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label text-secondary">Type</label>
                      <select
                        v-model="formData.type"
                        class="form-select form-control"
                        required
                      >
                        <option value="Buy">Buy</option>
                        <option value="Sell">Sell</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label text-secondary">Amount</label>
                      <input
                        type="number"
                        v-model="formData.amount"
                        class="form-control h-60 border-border-color"
                        placeholder="Enter Amount"
                        step="0.000001"
                        required
                        @input="calculateTotalValue"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label text-secondary">Price</label>
                      <input
                        type="number"
                        v-model="formData.price"
                        class="form-control h-60 border-border-color"
                        placeholder="Enter Price"
                        step="0.01"
                        required
                        @input="calculateTotalValue"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label class="label text-secondary">Total Value</label>
                      <input
                        type="number"
                        v-model="formData.totalValue"
                        class="form-control h-60 border-border-color"
                        placeholder="Enter Total Value"
                        step="0.01"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-3">
                      <label class="label text-secondary">Status</label>
                      <select
                        v-model="formData.status"
                        class="form-select form-control"
                        required
                      >
                        <option value="Done">Done</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex justify-content-end flex-wrap gap-3">
                      <button
                        type="button"
                        class="btn btn-danger py-2 px-4 fw-medium fs-16 text-white"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="btn btn-primary py-2 px-4 fw-medium fs-16"
                        data-bs-dismiss="modal"
                      >
                        <i class="ri-add-line text-white fw-medium"></i>
                        {{ isEditing ? "Update" : "Create" }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

interface Transaction {
  id: number;
  date: string;
  asset: string;
  type: "Buy" | "Sell";
  amount: number;
  price: number;
  totalValue: number;
  status: "Done" | "Pending" | "Failed";
}

export default defineComponent({
  name: "Transactions",
  setup() {
    // Reactive data
    const transactions = ref<Transaction[]>([]);
    const filteredTransactions = ref<Transaction[]>([]);
    const formData = ref({
      id: 0,
      date: "",
      asset: "Bitcoin",
      type: "Buy" as "Buy" | "Sell",
      amount: 0,
      price: 0,
      totalValue: 0,
      status: "Done" as "Done" | "Pending" | "Failed",
    });
    const isEditing = ref(false);
    const searchQuery = ref("");
    const timeRange = ref("Last 30 Days");
    const timeRanges = ref([
      "Last 7 Days",
      "Last 15 Days",
      "Last 30 Days",
      "All Time",
    ]);
    const assets = ref([
      "Bitcoin",
      "Ethereum",
      "Tether",
      "USD Coin",
      "Cardano",
      "Tron",
      "Ondo",
      "Polkadot",
      "Pepe",
      "Mantle",
    ]);
    const currentPage = ref(1);
    const itemsPerPage = ref(10);

    // Computed properties
    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredTransactions.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredTransactions.value.length / itemsPerPage.value);
    });

    const showingFrom = computed(() => {
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });

    const showingTo = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > filteredTransactions.value.length
        ? filteredTransactions.value.length
        : end;
    });

    // Methods
    const generateSampleData = () => {
      const types: ("Buy" | "Sell")[] = ["Buy", "Sell"];
      const statuses: ("Done" | "Pending" | "Failed")[] = [
        "Done",
        "Pending",
        "Failed",
      ];

      for (let i = 0; i < 36; i++) {
        const daysAgo = Math.floor(Math.random() * 30);
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);

        const asset =
          assets.value[Math.floor(Math.random() * assets.value.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const amount = parseFloat((Math.random() * 10).toFixed(6));
        const price = parseFloat((Math.random() * 50000).toFixed(2));
        const totalValue = parseFloat((amount * price).toFixed(2));
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        transactions.value.push({
          id: i + 1,
          date: date.toISOString().split("T")[0],
          asset,
          type,
          amount,
          price,
          totalValue,
          status,
        });
      }

      // Sort by date descending
      transactions.value.sort(
        (
          a: { date: string | number | Date },
          b: { date: string | number | Date }
        ) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    };

    const filterTransactions = () => {
      if (!searchQuery.value) {
        filteredTransactions.value = [...transactions.value];
        return;
      }

      const query = searchQuery.value.toLowerCase();
      filteredTransactions.value = transactions.value.filter(
        (transaction: {
          asset: string;
          type: string;
          status: string;
          date: string | any[];
        }) =>
          transaction.asset.toLowerCase().includes(query) ||
          transaction.type.toLowerCase().includes(query) ||
          transaction.status.toLowerCase().includes(query) ||
          transaction.date.includes(query)
      );

      currentPage.value = 1;
    };

    const filterByTimeRange = (range: string) => {
      timeRange.value = range;
      const today = new Date();
      let startDate = new Date();

      switch (range) {
        case "Last 7 Days":
          startDate.setDate(today.getDate() - 7);
          break;
        case "Last 15 Days":
          startDate.setDate(today.getDate() - 15);
          break;
        case "Last 30 Days":
          startDate.setDate(today.getDate() - 30);
          break;
        case "All Time":
          filteredTransactions.value = [...transactions.value];
          currentPage.value = 1;
          return;
      }

      filteredTransactions.value = transactions.value.filter(
        (transaction: { date: string | number | Date }) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= startDate && transactionDate <= today;
        }
      );

      currentPage.value = 1;
    };

    const formatDate = (date: string): string => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    };

    const formatPrice = (price: number): string => {
      return price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };

    const getAssetSymbol = (asset: string): string => {
      const symbols: Record<string, string> = {
        Bitcoin: "BTC",
        Ethereum: "ETH",
        Tether: "USDT",
        "USD Coin": "USDC",
        Cardano: "ADA",
        Tron: "TRX",
        Ondo: "ONDO",
        Polkadot: "DOT",
        Pepe: "PEPE",
        Mantle: "MNT",
      };
      return symbols[asset] || "";
    };

    const getStatusClass = (status: string): string => {
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
    };

    const calculateTotalValue = () => {
      formData.value.totalValue = parseFloat(
        (formData.value.amount * formData.value.price).toFixed(2)
      );
    };

    const resetForm = () => {
      formData.value = {
        id: 0,
        date: new Date().toISOString().split("T")[0],
        asset: "Bitcoin",
        type: "Buy",
        amount: 0,
        price: 0,
        totalValue: 0,
        status: "Done",
      };
      isEditing.value = false;
    };

    const editTransaction = (transaction: Transaction) => {
      formData.value = { ...transaction };
      isEditing.value = true;
    };

    const submitForm = () => {
      if (isEditing.value) {
        const index = transactions.value.findIndex(
          (t: { id: any }) => t.id === formData.value.id
        );
        if (index !== -1) {
          transactions.value[index] = { ...formData.value };
        }
      } else {
        const newId =
          Math.max(...transactions.value.map((t: { id: any }) => t.id)) + 1;
        transactions.value.unshift({
          ...formData.value,
          id: newId,
        });
      }

      filterTransactions();
    };

    const confirmDelete = (id: number) => {
      if (confirm("Are you sure you want to delete this transaction?")) {
        transactions.value = transactions.value.filter(
          (t: { id: number }) => t.id !== id
        );
        filterTransactions();
      }
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

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    // Lifecycle hooks
    onMounted(() => {
      generateSampleData();
      filteredTransactions.value = [...transactions.value];
    });

    // Return everything that should be available in the template
    return {
      transactions,
      filteredTransactions,
      formData,
      isEditing,
      searchQuery,
      timeRange,
      timeRanges,
      assets,
      currentPage,
      itemsPerPage,
      paginatedTransactions,
      totalPages,
      showingFrom,
      showingTo,
      filterTransactions,
      filterByTimeRange,
      formatDate,
      formatPrice,
      getAssetSymbol,
      getStatusClass,
      calculateTotalValue,
      resetForm,
      editTransaction,
      submitForm,
      confirmDelete,
      prevPage,
      nextPage,
      goToPage,
    };
  },
});
</script>
