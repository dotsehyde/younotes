<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </p>
      <h2>Login</h2>
      <div class="inputs">
        <div class="input">
          <input type="email" placeholder="Email" v-model="email" />
          <Email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <Pass class="icon" />
        </div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'Forgot' }"
        >Forgot your Password</router-link
      >
      <button>Login</button>
      <div class="angle"></div>
    </form>
    <div class="bg"></div>
  </div>
</template>
<script>
import Email from "../assets/Icons/envelope-regular.svg";
import Pass from "../assets/Icons/lock-alt-solid.svg";

export default {
  components: { Email, Pass },
  name: "app-login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
<style lang="scss" >
.form-wrap {
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 90%;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 900px) {
    width: 100%;
  }
}
.inputs {
  width: 100%;
  max-width: 350px;
  .input {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    input {
      border: none;
      border-radius: 8px;
      background: #f2f7f6;
      width: 100%;
      padding: 4px 4px 4px 30px;
      height: 50px;
      &:focus{
          outline: none;
      }
    }
      .icon{
          width: 13px;
          position: absolute;
          left: 8px;
      }
  }
}
.login-register {
  margin-bottom: 32px;
  .router-link {
    color: var(--primaryColor);
  }
}
form {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (min-width: 900px) {
    padding: 0 50px;
  }
}

h2 {
  text-align: center;
  font-size: 32px;
  color: var(--greyColor);
  margin-bottom: 40px;
  @media (min-width: 900px) {
    font-size: 40px;
  }
}
.forgot-password {
  cursor: pointer;
  text-decoration: none;
  color: var(--primaryColor);
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all;
  &:hover {
    border-color: var(--accentColor);
  }
}
.angle{
    display: none;
    position: absolute;
    background: #fff;
    transform: rotateZ(3deg);
    width: 60px;
    right: -30px;
    height: 100vh;
    @media (min-width:900px) {
        display: initial;
    }
}
.bg{
    flex: 2;
    display: none;
    background:url("../assets/background.png");
    background-size: cover;
    width: 100%;
    height: 100%;
    @media (min-width:900px) {
        display: initial;
        
    }

}

button {
    transition: 500ms ease all;
    cursor: pointer;
    margin-top: 24px;
    padding: 12px 24px;
    background-color: #303030;
    color: var(--whiteColor);
    border-radius: 20px;
    border: none;
    text-decoration: none;
    text-transform: uppercase;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: var(--accentColor);
    }
  }
</style>
