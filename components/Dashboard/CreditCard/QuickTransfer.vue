<template>
  <div class="card border-0 rounded-3 bg-white p-25">
    <h5 class="mb-4">Quick Transfer</h5>

    <form class="quick-transfer">
      <div class="form-group mb-20">
        <label class="fs-12 mb-8">Card Number</label>
        <input type="text" class="form-control" value="**** **** **** 1580" />
      </div>
      <div class="form-group">
        <label class="fs-12 mb-8">Transfer Amount</label>
        <div class="position-relative z-1">
          <input type="text" class="form-control" value="$1,580" />
          <button
            class="btn btn-primary d-flex justify-content-center align-items-center position-absolute top-50 end-0 translate-middle-y"
            style="width: 51px; height: 51px"
          >
            <i class="material-symbols-outlined">send_money</i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuickTransfer",
});
</script>
