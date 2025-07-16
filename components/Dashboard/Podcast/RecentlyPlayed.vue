<template>
  <div
    class="card custom-shadow rounded-3 bg-white border mb-4"
    style="padding-bottom: 16px"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 position-relative pb-3"
      style="top: -5px"
    >
      <h3 class="mb-0 fs-18 fw-semibold">Recently Played</h3>
      <button
        class="bg-transparent border-0 p-0 d-flex align-items-center text-decoration-none position-relative right-for-rtl text-body"
        style="right: -8px"
      >
        <span>View All</span>
        <i
          class="ri-arrow-right-s-line fs-24 position-relative top-1 lh-1 text-body"
        ></i>
      </button>
    </div>

    <div class="default-table-area style-three recently-played">
      <div class="table-responsive">
        <table class="table align-middle border-0">
          <tbody>
            <tr v-for="(item, index) in recentlyPlayed" :key="index">
              <td>
                <div class="d-flex">
                  <button
                    class="p-0 border-0 bg-transparent me-3"
                    @click="togglePlayback(index)"
                  >
                    <audio
                      ref="audioRefs"
                      class="track"
                      :src="item.audioSrc"
                      type="audio/mpeg"
                    />
                    <div class="player-container">
                      <div
                        :class="{
                          'play-pause': true,
                          pause: isPlaying === index,
                          play: isPlaying !== index,
                        }"
                      >
                        {{ isPlaying === index ? "Pause" : "Play" }}
                      </div>
                    </div>
                  </button>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        :src="item.imageSrc"
                        style="width: 34px; height: 34px"
                        class="rounded-1"
                        :alt="item.title"
                      />
                    </div>
                    <div class="flex-grow-1 ms-10">
                      <h4 class="fs-14 fw-medium mb-0">{{ item.title }}</h4>
                      <span class="fs-12 text-body fw-normal">
                        {{ item.artist }}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span class="d-block fs-14 fw-normal text-body">
                  {{ item.timePlayed }}
                </span>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <i class="ri-customer-service-line text-primary fs-18"></i>
                  <span class="d-block fs-14 fw-normal text-body ms-10">
                    {{ item.playCount.toLocaleString() }}
                  </span>
                </div>
              </td>
              <td>
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
              </td>
              <td>
                <span class="text-body">{{ item.duration }}</span>
              </td>
              <td>
                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i data-feather="more-horizontal"></i>
                  </button>

                  <ul
                    class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                  >
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="plus"></i>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="file"></i>
                        Go To Album
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <i data-feather="speaker"></i>
                        View Credits
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import image1 from "@/assets/images/played-1.jpg";
import image2 from "@/assets/images/played-2.jpg";
import image3 from "@/assets/images/played-3.jpg";
import image4 from "@/assets/images/played-4.jpg";
import image5 from "@/assets/images/played-5.jpg";
import image6 from "@/assets/images/played-6.jpg";

export default defineComponent({
  name: "RecentlyPlayed",
  data() {
    return {
      recentlyPlayed: [
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: image1,
          title: "Mastering Digital Marketing",
          artist: "Sarah Johnson",
          timePlayed: "Played 40 min. ago",
          playCount: 8200,
          duration: "45:30",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: image2,
          title: "Content Marketing Essentials",
          artist: "Tom Richards",
          timePlayed: "Played 1 h. ago",
          playCount: 9500,
          duration: "25:50",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: image3,
          title: "Social Media Trends for 2024",
          artist: "David Chen",
          timePlayed: "Played 1 day ago",
          playCount: 7400,
          duration: "30:20",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: image4,
          title: "Building Brand Loyalty",
          artist: "Michael Young",
          timePlayed: "Played 2 days ago",
          playCount: 10200,
          duration: "15:35",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: image5,
          title: "Content Creation Techniques",
          artist: "Lisa Kim",
          timePlayed: "Played 3 days ago",
          playCount: 9300,
          duration: "20:10",
        },
        {
          audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
          imageSrc: image6,
          title: "The Future of AI in Marketing",
          artist: "Tom Richards",
          timePlayed: "Played 4 days ago",
          playCount: 6300,
          duration: "22:15",
        },
      ],
    };
  },

  setup() {
    const audioRefs = ref<HTMLAudioElement[]>([]);
    const isPlaying = ref<number | null>(null);

    const togglePlayback = (index: number) => {
      const audio = audioRefs.value[index];
      if (!audio) return;

      if (isPlaying.value === index) {
        audio.pause();
        isPlaying.value = null;
      } else {
        audioRefs.value.forEach((otherAudio, otherIndex) => {
          if (otherIndex !== index) {
            otherAudio.pause();
            otherAudio
              .closest("button")
              ?.querySelector(".play-pause")
              ?.classList.add("play");
          }
        });
        audio.play();
        isPlaying.value = index;
      }
    };

    return {
      audioRefs,
      isPlaying,
      togglePlayback,
    };
  },
});
</script>
