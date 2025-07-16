<template>
  <div
    class="todays-appointments-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div
      class="trezo-card-header d-flex align-items-center justify-content-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Today's Appointments</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="appointments-list position-relative scrollbar">
        <div
          v-for="(appointment, index) in appointments"
          :key="index"
          class="appointment-item position-relative z-1 border-radius"
        >
          <div class="icon">
            <img :src="appointment.icon" :alt="appointment.status" />
          </div>
          <div class="d-md-flex align-items-center justify-content-between">
            <div>
              <div class="info d-flex align-items-center">
                <span class="d-block text-black fw-semibold">
                  {{ appointment.time }}
                </span>
                <button
                  v-if="appointment.status === 'upcoming'"
                  type="button"
                  class="notification-btn bg-primary text-white p-0 border-0 rounded-circle"
                >
                  <i class="ri-notification-2-line"></i>
                </button>
                <span
                  v-if="appointment.status === 'upcoming'"
                  class="trezo-badge bg-white"
                >
                  Upcoming
                </span>
              </div>
              <p>
                {{ appointment.description }}
              </p>
              <div class="user d-flex align-items-center">
                <img
                  :src="appointment.user.image"
                  class="rounded-circle"
                  alt="user-image"
                />
                <span class="d-block text-black fw-semibold">
                  {{ appointment.user.name }}
                </span>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="toggleClass(appointment)"
            >
              View Details
            </button>
          </div>
          <div
            class="shape position-absolute start-0 end-0 text-center z-n1 top-0 mx-auto"
          >
            <img src="@/assets/images/icons/vector.png" alt="vector" />
          </div>
        </div>
      </div>
    </div>
  </div>

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
            <h5 class="mb-0">Schedule Details</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              @click="toggleClass(null)"
              class="p-0 border-0 lh-1 bg-transparent transition"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>
        <div class="trezo-card-content">
          <ul class="p-0 m-0 list-unstyled">
            <li class="fw-medium text-black">
              <span class="d-block fw-normal text-body"> Date </span>
              {{ selectedAppointment?.date }}
            </li>
            <li class="time text-black">
              <span class="d-block fw-normal text-body"> Time </span>
              {{ selectedAppointment?.time }}
            </li>
            <li class="fw-medium text-black">
              <span class="d-block fw-normal text-body">
                Schedule Description
              </span>
              {{ selectedAppointment?.description }}
            </li>
            <li class="fw-medium text-black">
              <span class="d-block fw-normal text-body"> Patient Name </span>
              <div class="patient-name d-flex align-items-center">
                <img
                  :src="selectedAppointment?.user.image"
                  alt="patient-image"
                  class="rounded-circle"
                />
                <span>
                  {{ selectedAppointment?.user.name }}
                </span>
              </div>
            </li>
            <li>
              <span class="d-block fw-normal"> Schedule Status </span>
              <span class="trezo-badge finished fw-normal">
                {{ selectedAppointment?.status }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "~/assets/images/users/user32.jpg";
import image2 from "~/assets/images/users/user33.jpg";
import image3 from "~/assets/images/users/user34.jpg";
import image4 from "~/assets/images/users/user35.jpg";
import image5 from "~/assets/images/users/user36.jpg";
import image6 from "~/assets/images/users/user37.jpg";
import image7 from "~/assets/images/users/user38.jpg";
import icon1 from "~/assets/images/icons/done.svg";
import icon2 from "~/assets/images/icons/not-done.svg";

interface User {
  name: string;
  image: string;
}

interface Appointment {
  date: string;
  time: string;
  description: string;
  user: User;
  status: "completed" | "upcoming";
  icon: string;
}

export default defineComponent({
  name: "TodayAppointments",
  setup() {
    const classApplied = ref(false);
    const selectedAppointment = ref<Appointment | null>(null);

    const appointments = ref<Appointment[]>([
      {
        date: "07 Nov, 2025",
        time: "10:00 AM",
        description: "Appointment With Cardiac Patient",
        user: {
          name: "Jonathon Ronan",
          image: image1,
        },
        status: "completed",
        icon: icon1,
      },
      {
        date: "07 Nov, 2025",
        time: "12:00 PM",
        description: "Board Meeting With",
        user: {
          name: "Jessy Pinkman",
          image: image2,
        },
        status: "completed",
        icon: icon1,
      },
      {
        date: "07 Nov, 2025",
        time: "02:00 PM",
        description: "Major Cardiac Surgery of the Patient",
        user: {
          name: "Walter White",
          image: image3,
        },
        status: "upcoming",
        icon: icon2,
      },
      {
        date: "07 Nov, 2025",
        time: "03:00 PM",
        description: "Appointment With Cardiac Patient",
        user: {
          name: "Jonathon Ronan",
          image: image1,
        },
        status: "upcoming",
        icon: icon2,
      },
      {
        date: "07 Nov, 2025",
        time: "04:00 PM",
        description: "Board Meeting With",
        user: {
          name: "Jessy Pinkman",
          image: image2,
        },
        status: "upcoming",
        icon: icon2,
      },
      {
        date: "07 Nov, 2025",
        time: "05:00 PM",
        description: "Major Cardiac Surgery of the Patient",
        user: {
          name: "Walter White",
          image: image3,
        },
        status: "upcoming",
        icon: icon2,
      },
      {
        date: "07 Nov, 2025",
        time: "06:00 PM",
        description: "Follow-up Appointment",
        user: {
          name: "Sarah Connor",
          image: image4,
        },
        status: "upcoming",
        icon: icon2,
      },
      {
        date: "07 Nov, 2025",
        time: "07:00 PM",
        description: "Consultation with New Patient",
        user: {
          name: "John Doe",
          image: image5,
        },
        status: "upcoming",
        icon: icon2,
      },
      {
        date: "07 Nov, 2025",
        time: "08:00 PM",
        description: "Emergency Surgery",
        user: {
          name: "Jane Smith",
          image: image6,
        },
        status: "upcoming",
        icon: icon2,
      },
      {
        date: "07 Nov, 2025",
        time: "09:00 PM",
        description: "Post-Surgery Checkup",
        user: {
          name: "Michael Johnson",
          image: image7,
        },
        status: "upcoming",
        icon: icon2,
      },
    ]);

    const toggleClass = (appointment: Appointment | null) => {
      classApplied.value = !classApplied.value;
      selectedAppointment.value = appointment;
    };

    return {
      classApplied,
      selectedAppointment,
      appointments,
      toggleClass,
    };
  },
});
</script>

<style lang="scss" scoped>
// Today's Appointments
.todays-appointments-card {
  .trezo-card-content {
    .appointments-list {
      padding-left: 40px;
      max-height: 750px;

      .appointment-item {
        padding: 20px;
        margin-top: 20px;
        background-color: #dde4ff;

        .icon {
          top: 50%;
          left: -40px;
          position: absolute;
          transform: translateY(-50%);
        }
        .info {
          gap: 12px;
          margin-bottom: 7px;

          .notification-btn {
            width: 28px;
            height: 28px;
          }
          .trezo-badge {
            border-radius: 30px;
            padding: 0 10px;
          }
        }
        p {
          margin-bottom: 10px;
        }
        .user {
          gap: 8px;

          img {
            width: 30px;
            border: 1px solid var(--whiteColor);
          }
          span {
            font-size: 13px;
          }
        }
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
        &:first-child {
          margin-top: 0;

          &::before {
            margin-top: 0;
          }
        }
        &:nth-child(2),
        &:nth-child(5) {
          background-color: #c8ffe1;

          .btn {
            &.btn-primary {
              color: var(--successColor);

              &:hover {
                color: var(--whiteColor);
                border-color: var(--successColor);
                background-color: var(--successColor);
              }
            }
          }
        }
        &:nth-child(3),
        &:nth-child(6) {
          background-color: #daebff;

          .btn {
            &.btn-primary {
              color: var(--secondaryColor);

              &:hover {
                color: var(--whiteColor);
                border-color: var(--secondaryColor);
                background-color: var(--secondaryColor);
              }
            }
          }
        }
      }
      &::before {
        top: 0;
        bottom: 0;
        left: 12px;
        width: 1px;
        content: "";
        position: absolute;
        background: var(--borderColor);
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
  .todays-appointments-card {
    .trezo-card-content {
      .appointments-list {
        .appointment-item {
          .btn {
            margin-top: 15px;
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
