<template>
  <div
    class="top-selling-items-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-2 mb-lg-20"
      >
        <h5 class="mb-0">Top Selling Items</h5>
        <select
          class="form-select month-select bg-gray border-0 form-control"
          aria-label="Default select example"
          @change="handleTimeRangeChange"
        >
          <option value="Weekly" selected>Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div class="trezo-card-content">
        <div class="row">
          <div
            class="col-md-3 col-sm-6"
            v-for="(item, index) in topSellingItems.slice(0, 4)"
            :key="index"
          >
            <div class="item position-relative">
              <div
                class="rating fw-semibold d-flex align-items-center bg-dark text-white"
              >
                <i class="ri-star-fill"></i>
                {{ item.rating }}
              </div>
              <NuxtLink
                to="/restaurant/dish-details/"
                class="d-block image"
                :style="{ backgroundImage: `url(${item.image})` }"
              ></NuxtLink>
              <h6 class="fw-semibold">
                <NuxtLink to="/restaurant/dish-details/">
                  {{ item.name }}
                </NuxtLink>
              </h6>
              <span class="d-block">{{ item.sold }} sold</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "@/assets/images/products/product28.jpg";
import image2 from "@/assets/images/products/product29.jpg";
import image3 from "@/assets/images/products/product30.jpg";
import image4 from "@/assets/images/products/product31.jpg";

// Define the structure of a top-selling item
interface TopSellingItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  sold: number;
}

export default defineComponent({
  name: "TopSellingItems",
  setup() {
    const topSellingItems = ref<TopSellingItem[]>([]);
    const timeRange = ref("Weekly"); // Default time range

    // Fetch data based on the selected time range
    const fetchTopSellingItems = () => {
      // Simulate fetching data based on the selected time range
      // In a real application, you would make an API call here
      if (timeRange.value === "Weekly") {
        topSellingItems.value = [
          {
            id: 1,
            name: "Thai Bean Soup",
            image: image1,
            rating: 5.0,
            sold: 1235,
          },
          {
            id: 2,
            name: "Meat Lasagnia",
            image: image2,
            rating: 4.8,
            sold: 1045,
          },
          {
            id: 3,
            name: "Veg Sandwich",
            image: image3,
            rating: 4.9,
            sold: 1015,
          },
          {
            id: 4,
            name: "Creamy Fish",
            image: image4,
            rating: 4.7,
            sold: 996,
          },
        ];
      } else if (timeRange.value === "Monthly") {
        topSellingItems.value = [
          {
            id: 1,
            name: "Thai Bean Soup",
            image: image4,
            rating: 5.0,
            sold: 5000,
          },
          {
            id: 2,
            name: "Meat Lasagnia",
            image: image3,
            rating: 4.8,
            sold: 4500,
          },
          {
            id: 3,
            name: "Veg Sandwich",
            image: image2,
            rating: 4.9,
            sold: 4200,
          },
          {
            id: 4,
            name: "Creamy Fish",
            image: image1,
            rating: 4.7,
            sold: 4000,
          },
        ];
      } else if (timeRange.value === "Yearly") {
        topSellingItems.value = [
          {
            id: 1,
            name: "Thai Bean Soup",
            image: image3,
            rating: 5.0,
            sold: 15000,
          },
          {
            id: 2,
            name: "Meat Lasagnia",
            image: image2,
            rating: 4.8,
            sold: 14000,
          },
          {
            id: 3,
            name: "Veg Sandwich",
            image: image1,
            rating: 4.9,
            sold: 13000,
          },
          {
            id: 4,
            name: "Creamy Fish",
            image: image4,
            rating: 4.7,
            sold: 12000,
          },
        ];
      }
    };

    // Handle time range change
    const handleTimeRangeChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      timeRange.value = target.value;
      fetchTopSellingItems();
    };

    // Fetch initial data when the component is mounted
    fetchTopSellingItems();

    return {
      topSellingItems,
      timeRange,
      handleTimeRangeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.top-selling-items-card {
  .trezo-card-content {
    .item {
      .rating {
        border-radius: 30px;
        position: absolute;
        padding: 1.5px 5px;
        font-size: 12px;
        right: 3px;
        gap: 3px;
        top: 3px;

        i {
          color: #fd5812;
          font-size: 14px;
        }
      }
      .image {
        height: 137px;
        margin-bottom: 15px;
        border-radius: 10px;
        background: {
          position: center center;
          repeat: no-repeat;
          size: cover;
        }
      }
      h6 {
        font-size: 14px;
        margin-bottom: 4px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .top-selling-items-card {
    .trezo-card-content {
      margin-bottom: -15px;

      .item {
        margin-bottom: 15px;

        .image {
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
