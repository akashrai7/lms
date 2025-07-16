<template>
  <div
    class="card custom-shadow for-dark-rounded-bg rounded-3 border mb-4 bg-body-bg"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3"
      style="padding: 14.5px 25px"
    >
      <h3 class="mb-0 fs-16 fw-normal text-secondary">Customer Segmentation</h3>

      <div class="dropdown action-opt right-for-rtl" style="right: -8px">
        <button
          class="btn bg-transparent p-0 text-end"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i data-feather="more-vertical" style="stroke: #64748b"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
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
    <div class="card-body bg-white p-4 rounded-3 border-top">
      <div style="margin: 0 0 0 0">
        <apexchart
          v-if="isClient"
          type="donut"
          height="213"
          :options="customerSegmentation"
          :series="segmentation"
        ></apexchart>
      </div>

      <div class="last-child-none mt-4">
        <div class="d-flex align-items-center child mb-4">
          <div class="flex-shrink-0">
            <div
              class="rounded-2 text-center"
              style="
                background-color: #daebff;
                width: 44px;
                height: 44px;
                line-height: 44px;
              "
            >
              <img
                src="@/assets/images/new-customers-icon.svg"
                alt="new-customers-icon"
              />
            </div>
          </div>
          <div class="flex-grow-1 ms-10">
            <span>New Customers</span>
            <h3 class="fs-20 fw-medium mb-0">
              1,200
              <span class="fs-12 fw-normal text-body">
                <span class="fw-medium">+40%</span>
                of total transactions
              </span>
            </h3>
          </div>
        </div>
        <div class="d-flex align-items-center child mb-4">
          <div class="flex-shrink-0">
            <div
              class="rounded-2 text-center"
              style="
                background-color: #f3e8ff;
                width: 44px;
                height: 44px;
                line-height: 44px;
              "
            >
              <img
                src="@/assets/images/returning-customers-icon.svg"
                alt="returning-customers-icon"
              />
            </div>
          </div>
          <div class="flex-grow-1 ms-10">
            <span>Returning Customers</span>
            <h3 class="fs-20 fw-medium mb-0">
              1,800
              <span class="fs-12 fw-normal text-body">
                <span class="fw-medium">+60%</span>
                of total transactions
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "CustomerSegmentation",
  setup() {
    const isClient = ref(false);
    const segmentation = ref([1200, 1800]);
    const customerSegmentation = ref({
      chart: {
        height: 213,
        type: "donut",
      },
      labels: ["New Customers", "Returning Customers"],
      colors: ["#3584FC", "#AD63F6"],
      stroke: {
        width: 1,
        show: true,
        colors: ["#ffffff"],
      },
      legend: {
        show: false,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "center",
        fontFamily: "Inter",
        fontWeight: 400,
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          width: 9,
          height: 9,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "80%",
            labels: {
              show: true,
              name: {
                color: "#64748B",
              },
              value: {
                show: true,
                color: "#64748B",
                fontSize: "24px",
                fontWeight: "600",
                offsetY: -0,
              },
              total: {
                show: true,
                color: "#64748B",
                fontSize: "14px",
                fontWeight: "400",
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      segmentation,
      customerSegmentation,
    };
  },
});
</script>
