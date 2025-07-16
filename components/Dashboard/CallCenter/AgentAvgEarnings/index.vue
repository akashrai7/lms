<template>
  <div class="card custom-shadow rounded-3 bg-white border mb-4">
    <div class="custom-padding-30">
      <div
        class="d-flex justify-content-between align-items-center gap-1 pb-2 mb-4"
      >
        <h3 class="mb-0 fw-semibold">Agent Avg. Earnings</h3>

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

      <ul
        class="nav nav-tabs justify-content-between ethereum-rate-tabs"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active fw-normal"
            style="font-size: 14px"
            id="ethereum1-tab"
            data-bs-toggle="tab"
            data-bs-target="#ethereum1-tab-pane"
            type="button"
            role="tab"
            aria-controls="ethereum1-tab-pane"
            aria-selected="true"
          >
            1d
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fw-normal"
            style="font-size: 14px"
            id="ethereum2-tab"
            data-bs-toggle="tab"
            data-bs-target="#ethereum2-tab-pane"
            type="button"
            role="tab"
            aria-controls="ethereum2-tab-pane"
            aria-selected="false"
          >
            15d
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fw-normal"
            style="font-size: 14px"
            id="ethereum3-tab"
            data-bs-toggle="tab"
            data-bs-target="#ethereum3-tab-pane"
            type="button"
            role="tab"
            aria-controls="ethereum3-tab-pane"
            aria-selected="false"
          >
            1m
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fw-normal"
            style="font-size: 14px"
            id="ethereum4-tab"
            data-bs-toggle="tab"
            data-bs-target="#ethereum4-tab-pane"
            type="button"
            role="tab"
            aria-controls="ethereum4-tab-pane"
            aria-selected="false"
          >
            6m
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link fw-normal"
            style="font-size: 14px"
            id="ethereum5-tab"
            data-bs-toggle="tab"
            data-bs-target="#ethereum5-tab-pane"
            type="button"
            role="tab"
            aria-controls="ethereum5-tab-pane"
            aria-selected="false"
          >
            1y
          </button>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="ethereum1-tab-pane"
          role="tabpanel"
          aria-labelledby="ethereum1-tab"
          tabindex="0"
        >
          <div style="margin: -30px -5px 0 -21px">
            <DashboardCallCenterAgentAvgEarningsChart />
          </div>
          <div
            class="d-flex align-items-center position-relative z-1 justify-content-between"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div
                  class="bg-body-bg border text-center rounded-2"
                  style="width: 48px; height: 48px; line-height: 48px"
                >
                  <img
                    src="~/assets/images/agent-avg-earnings.svg"
                    alt="agent-avg-earnings"
                  />
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-28 fw-semibold text-secondary mb-0">$2,534</h3>
                <span class="text-body d-block">Last month earning</span>
              </div>
            </div>

            <span
              class="d-flex align-items-center align-items-center text-body"
            >
              <i class="material-symbols-outlined fs-18 pe-2 text-success-60">
                trending_up
              </i>
              <span class="fw-medium me-1 text-secondary">+8.7%</span>
            </span>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="ethereum2-tab-pane"
          role="tabpanel"
          aria-labelledby="ethereum2-tab"
          tabindex="0"
        >
          <div style="margin: -30px -5px 0 -21px">
            <DashboardCallCenterAgentAvgEarningsTwoChart />
          </div>
          <div
            class="d-flex align-items-center position-relative z-1 justify-content-between"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div
                  class="bg-body-bg border text-center rounded-2"
                  style="width: 48px; height: 48px; line-height: 48px"
                >
                  <img
                    src="~/assets/images/agent-avg-earnings.svg"
                    alt="agent-avg-earnings"
                  />
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-28 fw-semibold text-secondary mb-0">$3,456</h3>
                <span class="text-body d-block">Last month earning</span>
              </div>
            </div>

            <span
              class="d-flex align-items-center align-items-center text-body"
            >
              <i class="material-symbols-outlined fs-18 pe-2 text-success">
                trending_up
              </i>
              <span class="fw-medium me-1 text-secondary">+8.7%</span>
            </span>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="ethereum3-tab-pane"
          role="tabpanel"
          aria-labelledby="ethereum3-tab"
          tabindex="0"
        >
          <div style="margin: -30px -5px 0 -21px">
            <DashboardCallCenterAgentAvgEarningsThreeChart />
          </div>
          <div
            class="d-flex align-items-center position-relative z-1 justify-content-between"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div
                  class="bg-body-bg border text-center rounded-2"
                  style="width: 48px; height: 48px; line-height: 48px"
                >
                  <img
                    src="~/assets/images/agent-avg-earnings.svg"
                    alt="agent-avg-earnings"
                  />
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-28 fw-semibold text-secondary mb-0">$1,753</h3>
                <span class="text-body d-block">Last month earning</span>
              </div>
            </div>

            <span
              class="d-flex align-items-center align-items-center text-body"
            >
              <i class="material-symbols-outlined fs-18 pe-2 text-success">
                trending_up
              </i>
              <span class="fw-medium me-1 text-secondary">+4.7%</span>
            </span>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="ethereum4-tab-pane"
          role="tabpanel"
          aria-labelledby="ethereum4-tab"
          tabindex="0"
        >
          <div style="margin: -30px -5px 0 -21px">
            <DashboardCallCenterAgentAvgEarningsFourChart />
          </div>
          <div
            class="d-flex align-items-center position-relative z-1 justify-content-between"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div
                  class="bg-body-bg border text-center rounded-2"
                  style="width: 48px; height: 48px; line-height: 48px"
                >
                  <img
                    src="~/assets/images/agent-avg-earnings.svg"
                    alt="agent-avg-earnings"
                  />
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-28 fw-semibold text-secondary mb-0">$6,753</h3>
                <span class="text-body d-block">Last month earning</span>
              </div>
            </div>

            <span
              class="d-flex align-items-center align-items-center text-body"
            >
              <i class="material-symbols-outlined fs-18 pe-2 text-success">
                trending_up
              </i>
              <span class="fw-medium me-1 text-secondary">+6.7%</span>
            </span>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="ethereum5-tab-pane"
          role="tabpanel"
          aria-labelledby="ethereum5-tab"
          tabindex="0"
        >
          <div style="margin: -30px -5px 0 -21px">
            <DashboardCallCenterAgentAvgEarningsFiveChart />
          </div>
          <div
            class="d-flex align-items-center position-relative z-1 justify-content-between"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div
                  class="bg-body-bg border text-center rounded-2"
                  style="width: 48px; height: 48px; line-height: 48px"
                >
                  <img
                    src="~/assets/images/agent-avg-earnings.svg"
                    alt="agent-avg-earnings"
                  />
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h3 class="fs-28 fw-semibold text-secondary mb-0">$5,325</h3>
                <span class="text-body d-block">Last month earning</span>
              </div>
            </div>

            <span
              class="d-flex align-items-center align-items-center text-body"
            >
              <i class="material-symbols-outlined fs-18 pe-2 text-success">
                trending_up
              </i>
              <span class="fw-medium me-1 text-secondary">+3.7%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgentAvgEarnings",
});
</script>
