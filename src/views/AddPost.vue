<template>
  <div class="addpost">
    <div class="formArea">
      <form>
        <div class="form-field">
          <textarea class="textarea" placeholder="&nbsp;" id="postbody" v-model="post.body"></textarea>
          <label>Post body</label>
        </div>
        <div class="form-buttons">
          <button @click="addPost" type="submit">Create post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "",
      }
    }
  },
  methods: {
    addPost() {
      fetch("http://localhost:3000/data/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      }).then(response => response.json())
          .then(newPost => console.log(newPost))
          .then(() => {
            location.assign("/")
          })
          .catch((e) => {
            console.log(e);
          });
    }
  }
}

</script>

<style scoped>

.addpost {
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

.formArea .form-field textarea:placeholder-shown {
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

.formArea .form-field textarea:not(:placeholder-shown) ~ label,
.formArea .form-field textarea:focus ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.formArea form .form-field {
  display: flex;
  align-items: center;
}

.formArea form .form-field a, .formArea form .form-buttons button {
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

.formArea form .form-buttons {
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
