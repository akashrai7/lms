<template>
  <div class="card border-0 rounded-3 bg-white mb-4">
    <div class="custom-padding-30">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        style="padding-bottom: 30px"
      >
        <h3 class="mb-0 fw-semibold">Employee Salary</h3>
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

      <div class="d-flex align-items-center mb-4 mb-md-5">
        <div class="flex-shrink-0">
          <div
            class="bg-primary-50 bg-opacity-10 text-center rounded-1"
            style="width: 42px; height: 42px; line-height: 42px"
          >
            <img
              src="~/assets/images/icon-total-payroll.svg"
              alt="icon-total-payroll"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <span class="d-block mb-0">Total Payroll</span>
          <h3 class="mb-0 fs-20 fw-semibold">$450,000</h3>
        </div>
      </div>

      <div style="margin: -30px -10px -26px -12px">
        <apexchart
          v-if="isClient"
          type="bar"
          height="280"
          :options="employeeSalary"
          :series="salary"
        ></apexchart>
      </div>

      <div class="d-flex flex-wrap gap-2 gap-sm-0 mt-md-5 mt-3">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <div
              class="bg-success-60 bg-opacity-10 text-center rounded-1"
              style="width: 42px; height: 42px; line-height: 37px"
            >
              <img
                src="~/assets/images/icon-salary-paid.svg"
                alt="icon-salary-paid"
              />
            </div>
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="d-block mb-1">Salary Paid</span>
            <h3 class="fs-20 fw-semibold">$395k</h3>
          </div>
        </div>
        <div class="d-flex align-items-center ms-sm-3">
          <div class="flex-shrink-0">
            <div
              class="bg-danger-50 bg-opacity-10 text-center rounded-1"
              style="width: 42px; height: 42px; line-height: 42px"
            >
              <img
                src="~/assets/images/icon-salary-pending.svg"
                alt="icon-salary-paid"
              />
            </div>
          </div>
          <div class="flex-grow-1 ms-3">
            <span class="d-block mb-1">Salary Pending</span>
            <h3 class="fs-20 fw-semibold">$60k</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "EmployeeSalaryChart",
  setup() {
    const isClient = ref(false);

    const salary = ref([
      {
        name: "Employee Salary",
        data: [70, 60, 80, 100, 70, 40, 80],
      },
    ]);

    const employeeSalary = ref({
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: false,
        },
      },
      colors: ["#E9D5FF"],
      plotOptions: {
        bar: {
          columnWidth: "52%",
          borderRadius: 4,
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false,
        tickAmount: 4,
        labels: {
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      tooltip: {
        y: {
          formatter: (val: string) => {
            return "$" + val + "K";
          },
        },
      },
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
        horizontalAlign: "left",
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
          radius: 2,
          shape: "diamond",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.1,
          },
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
      feather.replace();
    });

    return {
      isClient,
      salary,
      employeeSalary,
    };
  },
});
</script>

<style lang="scss" scoped>
.bg-opacity-10 {
  --bs-bg-opacity: 0.1 !important;
}
</style>
