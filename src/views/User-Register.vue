<template>
  <div class="user-register">
    <h4 class="text-center">
      Kindly answer the following quick survey questions,
    </h4>
    <div class="action-point mt-2">
      <section class="form-container">
        <div id="survey-form" class="form">
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
        </div>
        <div id="details-form" class="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="survey.userName"
                   id="name">
          </div>
          <div class="form-group">
            <label for="userMail">Email</label>
            <input type="text" class="form-control" v-model="survey.userEmail"
                   id="userMail">
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <input type="text" class="form-control" v-model="survey.Location"
                   id="location">
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender" class="form-control
          form-control-sm" v-model="survey.Gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
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

.form-container {
  background: #fff;
  position: relative;
  padding: 20px;
  margin: auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.form-container .form {
  /*max-width: 300px;*/
  padding: 0 20px;
  /*position: absolute;*/
  top: 130px;
  transition: transform 0.8s;
}

#survey-form {
  left: -300px;
}

#details-form {
  left: 0;
}
</style>
