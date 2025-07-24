<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 p-4"
      >
        <form class="position-relative table-src-form me-0" @submit.prevent>
          <input
            type="text"
            class="form-control"
            placeholder="Search here"
           
          />
          <!--  v-model="searchTerm" -->
          <i
            class="material-symbols-outlined position-absolute top-50 start-0 translate-middle-y"
          >
            search
          </i>
        </form>
        <button
          class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
          data-bs-toggle="offcanvas"
          data-bs-target="#addNewinstituteTypeModal"
          aria-controls="addNewinstituteTypeModal"
        >
          <span class="py-sm-1 d-block">
            <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
            <span>Add New Institute Type</span>
          </span>
        </button>
      </div>

      <div class="default-table-area style-two all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Add By</th>
                <th scope="col" class="text-end">Action</th>
              </tr>
            </thead>
           <tbody>
  <tr v-if="loading">
    <td colspan="4" class="text-center">Loading...</td>
  </tr>
  <tr v-else-if="instituteTypes.length === 0">
    <td colspan="4" class="text-center">No records found</td>
  </tr>
  <tr v-else v-for="(item, index) in instituteTypes" :key="item._id">
    <td>{{ index + 1 }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.add_by || '—' }}</td>
    <td class="text-end">
      <button class="btn btn-sm btn-info me-2" @click="$emit('edit', item)">Edit</button>
      <button class="btn btn-sm btn-danger" @click="$emit('delete', item._id)">Delete</button>
    </td>
  </tr>
</tbody>

          </table>
        </div>

        <div class="p-4 pt-lg-4">
          <CommonPagination items="10" total="30" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";



export default defineComponent({
  name: "instituteType",
  // setup() {
  //   const items = ref([
  //     {
  //       id: "#A-1217",
  //       user: {
  //         image: image1,
  //         name: "Olivia Clark",
  //         designation: "Big Data",
  //       },
  //       courses: 55,
  //       totalEarnings: "$6,855.00",
  //       email: "olivia@trezo.com",
  //       ratings: [
  //         {
  //           star: "ri-star-fill",
  //         },
  //         {
  //           star: "ri-star-fill",
  //         },
  //         {
  //           star: "ri-star-fill",
  //         },
  //         {
  //           star: "ri-star-fill",
  //         },
  //         {
  //           star: "ri-star-fill",
  //         },
  //       ],
  //       status: {
  //         active: true,
  //         deactive: false,
  //       },
  //       action: {
  //         // view: 'visibility',
  //         // edit: 'edit',
  //         delete: "delete",
  //       },
  //     },
  //     {
  //       id: "#A-1364",
  //       user: {
  //         image: image2,
  //         name: "Ava Turner",
  //         designation: "UX/UI",
  //       },
  //       courses: 120,
  //       totalEarnings: "$258.00",
  //       email: "ava@trezo.com",
  //       ratings: [
  //         {
  //           star: "ri-star-fill",
  //         },
  //         {
  //           star: "ri-star-fill",
  //         },
  //         {
  //           star: "ri-star-fill",
  //         },
  //         {
  //           star: "ri-star-fill",
  //         },
  //         {
  //           star: "ri-star-half-fill",
  //         },
  //       ],
  //       status: {
  //         active: false,
  //         deactive: true,
  //       },
  //       action: {
  //         // view: 'visibility',
  //         // edit: 'edit',
  //         delete: "delete",
  //       },
  //     },
  //   ]);

  //   const searchTerm = ref("");

  //   const filteredItems = computed(() => {
  //     return items.value.filter(
  //       (item: {
  //         id: string;
  //         user: { name: string; designation: string };
  //         totalEarnings: string;
  //         email: string;
  //       }) =>
  //         item.id.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
  //         item.user.name
  //           .toLowerCase()
  //           .includes(searchTerm.value.toLowerCase()) ||
  //         item.user.designation
  //           .toLowerCase()
  //           .includes(searchTerm.value.toLowerCase()) ||
  //         item.totalEarnings
  //           .toLowerCase()
  //           .includes(searchTerm.value.toLowerCase()) ||
  //         item.email.toLowerCase().includes(searchTerm.value.toLowerCase())
  //     );
  //   });

  //   return {
  //     items,
  //     searchTerm,
  //     filteredItems,
  //   };
  // },
});
</script>
<script setup lang="ts">
////////////////////////////////////////////////

import type { InstituteType } from '~/types/institute-type';

const instituteTypes = ref<InstituteType[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await $fetch('/api/institute-type', {
      credentials: 'include',
    })
    instituteTypes.value = res.data || []
  } catch (error) {
    console.error('Fetch error:', error)
    instituteTypes.value = []
  } finally {
    loading.value = false
  }
})
</script>
