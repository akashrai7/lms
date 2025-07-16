<template>
  <div
    class="recent-lab-reports-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div
      class="trezo-card-header d-flex align-items-center justify-content-between"
    >
      <div class="trezo-card-title">
        <h5 class="mb-0">Recent Lab Reports</h5>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="basic-table table-responsive">
        <table class="table mb-0">
          <tbody>
            <tr v-for="(report, index) in labReports" :key="index">
              <td>
                <div class="employee-info d-flex">
                  <div class="img">
                    <img :src="getIcon(report.type)" alt="user-image" />
                  </div>
                  <div>
                    <span class="d-block fw-semibold">{{ report.name }}</span>
                    <span class="d-block text-body">
                      submitted by
                      <strong class="fw-normal text-black">
                        {{ report.submittedBy }}
                      </strong>
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <button
                  type="button"
                  class="download-btn d-inline-block text-primary lh-1 border-0 bg-transparent p-0"
                >
                  <i class="ri-download-2-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentLabReports",
  data() {
    return {
      labReports: [
        { name: "Blood Report.pdf", type: "pdf", submittedBy: "Andrew" },
        { name: "X-ray Report.jpg", type: "jpg", submittedBy: "Joanna" },
        { name: "Creatinine Report.pdf", type: "pdf", submittedBy: "David" },
        { name: "Blood Report.pdf", type: "pdf", submittedBy: "Zinia" },
        { name: "ECG Report.doc", type: "doc", submittedBy: "Bella" },
        { name: "Blood Report.pdf", type: "pdf", submittedBy: "Jonathon" },
      ],
    };
  },
  methods: {
    getIcon(type: string) {
      const icons = import.meta.glob("@/assets/images/icons/*.png", {
        eager: true,
      });
      return (icons[`/assets/images/icons/${type}.png`] as any)?.default || "";
    },
  },
});
</script>

<style lang="scss" scoped>
.recent-lab-reports-card {
  .trezo-card-content {
    margin-bottom: -14px;

    .basic-table {
      table,
      .table {
        thead {
          tr {
            th {
              font-size: 10px;
              letter-spacing: 1px;
              color: var(--bodyColor);
              text-transform: uppercase;
              background-color: transparent;
              padding: {
                bottom: 14px;
                top: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 12px;
              padding: {
                top: 15px;
                bottom: 15px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 28px;
                }
                span {
                  &:nth-child(1) {
                    font-size: var(--fontSize);
                    margin: {
                      bottom: 3px;
                      top: -3px;
                    }
                  }
                }
              }
              .download-btn {
                font-size: 20px;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
              }
            }
            &:first-child {
              td {
                border-top-width: 0;
                padding-top: 0;
              }
            }
            &:last-child {
              td {
                border-bottom-width: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
