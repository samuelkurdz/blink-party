<template>
  <div class="admin">
    <h4 class="text-center">
      Good job on managing the Blink Party,
      <br>
      Enter your email and password to login!
    </h4>
    <div class="action-point mt-2">
      <form @submit.prevent="loginAdmin">
        <div class="alert alert-danger" role="alert" v-if="incorrectCredentials">
          Incorrect Credentials.
        </div>
        <div class="form-group">
          <label for="Email">Email address</label>
          <input type="email" class="form-control" v-model="adminEmail"
                 style="width: 230px"
                 id="Email" placeholder="enter your registered email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="adminPassword"
                 style="width: 230px"
                 id="password">
        </div>
        <button type="submit"
                class="btn btn-sm btn-primary">
          Proceed
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { uuid } from 'uuidv4';

export default {
  name: 'Admin',
  data() {
    return {
      adminEmail: null,
      adminPassword: null,
      incorrectCredentials: false,
    };
  },
  methods: {
    loginAdmin() {
      if (this.adminEmail === 'kurdzsamuel@gmail.com' && this.adminPassword === 'password') {
        const token = uuid();
        this.$store.dispatch('setToken', token);
        this.$router.push('manage-users');
      } else {
        this.incorrectCredentials = true;
      }
    },
  },
};
</script>

<style scoped>
.admin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 1rem;
}

.action-point {
  display: flex;
  justify-content: center;
}
</style>
