<template>
  <div
    class="top-stylist-performance-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h5 class="mb-0">Top Stylist Performance</h5>
      </div>

      <div class="trezo-card-content">
        <div class="basic-table table-responsive">
          <table class="table mb-0">
            <tbody>
              <tr v-for="stylist in stylists.slice(0, 5)" :key="stylist.id">
                <td>
                  <div class="employee-info d-flex align-items-center">
                    <div class="img">
                      <img :src="stylist.image" alt="user-image" />
                    </div>
                    <div>
                      <span class="d-block fw-semibold">{{
                        stylist.name
                      }}</span>
                      <span class="d-block text-body">
                        {{ stylist.totalBookings }} Total Bookings
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="ratings lh-1">
                    <i
                      v-for="star in 5"
                      :key="star"
                      :class="getStarClass(stylist.rating, star)"
                    ></i>
                    <span class="d-inline-block lh-1 text-xs text-body">
                      {{ stylist.rating }}
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "@/assets/images/users/user75.jpg";
import image2 from "@/assets/images/users/user76.jpg";
import image3 from "@/assets/images/users/user77.jpg";
import image4 from "@/assets/images/users/user78.jpg";
import image5 from "@/assets/images/users/user79.jpg";

export default defineComponent({
  name: "TopStylistPerformance",
  setup() {
    const stylists = [
      {
        id: 1,
        name: "Johhna Loren",
        image: image1,
        totalBookings: 2032,
        rating: 5.0,
      },
      {
        id: 2,
        name: "Angela Carter",
        image: image2,
        totalBookings: 1020,
        rating: 4.5,
      },
      {
        id: 3,
        name: "Skyler White",
        image: image3,
        totalBookings: 99,
        rating: 4.0,
      },
      {
        id: 4,
        name: "Jane Ronan",
        image: image4,
        totalBookings: 89,
        rating: 3.5,
      },
      {
        id: 5,
        name: "Angel Peril",
        image: image5,
        totalBookings: 72,
        rating: 3.0,
      },
    ];

    const getStarClass = (rating: number, star: number) => {
      if (star <= Math.floor(rating)) {
        return "ri-star-fill";
      } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
        return "ri-star-half-line";
      } else {
        return "ri-star-line";
      }
    };

    return {
      stylists,
      getStarClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.top-stylist-performance-card {
  .trezo-card-content {
    margin-bottom: -12px;

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
                bottom: 10px;
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
                top: 12px;
                bottom: 12px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 40px;
                  border-radius: 10px;

                  img {
                    border-radius: 10px;
                  }
                }
                span {
                  &:nth-child(1) {
                    font-size: var(--fontSize);
                    margin-bottom: 2px;
                  }
                }
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
                padding-top: 0;
                border-top-width: 0;
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
