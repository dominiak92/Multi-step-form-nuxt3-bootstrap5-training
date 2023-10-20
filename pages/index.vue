<template>
  <div class="app">
    <HeaderMobile />
    <PersonalInfo v-if="currentComponentNumber === 1" />
    <PlanSelect v-if="currentComponentNumber === 2" />
    <Addons v-if="currentComponentNumber === 3" />
    <Summary v-if="currentComponentNumber === 4" />
    <Confirmation v-if="currentComponentNumber === 5" />
  </div>
</template>

<script setup>
import HeaderMobile from "~/components/UI/HeaderMobile.vue";
import PersonalInfo from "~/components/PersonalInfo.vue";
import PlanSelect from "~/components/PlanSelect.vue";
import Addons from "~/components/Addons.vue";
import Summary from "~/components/Summary.vue";
import { useUserStore } from "~/stores/store";
import Confirmation from "~/components/Confirmation.vue";
const store = useUserStore();
const { currentComponentNumber } = toRefs(store);
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");
.app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #eff5ff;
  height: 100vh;
  font-family: "Ubuntu", sans-serif;
}
</style>
