<template>
  <div class="work-space">
    <div class="d-flex justify-content-between mb-2">
      <p>Welcome Admin</p>
      <button class="btn btn-sm btn-outline-info">
        + Add New Attendee
      </button>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone No</th>
          <th scope="col">Code</th>
          <th scope="col">Gender</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="user in allUsers" :key="user.id" class="text-nowrap">
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
                  <a class="dropdown-item cursor" href="javascript:void(0)">
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
  </div>
</template>

<script>
export default {
  name: 'Admin-work-space',
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
</style>
