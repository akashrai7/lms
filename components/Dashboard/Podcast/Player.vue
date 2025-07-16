<template>
  <div
    class="card custom-shadow rounded-3 bg-white border mb-4 custom-padding-30 pb-4"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 position-relative mb-3"
      style="top: -5px"
    >
      <h3 class="mb-0 fs-18 fw-semibold">Player</h3>
      <div class="dropdown action-opt right-for-rtl" style="right: -8px">
        <button
          class="btn bg-transparent p-0 text-end"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i data-feather="more-vertical" style="stroke: #64748b"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end bg-white border box-shadow">
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="clock"></i>
              Today
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="pie-chart"></i>
              Last 7 Days
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="rotate-cw"></i>
              Last Month
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="calendar"></i>
              Last 1 Year
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="bar-chart"></i>
              All Time
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="eye"></i>
              View
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;">
              <i data-feather="trash"></i>
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div style="margin-bottom: 20px">
      <img
        src="@/assets/images/player.png"
        class="rounded-3 d-lg-none w-100"
        alt="player"
      />
      <div
        class="bg-img rounded-3 d-none d-lg-block"
        :style="{
          backgroundImage: `url(${image})`,
        }"
        style="background-position: top center; height: 201px"
      ></div>
    </div>

    <div
      class="d-flex justify-content-between align-items-center"
      style="margin-bottom: 20px"
    >
      <div class="">
        <h4 class="fs-14 fw-medium text-secondary mb-0">
          Building an Online Presence
        </h4>
        <span class="fs-12">Ethan Cooper</span>
      </div>

      <button
        class="favorite-button border-0 text-body-color-60 fs-14 bg-transparent p-0"
      >
        <span class="favorite-icon position-relative">
          <i class="ri-heart-line fs-20"></i>
          <i
            class="ri-heart-fill fs-20 position-absolute top-50 start-50 translate-middle text-primary"
          ></i>
        </span>
      </button>
    </div>

    <div class="audio-player" id="audio_control">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span id="current-time" class="fs-12">{{ currentTime }}</span>
        <span id="duration" class="fs-12">{{ duration }}</span>
      </div>
      <div class="progress mb-3" style="height: 4px" @click="seek">
        <div
          class="progress-bar"
          id="progress-bar"
          :style="{ width: progress + '%', height: '4px' }"
        ></div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <button
          id="shuffle"
          @click="shuffleTrack"
          class="bg-transparent p-0 lh-1 border-0"
          style="color: #9caaff"
        >
          <i class="ri-shuffle-line fs-20"></i>
        </button>
        <div class="d-flex gap-1">
          <button
            id="rewind"
            @click="skipTime(-10)"
            class="bg-transparent p-0 lh-1 border-0"
            style="color: #9caaff"
          >
            <i class="ri-skip-left-fill fs-30"></i>
          </button>
          <button
            id="play-pause"
            @click="playPause"
            class="p-0 lh-1 border-0 text-primary rounded-circle"
            style="background-color: #ecf0ff; width: 44px; height: 44px"
          >
            <i
              :class="isPlaying ? 'ri-pause-fill' : 'ri-play-fill'"
              class="fs-30 position-relative"
            ></i>
          </button>
          <button
            id="fast-forward"
            @click="skipTime(10)"
            class="bg-transparent p-0 lh-1 border-0"
            style="color: #9caaff"
          >
            <i class="ri-skip-right-fill fs-30"></i>
          </button>
        </div>
        <button
          id="restart"
          @click="restart"
          class="bg-transparent p-0 lh-1 border-0"
          style="color: #9caaff"
        >
          <i class="ri-reset-right-line fs-20"></i>
        </button>
      </div>
    </div>
    <audio
      id="audio"
      ref="audio"
      src="https://cldup.com/qR72ozoaiQ.mp3"
    ></audio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import image from "@/assets/images/player.png";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Player",

  setup() {
    const audio = ref<HTMLAudioElement | null>(null);
    const isPlaying = ref(false);
    const currentTime = ref("0:00");
    const duration = ref("0:00");
    const progress = ref(0);

    const formatTime = (time: number): string => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${minutes}:${seconds}`;
    };

    const playPause = () => {
      if (audio.value) {
        if (audio.value.paused) {
          audio.value.play();
          isPlaying.value = true;
        } else {
          audio.value.pause();
          isPlaying.value = false;
        }
      }
    };

    const updateProgress = () => {
      if (audio.value) {
        progress.value = (audio.value.currentTime / audio.value.duration) * 100;
        currentTime.value = formatTime(audio.value.currentTime);
      }
    };

    const onAudioLoaded = () => {
      if (audio.value) {
        duration.value = formatTime(audio.value.duration);
      }
    };

    const seek = (event: MouseEvent) => {
      if (audio.value) {
        const progressBar = event.currentTarget as HTMLElement;
        const rect = progressBar.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const width = rect.width;
        const newTime = (clickX / width) * audio.value.duration;
        audio.value.currentTime = newTime;
      }
    };

    const restart = () => {
      if (audio.value) {
        audio.value.currentTime = 0;
        if (!audio.value.paused) {
          audio.value.play();
        }
      }
    };

    const skipTime = (seconds: number) => {
      if (audio.value) {
        audio.value.currentTime = Math.min(
          audio.value.duration,
          Math.max(0, audio.value.currentTime + seconds)
        );
      }
    };

    const shuffleTrack = () => {
      console.log("Shuffle feature is clicked!");
      // Implement shuffle logic
    };

    onMounted(() => {
      if (audio.value) {
        audio.value.addEventListener("timeupdate", updateProgress);
        audio.value.addEventListener("loadedmetadata", onAudioLoaded);
      }
    });

    onUnmounted(() => {
      if (audio.value) {
        audio.value.removeEventListener("timeupdate", updateProgress);
        audio.value.removeEventListener("loadedmetadata", onAudioLoaded);
      }
    });

    return {
      image,
      audio,
      isPlaying,
      currentTime,
      duration,
      progress,
      playPause,
      restart,
      seek,
      skipTime,
      shuffleTrack,
    };
  },
});
</script>
