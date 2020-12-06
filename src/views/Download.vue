<template>
  <div class="downloader">
    <p>Download occurs here</p>
    <p>
      Welcome {{userDetails.userName}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Download',
  computed: {
    userDetails() {
      return this.$store.getters.userState;
    },
  },
};
</script>

<style scoped>
.downloader {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  height: 100vh;
  width: 100vw;
  padding: 1rem 1.5rem;
}
</style>
