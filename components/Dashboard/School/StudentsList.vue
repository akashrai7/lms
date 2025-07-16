<template>
  <div class="card custom-shadow rounded-3 bg-white border mb-4">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom pb-4 custom-padding-30"
    >
      <h3 class="mb-0 fw-semibold">Students List</h3>
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

    <div class="default-table-area style-three employee-list for-data-table">
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
            <tr v-for="student in paginatedData" :key="student.id">
              <td>
                <span class="fs-14 fw-medium"> #{{ student.id }} </span>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      :src="student.image"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">
                      {{ student.name }}
                    </h4>
                    <span class="fs-12 text-body">
                      {{ student.email }}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <span class="fs-14 fw-medium">
                  {{ student.subjects }}
                </span>
              </td>
              <td>
                <span class="fs-14 fw-medium">
                  {{ student.class }}
                </span>
              </td>
              <td>
                <span class="fs-14 fw-medium">
                  {{ student.contact }}
                </span>
              </td>
              <td>
                <span class="fs-14 fw-medium">
                  {{ student.results }}
                </span>
              </td>
              <td>
                <span
                  v-if="student.status === 'Passed'"
                  class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal"
                >
                  Passed
                </span>
                <span
                  v-if="student.status === 'Fail'"
                  class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal"
                >
                  Fail
                </span>
                <span
                  v-if="student.status === 'Dropped'"
                  class="badge bg-primary-70 text-primary-50 p-2 fs-12 fw-normal"
                >
                  Dropped
                </span>
              </td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-18 text-primary">
                      visibility
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i
                      class="material-symbols-outlined fs-18 text-primary-div-50"
                    >
                      border_color
                    </i>
                  </button>
                  <button
                    class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                  >
                    <i class="material-symbols-outlined fs-18 text-danger">
                      delete
                    </i>
                  </button>
                </div>
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
              {{ startItem }} - {{ endItem }} of {{ students.length }}
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

import image1 from "~/assets/images/user-175.png";
import image2 from "~/assets/images/user-176.png";
import image3 from "~/assets/images/user-177.png";
import image4 from "~/assets/images/user-178.png";
import image5 from "~/assets/images/user-179.png";
import image6 from "~/assets/images/user-180.png";
import image7 from "~/assets/images/user-181.png";

export default defineComponent({
  name: "StudentsList",
  setup() {
    const students = ref([
      {
        id: "101",
        name: "Emily Johnson",
        email: "emily@gmail.com",
        subjects: "Math",
        class: "5A",
        contact: "(555) 123-4567",
        results: "89% Overall (A)",
        status: "Passed",
        image: image1,
      },
      {
        id: "102",
        name: "Michael Thompson",
        email: "lmichael@gmail.com",
        subjects: "English",
        class: "8B",
        contact: "(555) 234-5678",
        results: "32% Overall (F)",
        status: "Fail",
        image: image2,
      },
      {
        id: "103",
        name: "Sarah Williams",
        email: "sarah@gmail.com",
        subjects: "Geography",
        class: "4C",
        contact: "(555) 345-6789",
        results: "92% Overall (A+)",
        status: "Dropped",
        image: image3,
      },
      {
        id: "104",
        name: "David Anderson",
        email: "david@gmail.com",
        subjects: "Physics",
        class: "6A",
        contact: "(555) 456-7890",
        results: "85% Overall (B+)",
        status: "Passed",
        image: image4,
      },
      {
        id: "105",
        name: "Jessica Martinez",
        email: "jessica@gmail.com",
        subjects: "History",
        class: "7B",
        contact: "(555) 567-8901",
        results: "25% Overall (F)",
        status: "Fail",
        image: image5,
      },
      {
        id: "106",
        name: "James Lee",
        email: "james@gmail.com",
        subjects: "Biology",
        class: "5B",
        contact: "(555) 678-9012",
        results: "88% Overall (A)",
        status: "Passed",
        image: image6,
      },
      {
        id: "107",
        name: "Ethan Clark",
        email: "ethan@gmail.com",
        subjects: "Music",
        class: "8A",
        contact: "(555) 789-0123",
        results: "93% Overall (A+)",
        status: "Dropped",
        image: image7,
      },
    ]);

    const headers = ref([
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "subjects", label: "Subjects" },
      { key: "class", label: "Class" },
      { key: "contact", label: "Contact" },
      { key: "results", label: "Results" },
      { key: "status", label: "Status" },
      { key: "action", label: "Action" },
    ]);

    const rowsPerPage = ref(5);
    const currentPage = ref(1);
    const sortedColumn = ref<string | null>(null);
    const sortOrder = ref<"asc" | "desc">("asc");
    const searchQuery = ref("");

    const filteredStudents = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return students.value.filter(
        (employee: { [s: string]: unknown } | ArrayLike<unknown>) =>
          Object.values(employee).some((value) =>
            String(value).toLowerCase().includes(query)
          )
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredStudents.value.length / rowsPerPage.value)
    );
    const startItem = computed(
      () => (currentPage.value - 1) * rowsPerPage.value + 1
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * rowsPerPage.value, students.value.length)
    );

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * rowsPerPage.value;
      return filteredStudents.value.slice(start, start + rowsPerPage.value);
    });

    const sortTable = (key: string) => {
      if (sortedColumn.value === key) {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
      } else {
        sortedColumn.value = key;
        sortOrder.value = "asc";
      }
      students.value.sort(
        (a: { [x: string]: any }, b: { [x: string]: any }) => {
          const collator = new Intl.Collator("en", {
            numeric: true,
            sensitivity: "base",
          });
          return sortOrder.value === "asc"
            ? collator.compare(String(a[key]), String(b[key]))
            : collator.compare(String(b[key]), String(a[key]));
        }
      );
      filteredStudents.value.sort(
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
      students,
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
      filteredStudents,
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
