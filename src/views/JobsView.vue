<template>
  <div>
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  //컴포넌트 생성
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
