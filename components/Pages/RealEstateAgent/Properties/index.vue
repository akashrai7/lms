<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-25">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
      >
        <form class="position-relative table-src-form me-0">
          <input
            type="text"
            class="form-control border-0"
            placeholder="Search here...."
            v-model="searchQuery"
            @input="filterProperties"
          />
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y text-secondary"
          >
            search
          </i>
        </form>
        <button
          class="btn btn-outline-primary fw-medium rounded-3 hover-bg"
          data-bs-toggle="modal"
          data-bs-target="#propertyModal"
        >
          <span class="d-flex align-items-center" style="gap: 5px">
            <i class="ri-add-line d-none d-sm-inline-block fs-20 lh-1"></i>
            <span>Add New Property</span>
          </span>
        </button>
      </div>

      <div class="default-table-area all-products px-20">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">
                  <div
                    class="form-check d-flex align-items-center"
                    style="gap: 10px"
                  >
                    <input
                      class="form-check-input position-relative top-1"
                      type="checkbox"
                      v-model="selectAll"
                      @change="toggleSelectAll"
                    />
                    <label class="position-relative fs-14">Code</label>
                  </div>
                </th>
                <th scope="col">
                  <span class="fs-14">Property</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Address</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Views</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Date</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Status</span>
                </th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="property in paginatedProperties" :key="property.id">
                <td class="text-body">
                  <div
                    class="form-check d-flex align-items-center"
                    style="gap: 10px"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="property.id"
                      v-model="selectedProperties"
                    />
                    <label class="position-relative top-2">
                      {{ property.code }}
                    </label>
                  </div>
                </td>
                <td>
                  <NuxtLink
                    to="/real-estate-agent/properties"
                    class="d-flex align-items-center"
                  >
                    <img
                      :src="property.imageUrl || getImageUrl(property.image)"
                      class="rounded-3"
                      style="width: 60px; height: 60px; object-fit: cover"
                      alt="property-image"
                      @error="handleImageError"
                    />
                    <div class="ms-2 ps-1">
                      <span class="fs-13 text-body mb-1 d-block">
                        {{ property.type }}
                      </span>
                      <h6 class="fw-medium fs-15 text-secondary mb-0">
                        {{ property.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-secondary">
                  <p style="max-width: 300px">{{ property.address }}</p>
                </td>
                <td class="text-secondary">
                  {{ property.views.toLocaleString() }}
                </td>
                <td class="text-secondary">{{ formatDate(property.date) }}</td>
                <td>
                  <span
                    :class="{
                      'd-inline-block border px-2 rounded-pill fs-12 fw-medium': true,
                      'bg-success-80 border-success-60 text-success-60':
                        property.status === 'Active',
                      'bg-danger-70 border-danger-60 text-danger-60':
                        property.status === 'Inactive',
                    }"
                  >
                    {{ property.status }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="viewProperty(property)"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      data-bs-toggle="modal"
                      data-bs-target="#propertyModal"
                      @click="editProperty(property)"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      @click="confirmDelete(property.id)"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="filteredProperties.length === 0">
                <td colspan="7" class="text-center py-4">
                  No properties found
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
        >
          <span class="fs-13">
            Showing {{ showingStart }} to {{ showingEnd }} of
            {{ filteredProperties.length }} Results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item">
                <button
                  class="page-link icon hover-bg"
                  :disabled="currentPage === 1"
                  @click="changePage(currentPage - 1)"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_left</i>
                </button>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page">
                <button
                  class="page-link"
                  :class="{ active: currentPage === page }"
                  @click="changePage(page)"
                >
                  {{ page }}
                </button>
              </li>
              <li class="page-item">
                <button
                  class="page-link icon hover-bg"
                  :disabled="currentPage === totalPages"
                  @click="changePage(currentPage + 1)"
                >
                  <i class="material-symbols-outlined">keyboard_arrow_right</i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Property Modal -->
      <div
        class="modal fade"
        id="propertyModal"
        tabindex="-1"
        aria-labelledby="propertyModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style="max-width: 550px"
        >
          <div class="modal-content rounded-0">
            <div class="modal-header border-0 p-4 border-bottom">
              <h1 class="modal-title fs-18">
                {{ isEditing ? "Edit Property" : "Add New Property" }}
              </h1>
              <button
                type="button"
                class="btn-close campaigns-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="resetForm"
              ></button>
            </div>
            <div class="modal-body p-4">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Code</label>
                      <input
                        type="text"
                        class="form-control h-60 border-border-color"
                        v-model="formData.code"
                        placeholder="TRZ-32"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Property Name</label>
                      <input
                        type="text"
                        class="form-control h-60 border-border-color"
                        v-model="formData.name"
                        placeholder="Golden Sun Room"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Property Type</label>
                      <input
                        type="text"
                        class="form-control h-60 border-border-color"
                        v-model="formData.type"
                        placeholder="Luxury Apartment"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Address</label>
                      <input
                        type="text"
                        class="form-control h-60 border-border-color"
                        v-model="formData.address"
                        placeholder="789 Northern Lights Drive, Calgary, AB"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Views</label>
                      <input
                        type="number"
                        class="form-control h-60 border-border-color"
                        v-model="formData.views"
                        placeholder="2012"
                        required
                        min="0"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Date</label>
                      <input
                        type="date"
                        class="form-control h-60 border-border-color"
                        v-model="formData.date"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Status</label>
                      <select
                        class="form-select form-control h-60"
                        v-model="formData.status"
                        required
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4 only-file-upload">
                      <label class="label text-secondary">
                        Upload Property Images
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
                              <span
                                class="text-primary text-decoration-underline"
                              >
                                Browse
                              </span>
                            </span>
                          </label>
                          <input
                            id="file-upload"
                            class="form__file bottom-0"
                            type="file"
                            @change="handleFileUpload"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div v-if="formData.imagePreview" class="mt-2">
                        <img
                          :src="formData.imagePreview"
                          class="rounded-2"
                          style="width: 50px; height: 50px; object-fit: cover"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-danger ms-2"
                          @click="removeImage"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex justify-content-end flex-wrap gap-3">
                      <button
                        type="button"
                        class="btn btn-danger py-2 px-4 fw-medium fs-16 text-white"
                        data-bs-dismiss="modal"
                        @click="resetForm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="btn btn-primary py-2 px-4 fw-medium fs-16"
                        data-bs-dismiss="modal"
                        :disabled="isSubmitting"
                      >
                        <span v-if="isSubmitting">
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Processing...
                        </span>
                        <span v-else>
                          {{ isEditing ? "Update" : "Create" }}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title">Confirm Delete</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                Are you sure you want to delete this property? This action
                cannot be undone.
              </p>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                @click="deleteProperty"
                :disabled="isDeleting"
              >
                <span v-if="isDeleting">
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Deleting...
                </span>
                <span v-else> Delete </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface Property {
  id: number;
  code: string;
  type: string;
  name: string;
  image: string;
  imageUrl: string;
  address: string;
  views: number;
  date: string;
  status: "Active" | "Inactive";
}

interface CustomFormData {
  id: number;
  code: string;
  type: string;
  name: string;
  image: string;
  imageUrl: string;
  address: string;
  views: number;
  date: string;
  status: string;
  imagePreview: string;
  imageFile: File | null;
}

import image1 from "@/assets/images/property-17.jpg";
import image2 from "@/assets/images/property-18.jpg";
import image3 from "@/assets/images/property-19.jpg";
import image4 from "@/assets/images/property-20.jpg";
import image5 from "@/assets/images/property-21.jpg";
import image6 from "@/assets/images/property-22.jpg";
import image7 from "@/assets/images/property-23.jpg";
import image8 from "@/assets/images/property-24.jpg";
import image9 from "@/assets/images/property-25.jpg";
import image10 from "@/assets/images/property-26.jpg";

export default defineComponent({
  name: "Properties",
  setup() {
    const properties = ref<Property[]>([
      {
        id: 1,
        code: "TRZ-32",
        type: "Luxury Apartment",
        name: "The Golden Haven",
        image: "property-17.jpg",
        imageUrl: image1,
        address: "123 Sunshine Boulevard, Vancouver, BC",
        views: 1450,
        date: "2025-11-12",
        status: "Active",
      },
      {
        id: 2,
        code: "TRZ-35",
        type: "High-End Villa",
        name: "Tranquil Meadows",
        image: "property-18.jpg",
        imageUrl: image2,
        address: "456 Whispering Pines Lane, Toronto, ON",
        views: 1890,
        date: "2025-11-10",
        status: "Active",
      },
      {
        id: 3,
        code: "TRZ-36",
        type: "Beachfront House",
        name: "Aurora Heights",
        image: "property-19.jpg",
        imageUrl: image3,
        address: "789 Northern Lights Drive, Calgary, AB",
        views: 1320,
        date: "2025-11-08",
        status: "Active",
      },
      {
        id: 4,
        code: "TRZ-37",
        type: "Mountain Cabin",
        name: "Crystal Cove Villas",
        image: "property-20.jpg",
        imageUrl: image4,
        address: "234 Seaside Avenue, Halifax, NS",
        views: 1124,
        date: "2025-11-10",
        status: "Inactive",
      },
      {
        id: 5,
        code: "TRZ-39",
        type: "Business Center",
        name: "Verdant Valley Estates",
        image: "property-21.jpg",
        imageUrl: image5,
        address: "567 Greenfield Circle, Winnipeg, MB",
        views: 1532,
        date: "2025-10-18",
        status: "Active",
      },
      {
        id: 6,
        code: "TRZ-42",
        type: "Conference & Event Venue",
        name: "Summit Business Hub",
        image: "property-22.jpg",
        imageUrl: image6,
        address: "890 Innovation Street, Ottawa, ON",
        views: 7721,
        date: "2025-10-17",
        status: "Active",
      },
      {
        id: 7,
        code: "TRZ-46",
        type: "Luxury Resort",
        name: "Pinnacle Plaza",
        image: "property-23.jpg",
        imageUrl: image7,
        address: "345 Cityscape Road, Edmonton, AB",
        views: 5214,
        date: "2025-10-13",
        status: "Inactive",
      },
      {
        id: 8,
        code: "TRZ-47",
        type: "Beachfront Resort",
        name: "The Nexus Tower",
        image: "property-24.jpg",
        imageUrl: image8,
        address: "123 Sunshine Boulevard, Vancouver, BC",
        views: 1450,
        date: "2025-11-12",
        status: "Active",
      },
      {
        id: 9,
        code: "TRZ-48",
        type: "Eco-Friendly Hotel",
        name: "Golden Sands Lodge",
        image: "property-25.jpg",
        imageUrl: image9,
        address: "456 Whispering Pines Lane, Toronto, ON",
        views: 1890,
        date: "2025-11-10",
        status: "Active",
      },
      {
        id: 10,
        code: "TRZ-49",
        type: "Boutique Hotel",
        name: "Azure Bay Inn",
        image: "property-26.jpg",
        imageUrl: image10,
        address: "789 Northern Lights Drive, Calgary, AB",
        views: 1320,
        date: "2025-11-08",
        status: "Active",
      },
    ]);

    const formData = ref<CustomFormData>({
      id: 0,
      code: "",
      type: "",
      name: "",
      image: "",
      imageUrl: "",
      address: "",
      views: 0,
      date: "",
      status: "Active",
      imagePreview: "",
      imageFile: null,
    });

    const isEditing = ref(false);
    const searchQuery = ref("");
    const selectedProperties = ref<number[]>([]);
    const selectAll = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = 8;
    const propertyToDelete = ref<number | null>(null);
    const isSubmitting = ref(false);
    const isDeleting = ref(false);

    const filteredProperties = computed(() => {
      if (!searchQuery.value.trim()) return properties.value;

      const query = searchQuery.value.toLowerCase().trim();
      return properties.value.filter(
        (property: {
          code: string;
          name: string;
          type: string;
          address: string;
          status: string;
        }) =>
          property.code.toLowerCase().includes(query) ||
          property.name.toLowerCase().includes(query) ||
          property.type.toLowerCase().includes(query) ||
          property.address.toLowerCase().includes(query) ||
          property.status.toLowerCase().includes(query)
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredProperties.value.length / itemsPerPage)
    );

    const paginatedProperties = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredProperties.value.slice(start, end);
    });

    const showingStart = computed(
      () => (currentPage.value - 1) * itemsPerPage + 1
    );

    const showingEnd = computed(() => {
      const end = currentPage.value * itemsPerPage;
      return Math.min(end, filteredProperties.value.length);
    });

    const getImageUrl = (imageName: string): string => {
      const imageMap: Record<string, string> = {
        "property-17.jpg": image1,
        "property-18.jpg": image2,
        "property-19.jpg": image3,
        "property-20.jpg": image4,
        "property-21.jpg": image5,
        "property-22.jpg": image6,
        "property-23.jpg": image7,
        "property-24.jpg": image8,
        "property-25.jpg": image9,
        "property-26.jpg": image10,
      };

      return imageMap[imageName] || image1;
    };

    const handleImageError = (event: Event) => {
      const img = event.target as HTMLImageElement;
      img.src = image1;
    };

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (!input.files || !input.files[0]) return;

      const file = input.files[0];

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file (JPEG, PNG, etc.)");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        alert("Image must be less than 2MB");
        return;
      }

      formData.value.imageFile = file;
      formData.value.image = file.name;

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          formData.value.imagePreview = e.target.result as string;
          formData.value.imageUrl = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    };

    const formatDate = (dateString: string): string => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const filterProperties = () => {
      currentPage.value = 1;
      selectedProperties.value = [];
      selectAll.value = false;
    };

    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const toggleSelectAll = () => {
      if (selectAll.value) {
        selectedProperties.value = paginatedProperties.value.map(
          (property: { id: any }) => property.id
        );
      } else {
        selectedProperties.value = [];
      }
    };

    const removeImage = () => {
      formData.value.imagePreview = "";
      formData.value.imageFile = null;
      formData.value.image = "";
      formData.value.imageUrl = "";
    };

    const resetForm = () => {
      formData.value = {
        id: 0,
        code: "",
        type: "",
        name: "",
        image: "",
        imageUrl: "",
        address: "",
        views: 0,
        date: "",
        status: "Active",
        imagePreview: "",
        imageFile: null,
      };
      isEditing.value = false;
      isSubmitting.value = false;

      const fileInput = document.getElementById(
        "file-upload"
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    };

    const submitForm = () => {
      if (isEditing.value) {
        updateProperty();
      } else {
        addProperty();
      }
    };

    const addProperty = async () => {
      isSubmitting.value = true;

      try {
        const newId =
          properties.value.length > 0
            ? Math.max(...properties.value.map((p: { id: any }) => p.id)) + 1
            : 1;

        const newProperty: Property = {
          id: newId,
          code: formData.value.code,
          type: formData.value.type,
          name: formData.value.name,
          image: formData.value.imageFile?.name || `property-${newId}.jpg`,
          imageUrl:
            formData.value.imagePreview || getImageUrl(`property-${newId}.jpg`),
          address: formData.value.address,
          views: formData.value.views,
          date: formData.value.date,
          status: formData.value.status as "Active" | "Inactive",
        };

        properties.value.unshift(newProperty);
        resetForm();
      } catch (error) {
        console.error("Error adding property:", error);
        alert("Failed to add property. Please try again.");
      } finally {
        isSubmitting.value = false;
      }
    };

    const updateProperty = async () => {
      isSubmitting.value = true;

      try {
        const index = properties.value.findIndex(
          (p: { id: any }) => p.id === formData.value.id
        );

        if (index !== -1) {
          const updatedProperty = {
            ...properties.value[index],
            code: formData.value.code,
            type: formData.value.type,
            name: formData.value.name,
            image:
              formData.value.imageFile?.name || properties.value[index].image,
            imageUrl:
              formData.value.imagePreview || properties.value[index].imageUrl,
            address: formData.value.address,
            views: formData.value.views,
            date: formData.value.date,
            status: formData.value.status as "Active" | "Inactive",
          };

          properties.value[index] = updatedProperty;
        }

        resetForm();
      } catch (error) {
        console.error("Error updating property:", error);
        alert("Failed to update property. Please try again.");
      } finally {
        isSubmitting.value = false;
      }
    };

    const editProperty = (property: Property) => {
      isEditing.value = true;
      formData.value = {
        id: property.id,
        code: property.code,
        type: property.type,
        name: property.name,
        image: property.image,
        imageUrl: property.imageUrl,
        address: property.address,
        views: property.views,
        date: property.date,
        status: property.status,
        imagePreview: property.imageUrl,
        imageFile: null,
      };
    };

    const confirmDelete = (id: number) => {
      propertyToDelete.value = id;
    };

    const deleteProperty = async () => {
      if (propertyToDelete.value === null) return;

      isDeleting.value = true;

      try {
        // Create a new array without the deleted property
        properties.value = properties.value.filter(
          (p: { id: any }) => p.id !== propertyToDelete.value
        );

        // Reset selection if the deleted property was selected
        selectedProperties.value = selectedProperties.value.filter(
          (id: any) => id !== propertyToDelete.value
        );

        // Adjust pagination if needed
        if (paginatedProperties.value.length === 0 && currentPage.value > 1) {
          currentPage.value = Math.max(1, currentPage.value - 1);
        }

        // Reset the delete target
        propertyToDelete.value = null;
      } catch (error) {
        console.error("Error deleting property:", error);
        alert("Failed to delete property. Please try again.");
      } finally {
        isDeleting.value = false;
      }
    };

    const viewProperty = (property: Property) => {
      console.log("Viewing property:", property);
      // In a real app, you would navigate to a detailed view
      // Example: router.push(`/properties/${property.id}`);
    };

    return {
      properties,
      formData,
      isEditing,
      searchQuery,
      selectedProperties,
      selectAll,
      currentPage,
      filteredProperties,
      paginatedProperties,
      totalPages,
      showingStart,
      showingEnd,
      isSubmitting,
      isDeleting,
      getImageUrl,
      formatDate,
      filterProperties,
      changePage,
      toggleSelectAll,
      handleFileUpload,
      removeImage,
      resetForm,
      handleImageError,
      submitForm,
      addProperty,
      editProperty,
      updateProperty,
      confirmDelete,
      deleteProperty,
      viewProperty,
    };
  },
});
</script>
