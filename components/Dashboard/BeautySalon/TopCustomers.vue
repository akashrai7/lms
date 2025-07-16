<template>
  <div
    class="top-customers-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">Top Customers</h5>
        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
        >
          <option>This Day</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col" class="fw-bold">ID</th>
                <th scope="col" class="fw-bold">Customer Name</th>
                <th scope="col" class="fw-bold">Phone No</th>
                <th scope="col" class="fw-bold">Email</th>
                <th scope="col" class="fw-bold">Preferred Service</th>
                <th scope="col" class="fw-bold">Last Visit</th>
                <th scope="col" class="fw-bold">Status</th>
                <th scope="col" class="fw-bold"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="customer in paginatedCustomers" :key="customer.id">
                <td class="fw-semibold text-body">{{ customer.id }}</td>
                <td>
                  <div class="employee-info d-flex align-items-center">
                    <div class="img rounded-circle">
                      <img
                        :src="customer.image"
                        alt="user-image"
                        class="rounded-circle"
                      />
                    </div>
                    <div>
                      <span class="d-block fw-semibold">{{
                        customer.name
                      }}</span>
                    </div>
                  </div>
                </td>
                <td class="fw-semibold text-body">{{ customer.phone }}</td>
                <td class="text-body">{{ customer.email }}</td>
                <td class="fw-semibold text-body">{{ customer.service }}</td>
                <td class="fw-semibold text-body">{{ customer.lastVisit }}</td>
                <td>
                  <span :class="`trezo-badge ${customer.statusClass}`">{{
                    customer.status
                  }}</span>
                </td>
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
            {{ customers.length }} Results
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

import image1 from "~/assets/images/users/user36.jpg";
import image2 from "~/assets/images/users/user37.jpg";
import image3 from "~/assets/images/users/user38.jpg";
import image4 from "~/assets/images/users/user40.jpg";
import image5 from "~/assets/images/users/user43.jpg";

export default defineComponent({
  name: "TopCustomers",
  setup() {
    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const customers = ref([
      {
        id: "#001",
        name: "Johhna Loren",
        phone: "+321 427 8690",
        email: "loren123@gmail.com",
        service: "Nail Art",
        lastVisit: "17 Oct, 2025",
        status: "VIP",
        statusClass: "shipped",
        image: image1,
      },
      {
        id: "#002",
        name: "Skyler White",
        phone: "+321 427 3980",
        email: "skyqueen@gmail.com",
        service: "Hair Cut",
        lastVisit: "18 Oct, 2025",
        status: "Royal",
        statusClass: "pPending",
        image: image2,
      },
      {
        id: "#003",
        name: "Jonathon Watson",
        phone: "+321 427 1243",
        email: "jona2134@gmail.com",
        service: "Manicure",
        lastVisit: "19 Oct, 2025",
        status: "Royal",
        statusClass: "pPending",
        image: image3,
      },
      {
        id: "#004",
        name: "Walter Olivia",
        phone: "+321 427 7685",
        email: "puzzleworld@gmail.com",
        service: "Pedicure",
        lastVisit: "21 Oct, 2025",
        status: "VIP",
        statusClass: "shipped",
        image: image4,
      },
      {
        id: "#005",
        name: "David Carlen",
        phone: "+321 427 9021",
        email: "liveslong@gmail.com",
        service: "Facial",
        lastVisit: "25 Oct, 2025",
        status: "Normal",
        statusClass: "",
        image: image5,
      },
      {
        id: "#002",
        name: "Skyler White",
        phone: "+321 427 3980",
        email: "skyqueen@gmail.com",
        service: "Hair Cut",
        lastVisit: "18 Oct, 2025",
        status: "Royal",
        statusClass: "pPending",
        image: image2,
      },
      {
        id: "#003",
        name: "Jonathon Watson",
        phone: "+321 427 1243",
        email: "jona2134@gmail.com",
        service: "Manicure",
        lastVisit: "19 Oct, 2025",
        status: "Royal",
        statusClass: "pPending",
        image: image3,
      },
      {
        id: "#004",
        name: "Walter Olivia",
        phone: "+321 427 7685",
        email: "puzzleworld@gmail.com",
        service: "Pedicure",
        lastVisit: "21 Oct, 2025",
        status: "VIP",
        statusClass: "shipped",
        image: image4,
      },
    ]);

    const totalPages = computed(() =>
      Math.ceil(customers.value.length / itemsPerPage.value)
    );

    const paginatedCustomers = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return customers.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endIndex = computed(() =>
      Math.min(currentPage.value * itemsPerPage.value, customers.value.length)
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
      customers,
      paginatedCustomers,
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
.top-customers-card {
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
                bottom: 10px;
                top: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 12px;
              padding: {
                top: 10px;
                bottom: 10px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 40px;
                }
                span {
                  &:nth-child(1) {
                    font-size: var(--fontSize);
                    margin-bottom: 2px;
                  }
                }
              }
              .trezo-badge {
                border-radius: 30px;
                padding: 1px 10px;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
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
        top: 10px;
        bottom: 0;
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
