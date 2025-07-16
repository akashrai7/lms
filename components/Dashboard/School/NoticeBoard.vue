<template>
  <div class="card custom-shadow rounded-3 bg-white border mb-4">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30"
    >
      <h3 class="mb-0 fw-semibold">Notice Board</h3>
      <NuxtLink to="/notification" class="text-decoration-none">
        <span>View All</span>
        <i class="ri-arrow-right-s-line fs-18 position-relative top-1"></i>
      </NuxtLink>
    </div>

    <div
      class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom custom-padding-30 pt-0 pb-3 mb-3"
    >
      <div class="d-flex">
        <div class="flex-shrink-0">
          <div
            class="text-center bg-primary-div rounded-circle"
            style="width: 40px; height: 40px; line-height: 40px"
          >
            <img
              src="~/assets/images/notice-board-icon-1.svg"
              alt="notice-board-icon"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-medium mb-0">Science Fair Registration</h4>
          <p class="fs-12 mb-0">Registration for the annual Science Fair</p>
          <div class="d-flex align-items-center">
            <i class="ri-calendar-line text-primary"></i>
            <span class="fw-semibold fs-12 text-primary ms-1">
              October 28, 2024
            </span>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read text-decoration-none border"
        style="width: 43px; height: 43px; line-height: 42px"
      >
        <i class="ri-arrow-right-up-line fs-18"></i>
      </a>
    </div>
    <div
      class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom custom-padding-30 pt-0 pb-3 mb-3"
    >
      <div class="d-flex">
        <div class="flex-shrink-0">
          <div
            class="text-center bg-primary rounded-circle"
            style="width: 40px; height: 40px; line-height: 37px"
          >
            <img
              src="~/assets/images/notice-board-icon-2.svg"
              alt="notice-board-icon"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-medium mb-0">Parent-Teacher Meeting</h4>
          <p class="fs-12 mb-0">
            The Parent-Teacher meeting for Term 1 will take place
          </p>
          <div class="d-flex align-items-center">
            <i class="ri-calendar-line text-primary"></i>
            <span class="fw-semibold fs-12 text-primary ms-1">
              November 1, 2024
            </span>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read text-decoration-none border"
        style="width: 43px; height: 43px; line-height: 42px"
      >
        <i class="ri-arrow-right-up-line fs-18"></i>
      </a>
    </div>
    <div
      class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom custom-padding-30 pt-0 pb-3 mb-3"
    >
      <div class="d-flex">
        <div class="flex-shrink-0">
          <div
            class="text-center bg-danger rounded-circle"
            style="width: 40px; height: 40px; line-height: 37px"
          >
            <img
              src="~/assets/images/notice-board-icon-3.svg"
              alt="notice-board-icon"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-medium mb-0">Winter Sports Tryouts</h4>
          <p class="fs-12 mb-0">
            Tryouts for the winter sports teams will begin on
          </p>
          <div class="d-flex align-items-center">
            <i class="ri-calendar-line text-primary"></i>
            <span class="fw-semibold fs-12 text-primary ms-1">
              November 12, 2024
            </span>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read text-decoration-none border"
        style="width: 43px; height: 43px; line-height: 42px"
      >
        <i class="ri-arrow-right-up-line fs-18"></i>
      </a>
    </div>
    <div
      class="d-flex flex-wrap gap-2 justify-content-between align-items-center custom-padding-30 pt-0"
    >
      <div class="d-flex">
        <div class="flex-shrink-0">
          <div
            class="text-center bg-primary rounded-circle"
            style="width: 40px; height: 40px; line-height: 40px"
          >
            <img
              src="~/assets/images/notice-board-icon-4.svg"
              alt="notice-board-icon"
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h4 class="fs-14 fw-medium mb-0">School Holiday Reminder</h4>
          <p class="fs-12 mb-0">
            A reminder that school will be closed on November
          </p>
          <div class="d-flex align-items-center">
            <i class="ri-calendar-line text-primary"></i>
            <span class="fw-semibold fs-12 text-primary ms-1">
              November 28, 2024
            </span>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read text-decoration-none border"
        style="width: 43px; height: 43px; line-height: 42px"
      >
        <i class="ri-arrow-right-up-line fs-18"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NoticeBoard",
});
</script>
