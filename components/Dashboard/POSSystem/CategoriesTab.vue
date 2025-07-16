<template>
  <div>
    <h3 class="fs-20 fw-medium mb-4">Categories</h3>
    <ul
      class="nav nav-tabs border-0 mb-4 gap-3 categories-tabs"
      id="myTab"
      role="tablist"
    >
      <li
        v-for="category in categories"
        :key="category.id"
        class="nav-item"
        role="presentation"
      >
        <button
          class="nav-link border-2 bg-transparent rounded-3"
          :class="{ active: category.id === activeCategory }"
          :id="`${category.id}-tab`"
          data-bs-toggle="tab"
          :data-bs-target="`#${category.id}-tab-pane`"
          type="button"
          role="tab"
          :aria-controls="`${category.id}-tab-pane`"
          :aria-selected="category.id === activeCategory"
          @click="setActiveCategory(category.id)"
          style="width: 125px; padding: 20px 20px 16px"
        >
          <img
            :src="category.icon"
            class="mb-3"
            :alt="`${category.name}-icon`"
          />
          <h4 class="fs-16 fw-medium d-block mb-0">{{ category.name }}</h4>
          <span class="fs-12 fw-medium text-body">
            {{ categoryCounts[category.id] }}
            <span class="d-none">Products</span>
          </span>
        </button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div
        v-for="category in categories"
        :key="category.id"
        class="tab-pane fade"
        :class="{ 'show active': category.id === activeCategory }"
        :id="`${category.id}-tab-pane`"
        role="tabpanel"
        :aria-labelledby="`${category.id}-tab`"
        tabindex="0"
      >
        <div class="row">
          <div
            v-for="product in getProductsByCategory(category.id)"
            :key="product.id"
            class="col-md-4 col-sm-6"
          >
            <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
              <div class="pb-1">
                <NuxtLink
                  to="/ecommerce/product-details"
                  class="d-block text-decoration-none mb-2"
                >
                  <img
                    :src="product.image"
                    class="rounded-2 mb-3"
                    :alt="product.name"
                  />
                  <h3 class="fs-20 fw-medium mb-1">{{ product.name }}</h3>
                  <span class="text-body">{{ product.category }}</span>
                </NuxtLink>
                <div class="d-flex justify-content-between align-items-end">
                  <span
                    class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >
                    ${{ product.price }}
                  </span>
                  <button
                    class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                    style="
                      background-color: #dde4ff;
                      width: 35px;
                      height: 35px;
                      line-height: 35px;
                    "
                  >
                    <i class="ri-shopping-cart-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap custom-shadow for-dark-rounded-bg rounded-3 border bg-white px-4 mb-4"
          style="padding-top: 11px; padding-bottom: 11px"
        >
          <span class="fs-12 fw-medium">Showing 9 of 30 Results</span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item">
                <button class="page-link icon hover-bg" aria-label="Previous">
                  <i class="material-symbols-outlined">keyboard_arrow_left</i>
                </button>
              </li>
              <li class="page-item">
                <button class="page-link active">1</button>
              </li>
              <li class="page-item">
                <button class="page-link">2</button>
              </li>
              <li class="page-item">
                <button class="page-link">3</button>
              </li>
              <li class="page-item"><a class="page-link">4</a></li>
              <li class="page-item">
                <button class="page-link icon hover-bg" aria-label="Next">
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import icon1 from "@/assets/images/all-icon.svg";
import icon2 from "@/assets/images/electronics-icon2.svg";
import icon3 from "@/assets/images/clothing-icon2.svg";
import icon4 from "@/assets/images/beauty-icon.svg";
import icon5 from "@/assets/images/foods-icon.svg";
import image1 from "@/assets/images/product-36.png";
import image2 from "@/assets/images/product-37.png";
import image3 from "@/assets/images/product-38.png";
import image4 from "@/assets/images/product-39.png";
import image5 from "@/assets/images/product-40.png";
import image6 from "@/assets/images/product-41.png";
import image7 from "@/assets/images/product-42.png";
import image8 from "@/assets/images/product-43.png";
import image9 from "@/assets/images/product-44.png";

export default defineComponent({
  name: "CategoriesTab",
  setup() {
    const activeCategory = ref("all");

    const categories = [
      {
        id: "all",
        name: "All",
        icon: icon1,
      },
      {
        id: "electronics",
        name: "Electronics",
        icon: icon2,
      },
      {
        id: "clothing",
        name: "Clothing",
        icon: icon3,
      },
      {
        id: "beauty",
        name: "Beauty",
        icon: icon4,
      },
      {
        id: "foods",
        name: "Foods",
        icon: icon5,
      },
    ];
    const products = [
      {
        id: "1",
        name: "Apple iPhone 16",
        image: image1,
        category: "electronics",
        price: 799,
      },
      {
        id: "2",
        name: "Levi's 501",
        image: image2,
        category: "clothing",
        price: 89,
      },
      {
        id: "3",
        name: "Maybelline Lash",
        image: image3,
        category: "beauty",
        price: 29,
      },
      {
        id: "4",
        name: "Quaker Oats",
        image: image4,
        category: "foods",
        price: 99,
      },
      {
        id: "5",
        name: "Fitbit Charge",
        image: image5,
        category: "electronics",
        price: 179,
      },
      {
        id: "6",
        name: "Adidas Women",
        image: image6,
        category: "clothing",
        price: 85,
      },
      {
        id: "7",
        name: "Galaxy Tab",
        image: image7,
        category: "electronics",
        price: 649,
      },
      {
        id: "8",
        name: "H&M Basic",
        image: image8,
        category: "clothing",
        price: 20,
      },
      {
        id: "9",
        name: "L'Oréal Paris",
        image: image9,
        category: "beauty",
        price: 69,
      },
    ];

    const categoryCounts = computed(() => {
      const countMap: Record<string, number> = {};

      categories.forEach((category: { id: string | number }) => {
        countMap[category.id] = 0;
      });

      products.forEach((product: { category: string | number }) => {
        if (countMap[product.category] !== undefined) {
          countMap[product.category]++;
        }
      });

      countMap["all"] = products.length;

      return countMap;
    });

    const setActiveCategory = (categoryId: string) => {
      activeCategory.value = categoryId;
    };

    const getProductsByCategory = (categoryId: string) => {
      if (categoryId === "all") {
        return products;
      }
      return products.filter((product) => product.category === categoryId);
    };

    return {
      activeCategory,
      categories,
      products,
      setActiveCategory,
      getProductsByCategory,
      categoryCounts,
    };
  },
});
</script>
