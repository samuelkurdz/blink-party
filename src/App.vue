<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      backendURL: 'https://blink-party-default-rtdb.firebaseio.com/users.json',
      usersList: null,
      usersArray: [],
    };
  },
  methods: {
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
  },
  created() {
    this.fetchAllUsers();
  },
};
</script>
<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
</style>
