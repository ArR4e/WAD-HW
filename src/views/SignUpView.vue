<template>
  <div class="signup">
    <div class="formArea">
      <form id="validation">
        <div class="errors" v-if="errors.length>0">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <div class="form-field">
          <input type="email" name="" v-model="email" placeholder="&nbsp;" required>
          <label>Email</label>
        </div>
        <div class="form-field">
          <input type="password" v-model="password" name="" placeholder="&nbsp;" required
                 :class="errors.length?'invalid':''">
          <label>Password</label>
        </div>
        <div class="form-buttons" @click="signup()">
          <a>Sign up</a>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
// Validation
export default {
  name: "SignUpView",
  data() {
    return {
      errors: [],
      email: null,
      password: null
    }
  },
  watch: {
    password() {
      this.checkForm();
    }
  },
  methods: {
    signup() {
      if (this.errors.length === 0) {
        let data = {
          email: this.email,
          password: this.password
        };
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/auth/signup", {
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
    },
    checkForm: function () {
      this.errors = [];

      if (this.password.length < 8) {
        this.errors.push('Password is too small!');
      }

      if (this.password.length > 15) {
        this.errors.push('Password is too long!');
      }

      if (!/[A-Z]/.test(this.password)) {
        this.errors.push('Password should include at least one uppercase alphabet character');
      }

      if (!/[a-z].*[a-z]/.test(this.password)) {
        this.errors.push('Password should include at least two lowercase alphabet characters');
      }

      if (!/\d/.test(this.password)) {
        this.errors.push('Password should include at least one numeric value');
      }

      if (!/[A-Z]/.test(this.password[0])) {
        this.errors.push('Password should start with an uppercase alphabet')
      }

      if (!/_/.test(this.password)) {
        this.errors.push('Password should include the character “_”')
      }

      if (!this.errors) {
        return true;
      }
    }
  }
}
</script>

<style scoped>

.errors {
  font-size: 12px;
  margin-bottom: 3vh;
}

.errors li {
  color: #ff7d7d;
}

.signup {
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

.formArea .form-field input.invalid {
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
