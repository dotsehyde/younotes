<template>
  <footer>
    <div class="links">
      <ul>
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        |
        <router-link class="link" :to="{ name: 'Notes' }">Notes</router-link>
        |
        <router-link class="link" :to="{ name: 'Login' }"
          >Login/Register</router-link
        >
      </ul>
    </div>
    <div class="icons-ctn">
      <a href=""><twi class="icon" /></a>
      <a href=""><insta class="icon" /></a>
      <a href=""><linkedin class="icon" /></a>
    </div>
    <p>
      Copyright 2022 YouNotes | Developed by
      <a href="https://dotshyde.github.io" target="_blank">Benjamin.</a>
    </p>
  </footer>
</template>
<script>
import twi from "../assets/Icons/twitter-brands.svg";
import insta from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";

export default {
  name: "app-footer",
  components: {
    twi,
    insta,
    linkedin,
  },
};
</script>
<style lang="scss" scoped>
footer {
  width: 100vw;
  padding: 10px 20px;
  margin-top: auto;
  text-align: center;
  background-color: var(--primaryColor);
  color: var(--whiteColor);
}
.icons-ctn {
  display: flex;
  justify-content: center;
  .icon {
    width: auto;
    height: 25px;
    margin-right: 20px;
  .icon:last-child{
      margin-right: 0;
  }
  }
}
.links {
  margin-bottom: 5px;
}
.link {
  transition: 0.3s color ease;
  color: var(--whiteColor);
  &:hover {
    color: var(--accentColor);
  }
}
a {
  text-decoration: none;
  color: var(--whiteColor);
  &:hover {
    color: var(--accentColor);
  }
}
</style>
