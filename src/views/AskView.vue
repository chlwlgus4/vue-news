<template>
  <div>
    <p v-for="item in this.$store.state.asks">
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
export default {
  //컴포넌트 생성
  created() {
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>

<style></style>
