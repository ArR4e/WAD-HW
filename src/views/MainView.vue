<template>
  <div class="home">
    <post v-for="post of posts" :post="post"/>
    <button @click="resetLikes">Reset likes</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Footer.vue'
import Post from "@/components/Post";

export default {
  name: 'MainView',
  components: {
    Post,
    HelloWorld
  },
  computed: {
    posts(){
      return this.$store.getters.posts;
    }
  },
  methods: {
    resetLikes: function () {
      this.$store.dispatch("resetLikesAct")
    }
  }
}
</script>

<style scoped>
html {
  font-family: 'Roboto', sans-serif;
}

* {
  --postc: var(--navc); /*gen*/
  --posttxt: #fff;
  --postSec: #fff;
}

main {
  margin-top: 60px;
  margin-inline: 25%;
}

</style>
