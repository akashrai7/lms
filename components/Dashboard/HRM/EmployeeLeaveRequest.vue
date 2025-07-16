<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom pb-4"
      >
        <h3 class="mb-0 fw-semibold">Employee Leave Request</h3>
        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle bg-transparent border text-body rounded-2"
            style="padding-right: 35px"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            This Month
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                This Day
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                This Week
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                This Month
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                This Year
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="default-table-area style-three employee-leave-request">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <thead class="border-bottom">
              <tr>
                <th scope="col" class="bg-transparent fw-normal">Employee</th>
                <th scope="col" class="bg-transparent fw-normal">Leave Type</th>
                <th scope="col" class="bg-transparent fw-normal">Days</th>
                <th scope="col" class="bg-transparent fw-normal">Status</th>
                <th scope="col" class="bg-transparent fw-normal">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(leave, index) in leaveRequests" :key="index">
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        :src="leave.image"
                        class="rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <h4 class="fs-14 fw-medium mb-0">{{ leave.name }}</h4>
                      <span class="fs-12 text-body">{{
                        leave.department
                      }}</span>
                    </div>
                  </div>
                </td>
                <td class="fs-14 fw-medium">{{ leave.leaveType }}</td>
                <td class="fs-14 fw-medium">{{ leave.days }}</td>
                <td>
                  <span
                    :class="['badge p-2 fs-12 fw-normal', leave.statusClass]"
                  >
                    {{ leave.status }}
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
        </div>

        <CommonPagination class="custom-padding-30 border-0" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "~/assets/images/user-151.png";
import image2 from "~/assets/images/user-152.png";
import image3 from "~/assets/images/user-153.png";
import image4 from "~/assets/images/user-154.png";
import image5 from "~/assets/images/user-155.png";

export default defineComponent({
  name: "EmployeeLeaveRequest",
  setup() {
    const leaveRequests = ref([
      {
        image: image1,
        name: "John Doe",
        department: "Marketing",
        leaveType: "Vacation",
        days: 3,
        status: "Approved",
        statusClass: "bg-success-80 text-success-50",
      },
      {
        image: image2,
        name: "Jane Smith",
        department: "HR",
        leaveType: "Sick Leave",
        days: 2,
        status: "Pending",
        statusClass: "bg-primary-div-60 text-primary-div-50",
      },
      {
        image: image3,
        name: "Alex Johnson",
        department: "Developer",
        leaveType: "Maternity Leave",
        days: 4,
        status: "Rejected",
        statusClass: "bg-danger-70 text-danger-60",
      },
      {
        image: image4,
        name: "Emily Davis",
        department: "UX Designer",
        leaveType: "Vacation",
        days: 2,
        status: "Approved",
        statusClass: "bg-success-80 text-success-50",
      },
      {
        image: image5,
        name: "Michael Brown",
        department: "Finance",
        leaveType: "Personal Leave",
        days: 1,
        status: "Pending",
        statusClass: "bg-primary-div-60 text-primary-div-50",
      },
    ]);

    return { leaveRequests };
  },
});
</script>

<style lang="scss" scoped>
.custom-padding-30 {
  padding: 30px !important;
}
</style>
