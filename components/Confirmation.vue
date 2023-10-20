<template>
  <div
    class="card confirmation px-4 py-2 d-flex align-items-center justify-content-center"
    style="width: 21rem"
  >
    <font-awesome-icon class="ico" icon="fa-regular fa-circle-check" />
    <h2 class="title">Thank You!</h2>
    <p class="text">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.confirmation {
  border-radius: 0.625rem;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: -4rem;
  min-height: 20rem;
  .ico {
    font-size: 2rem;
    margin: 1rem;
    color: #f9818e;
  }
  .title {
    color: #022959;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .text {
    color: #9699aa;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5625rem; /* 156.25% */
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
