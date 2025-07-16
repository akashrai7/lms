<template>
  <div class="card custom-shadow rounded-3 bg-white border mb-4">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom pb-4 custom-padding-30"
    >
      <h3 class="mb-0 fw-semibold">Recent Calls</h3>
      <div class="d-flex align-items-center">
        <form class="position-relative table-src-form">
          <input
            type="text"
            class="form-control border-0"
            id="SearchControl"
            style="width: 265px"
            placeholder="Search for a name...."
            v-model="searchQuery"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
          >
            search
          </i>
        </form>
        <div class="dropdown action-opt">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i data-feather="more-vertical"></i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="clock"></i>
                Today
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="pie-chart"></i>
                Last 7 Days
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="rotate-cw"></i>
                Last Month
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="calendar"></i>
                Last 1 Year
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="bar-chart"></i>
                All Time
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="eye"></i>
                View
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="trash"></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="default-table-area style-three recent-calls for-data-table">
      <div class="table-responsive">
        <table class="table align-middle border-0" id="myTable">
          <thead class="border-bottom">
            <tr>
              <th
                v-for="header in headers"
                :key="header.key"
                @click="sortTable(header.key)"
                style="cursor: pointer"
                class="bg-transparent"
              >
                {{ header.label }}
                <span class="up-down-arrow">
                  <i
                    v-if="sortedColumn === header.key && sortOrder === 'asc'"
                    class="material-symbols-outlined"
                  >
                    arrow_upward
                  </i>
                  <i
                    v-if="sortedColumn === header.key && sortOrder === 'desc'"
                    class="material-symbols-outlined"
                  >
                    arrow_downward
                  </i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="call in paginatedData" :key="call.id">
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img :src="call.image" class="rounded-circle" alt="user" />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">
                      {{ call.name }}
                    </h4>
                    <span class="fs-12 text-body">
                      {{ call.number }}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <span
                  v-if="call.type === 'Inbound'"
                  class="text-primary fw-medium"
                >
                  Inbound
                </span>
                <span
                  v-if="call.type === 'Outbound'"
                  class="text-danger-50 fw-medium"
                >
                  Outbound
                </span>
              </td>
              <td>
                <span class="fw-medium">
                  {{ call.duration }}
                </span>
              </td>
              <td>
                <span
                  v-if="call.status === 'Resolved'"
                  class="text-success-50 fw-medium"
                >
                  Resolved
                </span>
                <span
                  v-if="call.status === 'Pending'"
                  class="text-danger-50 fw-medium"
                >
                  Pending
                </span>
                <span
                  v-if="call.status === 'Dropped'"
                  class="text-primary-div-50 fw-medium"
                >
                  Dropped
                </span>
              </td>
              <td>
                <span class="fw-medium">
                  {{ call.time }}
                </span>
              </td>
              <td>
                <span class="fw-medium">
                  {{ call.csat }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 custom-padding-30 pt-4"
        >
          <span class="fs-12 fw-medium">
            Items per page: {{ rowsPerPage }}
          </span>

          <div class="d-flex align-items-center">
            <span class="fs-12 fw-medium me-2">
              {{ startItem }} - {{ endItem }} of {{ calls.length }}
            </span>
            <nav aria-label="Page navigation example">
              <ul class="pagination mb-0 justify-content-center">
                <li :class="['page-item', { disabled: currentPage === 1 }]">
                  <button
                    class="page-link icon"
                    @click="prevPage"
                    :disabled="currentPage === 1"
                  >
                    <i class="material-symbols-outlined">
                      keyboard_arrow_left
                    </i>
                  </button>
                </li>
                <li
                  :class="[
                    'page-item',
                    { disabled: currentPage === totalPages },
                  ]"
                >
                  <button
                    class="page-link icon"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import feather from "feather-icons";

import image1 from "~/assets/images/user-166.png";
import image2 from "~/assets/images/user-167.png";
import image3 from "~/assets/images/user-168.png";
import image4 from "~/assets/images/user-169.png";

export default defineComponent({
  name: "RecentCalls",
  setup() {
    const calls = ref([
      {
        id: "1",
        image: image1,
        name: "Emily Johnson",
        number: "+1 555-123-4567",
        type: "Inbound",
        duration: "5 mins",
        status: "Resolved",
        time: "10:30 AM",
        csat: "90%",
      },
      {
        id: "2",
        image: image2,
        name: "Sarah Green",
        number: "+44 20 7946 0958",
        type: "Outbound",
        duration: "3 mins",
        status: "Pending",
        time: "10:35 AM",
        csat: "85%",
      },
      {
        id: "3",
        image: image3,
        name: "Adam Smith",
        number: "+1 555-234-5678",
        type: "Inbound",
        duration: "7 mins",
        status: "Resolved",
        time: "10:40 AM",
        csat: "83%",
      },
      {
        id: "4",
        image: image4,
        name: "Laura Martin",
        number: "+61 2 1234 5678",
        type: "Inbound",
        duration: "4 mins",
        status: "Dropped",
        time: "10:45 AM",
        csat: "87%",
      },
      {
        id: "5",
        image: image4,
        name: "Laura Martin",
        number: "+61 2 1234 5678",
        type: "Inbound",
        duration: "4 mins",
        status: "Dropped",
        time: "10:45 AM",
        csat: "87%",
      },
      {
        id: "6",
        image: image3,
        name: "Adam Smith",
        number: "+1 555-234-5678",
        type: "Inbound",
        duration: "7 mins",
        status: "Resolved",
        time: "10:40 AM",
        csat: "83%",
      },
      {
        id: "7",
        image: image2,
        name: "Sarah Green",
        number: "+44 20 7946 0958",
        type: "Outbound",
        duration: "3 mins",
        status: "Pending",
        time: "10:35 AM",
        csat: "85%",
      },
    ]);

    const headers = ref([
      { key: "name", label: "Caller Name" },
      { key: "type", label: "Call Type" },
      { key: "duration", label: "Duration" },
      { key: "status", label: "Status" },
      { key: "time", label: "Time" },
      { key: "csat", label: "CSAT" },
    ]);

    const rowsPerPage = ref(4);
    const currentPage = ref(1);
    const sortedColumn = ref<string | null>(null);
    const sortOrder = ref<"asc" | "desc">("asc");
    const searchQuery = ref("");

    const filteredCalls = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return calls.value.filter(
        (employee: { [s: string]: unknown } | ArrayLike<unknown>) =>
          Object.values(employee).some((value) =>
            String(value).toLowerCase().includes(query)
          )
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredCalls.value.length / rowsPerPage.value)
    );
    const startItem = computed(
      () => (currentPage.value - 1) * rowsPerPage.value + 1
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * rowsPerPage.value, calls.value.length)
    );

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * rowsPerPage.value;
      return filteredCalls.value.slice(start, start + rowsPerPage.value);
    });

    const sortTable = (key: string) => {
      if (sortedColumn.value === key) {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
      } else {
        sortedColumn.value = key;
        sortOrder.value = "asc";
      }
      calls.value.sort((a: { [x: string]: any }, b: { [x: string]: any }) => {
        const collator = new Intl.Collator("en", {
          numeric: true,
          sensitivity: "base",
        });
        return sortOrder.value === "asc"
          ? collator.compare(String(a[key]), String(b[key]))
          : collator.compare(String(b[key]), String(a[key]));
      });
      filteredCalls.value.sort(
        (a: { [x: string]: string }, b: { [x: string]: string }) => {
          const collator = new Intl.Collator("en", { numeric: true });
          return sortOrder.value === "asc"
            ? collator.compare(a[key], b[key])
            : collator.compare(b[key], a[key]);
        }
      );
    };

    const prevPage = () => currentPage.value > 1 && currentPage.value--;
    const nextPage = () =>
      currentPage.value < totalPages.value && currentPage.value++;

    onMounted(() => {
      feather.replace();
    });

    return {
      calls,
      headers,
      rowsPerPage,
      currentPage,
      sortedColumn,
      sortOrder,
      paginatedData,
      startItem,
      endItem,
      totalPages,
      sortTable,
      prevPage,
      nextPage,
      searchQuery,
      filteredCalls,
    };
  },
});
</script>

<style lang="scss" scoped>
.up-down-arrow {
  i {
    font-size: 14px;
    position: relative;
    top: 2px;
  }
}
</style>
