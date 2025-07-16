<template>
  <div
    class="card border-0 rounded-3 bg-white p-25 bg-img mb-4"
    :style="{ 'background-image': `url(${bgImage})` }"
    role="status"
    aria-live="polite"
  >
    <div class="row g-3 g-md-4">
      <div v-for="(stat, key) in stats" :key="key" class="col-xxl-3 col-sm-6">
        <div class="card border-0 rounded-3 bg-white p-25">
          <span class="d-block text-capitalize">{{ formatKey(key) }}</span>
          <h3 class="fs-20 mb-0 mt-1">
            {{ stat.value }}
            <sub v-if="stat.date" class="bottom-0 fw-normal text-body fs-14">
              ({{ stat.date }})
            </sub>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import bgImage from "@/assets/images/sparkline-bg.jpg";

interface CryptoStat {
  value: string;
  date?: string;
}

interface Stats {
  totalValue: CryptoStat;
  firstTradeVolume: CryptoStat;
  lastTradeVolume: CryptoStat;
  marketCap: CryptoStat;
}

export default defineComponent({
  name: "CryptoStatsPanel",
  props: {
    stats: {
      type: Object as PropType<Stats>,
      default: () => ({
        totalValue: { value: "$597.655B" },
        firstTradeVolume: { value: "$21.953M", date: "1 Jan, 2025" },
        lastTradeVolume: { value: "$25.965B", date: "1 Nov, 2025" },
        marketCap: { value: "$1.36T" },
      }),
    },
    bgImage: {
      type: String,
      default: bgImage,
    },
  },
  setup() {
    const formatKey = (key: string): string => {
      return key.replace(/([A-Z])/g, " $1").toLowerCase();
    };

    return {
      formatKey,
    };
  },
});
</script>
