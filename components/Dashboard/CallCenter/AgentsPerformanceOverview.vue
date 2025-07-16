<template>
  <div class="card custom-shadow rounded-3 bg-white border mb-4">
    <div class="custom-padding-30">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 gap-sm-3 pb-4 mb-2"
      >
        <h3 class="mb-0 fw-semibold">Agents Performance Overview</h3>
        <div
          class="dropdown select-dropdown without-border position-relative"
          style="right: -5px"
        >
          <button
            class="dropdown-toggle bg-transparent border text-body rounded-2"
            style="padding-right: 20px"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Last Month
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border-0 box-shadow py-3"
          >
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                Today
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                Last Week
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                Last Month
              </button>
            </li>
            <li>
              <button class="dropdown-item text-secondary py-2 px-3">
                Last Year
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="row mb-4 pb-2">
        <div class="col-lg-12">
          <span class="d-block mb-3 fw-normal">Top Performing Agent</span>
        </div>
        <div class="col-sm-4">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 position-relative z-1">
              <img
                src="~/assets/images/user-161.png"
                class="rounded-2"
                alt="user"
              />
              <span
                class="bg-success rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                style="width: 8px; height: 8px"
              ></span>
            </div>
            <div class="flex-grow-1 ms-10">
              <h4 class="fs-14 fw-semibold mb-0">John Smith</h4>
              <span class="text-secondary">380 Calls</span>
            </div>
          </div>
        </div>
        <div class="col-sm-8 mt-2 mt-sm-0">
          <div class="ms-sm-4 ps-sm-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span>Customer Satisfaction (CSAT)</span>
              <span>92%</span>
            </div>
            <div
              class="progress bg-border-color"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="92"
              aria-valuemin="0"
              aria-valuemax="100"
              style="height: 6px"
            >
              <div
                class="progress-bar bg-success-60 rounded-pill"
                style="width: 92%; height: 6px"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="default-table-area style-three agents-performance-overview">
        <div class="table-responsive">
          <table class="table align-middle border-0">
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 position-relative z-1">
                      <img
                        src="~/assets/images/user-162.png"
                        class="rounded-2"
                        alt="user"
                      />
                      <span
                        class="bg-success rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                        style="width: 8px; height: 8px"
                      ></span>
                    </div>
                    <div class="flex-grow-1 ms-10">
                      <h4 class="fs-14 fw-medium mb-0">Sarah Davis</h4>
                      <span class="text-secondary">65 Calls</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-body">Avg. Call Duration</span>
                  <span class="fw-medium d-block">4 mins 10 secs</span>
                </td>
                <td>
                  <span class="text-body">FCR</span>
                  <span class="fw-medium d-block">85%</span>
                </td>
                <td>
                  <span class="text-body">CSAT</span>
                  <span class="fw-medium d-block">90%</span>
                </td>
              </tr>
              <tr>
                <td class="bg-white" style="padding: 5px !important"></td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 position-relative z-1">
                      <img
                        src="~/assets/images/user-163.png"
                        class="rounded-2"
                        alt="user"
                      />
                      <span
                        class="bg-danger rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                        style="width: 8px; height: 8px"
                      ></span>
                    </div>
                    <div class="flex-grow-1 ms-10">
                      <h4 class="fs-14 fw-medium mb-0">Michael Brown</h4>
                      <span class="text-secondary">58 Calls</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-body">Avg. Call Duration</span>
                  <span class="fw-medium d-block">5 mins 20 secs</span>
                </td>
                <td>
                  <span class="text-body">FCR</span>
                  <span class="fw-medium d-block">82%</span>
                </td>
                <td>
                  <span class="text-body">CSAT</span>
                  <span class="fw-medium d-block">87%</span>
                </td>
              </tr>
              <tr>
                <td class="bg-white" style="padding: 5px !important"></td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 position-relative z-1">
                      <img
                        src="~/assets/images/user-164.png"
                        class="rounded-2"
                        alt="user"
                      />
                      <span
                        class="bg-success rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                        style="width: 8px; height: 8px"
                      ></span>
                    </div>
                    <div class="flex-grow-1 ms-10">
                      <h4 class="fs-14 fw-medium mb-0">Emily Johnson</h4>
                      <span class="text-secondary">72 Calls</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-body">Avg. Call Duration</span>
                  <span class="fw-medium d-block">4 mins 30 secs</span>
                </td>
                <td>
                  <span class="text-body">FCR</span>
                  <span class="fw-medium d-block">88%</span>
                </td>
                <td>
                  <span class="text-body">CSAT</span>
                  <span class="fw-medium d-block">90%</span>
                </td>
              </tr>
              <tr>
                <td class="bg-white" style="padding: 5px !important"></td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 position-relative z-1">
                      <img
                        src="~/assets/images/user-165.png"
                        class="rounded-2"
                        alt="user"
                      />
                      <span
                        class="bg-danger rounded-circle d-inline-block position-absolute top-50 start-100 translate-middle"
                        style="width: 8px; height: 8px"
                      ></span>
                    </div>
                    <div class="flex-grow-1 ms-10">
                      <h4 class="fs-14 fw-medium mb-0">David Lee</h4>
                      <span class="text-secondary">53 Calls</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-body">Avg. Call Duration</span>
                  <span class="fw-medium d-block">3 mins 50 secs</span>
                </td>
                <td>
                  <span class="text-body">FCR</span>
                  <span class="fw-medium d-block">80%</span>
                </td>
                <td>
                  <span class="text-body">CSAT</span>
                  <span class="fw-medium d-block">85%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgentsPerformanceOverview",
});
</script>
