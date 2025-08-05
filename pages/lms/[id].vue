<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="View Video List" subTitle="LMS" />

    <div class="container py-4" v-if="course">
      <h2 class="mb-3">{{ course.name }}</h2>
      <p class="mb-4">{{ course.description }}</p>

      <div class="row">
        <!-- Video List -->
        <div class="col-md-4">
          <ul class="list-group">
            <li
              v-for="video in course.videos"
              :key="video.title"
              @click="selectedVideo = video"
              class="list-group-item list-group-item-action cursor-pointer"
              :class="{ active: selectedVideo?.title === video.title }"
              style="cursor: pointer"
            >
              {{ video.title }}
            </li>
          </ul>
        </div>

        <!-- Video Player -->
        <div class="col-md-8" v-if="selectedVideo">
          <video
            class="w-100 rounded"
            controls
            :src="selectedVideo.videoUrl"
            :poster="selectedVideo.poster"
          ></video>
        </div>
      </div>
    </div>

    <div class="container py-5 text-center" v-else>
      <p class="text-muted">Loading course...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Course, Video } from '@/types/course'

const course = ref<Course | null>(null)
const selectedVideo = ref<Video | null>(null)

const route = useRoute()

const fetchCourse = async () => {
  try {
    const res = await $fetch<{ course: Course }>(`/api/courses/${route.params.id}`, {
      credentials: 'include',
    })
    course.value = res.course
    selectedVideo.value = res.course.videos?.[0] ?? null
  } catch (err) {
    console.error('Failed to load course', err)
  }
}

fetchCourse()
</script>
