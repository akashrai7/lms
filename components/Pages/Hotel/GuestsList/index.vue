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
            @input="filterGuests"
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
          data-bs-target="#exampleModal2"
          @click="openAddModal"
        >
          <span class="d-flex align-items-center" style="gap: 5px">
            <i class="ri-add-line d-none d-sm-inline-block fs-20 lh-1"></i>
            <span>Add New Room</span>
          </span>
        </button>
      </div>

      <div class="default-table-area all-products">
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
                  <span class="fs-14">Guest Name</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Check In</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Check Out</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Room</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Total Bill</span>
                </th>
                <th scope="col">
                  <span class="fs-14">Payment Status</span>
                </th>
                <th scope="col" class="text-end">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="guest in paginatedGuests" :key="guest.id">
                <td class="text-body">
                  <div
                    class="form-check d-flex align-items-center"
                    style="gap: 10px"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="selectedGuests"
                      :value="guest.id"
                    />
                    <label class="position-relative top-2 text-secondary">
                      #{{ guest.id.toString().padStart(3, "0") }}
                    </label>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center" style="gap: 12px">
                    <img
                      :src="guest.avatar"
                      class="rounded-circle wh-40"
                      alt="user"
                    />
                    <h6 class="fw-semibold fs-14 text-secondary mb-0">
                      {{ guest.name }}
                    </h6>
                  </div>
                </td>
                <td class="text-secondary">{{ formatDate(guest.checkIn) }}</td>
                <td class="text-secondary">{{ formatDate(guest.checkOut) }}</td>
                <td class="text-body">{{ guest.room }}</td>
                <td class="text-secondary">
                  ${{ guest.totalBill.toFixed(2) }}
                </td>
                <td>
                  <span
                    class="d-inline-block border px-2 rounded-pill fs-12 fw-medium"
                    :class="getStatusClass(guest.paymentStatus)"
                  >
                    {{ guest.paymentStatus }}
                  </span>
                </td>
                <td>
                  <div
                    class="d-flex align-items-center gap-1 justify-content-end"
                  >
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="viewGuest(guest.id)"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      @click="editGuest(guest.id)"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="deleteGuest(guest.id)"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        delete
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap"
        >
          <span class="fs-13">
            Showing {{ paginatedGuests.length }} of
            {{ filteredGuests.length }} Results
          </span>

          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0 justify-content-center">
              <li class="page-item">
                <button
                  class="page-link icon hover-bg"
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
                  class="page-link icon hover-bg"
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

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModal2Label"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style="max-width: 550px"
        >
          <div class="modal-content rounded-0">
            <div class="modal-header border-0 p-4 border-bottom">
              <h1 class="modal-title fs-18" id="exampleModal2Label">
                {{ isEditing ? "Edit Guest" : "Add New Guest" }}
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
                        placeholder="#001"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Guest Name</label>
                      <input
                        type="text"
                        class="form-control h-60 border-border-color"
                        v-model="formData.name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Check In</label>
                      <input
                        type="date"
                        class="form-control h-60 border-border-color"
                        v-model="formData.checkIn"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Check Out</label>
                      <input
                        type="date"
                        class="form-control h-60 border-border-color"
                        v-model="formData.checkOut"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Room</label>
                      <input
                        type="text"
                        class="form-control h-60 border-border-color"
                        v-model="formData.room"
                        placeholder="GO-12"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Total Bill</label>
                      <input
                        type="number"
                        class="form-control h-60 border-border-color"
                        v-model="formData.totalBill"
                        placeholder="250.00"
                        step="0.01"
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Payment Status</label>
                      <select
                        class="form-select form-control h-60"
                        v-model="formData.paymentStatus"
                        required
                      >
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4 only-file-upload">
                      <label class="label text-secondary">Avatar</label>
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
                      <div v-if="formData.avatarPreview" class="mt-2">
                        <img
                          :src="formData.avatarPreview"
                          class="rounded-circle wh-40"
                          alt="Preview"
                        />
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
                      >
                        <i class="ri-add-line text-white fw-medium"></i>
                        {{ isEditing ? "Update" : "Create" }}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import image1 from "@/assets/images/user-1.jpg";
import image2 from "@/assets/images/user-2.jpg";
import image3 from "@/assets/images/user-3.jpg";
import image4 from "@/assets/images/user-4.jpg";
import image5 from "@/assets/images/user-5.jpg";
import image6 from "@/assets/images/user-185.jpg";
import image7 from "@/assets/images/user-186.jpg";
import image8 from "@/assets/images/user-187.jpg";
import image9 from "@/assets/images/user-188.jpg";
import image10 from "@/assets/images/user-189.jpg";

interface Guest {
  id: number;
  name: string;
  code: string;
  avatar: string;
  checkIn: string;
  checkOut: string;
  room: string;
  totalBill: number;
  paymentStatus: "Completed" | "Pending" | "Failed";
}

interface FormData {
  id: number;
  code: string;
  name: string;
  avatar: string;
  avatarPreview?: string;
  checkIn: string;
  checkOut: string;
  room: string;
  totalBill: number;
  paymentStatus: "Completed" | "Pending" | "Failed";
}

export default defineComponent({
  name: "GuestsList",
  setup() {
    const guests = ref<Guest[]>([
      {
        id: 1,
        code: "#001",
        name: "Joanna Watson",
        avatar: image1,
        checkIn: "2025-11-01T09:42:00",
        checkOut: "2025-11-03T09:42:00",
        room: "G0-12",
        totalBill: 166.0,
        paymentStatus: "Completed",
      },
      {
        id: 2,
        code: "#002",
        name: "Orion Vale",
        avatar: image2,
        checkIn: "2025-11-02T10:08:00",
        checkOut: "2025-11-05T10:08:00",
        room: "L1-15",
        totalBill: 158.5,
        paymentStatus: "Pending",
      },
      {
        id: 3,
        code: "#003",
        name: "Seraphina Nyx",
        avatar: image3,
        checkIn: "2025-11-03T11:12:00",
        checkOut: "2025-11-07T11:12:00",
        room: "L2-27",
        totalBill: 250.5,
        paymentStatus: "Failed",
      },
      {
        id: 4,
        code: "#004",
        name: "Cassian Rhys",
        avatar: image4,
        checkIn: "2025-10-30T10:32:00",
        checkOut: "2025-11-01T10:32:00",
        room: "G0-15",
        totalBill: 313.99,
        paymentStatus: "Completed",
      },
      {
        id: 5,
        code: "#005",
        name: "Aurelia Dawn",
        avatar: image5,
        checkIn: "2025-10-27T13:15:00",
        checkOut: "2025-10-30T13:15:00",
        room: "L3-32",
        totalBill: 514.75,
        paymentStatus: "Completed",
      },
      {
        id: 6,
        code: "#006",
        name: "Lucien Drake",
        avatar: image6,
        checkIn: "2025-10-18T12:18:00",
        checkOut: "2025-10-21T12:18:00",
        room: "G0-17",
        totalBill: 215.99,
        paymentStatus: "Completed",
      },
      {
        id: 7,
        code: "#007",
        name: "Elara Quinn",
        avatar: image7,
        checkIn: "2025-10-15T20:23:00",
        checkOut: "2025-10-20T20:23:00",
        room: "L1-19",
        totalBill: 216.5,
        paymentStatus: "Pending",
      },
      {
        id: 8,
        code: "#008",
        name: "Evander Cole",
        avatar: image8,
        checkIn: "2025-10-14T21:14:00",
        checkOut: "2025-10-18T21:14:00",
        room: "G0-11",
        totalBill: 112.99,
        paymentStatus: "Failed",
      },
      {
        id: 9,
        code: "#009",
        name: "Isolde Faye",
        avatar: image9,
        checkIn: "2025-09-05T19:37:00",
        checkOut: "2025-09-10T19:37:00",
        room: "L2-24",
        totalBill: 513.5,
        paymentStatus: "Completed",
      },
      {
        id: 10,
        code: "#010",
        name: "Theo Alistair",
        avatar: image10,
        checkIn: "2025-09-01T09:42:00",
        checkOut: "2025-09-02T09:42:00",
        room: "L3-30",
        totalBill: 115.25,
        paymentStatus: "Completed",
      },
    ]);

    // Form state
    const formData = ref<FormData>({
      id: 0,
      name: "",
      code: "",
      avatar: "",
      checkIn: "",
      checkOut: "",
      room: "",
      totalBill: 0,
      paymentStatus: "Completed",
    });

    const isEditing = ref(false);
    const searchQuery = ref("");
    const selectedGuests = ref<number[]>([]);
    const selectAll = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = 8;

    // Computed properties
    const filteredGuests = computed(() => {
      if (!searchQuery.value) return guests.value;
      return guests.value.filter(
        (guest: { name: string; room: string; paymentStatus: string }) =>
          guest.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          guest.room.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          guest.paymentStatus
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredGuests.value.length / itemsPerPage)
    );

    const paginatedGuests = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredGuests.value.slice(start, end);
    });

    // Methods
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    const getStatusClass = (status: string) => {
      switch (status) {
        case "Completed":
          return "bg-success-80 border-success-60 text-success-60";
        case "Pending":
          return "bg-primary-div-60 border-primary-div-50 text-primary-div-50";
        case "Failed":
          return "bg-danger-70 border-danger-80 text-danger-80";
        default:
          return "";
      }
    };

    const filterGuests = () => {
      currentPage.value = 1; // Reset to first page when filtering
    };

    const toggleSelectAll = () => {
      if (selectAll.value) {
        selectedGuests.value = paginatedGuests.value.map(
          (guest: { id: any }) => guest.id
        );
      } else {
        selectedGuests.value = [];
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const openAddModal = () => {
      resetForm();
      isEditing.value = false;
    };

    const viewGuest = (id: number) => {
      const guest = guests.value.find((g: { id: number }) => g.id === id);
      if (guest) {
        // Implement view logic or open a view-only modal
        console.log("Viewing guest:", guest);
      }
    };

    const editGuest = (id: number) => {
      const guest = guests.value.find((g: { id: number }) => g.id === id);
      if (guest) {
        formData.value = {
          ...guest,
          code: guest.code, // Ensure the 'code' property is included
          avatarPreview: guest.avatar,
        };
        isEditing.value = true;
      }
    };

    const deleteGuest = (id: number) => {
      if (confirm("Are you sure you want to delete this guest?")) {
        guests.value = guests.value.filter(
          (guest: { id: number }) => guest.id !== id
        );
      }
    };

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          formData.value.avatarPreview = e.target?.result as string;
          // In a real app, you would upload the file to a server here
          // For demo purposes, we'll just store the preview
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    const submitForm = () => {
      if (isEditing.value) {
        // Update existing guest
        const index = guests.value.findIndex(
          (g: { id: any }) => g.id === formData.value.id
        );
        if (index !== -1) {
          guests.value[index] = {
            ...formData.value,
            avatar: formData.value.avatarPreview || formData.value.avatar,
          };
        }
      } else {
        // Add new guest
        const newId =
          Math.max(...guests.value.map((g: { id: any }) => g.id), 0) + 1;
        guests.value.push({
          ...formData.value,
          id: newId,
          avatar: formData.value.avatarPreview || "",
        });
      }

      resetForm();
    };

    const resetForm = () => {
      formData.value = {
        id: 0,
        code: "",
        name: "",
        avatar: "",
        checkIn: "",
        checkOut: "",
        room: "",
        totalBill: 0,
        paymentStatus: "Completed",
      };
      isEditing.value = false;
    };

    return {
      guests,
      formData,
      isEditing,
      searchQuery,
      selectedGuests,
      selectAll,
      currentPage,
      filteredGuests,
      paginatedGuests,
      totalPages,
      formatDate,
      getStatusClass,
      filterGuests,
      toggleSelectAll,
      prevPage,
      nextPage,
      goToPage,
      openAddModal,
      viewGuest,
      editGuest,
      deleteGuest,
      handleFileUpload,
      submitForm,
      resetForm,
    };
  },
});
</script>
