<template>
  <nav class="navbar bg-body-tertiary custom-navbar">
    <div class="container btns">
      <div
        :class="
          currentComponentNumber === 1
            ? 'componentNumber active'
            : 'componentNumber'
        "
      >
        <p>1</p>
      </div>
      <div
        :class="
          currentComponentNumber === 2
            ? 'componentNumber active'
            : 'componentNumber'
        "
      >
        <p>2</p>
      </div>
      <div
        :class="
          currentComponentNumber === 3
            ? 'componentNumber active'
            : 'componentNumber'
        "
      >
        <p>3</p>
      </div>
      <div
        :class="
          currentComponentNumber === 4
            ? 'componentNumber active'
            : 'componentNumber'
        "
      >
        <p>4</p>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from "../stores/store";
import { toRefs } from "vue";
const store = useUserStore();
const { currentComponentNumber } = toRefs(store);
</script>

<style lang="scss" scoped>
.custom-navbar {
  background-image: url("/assets/bg-sidebar-mobile.svg");
  background-size: cover; /* Dopasuj obrazek do rozmiaru navbar */
  background-repeat: no-repeat; /* Zapobiegaj powtarzaniu obrazka */
  height: 10.75rem;
  width: 100%;
  .btns {
    margin-bottom: 4rem;
    max-width: 55%;
    .componentNumber {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ffffff;
      color: #ffffff;
      border-radius: 50%;
      width: 2.1rem;
      height: 2.1rem;
      p {
        margin: 0;
      }
    }
    .active {
      background-color: #bee2fd;
      border-color: #bee2fd;
      color: #022959;
    }
  }
}
</style>
