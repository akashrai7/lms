<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-25">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4"
      >
        <form class="position-relative table-src-form me-0">
          <input
            type="text"
            v-model="searchQuery"
            class="form-control border-0"
            placeholder="Search here...."
            @input="filterRooms"
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
        >
          <span class="d-flex align-items-center" style="gap: 5px">
            <i class="ri-add-line d-none d-sm-inline-block fs-20 lh-1"></i>
            <span>Add New Room</span>
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
                <th scope="col"><span class="fs-14">Room Name</span></th>
                <th scope="col"><span class="fs-14">Bed Type</span></th>
                <th scope="col"><span class="fs-14">Floor</span></th>
                <th scope="col"><span class="fs-14">Facilities</span></th>
                <th scope="col"><span class="fs-14">Rate</span></th>
                <th scope="col"><span class="fs-14">Status</span></th>
                <th scope="col" class="text-end"></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="room in paginatedRooms" :key="room.id">
                <td class="text-body">
                  <div
                    class="form-check d-flex align-items-center"
                    style="gap: 10px"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="selectedRooms"
                      :value="room.id"
                    />
                    <label class="position-relative top-2">
                      {{ room.code }}
                    </label>
                  </div>
                </td>
                <td>
                  <NuxtLink
                    to="/hotel/room-details"
                    class="d-flex align-items-center"
                  >
                    <img
                      :src="room.image"
                      class="rounded-3"
                      style="width: 60px"
                      :alt="room.name"
                    />
                    <div class="ms-2 ps-1">
                      <h6 class="fw-medium fs-15 text-secondary mb-1">
                        {{ room.name }}
                      </h6>
                      <span class="fs-13 text-body">{{ room.hotel }}</span>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-secondary">{{ room.bedType }}</td>
                <td class="text-secondary">{{ room.floor }}</td>
                <td class="text-body">
                  <p style="max-width: 300px">
                    {{ room.facilities.join(", ") }}
                  </p>
                </td>
                <td class="text-secondary">${{ room.rate }}/night</td>
                <td>
                  <span
                    :class="`d-inline-block border px-2 rounded-pill fs-12 fw-medium ${
                      room.status === 'Available'
                        ? 'bg-success-80 border-success-60 text-success-60'
                        : 'bg-danger-70 border-danger-60 text-danger-60'
                    }`"
                  >
                    {{ room.status }}
                  </span>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        visibility
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      @click="editRoom(room)"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                      @click="deleteRoom(room.id)"
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
            Showing {{ showingFrom }}-{{ showingTo }} of
            {{ filteredRooms.length }} Results
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
                  :class="{ active: currentPage === page }"
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

      <!-- Add/Edit Room Modal -->
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
                {{ isEditing ? "Edit Room" : "Add New Room" }}
              </h1>
              <button
                type="button"
                class="btn-close campaigns-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body p-4">
              <form @submit.prevent="saveRoom">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Code</label>
                      <input
                        type="text"
                        v-model="form.code"
                        class="form-control h-60 border-border-color"
                        placeholder="TRZ-32"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Room Name</label>
                      <input
                        type="text"
                        v-model="form.name"
                        class="form-control h-60 border-border-color"
                        placeholder="Golden Sun Room"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Level</label>
                      <input
                        type="text"
                        v-model="form.floor"
                        class="form-control h-60 border-border-color"
                        placeholder="L2-24"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Rate</label>
                      <input
                        type="number"
                        v-model="form.rate"
                        class="form-control h-60 border-border-color"
                        placeholder="157"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Bed Type</label>
                      <select
                        v-model="form.bedType"
                        class="form-select form-control h-60"
                        required
                      >
                        <option value="Single Bed">Single Bed</option>
                        <option value="Double Bed">Double Bed</option>
                        <option value="Master Bed">Master Bed</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Status</label>
                      <select
                        v-model="form.status"
                        class="form-select form-control h-60"
                        required
                      >
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label text-secondary">Facilities</label>
                      <textarea
                        v-model="form.facilitiesText"
                        class="form-control h-60 border-border-color"
                        placeholder="High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4 only-file-upload">
                      <label class="label text-secondary">
                        Upload Room Images
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
                            type="file"
                            id="file-upload"
                            class="d-none"
                            @change="handleImageUpload"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div v-if="form.image" class="mt-2">
                        <img
                          :src="form.image"
                          class="preview-image"
                          style="max-width: 100px; max-height: 100px"
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
import { defineComponent, ref, computed, onMounted } from "vue";

import image1 from "@/assets/images/room-5.jpg";
import image2 from "@/assets/images/room-6.jpg";
import image3 from "@/assets/images/room-7.jpg";
import image4 from "@/assets/images/room-8.jpg";
import image5 from "@/assets/images/room-9.jpg";
import image6 from "@/assets/images/room-1.jpg";
import image7 from "@/assets/images/room-2.jpg";
import image8 from "@/assets/images/room-3.jpg";
import image9 from "@/assets/images/room-4.jpg";

interface Room {
  id: number;
  code: string;
  name: string;
  hotel: string;
  bedType: string;
  floor: string;
  facilities: string[];
  rate: number;
  status: string;
  image: string;
}

export default defineComponent({
  name: "RoomsList",
  setup() {
    const rooms = ref<Room[]>([
      {
        id: 1,
        code: "TRZ-32",
        name: "Serenity Suite",
        hotel: "Elysian Grand",
        bedType: "Double Bed",
        floor: "G-02",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 157,
        status: "Available",
        image: image1,
      },
      {
        id: 2,
        code: "TRZ-35",
        name: "Cozy Book Nook",
        hotel: "Celestial Haven",
        bedType: "Single Bed",
        floor: "G-01",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 146,
        status: "Available",
        image: image2,
      },
      {
        id: 3,
        code: "TRZ-36",
        name: "Velvet Orchid",
        hotel: "Opulent Orchid",
        bedType: "Master Bed",
        floor: "L1-15",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 125,
        status: "Available",
        image: image3,
      },
      {
        id: 4,
        code: "TRZ-37",
        name: "Vintage Studio",
        hotel: "The Aurelia",
        bedType: "Double Bed",
        floor: "L1-17",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 159,
        status: "Not Available",
        image: image4,
      },
      {
        id: 5,
        code: "TRZ-39",
        name: "Blissful Dream",
        hotel: "Regal Horizon",
        bedType: "Master Bed",
        floor: "L2-22",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 120,
        status: "Available",
        image: image5,
      },
      {
        id: 6,
        code: "TRZ-42",
        name: "Rustic Hearth",
        hotel: "Velvet Vista",
        bedType: "Single Bed",
        floor: "L2-24",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 100,
        status: "Available",
        image: image6,
      },
      {
        id: 7,
        code: "TRZ-46",
        name: "Enchanted Forest",
        hotel: "The Ember Nest",
        bedType: "Double Bed",
        floor: "L2-28",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 145,
        status: "Not Available",
        image: image7,
      },
      {
        id: 8,
        code: "TRZ-32",
        name: "Serenity Suite",
        hotel: "Azure Retreat",
        bedType: "Double Bed",
        floor: "G-02",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 157,
        status: "Available",
        image: image8,
      },
      {
        id: 9,
        code: "TRZ-32",
        name: "Serenity Suite",
        hotel: "Nocturne Haven",
        bedType: "Double Bed",
        floor: "G-02",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 157,
        status: "Available",
        image: image9,
      },
      {
        id: 10,
        code: "TRZ-32",
        name: "Serenity Suite",
        hotel: "Luna Essence",
        bedType: "Double Bed",
        floor: "G-02",
        facilities: [
          "High-speed Wi-Fi",
          "Comfortable bedding and pillows",
          "Temperature control (AC/heating)",
        ],
        rate: 157,
        status: "Available",
        image: image1,
      },
    ]);

    const filteredRooms = ref<Room[]>([]);
    const selectedRooms = ref<number[]>([]);
    const selectAll = ref(false);
    const searchQuery = ref("");
    const currentPage = ref(1);
    const itemsPerPage = ref(8);
    const isEditing = ref(false);

    const form = ref({
      id: 0,
      code: "",
      name: "",
      hotel: "",
      bedType: "Double Bed",
      floor: "",
      facilitiesText: "",
      rate: 0,
      status: "Available",
      image: "",
    });

    // Computed properties
    const paginatedRooms = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredRooms.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredRooms.value.length / itemsPerPage.value);
    });

    const showingFrom = computed(() => {
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });

    const showingTo = computed(() => {
      const end = currentPage.value * itemsPerPage.value;
      return end > filteredRooms.value.length
        ? filteredRooms.value.length
        : end;
    });

    // Methods
    const filterRooms = () => {
      if (!searchQuery.value) {
        filteredRooms.value = [...rooms.value];
        return;
      }

      const query = searchQuery.value.toLowerCase();
      filteredRooms.value = rooms.value.filter(
        (room: {
          code: string;
          name: string;
          hotel: string;
          floor: string;
          bedType: string;
          status: string;
          facilities: any[];
          rate: { toString: () => string | any[] };
        }) =>
          room.code.toLowerCase().includes(query) ||
          room.name.toLowerCase().includes(query) ||
          room.hotel.toLowerCase().includes(query) ||
          room.floor.toLowerCase().includes(query) ||
          room.bedType.toLowerCase().includes(query) ||
          room.status.toLowerCase().includes(query) ||
          room.facilities.some((f) => f.toLowerCase().includes(query)) ||
          room.rate.toString().includes(query)
      );

      currentPage.value = 1;
    };

    const toggleSelectAll = () => {
      if (selectAll.value) {
        selectedRooms.value = paginatedRooms.value.map(
          (room: { id: any }) => room.id
        );
      } else {
        selectedRooms.value = [];
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const editRoom = (room: Room) => {
      isEditing.value = true;
      form.value = {
        id: room.id,
        code: room.code,
        name: room.name,
        hotel: room.hotel,
        bedType: room.bedType,
        floor: room.floor,
        facilitiesText: room.facilities.join(", "),
        rate: room.rate,
        status: room.status,
        image: room.image,
      };
    };

    const addRoom = () => {
      isEditing.value = false;
      form.value = {
        id: 0,
        code: "",
        name: "",
        hotel: "",
        bedType: "Double Bed",
        floor: "",
        facilitiesText: "",
        rate: 0,
        status: "Available",
        image: "",
      };
    };

    const saveRoom = () => {
      const facilities = form.value.facilitiesText
        .split(",")
        .map((f: string) => f.trim());

      if (isEditing.value) {
        const index = rooms.value.findIndex(
          (r: { id: any }) => r.id === form.value.id
        );
        if (index !== -1) {
          rooms.value[index] = {
            ...form.value,
            facilities,
          };
        }
      } else {
        const newId =
          Math.max(...rooms.value.map((r: { id: any }) => r.id)) + 1;
        rooms.value.push({
          id: newId,
          code: form.value.code,
          name: form.value.name,
          hotel: form.value.hotel || "New Hotel",
          bedType: form.value.bedType,
          floor: form.value.floor,
          facilities,
          rate: form.value.rate,
          status: form.value.status,
          image: form.value.image || image1,
        });
      }

      filterRooms();
    };

    const deleteRoom = (id: number) => {
      if (confirm("Are you sure you want to delete this room?")) {
        rooms.value = rooms.value.filter(
          (room: { id: number }) => room.id !== id
        );
        filterRooms();
      }
    };

    const handleImageUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          form.value.image = e.target?.result as string;
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    // Initialize
    onMounted(() => {
      filteredRooms.value = [...rooms.value];
    });

    // Return everything that should be available in the template
    return {
      rooms,
      filteredRooms,
      selectedRooms,
      selectAll,
      searchQuery,
      currentPage,
      itemsPerPage,
      form,
      isEditing,
      paginatedRooms,
      totalPages,
      showingFrom,
      showingTo,
      filterRooms,
      toggleSelectAll,
      prevPage,
      nextPage,
      goToPage,
      editRoom,
      addRoom,
      saveRoom,
      deleteRoom,
      handleImageUpload,
    };
  },
});
</script>
