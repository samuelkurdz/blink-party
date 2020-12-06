<template>
  <div class="confirmed">
    <h2 class="text-center">
      Thank you for registering..
    </h2>
    <div class="action-point mt-2">
      <button class="btn btn-sm btn-primary" @click="routerToUserValidator">
        Click Here Get Ticket
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Confirmed-Registration',
  methods: {
    routerToUserValidator() {
      this.$router.push('user');
    },
  },
};
</script>

<style scoped>
.confirmed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 1.5rem;
}

.action-point {
  display: flex;
  justify-content: center;
}
</style>
