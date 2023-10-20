import { NuxtComponentIndicator } from 'nuxt/dist/app/composables/component';
<template>
  <div class="card form px-2 py-3" style="width: 21rem">
    <div class="card-body">
      <p class="h3 heading">Personal Info</p>
      <p class="description">
        Please provide your name, email address, and phone number.
      </p>
      <form
        class="row g-3 needs-validation"
        novalidate
        @submit.prevent="handleSubmit"
        ref="form"
      >
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="userValues.name"
            :class="{
              'is-valid': userValues.name && userValues.name.length > 2,
              'is-invalid': submitted && (!userValues.name|| userValues.name.length <= 2),
            }"
            required
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please type valid name</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label"
            >Email Address</label
          >
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            v-model="userValues.email"
            :class="{
              'is-valid': userValues.email && userValues.email.length > 2,
              'is-invalid': submitted && (!userValues.email || userValues.email.length <= 2),
            }"
            required
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please type valid email</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label"
            >Phone number</label
          >
          <input
            type="number"
            class="form-control"
            id="validationCustom03"
            v-model="userValues.phoneNumber"
            :class="{
              'is-valid': userValues.phoneNumber && userValues.phoneNumber.toString().length > 2,
              'is-invalid':
                submitted &&
                (!userValues.phoneNumber || userValues.phoneNumber.toString().length <= 2),
            }"
            required
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">
            Please provide a valid phone number.
          </div>
        </div>
        <nav class="navbar fixed-bottom bg-body-tertiary">
          <div class="container-fluid d-flex">
            <button type="submit" class="btn btn-primary ms-auto">
              Next step
            </button>
          </div>
        </nav>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/store";
import { defineEmits } from "vue";
const form = ref(null);
const { userValues, setCurrentComponentNumber } = useUserStore();
const submitted = ref(false);
const emit = defineEmits();

function handleSubmit() {
  submitted.value = true;
  if (form.value.checkValidity()) {
    setCurrentComponentNumber(2);
    // emit("showComponent", 2);
  } else {
    console.warn("Formularz zawiera błędy");
  }
}
</script>

<style lang="scss" scoped>
.form {
  border-radius: 0.625rem;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: -4rem;
  min-height: 20rem;
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
