<template>
  <div
    class="card border-0 rounded-3 bg-white p-25 bg-img debit-card-bg-for-dark-mode"
    :style="{ 'background-image': `url(${debitCardBg})` }"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4"
    >
      <h5 class="mb-0">My Cards</h5>

      <button
        class="btn btn-outline-primary d-flex align-items-center gap-1 hover-bg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i
          class="material-symbols-outlined fs-22"
          style="position: relative; margin-left: -2px"
        >
          add
        </i>
        <span>Add Card</span>
      </button>
    </div>

    <div class="row g-4">
      <div class="col-sm-6">
        <div
          class="bg-img p-4 rounded-3"
          :style="{ 'background-image': `url(${debitCard1})` }"
        >
          <div class="d-flex align-content-center justify-content-between">
            <div>
              <span class="text-white fs-12 fw-medium d-block mb-12">
                Credit Card
              </span>
              <img src="@/assets/images/board-1.png" alt="board" />
            </div>
            <i class="ri-visa-fill fs-35 text-white lh-1"></i>
          </div>

          <h5
            class="fw-semibold text-white mb-12 d-flex gap-1 lh-1"
            style="margin-top: 40px"
          >
            <span>****</span><span>****</span><span>****</span><span>1784</span>
          </h5>
          <div class="d-flex align-content-center justify-content-between">
            <span class="text-white">Russell McCray</span>
            <span class="text-white fs-12">EXP : 12/30</span>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div
          class="bg-img p-4 rounded-3"
          :style="{ 'background-image': `url(${debitCard2})` }"
        >
          <div class="d-flex align-content-center justify-content-between">
            <div>
              <span class="text-white fs-12 fw-medium d-block mb-12">
                Credit Card
              </span>
              <img src="@/assets/images/board-1.png" alt="board" />
            </div>
            <i class="ri-mastercard-fill fs-35 text-white lh-1"></i>
          </div>

          <h5
            class="fw-semibold text-white mb-12 d-flex gap-1 lh-1"
            style="margin-top: 40px"
          >
            <span>****</span><span>****</span><span>****</span><span>1794</span>
          </h5>
          <div class="d-flex align-content-center justify-content-between">
            <span class="text-white">Russell McCray</span>
            <span class="text-white fs-12">EXP : 12/30</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Card Add -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="max-width: 738px">
        <div class="modal-content p-4 p-md-5">
          <div class="modal-header p-0 border-0">
            <h3 class="mb-0">Add Card Detail</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0 pt-4">
            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-4">
                    <label class="label text-secondary">Full Name</label>
                    <input
                      type="text"
                      class="form-control h-55"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-4">
                    <label class="label text-secondary">Card Number</label>
                    <input
                      type="text"
                      class="form-control h-55"
                      placeholder="Enter card number"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-4">
                    <label class="label text-secondary">Expiry Date</label>
                    <input type="date" class="form-control h-55" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-4">
                    <label class="label text-secondary">CVV</label>
                    <input
                      type="number"
                      class="form-control h-55"
                      placeholder="212"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer border-0 p-0">
            <button
              type="button"
              class="btn btn-danger text-white px-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary hover-bg px-3">
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import debitCardBg from "@/assets/images/debit-card-bg.jpg";
import debitCard1 from "@/assets/images/debit-card-2.jpg";
import debitCard2 from "@/assets/images/debit-card-3.jpg";

export default defineComponent({
  name: "MyCards",
  setup() {
    return {
      debitCardBg,
      debitCard1,
      debitCard2,
    };
  },
});
</script>
