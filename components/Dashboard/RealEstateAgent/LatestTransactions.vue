<template>
  <div class="card bg-white border-0 rounded-3">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-20"
      >
        <h5 class="mb-0">Latest Transactions</h5>
        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle border text-body rounded-2 bg-gray-100"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ selectedPeriod }}
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li v-for="period in timePeriods" :key="period">
              <button
                class="dropdown-item text-secondary py-2 px-3"
                @click="selectedPeriod = period"
              >
                {{ period }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="default-table-area style-two campaigns-table px-20 py-12 latest-transactions-table"
      >
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead>
              <tr class="border-bottom">
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-semibold letter-spacing-1"
                    >CLIENT</span
                  >
                </th>
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-semibold letter-spacing-1"
                    >EMAIL</span
                  >
                </th>
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-semibold letter-spacing-1"
                    >AMOUNT</span
                  >
                </th>
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-semibold letter-spacing-1"
                    >PAYMENT METHOD</span
                  >
                </th>
                <th scope="col" class="bg-transparent">
                  <span class="fs-10 text-body fw-semibold letter-spacing-1"
                    >STATUS</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="transaction in paginatedTransactions"
                :key="transaction.id"
              >
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        :src="transaction.avatar"
                        class="rounded-circle"
                        style="width: 32px; height: 32px"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-semibold mb-0">
                        {{ transaction.name }}
                      </h4>
                    </div>
                  </div>
                </td>
                <td class="fs-12 fw-semibold text-body">
                  {{ transaction.email }}
                </td>
                <td class="fs-12 fw-semibold text-secondary">
                  {{ formatCurrency(transaction.amount) }}
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <img
                      :src="transaction.paymentMethod.icon"
                      :alt="transaction.paymentMethod.name"
                    />
                    <span class="ms-2 text-secondary fs-12 fw-semibold">
                      {{ transaction.paymentMethod.name }}
                    </span>
                  </div>
                </td>
                <td>
                  <span
                    class="d-inline-block rounded-pill fs-12 fw-medium"
                    :class="statusClasses(transaction.status)"
                    style="padding: 1px 10px"
                  >
                    {{ transaction.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mt-12"
        >
          <span class="fs-12 fw-medium">
            Showing {{ showingFrom }}-{{ showingTo }} of
            {{ transactions.length }} Results
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
                  <i class="material-symbols-outlined"> keyboard_arrow_left </i>
                </button>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page">
                <button
                  class="page-link"
                  :class="{ active: currentPage === page }"
                  @click="currentPage = page"
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
                  <i class="material-symbols-outlined">
                    keyboard_arrow_right
                  </i>
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
import image2 from "@/assets/images/user-170.png";
import image3 from "@/assets/images/user-172.png";
import image4 from "@/assets/images/user-171.png";
import paymentMethodIcon1 from "@/assets/images/paypal.png";
import paymentMethodIcon2 from "@/assets/images/wise.png";
import paymentMethodIcon3 from "@/assets/images/bank.png";
import paymentMethodIcon4 from "@/assets/images/skrill.png";

interface PaymentMethod {
  name: string;
  icon: string;
}

interface Transaction {
  id: number;
  name: string;
  email: string;
  avatar: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: "Completed" | "Pending" | "Failed";
  date: string;
}

export default defineComponent({
  name: "LatestTransactions",
  setup() {
    const timePeriods = ["Daily", "Weekly", "Monthly", "Yearly"];
    const selectedPeriod = ref("Monthly");

    const transactions = ref<Transaction[]>([
      {
        id: 1,
        name: "Johhna Loren",
        email: "loren123@gmail.com",
        avatar: image1,
        amount: 6240,
        paymentMethod: {
          name: "Paypal",
          icon: paymentMethodIcon1,
        },
        status: "Completed",
        date: "2023-05-15",
      },
      {
        id: 2,
        name: "Skyler Queen",
        email: "skyqueen@gmail.com",
        avatar: image2,
        amount: 5135,
        paymentMethod: {
          name: "Wise",
          icon: paymentMethodIcon2,
        },
        status: "Pending",
        date: "2023-05-14",
      },
      {
        id: 3,
        name: "Jonathon Watson",
        email: "jona2134@gmail.com",
        avatar: image3,
        amount: 4321,
        paymentMethod: {
          name: "Bank",
          icon: paymentMethodIcon3,
        },
        status: "Failed",
        date: "2023-05-13",
      },
      {
        id: 4,
        name: "Walter White",
        email: "puzzleworld@gmail.com",
        avatar: image4,
        amount: 3124,
        paymentMethod: {
          name: "Paypal",
          icon: paymentMethodIcon1,
        },
        status: "Completed",
        date: "2023-05-12",
      },
      {
        id: 5,
        name: "David Carlen",
        email: "liveslong@gmail.com",
        avatar: image1,
        amount: 2137,
        paymentMethod: {
          name: "Skrill",
          icon: paymentMethodIcon4,
        },
        status: "Pending",
        date: "2023-05-11",
      },
      {
        id: 6,
        name: "Walter White",
        email: "puzzleworld@gmail.com",
        avatar: image3,
        amount: 3124,
        paymentMethod: {
          name: "Paypal",
          icon: paymentMethodIcon1,
        },
        status: "Completed",
        date: "2023-05-12",
      },
      {
        id: 7,
        name: "Skyler Queen",
        email: "skyqueen@gmail.com",
        avatar: image2,
        amount: 5135,
        paymentMethod: {
          name: "Wise",
          icon: paymentMethodIcon2,
        },
        status: "Pending",
        date: "2023-05-14",
      },
    ]);

    // Pagination
    const itemsPerPage = 5;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(transactions.value.length / itemsPerPage)
    );
    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return transactions.value.slice(start, end);
    });

    const showingFrom = computed(
      () => (currentPage.value - 1) * itemsPerPage + 1
    );
    const showingTo = computed(() => {
      const end = currentPage.value * itemsPerPage;
      return end > transactions.value.length ? transactions.value.length : end;
    });

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

    // Helper functions
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(amount);
    };

    const statusClasses = (status: string) => {
      const classes: Record<string, string> = {
        Completed:
          "bg-success-60 bg-opacity-10 border-success-60 border text-success-60",
        Pending:
          "bg-card-bg-c bg-opacity-10 border-card-bg-c border text-card-bg-c",
        Failed:
          "bg-danger-80 bg-opacity-10 border-danger-80 border text-danger-80",
      };
      return classes[status] || "";
    };

    return {
      timePeriods,
      selectedPeriod,
      transactions,
      paginatedTransactions,
      currentPage,
      totalPages,
      showingFrom,
      showingTo,
      nextPage,
      prevPage,
      formatCurrency,
      statusClasses,
    };
  },
});
</script>
