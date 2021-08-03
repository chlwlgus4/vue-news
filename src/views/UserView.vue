<template>
  <div>
    user
  </div>
</template>
<script>
export default {
  created() {
    const id = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${id}.json`);
    this.$store.dispatch("FETCH_USER", id);
  },
};
</script>
