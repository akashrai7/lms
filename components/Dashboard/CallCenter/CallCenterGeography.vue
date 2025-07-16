<template>
  <div class="card custom-shadow rounded-3 bg-white border mb-4">
    <div class="custom-padding-30">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0 fw-semibold">Call Center Geography</h3>

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
            Last Year
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
      <div class="text-center" style="margin: 40px 0">
        <img src="~/assets/images/map.svg" alt="map" style="height: 187px" />
      </div>
      <ul class="ps-0 mb-0 list-unstyled sales_by_locations mt-4">
        <li class="d-flex align-items-center pe-0">
          <div class="flex-shrink-0">
            <img
              src="~/assets/images/usa.svg"
              class="wh-30 rounded-circle"
              alt="usa"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <div class="d-flex justify-content-between position-relative">
              <span class="fw-medium d-block mb-2">United States</span>
              <span class="count fw-medium text-body">90%</span>
              <span
                class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
                >1,200 calls</span
              >
            </div>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-success-60" style="width: 90%"></div>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center pe-0">
          <div class="flex-shrink-0">
            <img
              src="~/assets/images/canada.svg"
              class="wh-30 rounded-circle"
              alt="canada"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <div class="d-flex justify-content-between position-relative">
              <span class="fw-medium d-block mb-2">Canada</span>
              <span class="count fw-medium text-body">88%</span>
              <span
                class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
                >980 calls</span
              >
            </div>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="88"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-primary" style="width: 88%"></div>
            </div>
          </div>
        </li>
        <li class="d-flex align-items-center pe-0">
          <div class="flex-shrink-0">
            <img
              src="~/assets/images/brazil.svg"
              class="wh-30 rounded-circle"
              alt="brazil"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <div class="d-flex justify-content-between position-relative">
              <span class="fw-medium d-block mb-2">Brazil</span>
              <span class="count fw-medium text-body">65%</span>
              <span
                class="position-absolute top-50 start-50 translate-middle pb-2 fw-medium"
                >850 calls</span
              >
            </div>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-danger" style="width: 65%"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallCenterGeography",
});
</script>
