<template>
  <div>
    <p>Welcome Admin</p>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone No</th>
          <th scope="col">Code</th>
          <th scope="col">Gender</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in allUsers" :key="user.id" class="text-nowrap">
          <td>{{ user.userName }}</td>
          <td>{{ user.userEmail }}</td>
          <td>{{ user.userPhone }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.Gender }}</td>
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
};
</script>

<style scoped>

</style>
