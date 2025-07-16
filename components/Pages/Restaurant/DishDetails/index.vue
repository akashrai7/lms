<template>
  <div class="row">
    <div class="col-lg-4">
      <div
        class="tab-content mb-3 card border-0 bg-white p-3 rounded-2"
        id="myTabContent"
      >
        <div
          class="tab-pane fade show active"
          id="nft-details1-tab-pane"
          role="tabpanel"
          aria-labelledby="nft-details1-tab"
          tabindex="0"
        >
          <img
            src="@/assets/images/restaurant/dish-details1.jpg"
            class="rounded-2"
            alt="nft-details"
          />
        </div>
        <div
          class="tab-pane fade"
          id="nft-details2-tab-pane"
          role="tabpanel"
          aria-labelledby="nft-details2-tab"
          tabindex="0"
        >
          <img
            src="@/assets/images/restaurant/dish-details2.jpg"
            class="rounded-2"
            alt="nft-details"
          />
        </div>
        <div
          class="tab-pane fade"
          id="nft-details3-tab-pane"
          role="tabpanel"
          aria-labelledby="nft-details3-tab"
          tabindex="0"
        >
          <img
            src="@/assets/images/restaurant/dish-details3.jpg"
            class="rounded-2"
            alt="nft-details"
          />
        </div>
        <div
          class="tab-pane fade"
          id="nft-details4-tab-pane"
          role="tabpanel"
          aria-labelledby="nft-details4-tab"
          tabindex="0"
        >
          <img
            src="@/assets/images/restaurant/dish-details4.jpg"
            class="rounded-2"
            alt="nft-details"
          />
        </div>
      </div>
      <ul
        class="nav nav-tabs gap-3 nft-detail-tabs border-0 justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link p-0 border-0 active"
            id="nft-details1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nft-details1-tab-pane"
            type="button"
            role="tab"
            aria-controls="nft-details1-tab-pane"
            aria-selected="true"
          >
            <img
              src="@/assets/images/restaurant/dish-details1.jpg"
              class="rounded-2"
              style="width: 110px"
              alt="nft-details"
            />
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link p-0 border-0"
            id="nft-details2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nft-details2-tab-pane"
            type="button"
            role="tab"
            aria-controls="nft-details2-tab-pane"
            aria-selected="false"
          >
            <img
              src="@/assets/images/restaurant/dish-details2.jpg"
              class="rounded-2"
              style="width: 110px"
              alt="nft-details"
            />
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link p-0 border-0"
            id="nft-details3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nft-details3-tab-pane"
            type="button"
            role="tab"
            aria-controls="nft-details3-tab-pane"
            aria-selected="false"
          >
            <img
              src="@/assets/images/restaurant/dish-details3.jpg"
              class="rounded-2"
              style="width: 110px"
              alt="nft-details"
            />
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link p-0 border-0"
            id="nft-details4-tab"
            data-bs-toggle="tab"
            data-bs-target="#nft-details4-tab-pane"
            type="button"
            role="tab"
            aria-controls="nft-details4-tab-pane"
            aria-selected="false"
          >
            <img
              src="@/assets/images/restaurant/dish-details4.jpg"
              class="rounded-2"
              style="width: 110px"
              alt="nft-details"
            />
          </button>
        </li>
      </ul>
    </div>

    <div class="col-lg-8">
      <div
        class="dish-details-card trezo-card card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content">
          <div class="d-md-flex align-items-center justify-content-between">
            <div>
              <span class="d-block text-xs"> Code: 3479 </span>
              <h3>Beef Cheesy Burger</h3>
              <span class="price fw-semibold"> $11.50 USD </span>
            </div>
            <div class="ratings lh-1">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <span class="d-inline-block lh-1 text-xs text-body"> 5.0 </span>
            </div>
          </div>
          <div class="border-top"></div>
          <h4 class="fw-semibold">Ingredients Details</h4>
          <p>
            Spaghetti, shredded chicken, buffalo sauce, ranch dressing,
            mozzarella.
          </p>
          <div class="mb-25"></div>
          <h4 class="fw-semibold">Nutrition Values</h4>
          <div class="nutrition-values">
            <div class="row g-0">
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Calories </span>
                  <span class="d-block">
                    <span class="text-black">1200</span> Kcal
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Carbs </span>
                  <span class="d-block">
                    <span class="text-black">120</span> gm
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Protein </span>
                  <span class="d-block">
                    <span class="text-black">120</span> gm
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Fibres </span>
                  <span class="d-block">
                    <span class="text-black">400</span> gm
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Fat </span>
                  <span class="d-block">
                    <span class="text-black">890</span> gm
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Vitamins </span>
                  <span class="d-block">
                    <span class="text-black">350</span> gm
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Sugar </span>
                  <span class="d-block">
                    <span class="text-black">30</span> gm
                  </span>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item d-flex align-items-center justify-content-between"
                >
                  <span class="d-block"> Minerals </span>
                  <span class="d-block">
                    <span class="text-black">5</span> gm
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h4
            class="fw-semibold mb-0 d-flex align-items-center justify-content-between"
          >
            Orders In Queue <span>17</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DishDetails",
});
</script>

<style lang="scss" scoped>
.dish-details-card {
  height: 100%;

  .trezo-card-content {
    .text-xs {
      font-size: 12px;
    }
    h3 {
      font-size: 24px;
      margin: {
        top: 10px;
        bottom: 10px;
      }
    }
    .price {
      font-size: 16px;
      color: #ec1f00;
    }
    .ratings {
      font-size: 15px;
      color: #fe7a36;

      i {
        margin-right: 2px;

        &:last-child {
          margin-right: 0;
        }
      }
      span {
        &.text-xs {
          font-size: 12px;
          margin-left: 2px;
        }
      }
    }
    .border-top {
      border-color: var(--borderColor) !important;
      margin: {
        top: 25px;
        bottom: 25px;
      }
    }
    h4 {
      font-size: 18px;
      margin-bottom: 12px;
    }
    .nutrition-values {
      margin: {
        bottom: 25px;
        top: 15px;
      }
      .item {
        padding: 10px 20px;
        border: 1px solid var(--borderColor);
      }
      .col-md-6 {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          .item {
            border-bottom-width: 0;
          }
        }
        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(5),
        &:nth-child(7),
        &:nth-child(9),
        &:nth-child(11) {
          .item {
            border-right-width: 0;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .dish-details-card {
    height: auto;
    margin-top: 25px;

    .trezo-card-content {
      h3 {
        font-size: 20px;
        margin: {
          top: 8px;
          bottom: 8px;
        }
      }
      .price {
        font-size: 14px;
      }
      .ratings {
        margin-top: 12px;
      }
      .border-top {
        margin: {
          top: 17px;
          bottom: 17px;
        }
      }
      h4 {
        font-size: 16px;
      }
      .mb-25 {
        margin-bottom: 17px !important;
      }
      .nutrition-values {
        margin: {
          bottom: 17px;
          top: 15px;
        }
        .item {
          padding: 10px 15px;
        }
        .col-md-6 {
          &:nth-child(7) {
            .item {
              border-bottom-width: 0;
            }
          }
          &:nth-child(1),
          &:nth-child(3),
          &:nth-child(5),
          &:nth-child(7),
          &:nth-child(9),
          &:nth-child(11) {
            .item {
              border-right-width: 1px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .dish-details-card {
    .trezo-card-content {
      .border-top {
        margin: {
          top: 20px;
          bottom: 20px;
        }
      }
      .mb-25 {
        margin-bottom: 20px !important;
      }
      .nutrition-values {
        margin-bottom: 20px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .dish-details-card {
    height: auto;
    margin-top: 25px;

    .trezo-card-content {
      h3 {
        font-size: 22px;
      }
      .price {
        font-size: 15px;
      }
      h4 {
        font-size: 17px;
      }
    }
  }
}
</style>
