<template>
  <div class="home">
    <p>sdasdsadas</p>
    <post v-for="post of posts" :post="post"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
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
