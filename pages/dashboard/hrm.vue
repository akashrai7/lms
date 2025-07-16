<template>
  <div class="main-content-container overflow-hidden">
    <DashboardHRMWelcomeBack />
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <DashboardHRMTotalEmployees />
      </div>
      <div class="col-lg-4 col-md-6">
        <DashboardHRMResignedEmployees />
      </div>
      <div class="col-lg-4 col-md-12">
        <DashboardHRMNewEmployees />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <DashboardHRMEmployeeAttendanceTrendsChart />
      </div>
      <div class="col-lg-4">
        <DashboardHRMEmployeeWorkFormatChart />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-4">
        <DashboardHRMEmployeeSalaryChart />
      </div>
      <div class="col-xxl-8">
        <DashboardHRMEmployeeLeaveRequest />
      </div>
    </div>

    <DashboardHRMEmployeeList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HRMPage",
});
</script>
