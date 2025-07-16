<template>
  <div
    class="todays-schedule-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div
      class="trezo-card-header d-flex align-items-center justify-content-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Today's Schedule</h5>
      </div>
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
          <div class="text-black fw-medium" v-for="day in weekdays" :key="day">
            {{ day }}
          </div>
        </div>
        <div class="days text-center">
          <div
            v-for="(day, index) in daysInMonth"
            :key="index"
            :class="{ 'current-day': isToday(day) }"
          >
            <span v-if="day !== null">{{ day }}</span>
            <span v-else>&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Add Schedule Button -->
  <div
    class="trezo-card card mb-4 border-radius d-block bg-transparent p-0 border-0 shadow-none"
  >
    <div class="trezo-card-content">
      <div class="form-btn-box">
        <button
          type="button"
          class="primary d-inline-block fw-medium border-radius border-0 transition"
          @click="toggleClass"
        >
          <span class="d-inline-block position-relative">
            <i class="material-symbols-outlined">add</i>
            Add A Schedule
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="mb-4"></div>

  <!-- Add New Popup -->
  <div class="add-new-popup" :class="{ active: classApplied }">
    <div class="popup-dialog">
      <div
        class="trezo-card card w-100 border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="trezo-card-header d-flex align-items-center justify-content-between"
        >
          <div class="trezo-card-title">
            <h5 class="mb-0">Add A Schedule</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              @click="toggleClass"
              class="p-0 border-0 lh-1 bg-transparent transition"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>
        <div class="trezo-card-content">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Select Date
                </label>
                <input type="date" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Select Time
                </label>
                <input type="time" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Schedule Type
                </label>
                <select class="form-select form-control">
                  <option selected>Select</option>
                  <option value="1">Appointment with Patient</option>
                  <option value="2">Group Meeting</option>
                  <option value="3">Team Meeting</option>
                  <option value="4">Client Meeting</option>
                  <option value="5">Doctor Meeting</option>
                  <option value="6">Other</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Patient Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Jonathon Ronan"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Set Alarm
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="09:05 AM"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Patient Avatar
                </label>
                <div
                  class="form-control h-100 text-center position-relative p-4 p-lg-5"
                >
                  <div class="product-upload">
                    <label for="file-upload" class="file-upload mb-0">
                      <i
                        class="ri-folder-image-line bg-primary bg-opacity-10 p-2 rounded-1 text-primary"
                      ></i>
                      <span class="d-block text-body fs-14">
                        Drag and drop an image or
                        <span class="text-primary text-decoration-underline">
                          Browse
                        </span>
                      </span>
                    </label>
                    <input id="file-upload" type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button
              @click="toggleClass"
              class="warn d-inline-block fw-medium border-0 border-radius transition"
            >
              Cancel
            </button>
            <button
              class="primary d-inline-block fw-medium border-0 border-radius transition"
            >
              <span class="position-relative d-inline-block">
                <i class="material-symbols-outlined">add</i>
                Add Schedule
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TodaySchedule",
  setup() {
    // Calendar State
    const currentMonth = ref(new Date().getMonth());
    const currentYear = ref(new Date().getFullYear());
    const currentDay = ref(new Date().getDate());
    const today = ref({
      year: currentYear.value,
      month: currentMonth.value,
      day: currentDay.value,
    });
    const weekdays = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
    const monthNames = ref([
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

    // Generate Calendar
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

    // Previous Month
    const previousMonth = () => {
      currentMonth.value--;
      if (currentMonth.value < 0) {
        currentMonth.value = 11;
        currentYear.value--;
      }
      generateCalendar();
    };

    // Next Month
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

    // Popup State
    const classApplied = ref(false);
    const toggleClass = () => {
      classApplied.value = !classApplied.value;
    };

    // Initialize Calendar
    onMounted(() => {
      generateCalendar();
    });

    return {
      currentMonth,
      currentYear,
      currentDay,
      today,
      weekdays,
      monthNames,
      daysInMonth,
      previousMonth,
      nextMonth,
      isToday,
      classApplied,
      toggleClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.todays-schedule-card {
  .trezo-card-content {
    .calendar {
      .header {
        margin-bottom: 20px;

        button {
          background-color: var(--borderColor);
          color: var(--blackColor);
          height: 30px;
          width: 30px;

          &:hover {
            background-color: var(--primaryColor);
            color: var(--whiteColor);
          }
        }
      }
      .weekdays {
        margin-bottom: 6px;
      }
      .weekdays,
      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
      }
      .days {
        div {
          width: 32px;
          height: 32px;
          cursor: pointer;
          line-height: 31px;
          border-radius: 50%;
          margin: {
            top: 7px;
            left: auto;
            bottom: 7px;
            right: auto;
          }
        }
        .current-day {
          background-color: var(--primaryColor);
          color: var(--whiteColor);
        }
      }
    }
  }
}

.add-new-popup {
  .popup-dialog {
    .trezo-card {
      .trezo-card-content {
        ul {
          li {
            font-size: 16px;
            margin-bottom: 25px;

            span {
              font-size: var(--fontSize);
              margin-bottom: 4px;
            }
            &.time {
              font: {
                size: 28px;
                weight: 900;
              }
            }
            .patient-name {
              gap: 8px;

              img {
                width: 24px;
              }
              span {
                font-size: 16px;
              }
            }
            .trezo-badge {
              border-radius: 30px;
              padding: 1px 10px;
              font-size: 12px;
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .add-new-popup {
    .popup-dialog {
      .trezo-card {
        .trezo-card-content {
          ul {
            li {
              font-size: 15px;
              margin-bottom: 20px;

              &.time {
                font-size: 24px;
              }
              .patient-name {
                span {
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
