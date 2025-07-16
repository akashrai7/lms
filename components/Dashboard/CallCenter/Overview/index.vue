<template>
  <div class="card custom-shadow rounded-3 bg-white border mb-4">
    <div class="custom-padding-30">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 pb-4"
      >
        <h3 class="mb-0 fw-semibold">Overview</h3>
        <div class="dropdown select-dropdown">
          <button
            class="dropdown-toggle bg-transparent border text-body rounded-2"
            style="padding-right: 35px"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            This Year
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

      <div id="nav-tab" class="call-overview-tabs" role="tablist">
        <div class="row justify-content-center">
          <div class="col-md-4 col-sm-6">
            <div
              class="card bg-primary bg-opacity-10 border-0 rounded-3 p-4 mb-4 calls-card active"
              id="nav-total-calls-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-total-calls"
              type="button"
              role="tab"
              aria-controls="nav-total-calls"
              aria-selected="true"
            >
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1 me-3">
                  <span class="text-body d-block mb-1">Total Calls</span>
                  <h3 class="fs-24 fw-semibold text-secondary">26,435</h3>
                </div>

                <div class="flex-shrink-0">
                  <img
                    src="~/assets/images/total-calls.svg"
                    alt="total-calls"
                  />
                </div>
              </div>
              <span
                class="d-flex align-items-center align-items-center text-body"
              >
                <i
                  class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-success"
                >
                  trending_up
                </i>
                <span class="fw-medium me-1 text-secondary">+15%</span>
                last year
              </span>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="card bg-primary-divs border-0 rounded-3 p-4 mb-4 calls-card"
              id="nav-answered-calls-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-answered-calls"
              type="button"
              role="tab"
              aria-controls="nav-answered-calls"
              aria-selected="false"
              style="background-color: #faf5ff"
            >
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1 me-3">
                  <span class="text-body d-block mb-1">Answered Calls</span>
                  <h3 class="fs-24 fw-semibold text-secondary">18,520</h3>
                </div>

                <div class="flex-shrink-0">
                  <img
                    src="~/assets/images/answered-calls.svg"
                    alt="answered-calls"
                  />
                </div>
              </div>
              <span
                class="d-flex align-items-center align-items-center text-body"
              >
                <i
                  class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-success-60"
                >
                  trending_up
                </i>
                <span class="fw-medium me-1 text-secondary">+15%</span>
                last year
              </span>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div
              class="card bg-dangers border-0 rounded-3 p-4 mb-4 calls-card"
              id="nav-missed-calls-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-missed-calls"
              type="button"
              role="tab"
              aria-controls="nav-missed-calls"
              aria-selected="false"
              style="background-color: #fff5ed"
            >
              <div class="d-flex align-items-center mb-3">
                <div class="flex-grow-1 me-3">
                  <span class="text-body d-block mb-1">Missed Calls</span>
                  <h3 class="fs-24 fw-semibold text-secondary">3,735</h3>
                </div>

                <div class="flex-shrink-0">
                  <img
                    src="~/assets/images/missed-calls.svg"
                    alt="missed-calls"
                  />
                </div>
              </div>
              <span
                class="d-flex align-items-center align-items-center text-body"
              >
                <i
                  class="material-symbols-outlined fs-18 pe-2 position-relative top-1 text-danger-50"
                >
                  trending_down
                </i>
                <span class="fw-medium me-1 text-secondary">-25%</span>
                last year
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-total-calls"
          role="tabpanel"
          aria-labelledby="nav-total-calls-tab"
          tabindex="0"
        >
          <div style="margin: -24px -10px -26px -18px">
            <DashboardCallCenterOverviewTotalCallsChart />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-answered-calls"
          role="tabpanel"
          aria-labelledby="nav-answered-calls-tab"
          tabindex="0"
        >
          <div style="margin: -24px -10px -26px -18px">
            <DashboardCallCenterOverviewAnsweredCallsChart />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-missed-calls"
          role="tabpanel"
          aria-labelledby="nav-missed-calls-tab"
          tabindex="0"
        >
          <div style="margin: -24px -10px -26px -18px">
            <DashboardCallCenterOverviewMissedCallsChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallCenterOverview",
});
</script>
