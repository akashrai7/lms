<template>
  <div class="add-to-cart-counter p-0">
    <input
      type="button"
      class="minusBtn bg-transparent position-relative for-dark-cart"
      style="
        color: #666666;
        font-size: 30px;
        height: 31px;
        top: -2px;
        width: 30px;
      "
      @click="decrement"
      value="-"
    />
    <input
      type="text"
      size="25"
      v-model="internalValue"
      class="count bg-body-bg border-0"
      style="max-width: 30px"
    />
    <input
      type="button"
      class="plusBtn bg-transparent"
      style="color: #666666; font-size: 20px; height: 31px; width: 30px"
      @click="increment"
      value="+"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const internalValue = ref<number>(1);

const increment = () => {
  internalValue.value++;
};

const decrement = () => {
  if (internalValue.value > 0) {
    internalValue.value--;
  }
};
</script>
