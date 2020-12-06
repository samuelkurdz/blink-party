<template>
  <div class="user-validator">
      <h4 class="text-center">
        Thank you for registering for Bling Party,
        <br>
        Enter your email to download your ticket...
      </h4>
      <div class="action-point mt-2">
        <section>
          <div class="alert alert-danger" role="alert" v-if="notRegisteredMail">
            this email has not been registered, go back to register..
          </div>
          <div class="form-group">
<!--            <label for="Email">Email address</label>-->
            <input type="email" class="form-control" v-model="userEmail"
                   style="width: 230px"
                   id="Email" placeholder="enter your registered email">
          </div>
          <button @click.prevent="emailSubmitter"
                  class="btn btn-sm btn-primary">
          <span class="spinner-grow" role="status" v-if="isValidatingUser">
            <span class="sr-only">Loading...</span>
          </span>
            <span v-if="!isValidatingUser">Proceed</span>
          </button>
        </section>
      </div>
  </div>
</template>

<script>
export default {
  name: 'User-Validator',
  data() {
    return {
      userEmail: null,
      isValidatingUser: false,
      userDetail: null,
      notRegisteredMail: false,
    };
  },
  methods: {
    emailSubmitter() {
      this.isValidatingUser = true;
      this.validator();
      if (this.userDetail) {
        this.isValidatingUser = false;
        this.$store.dispatch('setSingleUserAction', this.userDetail);
        this.$router.push('download');
      } else {
        this.isValidatingUser = false;
        this.notRegisteredMail = true;
      }
    },
    validator() {
      this.allUsers.forEach((user) => {
        if (user.userEmail === this.userEmail) {
          this.userDetail = user;
        }
      });
    },
  },
  computed: {
    allUsers() {
      return this.$store.getters.allUsers;
    },
  },
  created() {
    this.notRegisteredMail = false;
  },
};
</script>

<style scoped>
.user-validator {
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

.spinner-grow {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
