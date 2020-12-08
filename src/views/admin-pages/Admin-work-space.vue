<template>
  <div class="work-space">
    <div class="d-flex justify-content-between mb-2">
      <div>
        <p>Welcome Admin, ({{allUsers.length}} Attendees)</p>
      </div>
      <button class="btn btn-sm btn-outline-info"
              data-toggle="modal" data-target="#exampleModal">
        + Add New Attendee
      </button>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone No</th>
          <th scope="col">Serial No</th>
          <th scope="col">Gender</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in allUsers" :key="user.id" class="text-nowrap">
            <td> {{index + 1 }} </td>
            <td>{{ user.userName }}</td>
            <td>{{ user.userEmail }}</td>
            <td>{{ user.userPhone }}</td>
            <td>{{ user.id }}</td>
            <td>{{ user.Gender }}</td>
            <td>
              <div class="dropdown">
                <span class="badge dropdown-toggle p-2" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                  ...
                </span>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item cursor" href="javascript:void(0)" data-toggle="modal"
                     data-target="#surveyModal" @click="selectSurveyDetails(user)">
                    View {{ user.userName }} Survey
                  </a>
                  <a class="dropdown-item text-danger cursor"
                     href="javascript:void(0)" @click="deleteUser(user.id)">
                    Delete User
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Attendee</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="addNewAttendee">
            <div class="modal-body">
              <div id="details-form" class="form">
                <div class="alert alert-danger" role="alert" v-if="notUniqueMail">
                  this email has been already registered.
                </div>
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
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">
                <span class="spinner-grow" role="status" v-if="isSubmittingUser">
                  <span class="sr-only">Loading...</span>
                </span>
                <span v-if="!isSubmittingUser">Proceed</span>
              </button>
              </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="surveyModal" tabindex="-1" role="dialog"
         aria-labelledby="surveyModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="surveyModalLabel">Survey Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div class="modal-body">
              <div id="details">
                <p>
                  Are you a WKU Investor? :
                  {{ surveyDetails.hasOwnProperty('isWKUInvestor') ? surveyDetails.isWKUInvestor :
                    'no'
                  }}
                </p>
                <p>
                  Date of joining WKU as an Investor? :
                  {{ surveyDetails.hasOwnProperty('dateOfJoining') ? surveyDetails.dateOfJoining :
                  ''
                  }}
                </p>
                <p>
                  Name of MoU? :
                  {{ surveyDetails.hasOwnProperty('nameOfMoU') ? surveyDetails.nameOfMoU :
                  ''
                  }}
                </p>
                <p>
                  comment so far :
                  {{ surveyDetails.hasOwnProperty('comment') ? surveyDetails.comment :
                  ''
                  }}
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin-work-space',
  data() {
    return {
      usersList: null,
      usersArray: [],
      backendURL: 'https://blink-party-default-rtdb.firebaseio.com/users.json',
      notUniqueMail: false,
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
      surveyDetails: {},
    };
  },
  computed: {
    allUsers() {
      return this.$store.state.users;
    },
  },
  methods: {
    deleteUser(userId) {
      this.$http.delete(`https://blink-party-default-rtdb.firebaseio.com/users/${userId}.json`)
        .then(() => {
          this.$store.dispatch('removeUserAction', userId);
        }).catch((err) => {
          console.log(err);
        });
    },
    addNewAttendee() {
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
    },
    registerUser() {
      this.usersList = null;
      this.usersArray = [];
      this.isSubmittingUser = true;
      this.$http.post(this.backendURL, this.survey).then(() => {
        this.isSubmittingUser = false;
        this.notUniqueMail = false;
        this.survey = {
          userName: null,
          userEmail: null,
          Location: null,
          Gender: null,
          comment: null,
          isWKUInvestor: null,
          dateOfJoining: null,
          userPhone: null,
          nameOfMoU: null,
        };
        this.fetchAllUsers();
      }).catch(() => {
        this.isSubmittingUser = false;
      });
    },
    fetchAllUsers() {
      this.$http.get(this.backendURL).then((response) => {
        this.usersList = response.data;
        this.processUsersData();
      });
    },
    processUsersData() {
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(this.usersList)) {
        value.id = key;
        this.usersArray.push(value);
      }
      this.$store.dispatch('pushUsersFromDataBaseToAttendeeList', this.usersArray);
    },
    selectSurveyDetails(data) {
      this.surveyDetails = data;
    },
  },
};
</script>

<style scoped>
.work-space {
  padding: 2rem 0.5rem;
}
.table-responsive {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
}
.spinner-grow {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
