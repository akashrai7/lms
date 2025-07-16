<template>
  <div
    class="write-prescription-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
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
      <form>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Select Date
              </label>
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Patient ID
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Patient ID"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Patient First Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter First Name"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Patient Last Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Patient Address
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Temperature (Farenhite)
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Temperature"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Blood Pressure
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Blood Pressure"
              />
            </div>
          </div>
        </div>
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="fw-normal text-body position-relative z-1"
                >
                  Medicine Name
                </th>
                <th
                  scope="col"
                  class="fw-normal text-body position-relative z-1"
                >
                  Dosage
                </th>
                <th
                  scope="col"
                  class="fw-normal text-body position-relative z-1"
                >
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Medicine Name"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Morning: 01 Tablet"
                  />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Night: 01 Tablet"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Total Days"
                  />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Total Tablets"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="btn btn-primary">
                    + Add More Medicine
                  </button>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Advice
              </label>
              <textarea
                class="form-control"
                placeholder="It makes me feel..."
              ></textarea>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-group">
              <label class="main-label d-block fw-medium text-black">
                Upload Signature
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
        <div class="form-btn-box">
          <button
            type="button"
            class="warn d-inline-block fw-medium border-radius border-0 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            class="primary d-inline-block fw-medium border-radius border-0 transition"
          >
            <span class="d-inline-block position-relative">
              <i class="material-symbols-outlined"> add </i>
              Create Prescription
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WritePrescription",
});
</script>

<style lang="scss" scoped>
.write-prescription-card {
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
        bottom: 34px;
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
    .basic-table {
      margin: {
        left: -25px;
        right: -25px;
        bottom: 25px;
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
              border-bottom-width: 1px;

              .form-control {
                margin-bottom: 10px;

                &:last-child {
                  margin-bottom: 0;
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
      }
    }
    .form-btn-box {
      text-align: end;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .write-prescription-card {
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
          bottom: 17px;
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
      .basic-table {
        margin: {
          left: -17px;
          right: -17px;
          bottom: 17px;
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
                .form-control {
                  width: 200px;
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
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .write-prescription-card {
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
          bottom: 20px;
        }
        .logo {
          margin-top: 20px;
        }
      }
      .basic-table {
        margin: {
          left: -20px;
          right: -20px;
          bottom: 20px;
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
    }
  }
}
</style>
