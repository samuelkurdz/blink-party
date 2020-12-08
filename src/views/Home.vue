<template>
  <div class="home">
    <h2 class="text-center">
      Welcome To The Bling Party
    </h2>
    <div class="action-point mt-2">
      <button class="btn btn-primary" @click="routerToUserValidator">
        Get Ticket
      </button>
      <button class="btn btn-success ml-4" v-if="allUsers.length < 800"
              @click="routerToUserRegister">
        Register
      </button>
      <button class="btn btn-danger ml-4" v-if="allUsers.length >= 800">
        Registering for the Bling Party is now closed
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
  computed: {
    allUsers() {
      return this.$store.state.users;
    },
  },
};
</script>

<style lang="scss">
.home {
  background-image:url('../assets/bg-image.png');
  background-size:cover;
  background-position:center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 1.5rem;
  color: white;
}

.action-point {
  display: flex;
  justify-content: center;
}

button {
  animation: bounce 2s infinite;
}

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}
  40% {-webkit-transform: translateY(20px);}
  60% {-webkit-transform: translateY(10px);}
}

@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
  40% {-moz-transform: translateY(20px);}
  60% {-moz-transform: translateY(10px);}
}

@-o-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
  40% {-o-transform: translateY(20px);}
  60% {-o-transform: translateY(10px);}
}
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
</style>
