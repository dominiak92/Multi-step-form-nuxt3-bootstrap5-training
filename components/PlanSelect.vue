import { NuxtComponentIndicator } from 'nuxt/dist/app/composables/component';
<template>
  <div class="card select px-2 py-3" style="width: 21rem">
    <div class="card-body">
      <p class="h3 heading">Select your plan</p>
      <p class="description">
        You have the option of monthly or yearly billing.
      </p>
      <div class="container text-center">
        <div class="row gy-3">
          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option5"
            autocomplete="off"
            :value="{ plan: 'Arcade', price: userValues.planPricing ? 90 : 9 }"
            v-model="userValues.selectedPlan"
            checked
          />
          <label
            :class="
              userValues.selectedPlan.plan === 'Arcade'
                ? 'btn btn-outline selector checked'
                : 'btn btn-outline selector'
            "
            for="option5"
            ><div class="container">
              <div class="row">
                <div class="col-3 d-flex align-items-center">
                  <div class="ico" :style="{ backgroundColor: '#FFAF7E' }">
                    <font-awesome-icon icon="fa-solid fa-gamepad" />
                  </div>
                </div>
                <div class="col-9 text-start">
                  <p class="plan">{{plans[0].plan}}</p>
                  <p class="price">
                    ${{ plans[0].price }}/{{
                      userValues.planPricing ? "yr" : "mo"
                    }}
                  </p>
                  <p v-if="userValues.planPricing" class="discount">
                    2 months free
                  </p>
                </div>
              </div>
            </div></label
          >

          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option6"
            autocomplete="off"
            :value="{ plan: 'Advanced', price: userValues.planPricing ? 120 : 12 }"
            v-model="userValues.selectedPlan"
          />
          <label
            :class="
              userValues.selectedPlan.plan === 'Advanced'
                ? 'btn btn-outline selector checked'
                : 'btn btn-outline selector'
            "
            for="option6"
            ><div class="container">
              <div class="row align-items-center">
                <div class="col-3 d-flex align-items-center">
                  <div class="ico" :style="{ backgroundColor: '#F9818E' }">
                    <font-awesome-icon icon="fa-solid fa-gamepad" />
                  </div>
                </div>
                <div class="col-9 text-start">
                  <p class="plan">{{plans[1].plan}}</p>
                  <p class="price">
                    ${{ plans[1].price }}/{{
                      userValues.planPricing ? "yr" : "mo"
                    }}
                  </p>
                  <p v-if="userValues.planPricing" class="discount">
                    2 months free
                  </p>
                </div>
              </div>
            </div></label
          >

          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option8"
            autocomplete="off"
            :value="{ plan: 'Pro', price: userValues.planPricing ? 90 : 9 }"
            v-model="userValues.selectedPlan"
          />
          <label
            :class="
              userValues.selectedPlan.plan === 'Pro'
                ? 'btn btn-outline selector checked'
                : 'btn btn-outline selector'
            "
            for="option8"
            ><div class="container">
              <div class="row align-items-center">
                <div class="col-3 d-flex align-items-center">
                  <div class="ico" :style="{ backgroundColor: '#483EFF' }">
                    <font-awesome-icon icon="fa-solid fa-gamepad" />
                  </div>
                </div>
                <div class="col-9 text-start">
                  <p class="plan">{{plans[2].plan}}</p>
                  <p class="price">
                    ${{ plans[2].price }}/{{
                      userValues.planPricing ? "yr" : "mo"
                    }}
                  </p>
                  <p v-if="userValues.planPricing" class="discount">
                    2 months free
                  </p>
                </div>
              </div>
            </div></label
          >
          <div class="container switch px-5 py-2">
            <p
              :class="
                userValues.planPricing ? 'switch-text' : 'switch-text bold'
              "
            >
              Monthly
            </p>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="userValues.planPricing"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
            <p
              :class="
                !userValues.planPricing ? 'switch-text' : 'switch-text bold'
              "
            >
              Yearly
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar fixed-bottom bg-body-tertiary">
      <div class="container-fluid">
        <button
          @click="setCurrentComponentNumber(1)"
          class="btn btn-outline-secondary"
        >
          Go back
        </button>
        <button @click="handleNextStep" type="submit" class="btn btn-primary">
          Next step
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/store";
const { setCurrentComponentNumber, setCurrentSelectedPlan, userValues } =
  useUserStore();

const plans = reactive([
  {
    plan: "Arcade",
    price: computed(() => (userValues.planPricing ? 90 : 9)),
  },
  {
    plan: "Advanced",
    price: computed(() => (userValues.planPricing ? 120 : 12)),
  },
  {
    plan: "Pro",
    price: computed(() => (userValues.planPricing ? 150 : 15)),
  },
]);

const handleNextStep = () => {
  console.log(JSON.stringify(userValues));
  setCurrentComponentNumber(3);
};
</script>

<style lang="scss" scoped>
.select {
  border-radius: 0.625rem;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: -4rem;
  min-height: 20rem;
  .selector {
    border-color: #d6d9e6;
    max-height: 5rem;
    padding: 0.5em;
    .discount {
      font-size: 0.75rem;
      color: #022959;
      margin: 0;
    }
    .ico {
      background-color: #ffaf7e;
      color: #ffffff;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .plan {
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin: 0;
      color: #022959;
    }
    .price {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
      color: #9699aa;
      margin: 0;
    }
    &:hover,
    &:focus,
    &:active {
      background-color: #f8f9ff;
      border-color: #483eff;
    }
  }
  .checked {
    background-color: #f8f9ff;
    border-color: #483eff;
  }

  .switch {
    display: flex;
    justify-content: space-evenly;
    gap: 0.7rem;
    align-items: center;
    margin-top: 1.5rem;
    border-radius: 0.5rem;
    background-color: #f8f9ff;
    .switch-text {
      margin: 0;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .bold {
      font-weight: 700;
    }
  }

  .checkbox {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
