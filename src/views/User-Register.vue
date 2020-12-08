<template>
  <div class="user-register">
    <h4 class="text-center text-white">
      Kindly answer the following quick survey questions..
    </h4>
    <div class="action-point mt-2">
      <form class="form-container" @submit.prevent="submitSurvey">
        <div class="alert alert-danger" role="alert" v-if="notUniqueMail">
          this email has been already registered, go back to print your ticket
        </div>
        <div class="alert alert-danger" role="alert" v-if="maxNumberAchieved">
          Sorry, The Party can no longer accept new attendee.
        </div>
        <div id="survey-form" class="form" v-if="isWKCDataFilled === false">
          <div class="form-group">
            <label for="isWKUInvestor">Are you a WKC Investor? </label>
            <select id="isWKUInvestor" class="form-control
          form-control-sm" v-model="survey.isWKUInvestor">
              <option>Yes</option>
              <option>No</option>
            </select>
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
          <button class="btn btn-sm btn-primary"
                  @click="proceedFromWKC" :disabled="survey.isWKUInvestor === null">
            Proceed
          </button>
        </div>
        <div id="details-form" class="form" v-if="isWKCDataFilled === true">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="survey.userName"
                   id="name" required>
          </div>
          <div class="form-group">
            <label for="userMail">Email</label>
            <input type="text" class="form-control" v-model="survey.userEmail"
                   id="userMail" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="text" class="form-control" v-model="survey.userPhone"
                   id="phone" required>
          </div>
          <div class="form-group">
            <label for="location">Location</label>
            <select id="location" class="form-control
          form-control-sm" v-model="survey.Location" required>
              <option v-for="(state, index) in nigerianStates" :key="index">{{state}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender" class="form-control
          form-control-sm" v-model="survey.Gender" required>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <button type="submit" v-if="isWKCDataFilled === true"
                class="btn btn-sm btn-primary">
          <span class="spinner-grow" role="status" v-if="isSubmittingUser">
            <span class="sr-only">Loading...</span>
          </span>
          <span v-if="!isSubmittingUser">Proceed</span>
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
      backendURL: 'https://blink-party-default-rtdb.firebaseio.com/users.json',
      notUniqueMail: false,
      isWKCDataFilled: false,
      maxNumberAchieved: false,
      isSubmittingUser: false,
      survey: {
        userName: null,
        userEmail: null,
        Location: null,
        Gender: null,
        comment: null,
        isWKUInvestor: null,
        dateOfJoining: null,
        userPhone: null,
        nameOfMoU: null,
      },
      nigerianStates: [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'FCT - Abuja',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
      ],
    };
  },
  methods: {
    proceedFromWKC() {
      this.isWKCDataFilled = true;
    },
    submitSurvey() {
      this.checkFormValidity();
    },
    checkFormValidity() {
      if (this.allUsers.length < 700) {
        let isUniqueEmail = false;
        this.allUsers.forEach((user) => {
          if (user.userEmail === this.survey.userEmail) {
            isUniqueEmail = true;
          }
        });
        if (!isUniqueEmail) {
          this.registerUser();
        } else {
          this.notUniqueMail = true;
        }
      } else {
        this.maxNumberAchieved = true;
      }
    },
    registerUser() {
      this.isSubmittingUser = true;
      this.$http.post(this.backendURL, this.survey).then(() => {
        this.$router.push('confirmed');
        this.isSubmittingUser = false;
      }).catch(() => {
        this.isSubmittingUser = false;
      });
    },
  },
  created() {
    this.isWKCDataFilled = false;
    this.maxNumberAchieved = true;
  },
  computed: {
    allUsers() {
      return this.$store.state.users;
    },
  },
};
</script>

<style scoped>
.user-register {
  background-image:url('../assets/bg-image.png');
  background-size:cover;
  background-position:center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

.spinner-grow {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
