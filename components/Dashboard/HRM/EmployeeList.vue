<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom pb-4"
      >
        <h3 class="mb-0 fw-semibold">Employee List</h3>
        <div class="d-flex align-items-center">
          <form class="position-relative table-src-form">
            <input
              type="text"
              id="SearchControl"
              class="form-control border-0"
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
              <tr v-for="employee in paginatedData" :key="employee.id">
                <td>
                  <span class="fs-14 fw-medium">
                    {{ employee.id }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        :src="employee.image"
                        class="rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-medium mb-0">{{ employee.name }}</h4>
                      <span class="fs-12 text-body">{{ employee.email }}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="fs-14 fw-medium">{{ employee.department }}</span>
                </td>
                <td>
                  <span class="fs-14 fw-medium">{{ employee.position }}</span>
                </td>
                <td>
                  <span class="fs-14 fw-medium">{{
                    employee.joiningDate
                  }}</span>
                </td>
                <td>
                  <span class="fs-14 fw-medium">{{ employee.salary }}</span>
                </td>
                <td>
                  <span
                    v-if="employee.status === 'Active'"
                    class="badge bg-success-80 text-success-50 p-2 fs-12 fw-normal"
                  >
                    Active
                  </span>
                  <span
                    v-if="employee.status === 'On Leave'"
                    class="badge bg-primary-div-60 text-primary-div-50 p-2 fs-12 fw-normal"
                  >
                    On Leave
                  </span>
                  <span
                    v-if="employee.status === 'Resigned'"
                    class="badge bg-danger-70 text-danger-60 p-2 fs-12 fw-normal"
                  >
                    Resigned
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
                {{ startItem }} - {{ endItem }} of {{ employees.length }}
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import feather from "feather-icons";

import image1 from "~/assets/images/user-156.png";
import image2 from "~/assets/images/user-157.png";
import image3 from "~/assets/images/user-158.png";
import image4 from "~/assets/images/user-159.png";
import image5 from "~/assets/images/user-160.png";

export default defineComponent({
  name: "EmployeeList",
  setup() {
    const employees = ref([
      {
        id: "EMP010",
        name: "Ethan Collins",
        email: "ethan@gmail.com",
        department: "Sales",
        position: "Sales Manager",
        joiningDate: "Apr 12, 2022",
        salary: "$90,000",
        status: "Active",
        image: image1,
      },
      {
        id: "EMP009",
        name: "Liam Bennett",
        email: "liam@gmail.com",
        department: "Human Resources",
        position: "HR Manager",
        joiningDate: "Mar 10, 2021",
        salary: "$75,000",
        status: "On Leave",
        image: image2,
      },
      {
        id: "EMP008",
        name: "Olivia Turner",
        email: "olivia@gmail.com",
        department: "Marketing",
        position: "Marketing Lead",
        joiningDate: "Jan 15, 2020",
        salary: "$85,000",
        status: "Active",
        image: image3,
      },
      {
        id: "EMP007",
        name: "Isabella Reed",
        email: "isabella@gmail.com",
        department: "Finance",
        position: "Financial Analyst",
        joiningDate: "Aug 05, 2020",
        salary: "$80,000",
        status: "Resigned",
        image: image4,
      },
      {
        id: "EMP006",
        name: "Sophia Myers",
        email: "isabella@gmail.com",
        department: "IT",
        position: "Software Engineer",
        joiningDate: "Feb 22, 2019",
        salary: "$95,000",
        status: "Active",
        image: image5,
      },
      {
        id: "EMP005",
        name: "Isabella Reed",
        email: "ethan@gmail.com",
        department: "Finance",
        position: "Financial Analyst",
        joiningDate: "Aug 05, 2020",
        salary: "$80,000",
        status: "Resigned",
        image: image1,
      },
      {
        id: "EMP004",
        name: "Ethan Collins",
        email: "ethan@gmail.com",
        department: "Sales",
        position: "Sales Manager",
        joiningDate: "Apr 12, 2022",
        salary: "$90,000",
        status: "Active",
        image: image2,
      },
      {
        id: "EMP003",
        name: "Sophia Myers",
        email: "sophia@gmail.com",
        department: "IT",
        position: "Software Engineer",
        joiningDate: "Feb 22, 2019",
        salary: "$95,000",
        status: "Active",
        image: image3,
      },
      {
        id: "EMP002",
        name: "Liam Bennett",
        email: "liam@gmail.com",
        department: "Human Resources",
        position: "HR Manager",
        joiningDate: "Mar 10, 2021",
        salary: "$75,000",
        status: "On Leave",
        image: image4,
      },
      {
        id: "EMP006",
        name: "Olivia Turner",
        email: "olivia@gmail.com",
        department: "Marketing",
        position: "Marketing Lead",
        joiningDate: "Jan 15, 2020",
        salary: "$85,000",
        status: "Active",
        image: image5,
      },
    ]);

    const headers = ref([
      { key: "id", label: "ID" },
      { key: "name", label: "Employee" },
      { key: "department", label: "Department" },
      { key: "position", label: "Position" },
      { key: "joiningDate", label: "Joining Date" },
      { key: "salary", label: "Salary" },
      { key: "status", label: "Status" },
      { key: "action", label: "Action" },
    ]);

    const rowsPerPage = ref(5);
    const currentPage = ref(1);
    const sortedColumn = ref<string | null>(null);
    const sortOrder = ref<"asc" | "desc">("asc");
    const searchQuery = ref("");

    const filteredEmployees = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return employees.value.filter(
        (employee: { [s: string]: unknown } | ArrayLike<unknown>) =>
          Object.values(employee).some((value) =>
            String(value).toLowerCase().includes(query)
          )
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredEmployees.value.length / rowsPerPage.value)
    );
    const startItem = computed(
      () => (currentPage.value - 1) * rowsPerPage.value + 1
    );
    const endItem = computed(() =>
      Math.min(currentPage.value * rowsPerPage.value, employees.value.length)
    );

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * rowsPerPage.value;
      return filteredEmployees.value.slice(start, start + rowsPerPage.value);
    });

    const sortTable = (key: string) => {
      if (sortedColumn.value === key) {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
      } else {
        sortedColumn.value = key;
        sortOrder.value = "asc";
      }
      employees.value.sort(
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
      filteredEmployees.value.sort(
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
      employees,
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
      filteredEmployees,
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
