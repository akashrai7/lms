<template>
  <div class="recent-bookings-card card bg-white border-0 rounded-3 mb-4">
    <div class="p-25">
      <div
        class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-3 mb-4"
      >
        <h3 class="fs-18 fw-bold mb-0">Recent Bookings</h3>
        <div>
          <div
            class="d-flex align-items-center bg-gray-100 py-2 px-3 rounded-2 for-dark-digital-date"
          >
            <div>{{ formattedDate }}</div>
            <i class="ri-calendar-2-line ms-2 fs-18 lh-1"></i>
          </div>
        </div>
      </div>

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
    </div>
    <div class="p-25 pt-0 pe-0">
      <div
        class="last-child-none pe-4 recent-room-bookings scrollbar"
        style="height: 505px"
      >
        <NuxtLink
          v-for="(booking, index) in bookings"
          :key="index"
          to="/hotel/room-details"
          class="mb-3 pb-3 border-bottom border-border-color child d-flex justify-content-between align-items-center flex-wrap gap-3 text-decoration-none"
        >
          <div class="d-flex align-items-center" style="gap: 15px">
            <div class="flex-shrink-0">
              <img
                :src="booking.image"
                class="rounded-1"
                style="max-width: 80px"
                alt="room"
              />
            </div>
            <div class="flex-grow-1">
              <h3 class="fs-14 fw-semibold mb-6">{{ booking.roomName }}</h3>
              <span class="d-block fs-12 mb-9 text-body">
                Booked by {{ booking.guestName }}
              </span>
              <span
                class="bg-border-color-50 fs-12 fw-medium text-primary d-inline-block rounded-1"
                style="padding: 3px 8px"
              >
                {{ formatBookingDates(booking.checkIn, booking.checkOut) }}
              </span>
            </div>
          </div>
          <i
            class="ri-arrow-right-line wh-30 d-flex d-lg-none d-xxl-flex justify-content-center align-items-center bg-border-color rounded-circle hover-bg"
          ></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";

import image1 from "@/assets/images/room-5.jpg";
import image2 from "@/assets/images/room-6.jpg";
import image3 from "@/assets/images/room-7.jpg";
import image4 from "@/assets/images/room-8.jpg";

interface Booking {
  id: number;
  roomName: string;
  guestName: string;
  checkIn: Date;
  checkOut: Date;
  image: string;
}

export default defineComponent({
  name: "RecentBookings",
  setup() {
    const currentDate = ref(new Date());
    const currentMonth = ref(currentDate.value.getMonth());
    const currentYear = ref(currentDate.value.getFullYear());
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

    const bookings = ref<Booking[]>([
      {
        id: 1,
        roomName: "Deluxe Room - G - 3215",
        guestName: "Angela Carter",
        checkIn: new Date(2025, 11, 10),
        checkOut: new Date(2025, 11, 15),
        image: image1,
      },
      {
        id: 2,
        roomName: "The Garden Suite 101",
        guestName: "Jack Smith",
        checkIn: new Date(2025, 11, 12),
        checkOut: new Date(2025, 11, 16),
        image: image2,
      },
      {
        id: 3,
        roomName: "The Tranquil S-02",
        guestName: "Jennifer Anderson",
        checkIn: new Date(2025, 11, 15),
        checkOut: new Date(2025, 11, 20),
        image: image3,
      },
      {
        id: 4,
        roomName: "The Queen - X - 231",
        guestName: "Robert Johnson",
        checkIn: new Date(2025, 11, 11),
        checkOut: new Date(2025, 11, 14),
        image: image4,
      },
      {
        id: 5,
        roomName: "Executive Suite - A - 100",
        guestName: "Sarah Williams",
        checkIn: new Date(2025, 11, 18),
        checkOut: new Date(2025, 11, 22),
        image: image1,
      },
      {
        id: 6,
        roomName: "The Garden Suite 101",
        guestName: "Jack Smith",
        checkIn: new Date(2025, 11, 12),
        checkOut: new Date(2025, 11, 16),
        image: image2,
      },
      {
        id: 7,
        roomName: "The Tranquil S-02",
        guestName: "Jennifer Anderson",
        checkIn: new Date(2025, 11, 15),
        checkOut: new Date(2025, 11, 20),
        image: image3,
      },
      {
        id: 8,
        roomName: "The Queen - X - 231",
        guestName: "Robert Johnson",
        checkIn: new Date(2025, 11, 11),
        checkOut: new Date(2025, 11, 14),
        image: image4,
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

    const formattedDate = computed(() => {
      return currentDate.value.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    });

    const formatBookingDates = (checkIn: Date, checkOut: Date): string => {
      const formatOptions: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
      };
      return `${checkIn.toLocaleDateString(
        "en-US",
        formatOptions
      )} - ${checkOut.toLocaleDateString("en-US", formatOptions)}`;
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
      previousMonth,
      nextMonth,
      isToday,
      formattedDate,
      bookings,
      formatBookingDates,
    };
  },
});
</script>

<style lang="scss" scoped>
.recent-bookings-card {
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
}
</style>
