<template>
  <div class="user-validator">
      <h4 class="text-center">
        Thank you for registering for Bling Party,
        <br>
        Enter your email to download your ticket...
      </h4>
      <div class="action-point mt-2">
        <section>
          <div class="form-group">
<!--            <label for="Email">Email address</label>-->
            <input type="email" class="form-control" v-model="userEmail"
                   style="width: 230px"
                   id="Email" placeholder="enter your registered email">
          </div>
          <button @click.prevent="emailSubmitter"
                  class="btn btn-sm btn-primary">
            Proceed
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
    };
  },
  methods: {
    emailSubmitter() {
      console.log(this.userEmail);
      this.$router.push('download');
    },
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
</style>
