<template>
  <div class="form-wrap">
    <Loading v-if="loading" />
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>Create an Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Full Name" v-model="name" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="userName" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="email" placeholder="Email" v-model="email" />
          <Email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <Pass class="icon" />
        </div>
        <div v-if="error" class="error">{{ errorMessage }}</div>
      </div>

      <button @click.prevent="register">Register</button>
      <div class="angle"></div>
    </form>
    <div class="bg"></div>
  </div>
</template>
<script>
import Email from "../assets/Icons/envelope-regular.svg";
import Pass from "../assets/Icons/lock-alt-solid.svg";
import User from "../assets/Icons/user-alt-light.svg";
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
  components: { Email, Pass, User ,Loading},
  name: "app-register",
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.userName !== "" &&
        this.name !== ""
      ) {
        try {
          this.loading = true;
          this.error = false;
          this.errorMessage = "";
          const firebaseAuth = await firebase.auth();
          const user = await firebaseAuth.createUserWithEmailAndPassword(
            this.email,
            this.password
          );
          const database = await db.collection("users").doc(user.user.uid);
          await database.set({
            "name": this.name,
            "username": this.userName,
            "email": this.email,
          });
          this.$router.push({ name: "Home" });
          this.loading = false;
          return;
        } catch (err) {
          this.error = true;
          this.errorMessage = err.message;
        }
      }
      this.error = true;
      this.errorMessage = "Please fill all the fields";
      return;
    },
  },
  data() {
    return {
      email: "",
      error: false,
      errorMessage: "",
      password: "",
      userName: "",
      name: "",
      loading: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
