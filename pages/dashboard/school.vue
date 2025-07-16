<template>
  <div class="main-content-container overflow-hidden">
    <DashboardSchoolOverview />
    <div class="row">
      <div class="col-xxl-8">
        <DashboardSchoolStats />
      </div>
      <div class="col-xxl-4">
        <DashboardSchoolUpcomingEvents />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-7">
        <DashboardSchoolAttendanceAnalyticsChart />
      </div>
      <div class="col-lg-4 col-md-5">
        <DashboardSchoolTeachers />
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-4 col-md-6">
        <DashboardSchoolStudentsOverviewChart />
      </div>
      <div class="col-xxl-4 col-md-6">
        <DashboardSchoolNewAdmissionsChart />
      </div>
      <div class="col-xxl-4 col-md-12">
        <DashboardSchoolNoticeBoard />
      </div>
    </div>

    <DashboardSchoolStudentsList />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "SchoolPage",
  setup() {
    onMounted(() => {
      document.body.classList.add("bg-white");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-white");
    });
  },
});
</script>

<style lang="scss">
body {
  &.bg-white {
    .sidebar-area {
      border-right: var(--bs-border-width) var(--bs-border-style)
        var(--bs-border-color) !important;
    }
    .header-area {
      padding: 12px 0 !important;
      &.sticky {
        padding-left: 25px !important;
        padding-right: 25px !important;
      }
      &.mb-4 {
        margin-bottom: 0.5rem !important;
      }
    }
    .footer-area {
      border: var(--bs-border-width) var(--bs-border-style)
        var(--bs-border-color) !important;
    }
  }
}
</style>
