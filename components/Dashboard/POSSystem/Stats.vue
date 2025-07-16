<template>
  <div class="row">
    <div class="col-xxl-3 col-sm-6">
      <div
        class="card custom-shadow for-dark-rounded-bg rounded-3 border mb-4"
        style="
          background: linear-gradient(102deg, #4936f5 3.78%, #757dff 70.84%);
        "
      >
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
          style="padding: 14.5px 25px"
        >
          <h3 class="mb-0 fs-16 fw-normal text-white">Total Sales</h3>

          <div class="dropdown action-opt right-for-rtl" style="right: -8px">
            <button
              class="btn bg-transparent p-0 text-end"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" style="stroke: #fff"></i>
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
            </ul>
          </div>
        </div>
        <div class="card-body bg-white p-4 rounded-2">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="fs-24 fw-semibold text-secondary mb-0">$75,000</h3>
            <div
              class="text-center rounded-circle"
              style="
                background-color: #ecf0ff;
                width: 51px;
                height: 51px;
                line-height: 51px;
              "
            >
              <img
                src="@/assets/images/total-sales-icon.svg"
                alt="total-sales-icon"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-20 text-success-60 me-2">
              trending_up
            </span>
            <span><span class="fw-semibold">+15%</span> from last month</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-sm-6">
      <div
        class="card custom-shadow for-dark-rounded-bg rounded-3 border mb-4"
        style="
          background: linear-gradient(103deg, #9135e8 9.27%, #bf85fb 83.62%);
        "
      >
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
          style="padding: 14.5px 25px"
        >
          <h3 class="mb-0 fs-16 fw-normal text-white">Total Transactions</h3>

          <div class="dropdown action-opt right-for-rtl" style="right: -8px">
            <button
              class="btn bg-transparent p-0 text-end"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" style="stroke: #fff"></i>
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
            </ul>
          </div>
        </div>
        <div class="card-body bg-white p-4 rounded-2">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="fs-24 fw-semibold text-secondary mb-0">1200</h3>
            <div
              class="text-center rounded-circle"
              style="
                background-color: #f3e8ff;
                width: 51px;
                height: 51px;
                line-height: 51px;
              "
            >
              <img
                src="@/assets/images/total-transactions-icon.svg"
                alt="total-transactions-icon"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-20 text-success-60 me-2">
              trending_up
            </span>
            <span><span class="fw-semibold">+10%</span> from last month</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-sm-6">
      <div
        class="card custom-shadow for-dark-rounded-bg rounded-3 border mb-4"
        style="
          background: linear-gradient(104deg, #25b003 7.79%, #37d80a 83.18%);
        "
      >
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
          style="padding: 14.5px 25px"
        >
          <h3 class="mb-0 fs-16 fw-normal text-white">Average Order Value</h3>

          <div class="dropdown action-opt right-for-rtl" style="right: -8px">
            <button
              class="btn bg-transparent p-0 text-end"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" style="stroke: #fff"></i>
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
            </ul>
          </div>
        </div>
        <div class="card-body bg-white p-4 rounded-2">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="fs-24 fw-semibold text-secondary mb-0">$40</h3>
            <div
              class="text-center rounded-circle"
              style="
                background-color: #d8ffc8;
                width: 51px;
                height: 51px;
                line-height: 51px;
              "
            >
              <img
                src="@/assets/images/average-order-value-icon.svg"
                alt="average-order-value-icon"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-20 text-danger-50 me-2">
              trending_down
            </span>
            <span><span class="fw-semibold">-5%</span> from last month</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-sm-6">
      <div
        class="card custom-shadow for-dark-rounded-bg rounded-3 border mb-4"
        style="
          background: linear-gradient(106deg, #ee3e08 9.72%, #fd5812 79.69%);
        "
      >
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
          style="padding: 14.5px 25px"
        >
          <h3 class="mb-0 fs-16 fw-normal text-white">Total Discount</h3>

          <div class="dropdown action-opt right-for-rtl" style="right: -8px">
            <button
              class="btn bg-transparent p-0 text-end"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" style="stroke: #fff"></i>
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
            </ul>
          </div>
        </div>
        <div class="card-body bg-white p-4 rounded-2">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="fs-24 fw-semibold text-secondary mb-0">$5,200</h3>
            <div
              class="text-center rounded-circle"
              style="
                background-color: #ffe8d4;
                width: 51px;
                height: 51px;
                line-height: 51px;
              "
            >
              <img
                src="@/assets/images/total-discount-icon.svg"
                alt="total-discount-icon"
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-20 text-success-60 me-2">
              trending_up
            </span>
            <span><span class="fw-semibold">+8%</span> from last month</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Stats",

  setup() {
    onMounted(() => {
      feather.replace();
    });

    return {};
  },
});
</script>
