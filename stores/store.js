import { reactive, ref, watch } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const userValues = reactive({
    name: "",
    email: "",
    phoneNumber: "",
    planPricing: false,
    selectedPlan: {
      plan: "Arcade",
      price: 9,
    },
    addons: {
      onlineService: {
        id: 1,
        name: "Online service",
        isAdded: false,
        price: 1,
      },
      largerStorage: {
        id: 2,
        name: "Larger storage",
        isAdded: false,
        price: 2,
      },
      customProfile: {
        id: 3,
        name: "Custom profile",
        isAdded: false,
        price: 2,
      },
    },
  });

  const totalAddedPrice = computed(() => {
    return Object.values(userValues.addons).reduce((total, addon) => {
      return addon.isAdded ? total + addon.price : total;
    }, 0);
  });

  const currentComponentNumber = ref(1);

  function refreshSelectedPlan() {
    if (userValues.planPricing) {
      userValues.selectedPlan.price *= 10;
    } else {
      userValues.selectedPlan.price /= 10;
    }
  }

  function refreshAddonsPrice() {
    if (userValues.planPricing) {
      userValues.addons.onlineService.price *= 10;
      userValues.addons.largerStorage.price *= 10;
      userValues.addons.customProfile.price *= 10;
    } else {
      userValues.addons.onlineService.price /= 10;
      userValues.addons.largerStorage.price /= 10;
      userValues.addons.customProfile.price /= 10;
    }
  }

  watch(
    () => userValues.planPricing,
    () => {
      refreshSelectedPlan();
      refreshAddonsPrice();
    }
  );

  function setCurrentComponentNumber(value) {
    currentComponentNumber.value = value;
  }

  function setCurrentSelectedPlan(value) {
    userValues.selectedPlan = value;
  }
  return {
    totalAddedPrice,
    userValues,
    currentComponentNumber,
    setCurrentSelectedPlan,
    setCurrentComponentNumber,
  };
});
