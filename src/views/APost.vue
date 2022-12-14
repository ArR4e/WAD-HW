<template>
  <div class="addpost">
    <div class="formArea">
      <form action="index.html">
        <div class="form-field">
          <textarea class="textarea" placeholder="&nbsp;" id="postbody"></textarea>
          <label>Post body</label>
        </div>
        <div class="form-buttons">
          <button @click="updatePost" class="updatePost">Update Post</button>
          <button @click="deletePost" class="deletePost">Delete Post</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
        urllink: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
      // using Fetch - put method - updates a specific post based on the passed id and the specified body
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            //this.$router.push("/apost/" + this.post.id);
            // We are using the router instance of this element to navigate to a different URL location
            this.$router.push("/allposts");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            // We are using the router instance of this element to navigate to a different URL location
            this.$router.push("/allposts");
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
    // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their
    // position in the URL. The captured values are populated in the req.params object, with the name
    // of the route parameter specified in the path as their respective keys
    this.fetchAPost(this.$route.params.id);
  },
};
</script>


<style scoped>

</style>
