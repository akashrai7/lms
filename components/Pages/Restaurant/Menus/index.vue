<template>
  <div
    class="menus-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
  >
    <div
      class="trezo-card-header d-sm-flex align-items-center justify-content-between"
    >
      <div class="trezo-card-title">
        <form class="search-box position-relative">
          <label class="text-black">
            <i class="material-symbols-outlined"> search </i>
          </label>
          <input
            type="text"
            class="input-search d-block w-100 border-radius"
            placeholder="Search here....."
            v-model="searchQuery"
            @input="filterMenus"
          />
        </form>
      </div>
      <div class="trezo-card-subtitle">
        <button
          class="add-btn d-inline-block transition fw-medium border-radius"
          type="button"
          @click="toggleAddPopup"
        >
          <span class="d-inline-block position-relative">
            <i class="material-symbols-outlined"> add </i>
            Add New Dish
          </span>
        </button>
      </div>
    </div>

    <div class="trezo-card-content">
      <div class="basic-table table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="toggleAllCheckboxes"
                    :checked="allItemsSelected"
                  />
                </div>
              </th>
              <th scope="col" class="fw-bold">Code</th>
              <th scope="col" class="fw-bold">Item</th>
              <th scope="col" class="fw-bold">Price</th>
              <th scope="col" class="fw-bold">Ingredients</th>
              <th scope="col" class="fw-bold">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="menu in paginatedMenus" :key="menu.id">
              <td>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="selectedItems"
                    :value="menu.id"
                  />
                </div>
              </td>
              <td class="fw-semibold text-body">
                {{ menu.code }}
              </td>
              <td>
                <div class="employee-info d-flex align-items-center">
                  <div class="img">
                    <img :alt="menu.name" :src="menu.image" />
                  </div>
                  <div>
                    <NuxtLink
                      to="/restaurant/dish-details"
                      class="d-block fw-semibold"
                    >
                      {{ menu.name }}
                    </NuxtLink>
                  </div>
                </div>
              </td>
              <td class="fw-semibold text-body">
                {{ formatPrice(menu.price) }}
              </td>
              <td class="fw-semibold text-body">
                {{ menu.ingredients }}
              </td>
              <td>
                <div
                  class="action-buttons d-flex justify-content-end align-items-center"
                >
                  <NuxtLink
                    to="/restaurant/dish-details"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> visibility </i>
                  </NuxtLink>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                    @click="editMenu(menu)"
                  >
                    <i class="material-symbols-outlined"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                    @click="deleteMenu(menu.id)"
                  >
                    <i class="material-symbols-outlined"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="filteredMenus.length === 0">
              <td colspan="6" class="text-center py-4">
                No menu items found matching your search.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
      >
        <span class="fs-12 fw-medium">
          Showing {{ startIndex + 1 }} to {{ endIndex }} of
          {{ filteredMenus.length }} Results
        </span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <button
                class="page-link icon"
                aria-label="Previous"
                @click="prevPage"
                :disabled="currentPage === 1"
              >
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page">
              <button
                class="page-link"
                :class="{ active: page === currentPage }"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
            </li>
            <li class="page-item">
              <button
                class="page-link icon"
                aria-label="Next"
                @click="nextPage"
                :disabled="currentPage === totalPages"
              >
                <i class="material-symbols-outlined">keyboard_arrow_right</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- Add New Popup -->
  <div class="add-new-popup" :class="{ active: showAddPopup }">
    <div class="popup-dialog">
      <div
        class="trezo-card w-100 border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="trezo-card-header d-flex align-items-center justify-content-between"
        >
          <div class="trezo-card-title">
            <h5 class="mb-0">Add New Dish</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              @click="toggleAddPopup"
              class="p-0 border-0 lh-1 bg-transparent transition"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>
        <div class="trezo-card-content">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Dish Code
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. #3215"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. Parsley Chicken"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. $12.50"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Calorie
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. 3215 Kcal"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Carbs
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. 525 gm"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Protein
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. 125 gm"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Fibres
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. 15 gm"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Fat
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. 25 gm"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Vitamins
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. 13 gm"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Sugar
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. 214 gm"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Minerals
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. 5 gm"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Ingredients Details
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E.g. Parsley, chicken, mozzarella, buffalo sauce"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Order In Queue
                </label>
                <input type="text" class="form-control" placeholder="E.g. 17" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Upload Item Images
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
              @click="toggleAddPopup"
              class="warn d-inline-block fw-medium border-0 border-radius transition"
            >
              Cancel
            </button>
            <button
              class="primary d-inline-block fw-medium border-0 border-radius transition"
            >
              <span class="position-relative d-inline-block">
                <i class="material-symbols-outlined"> add </i>
                Add Dish
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Popup -->
  <div class="add-new-popup" :class="{ active: showEditPopup }">
    <div class="popup-dialog">
      <div
        class="trezo-card w-100 border-radius d-block bg-white border-0 shadow-none"
      >
        <div
          class="trezo-card-header d-flex align-items-center justify-content-between"
        >
          <div class="trezo-card-title">
            <h5 class="mb-0">Edit Dish</h5>
          </div>
          <div class="trezo-card-subtitle">
            <button
              @click="toggleEditPopup"
              class="p-0 border-0 lh-1 bg-transparent transition"
            >
              <i class="ri-close-fill"></i>
            </button>
          </div>
        </div>
        <div class="trezo-card-content">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Dish Code
                </label>
                <input type="text" class="form-control" value="#3215" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  value="Parsley Chicken"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Price
                </label>
                <input type="text" class="form-control" value="$12.50" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Calorie
                </label>
                <input type="text" class="form-control" value="3215 Kcal" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Carbs
                </label>
                <input type="text" class="form-control" value="525 gm" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Protein
                </label>
                <input type="text" class="form-control" value="125 gm" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Fibres
                </label>
                <input type="text" class="form-control" value="15 gm" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Fat
                </label>
                <input type="text" class="form-control" value="25 gm" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Vitamins
                </label>
                <input type="text" class="form-control" value="13 gm" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Sugar
                </label>
                <input type="text" class="form-control" value="214 gm" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Minerals
                </label>
                <input type="text" class="form-control" value="5 gm" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Ingredients Details
                </label>
                <input
                  type="text"
                  class="form-control"
                  value="Parsley, chicken, mozzarella, buffalo sauce"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Order In Queue
                </label>
                <input type="text" class="form-control" value="17" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="main-label d-block fw-medium text-black">
                  Upload Item Images
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
              @click="toggleEditPopup"
              class="warn d-inline-block fw-medium border-0 border-radius transition"
            >
              Cancel
            </button>
            <button
              @click="updateMenuItem"
              class="primary d-inline-block fw-medium border-0 border-radius transition"
            >
              <span class="position-relative d-inline-block">
                <i class="material-symbols-outlined"> add </i>
                Save
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/restaurant/menu1.png";
import image2 from "@/assets/images/restaurant/menu2.png";
import image3 from "@/assets/images/restaurant/menu3.png";
import image4 from "@/assets/images/restaurant/menu4.png";
import image5 from "@/assets/images/restaurant/menu5.png";
import image6 from "@/assets/images/restaurant/menu6.png";
import image7 from "@/assets/images/restaurant/menu7.png";
import image8 from "@/assets/images/restaurant/menu8.png";
import image9 from "@/assets/images/restaurant/menu9.png";
import image10 from "@/assets/images/restaurant/menu10.png";

interface MenuItem {
  id: number;
  code: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
  // Add other fields that match your form
  calorie?: string;
  carbs?: string;
  protein?: string;
  fibres?: string;
  fat?: string;
  vitamins?: string;
  sugar?: string;
  minerals?: string;
  orderInQueue?: string;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Menus",
  setup() {
    const menus = ref<MenuItem[]>([
      {
        id: 1,
        code: "#001",
        name: "Buffalo Chicken",
        price: 16.0,
        ingredients: "pan-seared chicken, lemon zest, garlic butter, parsley",
        image: image1,
      },
      {
        id: 2,
        code: "#002",
        name: "Chicken Carbonara Spaghetti",
        price: 15.5,
        ingredients: "grilled chicken, honey mustard glaze, spinach, garlic",
        image: image2,
      },
      {
        id: 3,
        code: "#003",
        name: "Chicken Piccata Spaghetti",
        price: 14.5,
        ingredients: "shredded chicken, buffalo sauce, ranch dressing",
        image: image3,
      },
      {
        id: 4,
        code: "#004",
        name: "Thai Peanut Chicken Spaghetti",
        price: 13.99,
        ingredients:
          "spaghetti, chicken, crispy bacon, egg yolk, Parmesan, cream",
        image: image4,
      },
      {
        id: 5,
        code: "#005",
        name: "Chicken Bolognese Spaghetti",
        price: 14.75,
        ingredients: "pan-fried chicken, capers, white wine sauce, lemon",
        image: image5,
      },
      {
        id: 6,
        code: "#006",
        name: "Mediterranean Chicken Spaghetti",
        price: 15.99,
        ingredients: "grilled chicken, olives, sun-dried tomatoes, feta",
        image: image6,
      },
      {
        id: 7,
        code: "#007",
        name: "Chicken Parmesan Spaghetti",
        price: 16.5,
        ingredients: "Breaded chicken cutlets, marinara sauce, spaghetti",
        image: image7,
      },
      {
        id: 8,
        code: "#008",
        name: "Chicken and Mushroom Spaghetti",
        price: 12.99,
        ingredients: "Spaghetti, chicken slices, sautéed mushrooms, garlic",
        image: image8,
      },
      {
        id: 9,
        code: "#009",
        name: "Teriyaki Chicken Spaghetti Stir-Fry",
        price: 13.5,
        ingredients:
          "chicken strips, teriyaki sauce, bell peppers, sesame seeds",
        image: image9,
      },
      {
        id: 10,
        code: "#010",
        name: "Chicken Fajita Spaghetti",
        price: 15.25,
        ingredients: "chicken, fajita seasoning, bell peppers",
        image: image10,
      },
      {
        id: 11,
        code: "#011",
        name: "Spicy Arrabbiata Spaghetti",
        price: 12.5,
        ingredients: "tomato sauce, chili flakes, garlic, parsley",
        image: image1,
      },
      {
        id: 12,
        code: "#012",
        name: "Creamy Garlic Mushroom Spaghetti",
        price: 13.75,
        ingredients: "mushrooms, garlic, cream sauce, Parmesan",
        image: image2,
      },
    ]);

    // Search functionality
    const searchQuery = ref("");
    const filteredMenus = ref<MenuItem[]>(menus.value);

    const filterMenus = () => {
      if (!searchQuery.value) {
        filteredMenus.value = menus.value;
        return;
      }

      const query = searchQuery.value.toLowerCase();
      filteredMenus.value = menus.value.filter(
        (menu: { name: string; ingredients: string; code: string }) =>
          menu.name.toLowerCase().includes(query) ||
          menu.ingredients.toLowerCase().includes(query) ||
          menu.code.toLowerCase().includes(query)
      );

      // Reset to first page when searching
      currentPage.value = 1;
    };

    // Pagination
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const selectedItems = ref<number[]>([]);

    const showAddPopup = ref(false);
    const showEditPopup = ref(false);
    const currentMenuItem = ref<MenuItem | null>(null);
    const newMenuItem = ref<MenuItem>({
      id: 0,
      code: "",
      name: "",
      price: 0,
      ingredients: "",
      image: "",
      // Initialize other fields
      calorie: "",
      carbs: "",
      protein: "",
      fibres: "",
      fat: "",
      vitamins: "",
      sugar: "",
      minerals: "",
      orderInQueue: "",
    });

    // Toggle methods
    const toggleAddPopup = () => {
      showAddPopup.value = !showAddPopup.value;
      if (showAddPopup.value) {
        // Reset form when opening
        newMenuItem.value = {
          id: 0,
          code: "",
          name: "",
          price: 0,
          ingredients: "",
          image: "",
          // Reset other fields
          calorie: "",
          carbs: "",
          protein: "",
          fibres: "",
          fat: "",
          vitamins: "",
          sugar: "",
          minerals: "",
          orderInQueue: "",
        };
      }
    };

    const toggleEditPopup = () => {
      showEditPopup.value = !showEditPopup.value;
    };

    // Edit method
    const editMenu = (menu: MenuItem) => {
      currentMenuItem.value = { ...menu };
      showEditPopup.value = true;
    };

    // Update menu item
    const updateMenuItem = () => {
      if (!currentMenuItem.value) return;

      const index = menus.value.findIndex(
        (m: { id: any }) => m.id === currentMenuItem.value?.id
      );
      if (index !== -1) {
        menus.value[index] = { ...currentMenuItem.value };
        filterMenus(); // Refresh the list
        toggleEditPopup(); // Close the popup
      }
    };

    // Delete method (updated to use ref)
    const deleteMenu = (id: number) => {
      if (confirm("Are you sure you want to delete this menu item?")) {
        menus.value = menus.value.filter(
          (menu: { id: number }) => menu.id !== id
        );
        filterMenus(); // Refresh filtered list
      }
    };

    const totalPages = computed(() =>
      Math.ceil(filteredMenus.value.length / itemsPerPage.value)
    );

    const paginatedMenus = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredMenus.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );

    const endIndex = computed(() =>
      Math.min(
        currentPage.value * itemsPerPage.value,
        filteredMenus.value.length
      )
    );

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    // Checkbox functionality
    const allItemsSelected = computed(() => {
      if (paginatedMenus.value.length === 0) return false;
      return paginatedMenus.value.every((menu: { id: any }) =>
        selectedItems.value.includes(menu.id)
      );
    });

    const toggleAllCheckboxes = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        // Add all visible items to selection
        paginatedMenus.value.forEach((menu: { id: any }) => {
          if (!selectedItems.value.includes(menu.id)) {
            selectedItems.value.push(menu.id);
          }
        });
      } else {
        // Remove all visible items from selection
        selectedItems.value = selectedItems.value.filter(
          (id: any) =>
            !paginatedMenus.value.some((menu: { id: any }) => menu.id === id)
        );
      }
    };

    // Format price with currency
    const formatPrice = (price: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(price);
    };

    return {
      menus,
      searchQuery,
      filteredMenus,
      filterMenus,
      paginatedMenus,
      currentPage,
      totalPages,
      startIndex,
      endIndex,
      goToPage,
      nextPage,
      prevPage,
      selectedItems,
      allItemsSelected,
      toggleAllCheckboxes,
      showAddPopup,
      showEditPopup,
      formatPrice,
      editMenu,
      deleteMenu,
      updateMenuItem,
      toggleEditPopup,
      toggleAddPopup,
    };
  },
});
</script>

<style lang="scss" scoped>
.menus-card {
  .trezo-card-content {
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
                bottom: 13px;
                top: 0;
              }
              .form-check {
                min-height: auto;
                font-size: 12px;
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
                top: 13px;
                bottom: 13px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 30px;
                }
                a {
                  font-size: var(--fontSize);
                }
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
              }
            }
          }
        }
      }
    }
    .trezo-card-pagination {
      border-width: 0;
      border-radius: 0;
      padding: {
        left: 0;
        right: 0;
        bottom: 0;
        top: 13px;
      }
      p {
        font: {
          size: 12px;
          weight: 500;
        }
      }
    }
  }
}
.add-new-popup {
  .popup-dialog {
    max-width: 800px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .add-new-popup {
    .popup-dialog {
      max-width: 400px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .add-new-popup {
    .popup-dialog {
      max-width: 720px;
    }
  }
}
</style>
