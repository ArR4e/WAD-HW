<template>
  <div class="home">
    <div id="button-container">
      <button @click="logOut">Log out</button>
    </div>
    <post v-for="post of posts" :post = "post" @click="this.$router.push(`/apost/${post.id}`)"/>
    <div id="button-container">
      <button @click="addPost">Add post</button>
      <button @click="deleteAll">Delete all</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import Post from "@/components/Post";
import post from "@/components/Post.vue";

export default {
  name: 'HomePage',
  data() {
    return {
      posts: []
    }
  },

  components: {
    Post
  },
  computed: {
  },
  methods: {
    post() {
      return post
    },
    // map `this.resetLikes()` to `this.$store.dispatch('resetLikes')`
    // ...mapActions(['resetLikes']),
    logOut() {
      fetch("http://localhost:3000/auth/logout")
          .then(() => this.$router.push("/login"))
    },
    addPost() {
      this.$router.push("/addpost");
    }
  },
  mounted() {
    fetch("http://localhost:3000/data/posts")
        .then(response => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message));
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
