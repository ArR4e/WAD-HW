<template>
  <div class="home">
    <post v-for="postid of posts" :postId="postid"/>
    <div id="button-container">
      <button @click="resetLikes">Reset likes</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Footer.vue'
import Post from "@/components/Post";
import { mapActions } from 'vuex'

export default {
  name: 'MainView',
  components: {
    Post,
    HelloWorld
  },
  computed: {
    posts(){
      return this.$store.getters.postIds;
    }
  },
  methods: {
    // map `this.resetLikes()` to `this.$store.dispatch('resetLikes')`
    ...mapActions(['resetLikes'])
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

#button-container{
  margin: 50px 0;
  text-align: center;
}

#button-container button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 1em;
  color: #03e9f4;
  transition: .5s;
  letter-spacing: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
}
#button-container button:hover{
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

</style>
