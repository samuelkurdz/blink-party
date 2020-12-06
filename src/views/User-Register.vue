<template>
  <div class="user-register">
    <h4 class="text-center">
      Kindly answer the following quick survey questions..
    </h4>
    <div class="action-point mt-2">
      <form class="form-container" @submit.prevent="submitSurvey">
        <div id="survey-form" class="form">
          <div class="form-group">
            <label for="isWKUInvestor">Are you a WKC Investor? </label>
            <select id="isWKUInvestor" class="form-control
          form-control-sm" v-model="survey.isWKUInvestor">
              <option>Yes</option>
              <option>No</option>
            </select>
            <small class="error-message"
                   v-if="isRegistrationSubmitted && formValidity.isWKUInvestor === true">
              This question needs answering!
            </small>
          </div>
          <div class="form-group" v-if="survey.isWKUInvestor === 'Yes'">
            <label for="nameOfMoU">When did you become an investor with WKC? </label>
            <input type="date" class="form-control" v-model="survey.dateOfJoining"
                   id="nameOfMoU">
          </div>
          <div class="form-group" v-if="survey.isWKUInvestor === 'Yes'">
            <label for="when">What is the name on your MoU? </label>
            <input type="email" class="form-control" v-model="survey.nameOfMoU"
                   id="when">
          </div>
          <div class="form-group" v-if="survey.isWKUInvestor === 'Yes'">
            <label for="comment">Leave a comment for your experience so far </label>
            <input type="text" class="form-control" v-model="survey.comment"
                   id="comment" placeholder="enter your comment">
          </div>
        </div>
        <div id="details-form" class="form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="survey.userName"
                   id="name" required>
            <small class="error-message"
                   v-if="isRegistrationSubmitted && formValidity.userName === true">
              Name is required!</small>
          </div>
          <div class="form-group">
            <label for="userMail">Email</label>
            <input type="text" class="form-control" v-model="survey.userEmail"
                   id="userMail" required>
            <small class="error-message"
                   v-if="isRegistrationSubmitted && formValidity.userEmail === true">
              Email is required!</small>
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <input type="text" class="form-control" v-model="survey.Location"
                   id="location" required>
            <small class="error-message"
                   v-if="isRegistrationSubmitted && formValidity.Location === true">
              Location is required!</small>
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender" class="form-control
          form-control-sm" v-model="survey.Gender" required>
              <option>Male</option>
              <option>Female</option>
            </select>
            <small class="error-message"
                   v-if="isRegistrationSubmitted && formValidity.Gender === true">
              Gender is required!</small>
          </div>
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
export default {
  name: 'User-Register',
  data() {
    return {
      formValidity: {
        userName: null,
        userEmail: null,
        Location: null,
        Gender: null,
        comment: null,
        isWKUInvestor: null,
        dateOfJoining: null,
        nameOfMoU: null,
      },
      isRegistrationSubmitted: false,
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
      this.checkFormValidity();
    },
    checkFormValidity() {
      this.isRegistrationSubmitted = true;
      if (this.survey.isWKUInvestor === null) {
        this.formValidity.isWKUInvestor = true;
      } else if (this.survey.userName === null) {
        this.formValidity.isWKUInvestor = false;
        this.formValidity.userName = true;
      } else if (this.survey.userEmail === null) {
        this.formValidity.isWKUInvestor = false;
        this.formValidity.userName = false;
        this.formValidity.userEmail = true;
      } else if (this.formValidity.userName === null) {
        this.formValidity.isWKUInvestor = false;
        this.formValidity.userName = false;
        this.formValidity.userEmail = false;
        this.formValidity.Location = true;
      } else if (this.formValidity.Gender === null) {
        this.formValidity.isWKUInvestor = false;
        this.formValidity.userName = false;
        this.formValidity.userEmail = false;
        this.formValidity.Location = false;
        this.formValidity.Gender = true;
      } else {
        this.registerUser();
      }
    },
    registerUser() {
      console.log(this.survey);
    },
  },
  created() {
    this.isRegistrationSubmitted = false;
  },
};
</script>

<style scoped>
.user-register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  padding: 2rem 1rem;
}

.action-point {
  display: flex;
  justify-content: center;
}

.form-container {
  background: #fff;
  position: relative;
  padding: 8px 12px;
  margin: auto;
  width: 355px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
}

.error-message {
  color: red;
}
</style>
