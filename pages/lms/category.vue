<template>
 <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="Category" subTitle="LMS" />
  <div class="row justify-content-center">
    <!-- Form Section -->
    <div class="col-xxl-4 col-md-4">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h5 class="mb-3 border-bottom pb-2">{{ isEdit ? 'Edit Category' : 'Add New Category' }}</h5>
          
           <!-- Alert Message -->
          <div v-if="alertMessage" :class="['alert', alertClass]" role="alert">
            {{ alertMessage }}
          </div>

          <form @submit.prevent="handleSubmit">
            <!-- Name Field -->
            <div class="mb-3">
              <label class="form-label">Category Name</label>
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                placeholder="Enter Category name"
                :class="{ 'is-invalid': formErrors.name }"
              />
              <div v-if="formErrors.name" class="invalid-feedback">
                {{ formErrors.name }}
              </div>
            </div>

            <!-- Buttons -->
            <div class="d-flex justify-content-end gap-2">
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="resetForm"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary" :disabled="loading">
                {{ loading ? 'Saving...' : (isEdit ? 'Update' : 'Add') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Table Section -->
    <div class="col-xxl-8 col-md-8">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
            <div class="d-flex gap-2">
              <label class="form-label mb-0 me-2">Items per page:</label>
              <select v-model="itemsPerPage" class="form-select form-select-sm w-auto">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <input
              v-model="searchTerm"
              type="text"
              class="form-control w-auto"
              placeholder="Search by name"
            />
          </div>

          <!-- Data Table all-products-->
        <div class="default-table-area ">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category Name</th>
                  <th>Add By</th>
                  <th class="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading">
                  <td colspan="4" class="text-center">Loading...</td>
                </tr>
                <tr v-else-if="filteredItems.length === 0">
                  <td colspan="4" class="text-center">No records found</td>
                </tr>
                <tr v-else v-for="(item, index) in paginatedItems" :key="item._id">
                  <td>{{ startIndex + index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.add_by || '—' }}</td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-info me-2" @click="editInstitute(item)">Edit</button>
                    <button class="btn btn-sm btn-danger" @click="deleteInstitute(item._id)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>  
          <!-- Pagination Controls -->
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="fs-12 fw-medium">
              Showing {{ startIndex + 1 }} - {{ endIndex }} of {{ filteredItems.length }}
            </span>
            <div>
              <button class="btn btn-outline-secondary btn-sm me-2" :disabled="currentPage === 1" @click="prevPage">
                Prev
              </button>
              <button class="btn btn-outline-secondary btn-sm" :disabled="currentPage === totalPages" @click="nextPage">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>    
</template>


<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import type { Category } from '~/types/category';

const category = ref<Category[]>([]);
const loading = ref(false);
const searchTerm = ref("");
const itemsPerPage = ref(10);
const currentPage = ref(1);
const token = useCookie('token').value;


// Alert State
const alertMessage = ref("");
const alertClass = ref("alert-success");
const showAlert = (message: string, type = "success") => {
  alertMessage.value = message;
  alertClass.value = `alert-${type}`;
  setTimeout(() => (alertMessage.value = ""), 3000);
};
/* ------------ Fetch Data ------------ */
const fetchCategory = async () => {
  loading.value = true;
  try {
    const res = await $fetch('/api/category', { credentials: 'include' });
    category.value = res.data || [];
  } catch (error) {
    console.error('Fetch error:', error);
    showAlert("Failed to fetch data", "danger");
    category.value = [];
  } finally {
    loading.value = false;
  }
};
onMounted(() => fetchCategory());

/* ------------ Search + Pagination ------------ */
const filteredItems = computed(() =>
  category.value.filter(item =>
    item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value) || 1);
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredItems.value.slice(start, start + itemsPerPage.value);
});
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage.value, filteredItems.value.length));

const prevPage = () => { if (currentPage.value > 1) currentPage.value--; };
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++; };
watch(searchTerm, () => currentPage.value = 1);

/* ------------ Add/Edit Form ------------ */
const isEdit = ref(false);
const form = ref<{ name: string; id?: string }>({ name: "" });
const formErrors = ref<{ name?: string }>({});

const validateForm = () => {
  formErrors.value = {};
  if (!form.value.name.trim()) formErrors.value.name = "Name is required";
  return Object.keys(formErrors.value).length === 0;
};

const resetForm = () => {
  isEdit.value = false;
  form.value = { name: "" };
  formErrors.value = {};
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  loading.value = true;
  try {
    if (isEdit.value && form.value.id) {
      await $fetch(`/api/category/${form.value.id}`, {
        method: "PUT",
        body: { name: form.value.name },
        credentials: "include",
      });
       showAlert("Category updated successfully!", "success");
    } else {
      await $fetch("/api/category/add", {
        method: "POST",
        body: { name: form.value.name },
        credentials: "include",
        headers: { Authorization: `Bearer ${token}` },
      });
      showAlert("Category added successfully!", "success");
    }
    resetForm();
    fetchCategory();
  } catch (error) {
    console.error("Save Error:", error);
    showAlert("Failed to save Category", "danger");
  } finally {
    loading.value = false;
  }
};

/* ------------ Edit ------------ */
const editInstitute = (item: Category) => {
  isEdit.value = true;
  form.value = { name: item.name, id: item._id };
};

/* ------------ Delete ------------ */
const deleteInstitute = async (id: string) => {
  if (!confirm("Are you sure you want to delete this record?")) return;
  loading.value = true;
  try {
    await $fetch(`/api/category/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    });
    showAlert("Deleted successfully!", "warning");
    fetchCategory();
  } catch (error) {
    console.error("Delete Error:", error);
    showAlert("Failed to delete", "danger");
  } finally {
    loading.value = false;
  }
};
</script>


