<template>
  <div
    class="card custom-shadow rounded-3 bg-white border mb-4 custom-padding-30 pt-0 px-0"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 border-bottom custom-padding-30"
    >
      <h3 class="mb-0 fw-semibold">Teachers</h3>
      <NuxtLink to="/lms/instructors" class="text-decoration-none">
        <span>View All</span>
        <i class="ri-arrow-right-s-line fs-18 position-relative top-1"></i>
      </NuxtLink>
    </div>

    <div class="default-table-area style-three teachers teachers-table">
      <div class="table-responsive">
        <table class="table align-middle border-0">
          <thead class="border-bottom">
            <tr>
              <th scope="col" class="bg-transparent py-1 fw-normal fs-14">
                Name
              </th>
              <th
                scope="col"
                class="bg-transparent py-1 fw-normal fs-14 text-end"
              >
                Subject
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/user-170.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">Sarah W.</h4>
                    <span class="fs-12 text-body">sarah@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end">Mathematics</td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/user-171.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">Michael T.</h4>
                    <span class="fs-12 text-body">michael@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end">English</td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/user-172.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">Emily J.</h4>
                    <span class="fs-12 text-body">emily@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end">History</td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/user-173.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">David A.</h4>
                    <span class="fs-12 text-body">david@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end">Art</td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="~/assets/images/user-174.png"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-medium mb-0">Jessica M.</h4>
                    <span class="fs-12 text-body">jessica@trezo.com</span>
                  </div>
                </div>
              </td>
              <td class="fw-medium text-end">Music</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Teachers",
});
</script>
