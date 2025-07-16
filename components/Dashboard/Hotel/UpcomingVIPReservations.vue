<template>
  <div class="card border-0 rounded-3 bg-white position-relative z-1 mb-4 p-25">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-1"
    >
      <h5 class="mb-0">Upcoming VIP Reservations</h5>
      <div class="dropdown select-dropdown">
        <button
          class="dropdown-toggle border text-body rounded-2 bg-gray-100"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Monthly
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
        >
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Weekly
            </button>
          </li>
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Monthly
            </button>
          </li>
          <li>
            <button class="dropdown-item text-secondary py-2 px-3">
              Yearly
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="default-table-area style-two upcoming-vip-reservations-table">
      <div class="table-responsive">
        <table class="table align-middle border-0">
          <thead>
            <tr class="border-bottom">
              <th class="bg-transparent text-body fw-medium">
                <span class="fs-10 fw-bold">CODE</span>
              </th>
              <th class="bg-transparent text-body fw-medium">
                <span class="fs-10 fw-bold">ROOM</span>
              </th>
              <th class="bg-transparent text-body fw-medium">
                <span class="fs-10 fw-bold">CUSTOMER</span>
              </th>
              <th class="bg-transparent text-body fw-medium">
                <span class="fs-10 fw-bold">DURATION</span>
              </th>
              <th class="text-end bg-transparent text-body fw-medium">
                <span class="fs-10 fw-bold opacity-0">ACTION</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="reservation in paginatedData" :key="reservation.code">
              <td class="fs-12 fw-semibold text-body">
                {{ reservation.code }}
              </td>
              <td>
                <NuxtLink
                  to="/hotel/room-details"
                  class="fs-14 fw-semibold text-secondary"
                >
                  {{ reservation.room }}
                </NuxtLink>
              </td>
              <td class="fs-12 fw-semibold text-body-color-50">
                {{ reservation.customer }}
              </td>
              <td>
                <span
                  class="bg-border-color-50 fs-12 fw-medium text-primary d-inline-block rounded-1"
                  style="padding: 3px 8px"
                >
                  {{ reservation.duration }}
                </span>
              </td>
              <td class="text-end">
                <div
                  class="d-flex justify-content-end align-items-center gap-2"
                >
                  <button class="ps-0 border-0 bg-transparent lh-1">
                    <i class="material-symbols-outlined fs-16 text-primary">
                      visibility
                    </i>
                  </button>
                  <button class="ps-0 border-0 bg-transparent lh-1">
                    <i
                      class="material-symbols-outlined fs-16 text-primary-div-50"
                    >
                      edit
                    </i>
                  </button>
                  <button class="ps-0 border-0 bg-transparent lh-1">
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
        class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mt-10"
      >
        <span class="fs-12 fw-medium">
          Showing {{ paginatedData.length }} of
          {{ reservations.length }} Results
        </span>
        <nav aria-label="Page navigation">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button
                class="page-link icon hover-bg"
                @click="goToPage(currentPage - 1)"
              >
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li
              v-for="page in totalPages"
              :key="page"
              class="page-item"
              :class="{ active: currentPage === page }"
            >
              <button class="page-link" @click="goToPage(page)">
                {{ page }}
              </button>
            </li>
            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <button
                class="page-link icon hover-bg"
                @click="goToPage(currentPage + 1)"
              >
                <i class="material-symbols-outlined">keyboard_arrow_right</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

interface Reservation {
  code: string;
  room: string;
  customer: string;
  duration: string;
}

const reservations = ref<Reservation[]>([
  {
    code: "TRZ-32",
    room: "Duluxe Room - G - 3215",
    customer: "Angela Carter",
    duration: "10 Dec - 15 Dec",
  },
  {
    code: "TRZ-34",
    room: "Sweet Suite - S - 1265",
    customer: "Walter White",
    duration: "12 Dec - 16 Dec",
  },
  {
    code: "TRZ-42",
    room: "The Queensland - Q32",
    customer: "Zennifer Loren",
    duration: "15 Dec - 20 Dec",
  },
  {
    code: "TRZ-15",
    room: "Sweet Suite - S - 3214",
    customer: "Johna Mandala",
    duration: "11 Dec - 14 Dec",
  },
  {
    code: "TRZ-29",
    room: "Duluxe Room - F - 7213",
    customer: "Viktor James",
    duration: "10 Dec - 15 Dec",
  },
  {
    code: "TRZ-55",
    room: "Presidential Suite - P - 9000",
    customer: "Bruce Wayne",
    duration: "20 Dec - 25 Dec",
  },
  {
    code: "TRZ-61",
    room: "Garden View - G - 3301",
    customer: "Clark Kent",
    duration: "13 Dec - 17 Dec",
  },
]);

const currentPage = ref(1);
const itemsPerPage = 5;

const totalPages = computed(() =>
  Math.ceil(reservations.value.length / itemsPerPage)
);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return reservations.value.slice(start, start + itemsPerPage);
});

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
</script>
