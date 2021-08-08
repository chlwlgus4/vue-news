<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const id = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${id}.json`);
    this.$store.dispatch("FETCH_USER", id);
  },
};
</script>
