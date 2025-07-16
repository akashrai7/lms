<template>
  <div
    class="card custom-shadow for-dark-rounded-bg rounded-3 border mb-4 bg-body-bg"
  >
    <div
      class="d-flex justify-content-between align-items-center flex-wrap gap-3"
      style="padding: 8.5px 25px"
    >
      <h3 class="mb-0 fs-20 fw-medium text-secondary">Order Details</h3>

      <button class="bg-transparent p-0 border-0 text-primary-50 fs-24">
        <i class="ri-refresh-line"></i>
      </button>
    </div>

    <div class="card-body bg-white py-4 px-0 rounded-3 border-top">
      <div class="last-child-none">
        <div
          class="d-flex justify-content-between align-items-center child border-bottom px-3 px-sm-4"
          style="padding-bottom: 20px; margin-bottom: 20px"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img
                src="@/assets/images/product-45.jpg"
                style="width: 40px; height: 28px"
                class="rounded-1"
                alt="product"
              />
            </div>
            <div class="flex-grow-1 ms-10">
              <h3 class="fs-14 fw-medium mb-0" style="max-width: 78px">
                Maybelline Lash
              </h3>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="product-quantity border-0 bg-body-bg rounded-2">
              <QuantityCounter />
            </div>

            <span class="fs-18 fw-medium text-primary ms-2 ms-sm-4">$29</span>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center child border-bottom px-3 px-sm-4"
          style="padding-bottom: 20px; margin-bottom: 20px"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img
                src="@/assets/images/product-46.jpg"
                style="width: 40px; height: 28px"
                class="rounded-1"
                alt="product"
              />
            </div>
            <div class="flex-grow-1 ms-10">
              <h3 class="fs-14 fw-medium mb-0" style="max-width: 78px">
                Apple iPhone 16
              </h3>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="product-quantity border-0 bg-body-bg rounded-2">
              <QuantityCounter />
            </div>

            <span class="fs-18 fw-medium text-primary ms-2 ms-sm-4">$799</span>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center child border-bottom px-3 px-sm-4"
          style="padding-bottom: 20px; margin-bottom: 20px"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img
                src="@/assets/images/product-47.jpg"
                style="width: 40px; height: 28px"
                class="rounded-1"
                alt="product"
              />
            </div>
            <div class="flex-grow-1 ms-10">
              <h3 class="fs-14 fw-medium mb-0" style="max-width: 78px">
                Adidas Woman
              </h3>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="product-quantity border-0 bg-body-bg rounded-2">
              <QuantityCounter />
            </div>

            <span class="fs-18 fw-medium text-primary ms-2 ms-sm-4">$85</span>
          </div>
        </div>
      </div>

      <div class="p-4 pb-0">
        <div class="bg-body-bg p-20 rounded-3 mb-30">
          <ul class="ps-0 mb-3 list-unstyled last-child-none">
            <li
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 7px"
            >
              <span>Total</span>
              <span>3 Items</span>
            </li>
            <li
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 7px"
            >
              <span class="text-secondary fw-medium">Subtotal:</span>
              <span class="text-secondary fw-medium">$913.00</span>
            </li>
            <li
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 7px"
            >
              <span class="text-secondary fw-medium">Shipping:</span>
              <span class="text-secondary fw-medium">$0.00</span>
            </li>
            <li
              class="d-flex justify-content-between align-items-center"
              style="margin-bottom: 7px"
            >
              <span class="text-secondary fw-medium">Tax (10%):</span>
              <span class="text-secondary fw-medium">$91.30</span>
            </li>
          </ul>
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="fs-20 fw-medium mb-0">Payable Total</h3>
            <h3 class="fs-20 fw-medium mb-0">$1004.30</h3>
          </div>
        </div>

        <h3 class="fs-20 fw-medium mb-3">Payment Method</h3>

        <div
          class="d-flex flex-wrap gap-2 justify-content-between align-items-center payment-method mb-30"
        >
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option5"
              autocomplete="off"
            />
            <label
              class="btn"
              for="option5"
              style="
                width: 81px;
                height: 66px;
                background-color: #f6f7f9;
                border: 1px solid #dde4ff;
                padding: 9px 0;
              "
            >
              <img src="@/assets/images/cash.svg" alt="cash" />
              <span class="d-block text-secondary">Cash</span>
            </label>
          </div>

          <div class="">
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option6"
              autocomplete="off"
              checked
            />
            <label
              class="btn"
              for="option6"
              style="
                width: 81px;
                height: 66px;
                background-color: #f6f7f9;
                border: 1px solid #dde4ff;
                padding: 9px 0;
              "
            >
              <img src="@/assets/images/card.svg" alt="cash" />
              <span class="d-block text-secondary">Card</span>
            </label>
          </div>

          <div class="">
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option8"
              autocomplete="off"
            />
            <label
              class="btn"
              for="option8"
              style="
                width: 81px;
                height: 66px;
                background-color: #f6f7f9;
                border: 1px solid #dde4ff;
                padding: 9px 0;
              "
            >
              <img src="@/assets/images/e-wallet.svg" alt="cash" />
              <span class="d-block text-secondary">E-Wallet</span>
            </label>
          </div>
        </div>

        <NuxtLink
          to="/ecommerce/checkout"
          class="btn btn-primary fs-16 fw-medium w-100 py-2"
        >
          Place Order
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuantityCounter from "./QuantityCounter.vue";

export default defineComponent({
  name: "OrderDetails",
  components: {
    QuantityCounter,
  },
});
</script>
