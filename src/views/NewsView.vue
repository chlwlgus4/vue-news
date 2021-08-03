<template>
  <div>
    <p v-for="item in newsItems">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small
        >{{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import { mapState, mapGetters } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      newsItems: "fetchedNews",
    }),
    // ...mapState({
    //   news: (state) => state.news,
    // }),
    // news() {
    //   return this.store.state.news;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
