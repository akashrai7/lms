<template>
  <div class="main-content-container overflow-hidden">
    <CommonPageTitle pageTitle="View Video List" subTitle="LMS" />
  <div class="container py-4">

    <h2 class="mb-3">{{ course?.name }}</h2>
    <p class="mb-4">{{ course?.description }}</p>

    <div class="row">
      <div class="col-md-4">
        <ul class="list-group">
          <li
            v-for="video in course?.videos"
            :key="video.title"
            @click="selectedVideo = video"
            class="list-group-item list-group-item-action cursor-pointer"
            :class="{ active: selectedVideo?.title === video.title }"
          >
            {{ video.title }}
          </li>
        </ul>
      </div>
      <div class="col-md-8">
        <video
          v-if="selectedVideo"
          :src="selectedVideo.videoUrl"
          :poster="selectedVideo.poster"
          class="w-100 rounded"
          controls
        ></video>
      </div>
    </div>
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
    const res = await $fetch<{ course: Course }>(`/api/courses/${route.params.id}`)
    course.value = res.course
    selectedVideo.value = res.course.videos[0] ?? null
  } catch (err) {
    console.error('Failed to load course', err)
  }
}

fetchCourse()
</script>
