<template>
  <div class="card select px-2 py-3" style="width: 21rem">
    <div class="card-body">
      <p class="h3 heading">Pick add-ons</p>
      <p class="description">Add-ons help enhance your gaming experience.</p>
      <div class="container text-center">
        <div class="row gy-2">
          <input
            type="checkbox"
            class="btn-check"
            v-model="userValues.addons.onlineService.isAdded"
            id="btn-check1"
            autocomplete="off"
          />
          <label class="btn selector px-2" for="btn-check1"
            ><div class="container">
              <div class="row align-items-center">
                <div class="col-2">
                  <div
                    class="ico"
                    :style="{
                      backgroundColor: userValues.addons.onlineService.isAdded ? '#483EFF' : '#D3D3D3',
                    }"
                  >
                    <font-awesome-icon
                      v-if="userValues.addons.onlineService.isAdded"
                      icon="fa-solid fa-check"
                    />
                    <font-awesome-icon v-else icon="fa-solid fa-x" size="xs" />
                  </div>
                </div>
                <div class="col-8 px-1 py-2">
                  <p class="addon">Online service</p>
                  <p class="description">Access to multiplayer games</p>
                </div>
                <div class="col-2 p-0">
                  <p class="price">
                    +${{ userValues.addons.onlineService.price }}/{{
                      userValues.planPricing ? "yr" : "mo"
                    }}
                  </p>
                </div>
              </div>
            </div>
          </label>

          <input
            type="checkbox"
            class="btn-check"
            v-model="userValues.addons.largerStorage.isAdded"
            id="btn-check2"
            autocomplete="off"
          />
          <label class="btn selector px-2" for="btn-check2"
            ><div class="container">
              <div class="row align-items-center">
                <div class="col-2">
                  <div
                    class="ico"
                    :style="{
                      backgroundColor: userValues.addons.largerStorage.isAdded ? '#483EFF' : '#D3D3D3',
                    }"
                  >
                    <font-awesome-icon
                      v-if="userValues.addons.largerStorage.isAdded"
                      icon="fa-solid fa-check"
                    />
                    <font-awesome-icon v-else icon="fa-solid fa-x" size="xs" />
                  </div>
                </div>
                <div class="col-8 px-1 py-2">
                  <p class="addon">Larger storage</p>
                  <p class="description">Extra 1TB of cloud save</p>
                </div>
                <div class="col-2 p-0">
                  <p class="price">
                    +${{ userValues.addons.largerStorage.price }}/{{
                      userValues.planPricing ? "yr" : "mo"
                    }}
                  </p>
                </div>
              </div>
            </div></label
          >

          <input
            type="checkbox"
            class="btn-check"
            v-model="userValues.addons.customProfile.isAdded"
            id="btn-check3"
            autocomplete="off"
          />
          <label class="btn selector px-2" for="btn-check3"
            ><div class="container">
              <div class="row align-items-center">
                <div class="col-2">
                  <div
                    class="ico"
                    :style="{
                      backgroundColor: userValues.addons.customProfile.isAdded ? '#483EFF' : '#D3D3D3',
                    }"
                  >
                    <font-awesome-icon
                      v-if="userValues.addons.customProfile.isAdded"
                      icon="fa-solid fa-check"
                    />
                    <font-awesome-icon v-else icon="fa-solid fa-x" size="xs" />
                  </div>
                </div>
                <div class="col-8 px-1 py-2">
                  <p class="addon">Customizable profile</p>
                  <p class="description">Custom theme on your profile</p>
                </div>
                <div class="col-2 p-0">
                  <p class="price">
                    +${{ userValues.addons.customProfile.price }}/{{
                      userValues.planPricing ? "yr" : "mo"
                    }}
                  </p>
                </div>
              </div>
            </div></label
          >
        </div>
      </div>
    </div>
    <nav class="navbar fixed-bottom bg-body-tertiary">
      <div class="container-fluid">
        <button
          @click="setCurrentComponentNumber(2)"
          class="btn btn-outline-secondary"
        >
          Go back
        </button>
        <button @click="setCurrentComponentNumber(4)" type="submit" class="btn btn-primary">
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
import { ref } from "vue";
const checkbox1 = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
</script>

<style lang="scss" scoped>
.select {
  border-radius: 0.625rem;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: -4rem;
  min-height: 20rem;
  .selector {
    max-height: 5rem;

    .ico {
      background-color: #ffaf7e;
      color: #ffffff;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .addon {
      margin: 0;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: #022959;
      text-align: start;
    }
    .description {
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
      color: #9699aa;
      text-align: start;
      margin: 0;
    }
    .price {
      font-size: 0.75rem;
      margin: 0;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem; /* 166.667% */
      color: #483eff;
    }
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
      font-weight: 500;
      line-height: normal;
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
