<template>
  <div class="login">
    <div class="formArea">
      <form>
        <div class="form-field">
          <input type="email" v-model="email" name="" placeholder="&nbsp;" required>
          <label>Email</label>
        </div>
        <div class="form-field">
          <input type="password" v-model="password" name="" placeholder="&nbsp;" required>
          <label>Password</label>
        </div>
        <div class="form-buttons">
          <a @click="login()">Log in</a>
          <span>or</span>
          <a @click="this.$router.push('/signup')">Sign up</a>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
// Validation

export default {
  name: "LogInView",
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    }
  }
}
</script>

<style scoped>


.errors li {
  color: #ff7d7d;
}

.login {
  display: grid;
  place-items: center;
  height: 100vh;
}

.formArea {
  background: rgba(0, 0, 0, .5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  padding: 40px;
  max-width: 400px;
  width: 20vw;
}

.formArea .form-field {
  position: relative;
  margin-bottom: 30px;
}

.formArea .form-field input {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.formArea .form-field input.invalid{
  border-bottom-color: #ff7d7d;
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

.formArea .form-field input:focus + label,
.formArea .form-field input:not(:placeholder-shown) + label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.formArea form .form-buttons {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.formArea form .form-buttons a, .formArea form .form-buttons button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: 700;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  letter-spacing: 4px;
  margin-top: 20px;
  border: none;
  background-color: transparent;
}

.formArea form .form-buttons a {
  margin-top: 0;
}

.formArea form .form-buttons a:hover, .formArea form .form-buttons button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 100px #03e9f4;
}

.formArea form .form-buttons span {
  position: relative;
}

.formArea form .form-buttons span::before {
  position: absolute;
  content: "";
  width: 30px;
  height: 1px;
  background-color: #fff;
  top: 50%;
  right: 100%;
  margin-right: 5px;
}

.formArea form .form-buttons span::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 1px;
  background-color: #fff;
  top: 50%;
  margin-left: 5px;
}
</style>
