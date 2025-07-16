<template>
  <div
    class="prescriptions-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="trezo-card-content">
      <div class="doctor-info d-md-flex justify-content-between">
        <div>
          <h4 class="fw-semibold">Dr. Walter White</h4>
          <span class="d-block"> MBBS, MD, MS (Reg No: 321456) </span>
          <span class="d-block text-black"> Mobile No: +321 4567 5643 </span>
        </div>
        <div>
          <img src="@/assets/images/logo.svg" class="logo" alt="logo" />
          <img
            src="@/assets/images/white-logo.svg"
            class="logo d-none"
            alt="logo"
          />
          <span class="d-block"> S. Arrowhead Court Branford9 </span>
          <span class="d-block"> +1 444 266 5599 </span>
        </div>
      </div>
      <div class="prescriptions-info">
        <img src="@/assets/images/bar-code.svg" alt="bar-code" />
        <div class="d-md-flex justify-content-between">
          <ul class="m-0 p-0 list-unstyled">
            <li>ID: <span class="text-black">321456</span></li>
            <li>Name: <span class="text-black">Jane Ronan</span></li>
            <li>Address: <span class="text-black">Bradford, UK</span></li>
            <li>
              Temperature(Farenhite): <span class="text-black">101 degree</span>
            </li>
            <li>Blood Pressure: <span class="text-black">85/123</span></li>
          </ul>
          <span class="fw-semibold text-black"> Date: 07 November, 2025 </span>
        </div>
        <span class="sub d-block fw-semibold text-black"> R </span>
      </div>
      <div class="basic-table table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col" class="fw-normal text-body position-relative z-1">
                Medicine Name
              </th>
              <th scope="col" class="fw-normal text-body position-relative z-1">
                Dosage
              </th>
              <th scope="col" class="fw-normal text-body position-relative z-1">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fw-semibold">1. Tab. Ibuprofen</td>
              <td class="fw-semibold">
                1 Morning - 1 Night
                <span class="d-block text-xs fw-normal text-body">
                  (Before Food)
                </span>
              </td>
              <td class="fw-semibold">
                10 Days
                <span class="d-block text-xs fw-normal text-body">
                  (Total 20 Tablets)
                </span>
              </td>
            </tr>
            <tr>
              <td class="fw-semibold">2. Cap. Acetaminophen</td>
              <td class="fw-semibold">
                1 Morning - 1 Midday - 1 Night
                <span class="d-block text-xs fw-normal text-body">
                  (After Food)
                </span>
              </td>
              <td class="fw-semibold">
                10 Days
                <span class="d-block text-xs fw-normal text-body">
                  (Total 20 Tablets)
                </span>
              </td>
            </tr>
            <tr>
              <td class="fw-semibold">3. Tab. Naproxen</td>
              <td class="fw-semibold">
                1 Morning - 1 Night
                <span class="d-block text-xs fw-normal text-body">
                  (After Food)
                </span>
              </td>
              <td class="fw-semibold">
                10 Days
                <span class="d-block text-xs fw-normal text-body">
                  (Total 20 Tablets)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="note">
        <span class="d-block text-black fw-semibold"> Advice Given: </span>
        <ul class="mb-0">
          <li>Avoid Oily and spicy food.</li>
        </ul>
      </div>
      <div class="signature">
        <div class="image">
          <img src="@/assets/images/signature.svg" alt="signature" />
        </div>
        <span class="d-block text-black fw-semibold"> Dr. Walter White </span>
        <span class="d-block text-xs"> MBBS, MD, MS (Reg No: 321456) </span>
      </div>
      <div class="form-btn-box text-center">
        <button
          type="button"
          class="warn d-inline-block fw-medium border-radius border-0 transition"
        >
          Print
        </button>
        <button
          type="button"
          class="primary d-inline-block fw-medium border-radius border-0 transition"
        >
          <span class="d-inline-block position-relative">
            <i class="material-symbols-outlined"> download </i>
            Download
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Prescriptions",
});
</script>

<style lang="scss" scoped>
.prescriptions-card {
  .trezo-card-content {
    .doctor-info {
      border-bottom: 1px solid var(--borderColor);
      padding: {
        left: 25px;
        right: 25px;
        bottom: 23px;
      }
      margin: {
        left: -25px;
        right: -25px;
      }
      h4 {
        font-size: 20px;
        margin-bottom: 8px;
      }
      span {
        font-size: 16px;
        margin-top: 5px;
      }
      .logo {
        margin-bottom: 5px;
      }
    }
    .prescriptions-info {
      padding-top: 20px;

      img {
        margin-bottom: 18px;
      }
      ul {
        li {
          margin-bottom: 6px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .sub {
        font-size: 20px;
        margin-top: 50px;
      }
    }
    .basic-table {
      margin: {
        left: -25px;
        right: -25px;
      }
      .table {
        thead {
          tr {
            th {
              border-radius: 0;
              background-color: transparent;
              border: {
                top: 1px solid var(--borderColor);
                bottom: 1px solid var(--borderColor);
              }
              padding: {
                top: 14px;
                bottom: 14px;
              }
              &::before {
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: -1;
                content: "";
                position: absolute;
                background-color: #f6f7f9;
                margin: {
                  top: 4px;
                  bottom: 4px;
                }
              }
              &:first-child {
                padding-left: 25px;
              }
              &:last-child {
                padding-right: 25px;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              border-width: 0;
              vertical-align: top;
              padding: {
                top: 18px;
                bottom: 18px;
              }
              .text-xs {
                font-size: 12px;
                margin-top: 5px;
              }
              &:first-child {
                padding-left: 25px;
              }
              &:last-child {
                padding-right: 25px;
              }
            }
            &:last-child {
              td {
                padding-bottom: 50px;
                border-bottom-width: 1px;
              }
            }
          }
        }
      }
    }
    .note {
      padding-top: 22px;

      ul {
        margin-top: 6px;
        padding-left: 17px;
      }
    }
    .signature {
      max-width: 255px;
      padding: {
        bottom: 25px;
        right: 25px;
      }
      margin: {
        left: auto;
        top: 25px;
      }
      .image {
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 5px;
        border-bottom: 1px solid var(--borderColor);
      }
      span {
        margin-top: 3px;

        &.text-xs {
          font-size: 12px;
        }
      }
    }
    .form-btn-box {
      margin-top: 25px;
      padding-bottom: 50px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .prescriptions-card {
    .trezo-card-content {
      .doctor-info {
        padding: {
          left: 17px;
          right: 17px;
          bottom: 17px;
        }
        margin: {
          left: -17px;
          right: -17px;
        }
        h4 {
          font-size: 20px;
          margin-bottom: 5px;
        }
        span {
          font-size: 14px;
          margin-top: 4px;
        }
        .logo {
          margin-top: 17px;
        }
      }
      .prescriptions-info {
        padding-top: 17px;

        img {
          margin-bottom: 10px;
        }
        ul {
          margin-bottom: 5px !important;

          li {
            margin-bottom: 5px;
          }
        }
        .sub {
          font-size: 16px;
          margin-top: 17px;
        }
      }
      .basic-table {
        margin: {
          left: -17px;
          right: -17px;
        }
        .table {
          thead {
            tr {
              th {
                padding: {
                  top: 12px;
                  bottom: 12px;
                }
                &::before {
                  margin: {
                    top: 2px;
                    bottom: 2px;
                  }
                }
                &:first-child {
                  padding-left: 17px;
                }
                &:last-child {
                  padding-right: 17px;
                }
              }
            }
          }
          tbody {
            tr {
              td {
                padding: {
                  top: 15px;
                  bottom: 15px;
                }
                .text-xs {
                  margin-top: 3px;
                }
                &:first-child {
                  padding-left: 17px;
                }
                &:last-child {
                  padding-right: 17px;
                }
              }
              &:last-child {
                td {
                  padding-bottom: 30px;
                }
              }
            }
          }
        }
      }
      .note {
        padding-top: 17px;

        ul {
          margin-top: 5px;
        }
      }
      .signature {
        padding: {
          bottom: 17px;
          right: 0;
        }
        margin: {
          left: 0;
          top: 17px;
        }
        .image {
          margin-bottom: 15px;
        }
      }
      .form-btn-box {
        margin-top: 0;
        padding-bottom: 0;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .prescriptions-card {
    .trezo-card-content {
      .doctor-info {
        padding: {
          left: 20px;
          right: 20px;
          bottom: 20px;
        }
        margin: {
          left: -20px;
          right: -20px;
        }
        .logo {
          margin-top: 20px;
        }
      }
      .prescriptions-info {
        padding-top: 20px;

        .sub {
          margin-top: 20px;
        }
      }
      .basic-table {
        margin: {
          left: -20px;
          right: -20px;
        }
        .table {
          thead {
            tr {
              th {
                &:first-child {
                  padding-left: 20px;
                }
                &:last-child {
                  padding-right: 20px;
                }
              }
            }
          }
          tbody {
            tr {
              td {
                &:first-child {
                  padding-left: 20px;
                }
                &:last-child {
                  padding-right: 20px;
                }
              }
            }
          }
        }
      }
      .note {
        padding-top: 20px;
      }
      .signature {
        padding-bottom: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
