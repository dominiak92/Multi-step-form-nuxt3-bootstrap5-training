<template>
  <div class="card summary px-2 py-3" style="width: 21rem">
    <div class="card-body p-0">
      <div class="title p-3">
        <p class="h3 heading">Finishing up</p>
        <p class="description">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div class="container">
        <div class="card summaryCard p-3">
          <div class="d-flex align-items-center">
            <div class="col text-start">
              <p class="selectedPlan m-0">
                {{ userValues.selectedPlan.plan }} ({{
                  userValues.planPricing ? "Yearly" : "Monthly"
                }})
              </p>
              <p @click="setCurrentComponentNumber(2)" class="m-0 txtBtn">
                <u>Change</u>
              </p>
            </div>
            <div class="col text-end price">
              ${{ userValues.selectedPlan.price }}/{{
                userValues.planPricing ? "yr" : "mo"
              }}
            </div>
          </div>
          <hr class="line" v-if="anyAddonIsAdded" />
          <div v-for="addon in userValues.addons" :key="addon.id">
            <div
              v-if="addon.isAdded"
              class="container-fluid d-flex justify-content-between align-items-center gx-0 my-1"
            >
              <p class="addon m-0">{{ addon.name }}</p>
              <p class="addonPrice my-0">
                +${{ addon.price }}/{{ userValues.planPricing ? "yr" : "mo" }}
              </p>
            </div>
          </div>
        </div>
        <div class="totalPrice px-3 pt-3 d-flex justify-content-between">
          <p class="mb-2 description">Total {{ userValues.planPricing ? "(per year)" : "(per month)" }}</p>
          <p class="finalPrice">
            ${{ totalPrice }}/{{ userValues.planPricing ? "yr" : "mo" }}
          </p>
        </div>
      </div>
    </div>
    <nav class="navbar fixed-bottom bg-body-tertiary">
      <div class="container-fluid">
        <button
          @click="setCurrentComponentNumber(3)"
          class="btn btn-outline-secondary"
        >
          Go back
        </button>
        <button @click="setCurrentComponentNumber(5)" class="btn btn-primary">
          Confirm
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/store";
const {
  userValues,
  currentComponentNumber,
  setCurrentComponentNumber,
  totalAddedPrice,
} = useUserStore();
const anyAddonIsAdded = computed(() => {
  return Object.values(userValues.addons).some((addon) => addon.isAdded);
});
const totalPrice = totalAddedPrice + userValues.selectedPlan.price;
</script>

<style lang="scss" scoped>
.summary {
  border-radius: 0.625rem;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: -4rem;
  min-height: 20rem;
  .totalPrice {
    .description {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
      color: #9699aa;
    }
    .finalPrice {
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;
    }
  }
  .summaryCard {
    background-color: #f8f9ff;
    border: none;
    display: flex;
    justify-content: center;
    .addon {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
      color: #9699aa;
    }
    .price {
      color: #022959;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25rem;
    }
    .selectedPlan {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .txtBtn {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      color: #9699aa;
    }
    .price {
      color: #022959;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;
    }
    .line {
      color: #9699aa;
      width: 99%;
      align-self: center;
    }
  }
  .heading {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #022959;
  }
  .description {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5625rem;
    color: var(--Grey, #9699aa);
    font-feature-settings: "clig" off, "liga" off;
  }
}
</style>
