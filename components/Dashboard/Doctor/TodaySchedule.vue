<template>
  <div
    class="todays-schedule-card card mb-4 border-0 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">Today's Schedule</h5>
      </div>

      <div class="trezo-card-content">
        <div class="calendar">
          <div class="header d-flex align-items-center justify-content-between">
            <button
              @click="previousMonth"
              class="p-0 border-0 d-flex align-items-center justify-content-center rounded-circle transition"
            >
              <i class="material-symbols-outlined">chevron_left</i>
            </button>
            <span class="fw-medium text-black">
              {{ monthNames[currentMonth] }} {{ currentYear }}
            </span>
            <button
              @click="nextMonth"
              class="p-0 border-0 d-flex align-items-center justify-content-center rounded-circle transition"
            >
              <i class="material-symbols-outlined">chevron_right</i>
            </button>
          </div>
          <div class="weekdays text-center">
            <div v-for="day in weekdays" :key="day">{{ day }}</div>
          </div>
          <div class="days text-center">
            <div
              v-for="(day, index) in daysInMonth"
              :key="index"
              class="card border-0 mx-auto text-black fw-medium border-radius"
              :class="{ 'current-day': isToday(day) }"
            >
              <span v-if="day !== null">{{ day }}</span>
              <span v-else class="blank-day">&nbsp;</span>
            </div>
          </div>
        </div>

        <div class="events-list position-relative scrollbar">
          <div
            v-for="(event, index) in events"
            :key="index"
            class="event-item card border-0 border-radius position-relative z-1"
          >
            <span class="d-block text-black fw-semibold">
              {{ event.time }}
            </span>
            <p>{{ event.description }}</p>
            <div class="user d-flex align-items-center">
              <img
                :src="event.user.image"
                alt="user-image"
                class="rounded-circle"
              />
              <span class="d-block fw-medium">{{ event.user.name }}</span>
            </div>
            <div class="info d-flex align-items-center justify-content-between">
              <button type="button" class="btn btn-primary">
                View Details
              </button>
              <button
                type="button"
                class="notification-btn p-0 border-0 rounded-circle"
              >
                <i class="ri-notification-2-line"></i>
              </button>
            </div>
            <div class="shape position-absolute z-n1 end-0 top-0">
              <img src="@/assets/images/cut-circle.png" alt="cut-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import image1 from "@/assets/images/users/user1.jpg";
import image2 from "@/assets/images/users/user2.jpg";
import image3 from "@/assets/images/users/user3.jpg";

export default defineComponent({
  name: "TodaySchedule",
  setup() {
    const currentMonth = ref<number>(0);
    const currentYear = ref<number>(0);
    const currentDay = ref<number>(0);
    const today = ref<{ year: number; month: number; day: number }>({
      year: 0,
      month: 0,
      day: 0,
    });
    const weekdays = ref<string[]>([
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ]);
    const monthNames = ref<string[]>([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]);
    const daysInMonth = ref<(number | null)[]>([]);

    // Events data
    const events = ref([
      {
        time: "10:00 AM",
        description: "Appointment With Cardiac Patient",
        user: {
          name: "Jonathon Ronan",
          image: image1,
        },
      },
      {
        time: "12:00 PM",
        description: "Major Cardiac Surgery of the patient",
        user: {
          name: "Walter White",
          image: image2,
        },
      },
      {
        time: "02:00 PM",
        description: "Board Meeting With",
        user: {
          name: "Jessy Pinkman",
          image: image3,
        },
      },
      {
        time: "10:00 AM",
        description: "Appointment With Cardiac Patient",
        user: {
          name: "Jonathon Ronan",
          image: image1,
        },
      },
      {
        time: "12:00 PM",
        description: "Major Cardiac Surgery of the patient",
        user: {
          name: "Walter White",
          image: image2,
        },
      },
      {
        time: "02:00 PM",
        description: "Board Meeting With",
        user: {
          name: "Jessy Pinkman",
          image: image3,
        },
      },
    ]);

    // Initialize calendar
    const initializeCalendar = () => {
      const todayDate = new Date();
      currentMonth.value = todayDate.getMonth();
      currentYear.value = todayDate.getFullYear();
      currentDay.value = todayDate.getDate();
      today.value = {
        year: currentYear.value,
        month: currentMonth.value,
        day: currentDay.value,
      };
      generateCalendar();
    };

    // Generate calendar days
    const generateCalendar = () => {
      daysInMonth.value = [];
      const firstDay = new Date(
        currentYear.value,
        currentMonth.value,
        1
      ).getDay();
      const numberOfDays = new Date(
        currentYear.value,
        currentMonth.value + 1,
        0
      ).getDate();
      for (let i = 0; i < firstDay; i++) {
        daysInMonth.value.push(null); // Placeholder for days before the first of the month
      }
      for (let i = 1; i <= numberOfDays; i++) {
        daysInMonth.value.push(i);
      }
    };

    // Navigate to previous month
    const previousMonth = () => {
      currentMonth.value--;
      if (currentMonth.value < 0) {
        currentMonth.value = 11;
        currentYear.value--;
      }
      generateCalendar();
    };

    // Navigate to next month
    const nextMonth = () => {
      currentMonth.value++;
      if (currentMonth.value > 11) {
        currentMonth.value = 0;
        currentYear.value++;
      }
      generateCalendar();
    };

    // Check if a day is today
    const isToday = (day: number | null): boolean => {
      if (day === null) return false;
      return (
        today.value.year === currentYear.value &&
        today.value.month === currentMonth.value &&
        today.value.day === day
      );
    };

    // Initialize on component mount
    onMounted(() => {
      initializeCalendar();
    });

    return {
      currentMonth,
      currentYear,
      currentDay,
      today,
      weekdays,
      monthNames,
      daysInMonth,
      events,
      previousMonth,
      nextMonth,
      isToday,
    };
  },
});
</script>

<style lang="scss" scoped>
.todays-schedule-card {
  .trezo-card-content {
    .calendar {
      .header {
        margin-bottom: 12px;

        button {
          background-color: #e6eff2;
          color: var(--blackColor);
          height: 30px;
          width: 30px;

          i {
            font-size: 22px;
          }
          &:hover {
            background-color: var(--primaryColor);
            color: var(--whiteColor);
          }
        }
      }
      .weekdays {
        margin-bottom: 10px;
        font-size: 12px;
      }
      .weekdays,
      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
      }
      .days {
        gap: 2px;

        div {
          width: 100%;
          height: 45px;
          cursor: pointer;
          line-height: 45px;
          background-color: #e6eff2;

          &:has(.blank-day) {
            background-color: transparent;
          }
        }
        .current-day {
          line-height: initial;

          span {
            background-color: var(--primaryColor);
            color: var(--whiteColor);
            display: inline-block;
            border-radius: 50%;
            line-height: 30px;
            height: 30px;
            width: 30px;
            margin: auto;
          }
        }
      }
    }
    .events-list {
      height: 554px;
      margin-top: 25px;
      padding-top: 25px;
      .event-item {
        padding: 25px;
        margin-top: 12px;
        background-color: #dde4ff;

        .user {
          gap: 5px;

          img {
            width: 24px;
            border: 1px solid var(--whiteColor);
          }
        }
        p {
          margin: {
            bottom: 9px;
            top: 3px;
          }
        }
        .info {
          margin-top: 15px;

          .btn {
            padding: 5.5px 16px;
            font-weight: 500;

            &.btn-primary {
              background-color: var(--whiteColor);
              border-color: var(--whiteColor);
              color: var(--primaryColor);

              &:hover {
                color: var(--whiteColor);
                border-color: var(--primaryColor);
                background-color: var(--primaryColor);
              }
            }
          }
          .notification-btn {
            width: 28px;
            height: 28px;
            color: var(--primaryColor);
            transition: var(--transition);
            background-color: var(--whiteColor);

            &:hover {
              color: var(--whiteColor);
              background-color: var(--primaryColor);
            }
          }
        }
        &:nth-child(2),
        &:nth-child(5) {
          background-color: #daebff;

          .info {
            .btn {
              &.btn-primary {
                color: var(--secondaryColor);

                &:hover {
                  color: var(--whiteColor);
                }
              }
            }
            .notification-btn {
              color: var(--secondaryColor);

              &:hover {
                color: var(--whiteColor);
              }
            }
          }
        }
        &:nth-child(3),
        &:nth-child(6) {
          background-color: #c8ffe1;

          .info {
            .btn {
              &.btn-primary {
                color: var(--successColor);

                &:hover {
                  color: var(--whiteColor);
                }
              }
            }
            .notification-btn {
              color: var(--successColor);

              &:hover {
                color: var(--whiteColor);
              }
            }
          }
        }
        &:first-child {
          margin-top: 0;
        }
      }
      &::before {
        top: 0;
        left: 0;
        right: 0;
        content: "";
        margin-right: 25px;
        position: absolute;
        border-top: 2px dashed var(--borderColor);
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .todays-schedule-card {
    .trezo-card-content {
      .events-list {
        height: 520px;
        margin-top: 17px;
        padding-top: 17px;

        .event-item {
          padding: 17px;
          margin-top: 10px;
        }
        &::before {
          margin-right: 17px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .todays-schedule-card {
    .trezo-card-content {
      .events-list {
        margin-top: 20px;
        padding-top: 20px;

        .event-item {
          padding: 20px;
        }
        &::before {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
