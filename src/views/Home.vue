<template>
  <div class="home">
    <h2 class="text-center">
      Welcome To Bling Party
    </h2>
    <div class="action-point mt-2">
      <button class="btn btn-sm btn-primary" @click="routerToUserValidator">
        Get Ticket
      </button>
      <button class="btn btn-sm btn-outline-primary ml-4" @click="routerToUserRegister">
        Register
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    routerToUserValidator() {
      this.$router.push('user');
    },
    routerToUserRegister() {
      this.$router.push('register');
    },
  },
};
</script>

<style lang="scss">
.home {
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
