<template>
  <div class="signup">
    <div class="formArea">
      <form id="validation" @change="checkForm" >
        <div class="errors" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <div class="form-field" >
          <!-- Pattern for RFC-822 compliant emails -->
          <input type="email" name="" placeholder="&nbsp;" required>
          <label>Email</label>
        </div>
        <div class="form-field">
          <input type="password" v-model="password" name="" placeholder="&nbsp;" required>
          <label>Password</label>
        </div>
        <div class="form-buttons">
          <a>Sign up</a>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
// Validation
import header from "@/components/Header";
import footer from "@/components/Footer";

export default {
  name: "SignUpView",
  data() {
    return {
      errors: [],
      password: null
    }
  },
  methods: {
    checkForm: function (e) {
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

      e.preventDefault();
    }
  }
}
</script>

<style scoped>

.errors {
  font-size: 12px;
  margin-bottom: 3vh;
}

.errors li{
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
