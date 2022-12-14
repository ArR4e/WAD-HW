<template>
  <div class="addpost">
    <div class="formArea">
      <form>
        <div class="form-field">
          <textarea class="textarea" id="postbody" v-model="post.body"></textarea>
          <label>Post body</label>
        </div>
        <div class="form-buttons">
          <button @click="updatePost" class="updatePost">Update Post</button>
          <button @click="deletePost" class="deletePost">Delete Post</button>
        </div>
      </form>
    </div>
  </div>
  <div>

  </div>
</template>


<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
        id: "",
        body: "",
        date_created: ""
      },
    };
  },
  methods: {
    fetchAPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/data/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
      // using Fetch - put method - updates a specific post based on the passed id and the specified body
      fetch(`http://localhost:3000/data/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then(() => {
            // console.log(response.data);
            //this.$router.push("/apost/" + this.post.id);
            // We are using the router instance of this element to navigate to a different URL location
            setTimeout(() => this.$router.push("/"), 200);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/data/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            // We are using the router instance of this element to navigate to a different URL location
            setTimeout(() => this.$router.push("/"), 200);
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

.addpost{
  display: grid;
  place-items: center;
  height: 100vh;

}
.formArea {
  background: rgba(0, 0, 0, .5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  padding: 40px;
  width: 40%;
}


.formArea .form-field {
  position: relative;
  margin-bottom: 30px;
}

.formArea .form-field textarea {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  transition: 0.5s;
  margin-top: 10px;
  height: 76px;
  overflow: hidden;
  resize: none;
}

.formArea .form-field textarea:placeholder-shown{
  height: 36px;
  margin-top: 0;
}

.formArea .form-field label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.formArea .form-field textarea:not(:placeholder-shown)~label,
.formArea .form-field textarea:focus~label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.formArea form .form-field{
  display: flex;
  align-items: center;
}

.formArea form .form-field a, .formArea form .form-buttons button{
  position: relative;
  display: inline-block;
  padding: 10px 10px;
  font-weight: 500;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  letter-spacing: 2px;
}

.formArea form .form-buttons button {
  border: none;
  background-color: transparent;
}

.formArea form .form-field:nth-child(2) p {
  margin-right: 5px;
}

.formArea form .form-field a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.formArea form .form-buttons{
  display: flex;
  align-items: center;
  justify-content: center;
}

.formArea form .form-buttons button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}
</style>
