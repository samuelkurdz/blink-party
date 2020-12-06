<template>
  <div class="user-register">
    <h4 class="text-center">
      Kindly answer the following quick survey questions,
    </h4>
    <div class="action-point mt-2">
      <section>
        <div class="form-group">
          <label for="isWKUInvestor">Are you a WKC Investor? </label>
          <select id="isWKUInvestor" class="form-control
          form-control-sm" v-model="survey.isWKUInvestor">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div class="form-group">
          <label for="nameOfMoU">When did you become an investor with WKC? </label>
          <input type="date" class="form-control" v-model="survey.dateOfJoining"
                 id="nameOfMoU">
        </div>
        <div class="form-group">
          <label for="when">What is the name on your MoU? </label>
          <input type="email" class="form-control" v-model="survey.nameOfMoU"
                 id="when">
        </div>
        <div class="form-group">
          <label for="comment">Leave a comment for your experience so far </label>
          <input type="text" class="form-control" v-model="survey.comment"
                 id="comment" placeholder="enter your comment">
        </div>
        <button @click.prevent="submitSurvey"
                class="btn btn-sm btn-primary">
          Proceed
        </button>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'User-Register',
  data() {
    return {
      survey: {
        userName: null,
        userEmail: null,
        Location: null,
        Gender: null,
        comment: null,
        isWKUInvestor: null,
        dateOfJoining: null,
        nameOfMoU: null,
      },
    };
  },
  methods: {
    submitSurvey() {
      console.log(this.survey);
    },
  },
};
</script>

<style scoped>
.user-register {
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
