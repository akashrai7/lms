<template>
  <div
    class="my-recent-patients-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">My Recent Patients</h5>
        <select
          v-model="selectedFilter"
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
        >
          <option value="This Day">This Day</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col" class="fw-bold">ID</th>
                <th scope="col" class="fw-bold">Patient Name</th>
                <th scope="col" class="fw-bold">Disease</th>
                <th scope="col" class="fw-bold">Payment Status</th>
                <th scope="col" class="fw-bold">Status</th>
                <th scope="col" class="fw-bold"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patient in paginatedPatients" :key="patient.id">
                <td class="fw-semibold text-body">#{{ patient.id }}</td>
                <td>
                  <div class="employee-info d-flex align-items-center">
                    <div class="img rounded-circle">
                      <img
                        :src="patient.image"
                        alt="user-image"
                        class="rounded-circle"
                      />
                    </div>
                    <div>
                      <span class="d-block fw-semibold">{{
                        patient.name
                      }}</span>
                      <span class="d-block text-body">{{ patient.email }}</span>
                    </div>
                  </div>
                </td>
                <td class="fw-semibold text-body">{{ patient.disease }}</td>
                <td class="fw-semibold text-body">
                  {{ patient.paymentStatus }}
                </td>
                <td>
                  <span :class="`trezo-badge ${patient.statusClass}`">{{
                    patient.status
                  }}</span>
                </td>
                <td>
                  <div class="dropdown action-opt">
                    <button
                      class="btn bg-transparent p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="ri-more-2-fill"></i>
                    </button>
                    <ul
                      class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                    >
                      <li><button class="dropdown-item">View</button></li>
                      <li><button class="dropdown-item">Edit</button></li>
                      <li><button class="dropdown-item">Delete</button></li>
                    </ul>
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
            {{ filteredPatients.length }} Results
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

import image1 from "@/assets/images/users/user33.jpg";
import image2 from "@/assets/images/users/user34.jpg";
import image3 from "@/assets/images/users/user35.jpg";
import image4 from "@/assets/images/users/user36.jpg";
import image5 from "@/assets/images/users/user37.jpg";

interface Patient {
  id: number;
  name: string;
  email: string;
  image: string;
  disease: string;
  paymentStatus: string;
  status: string;
  statusClass: string;
  date: Date;
}

export default defineComponent({
  name: "MyRecentPatients",
  setup() {
    const patients = ref<Patient[]>([
      {
        id: 1,
        name: "Johhna Loren",
        email: "loren123@gmail.com",
        image: image1,
        disease: "Heart Attack",
        paymentStatus: "Paid",
        status: "Completed",
        statusClass: "shipped",
        date: new Date(),
      },
      {
        id: 2,
        name: "Skyler White",
        email: "skyqueen@gmail.com",
        image: image2,
        disease: "Chest Pain",
        paymentStatus: "Paid",
        status: "Pending",
        statusClass: "pPending",
        date: new Date(),
      },
      {
        id: 3,
        name: "Jonathon Watson",
        email: "jona2134@gmail.com",
        image: image3,
        disease: "Breathing Issue",
        paymentStatus: "Unpaid",
        status: "Failed",
        statusClass: "rejected",
        date: new Date(),
      },
      {
        id: 4,
        name: "Walter White",
        email: "puzzleworld@gmail.com",
        image: image4,
        disease: "Heart Surgery",
        paymentStatus: "Paid",
        status: "Completed",
        statusClass: "shipped",
        date: new Date(),
      },
      {
        id: 5,
        name: "David Carlen",
        email: "liveslong@gmail.com",
        image: image5,
        disease: "CVD",
        paymentStatus: "Unpaid",
        status: "Pending",
        statusClass: "pPending",
        date: new Date(),
      },
      {
        id: 6,
        name: "Skyler White",
        email: "skyqueen@gmail.com",
        image: image2,
        disease: "Chest Pain",
        paymentStatus: "Paid",
        status: "Pending",
        statusClass: "pPending",
        date: new Date(),
      },
      {
        id: 7,
        name: "Jonathon Watson",
        email: "jona2134@gmail.com",
        image: image3,
        disease: "Breathing Issue",
        paymentStatus: "Unpaid",
        status: "Failed",
        statusClass: "rejected",
        date: new Date(),
      },
    ]);

    const selectedFilter = ref("This Day");
    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const filteredPatients = computed(() => {
      const now = new Date();
      return patients.value.filter(
        (patient: { date: string | number | Date }) => {
          const patientDate = new Date(patient.date);
          switch (selectedFilter.value) {
            case "This Day":
              return patientDate.toDateString() === now.toDateString();
            case "This Week": {
              const startOfWeek = new Date(
                now.setDate(now.getDate() - now.getDay())
              );
              const endOfWeek = new Date(
                now.setDate(now.getDate() - now.getDay() + 6)
              );
              return patientDate >= startOfWeek && patientDate <= endOfWeek;
            }
            case "This Month":
              return (
                patientDate.getMonth() === now.getMonth() &&
                patientDate.getFullYear() === now.getFullYear()
              );
            case "This Year":
              return patientDate.getFullYear() === now.getFullYear();
            default:
              return true;
          }
        }
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredPatients.value.length / itemsPerPage.value)
    );

    const paginatedPatients = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredPatients.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );
    const endIndex = computed(() =>
      Math.min(
        currentPage.value * itemsPerPage.value,
        filteredPatients.value.length
      )
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
      patients,
      selectedFilter,
      filteredPatients,
      paginatedPatients,
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
.my-recent-patients-card {
  .card-body {
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
                  bottom: 9px;
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
                  top: 9px;
                  bottom: 9px;
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
                .action-dropdown-menu {
                  .dot-menu {
                    font-size: 20px;
                    color: var(--bodyColor);

                    &:hover {
                      color: var(--primaryColor);
                    }
                  }
                  .dropdown-menu {
                    right: 0;
                    top: 100%;
                    text-align: start;
                    position: absolute;
                    transition: var(--transition);
                    border: 1px solid var(--borderColor) !important;

                    li {
                      .dropdown-item {
                        i {
                          color: var(--primaryColor);
                        }
                      }
                    }
                  }
                }
                &:first-child {
                  padding-left: 0;
                }
                &:last-child {
                  padding-right: 0;
                  text-align: end;

                  .action-dropdown-menu {
                    text-align: end;
                  }
                }
              }
              &:last-child,
              &:nth-child(4) {
                td {
                  .action-dropdown-menu {
                    .dropdown-menu {
                      top: auto;
                      bottom: 100%;
                    }
                  }
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
}
</style>
