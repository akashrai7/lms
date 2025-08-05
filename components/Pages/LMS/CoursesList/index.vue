<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <h3 class="mb-0">Courses</h3>
          <select
            class="form-select month-select form-control p-0 h-auto border-0 w-90"
            style="background-position: right 0 center"
            aria-label="Default select example"
          >
            <option selected>All Courses</option>
            <!-- Add filter options if needed -->
          </select>
        </div>
      </div>

      <div class="default-table-area style-two all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                
                <th>Course Name</th>
                <th>Description</th>
                <th>Thumbnail</th>
                <th>Videos</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in courses" :key="item._id">
                <!-- <td class="text-body">{{ item._id }}</td> -->
                <td>
                  <NuxtLink :to="`/lms/${item._id}`">
                    {{ item.name }}
                  </NuxtLink>
                </td>
                <td>{{ item.description }}</td>
                <td>
                  <img
                    :src="item.thumbnail"
                    class="wh-60 rounded"
                    alt="Course Thumbnail"
                  />
                </td>
                <td class="text-body">{{ item.videos.length }}</td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                     <NuxtLink :to="`/lms/${item._id}`" class="border-0 bg-transparent lh-1">
  <i class="material-symbols-outlined fs-16 text-primary">
    visibility
  </i>
</NuxtLink>
                    <button class="border-0 bg-transparent lh-1">
                      <i class="material-symbols-outlined fs-16 text-body">
                        edit
                      </i>
                    </button>
                    <button class="border-0 bg-transparent lh-1">
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

        <div class="p-4 pt-lg-4">
          <CommonPagination :items="10" :total="courses.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Course } from '@/types/course'

const courses = ref<Course[]>([])

const fetchCourses = async () => {
  try {
    const res = await $fetch<{ data: Course[] }>('/api/courses')
    courses.value = res.data
  } catch (error) {
    console.error('Failed to load courses', error)
  }
}
fetchCourses()
</script>

<style scoped>
.wh-60 {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
</style>
