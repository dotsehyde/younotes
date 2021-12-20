<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "../src/components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap");
:root {
  --primaryColor: #28223a;
  --accentColor: #f3b643;
  --whiteColor: #f6f9f8;
  --greyColor: #848284;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Outfit", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

.blog-card-wrap {
  position: relative;
  background-color: #f1f1f1;
  padding: 80px 16px;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  button,
  .router-btn {
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

  .button-light{
    background-color: transparent;
    border:2px solid var(--whiteColor);
    color:var(--whiteColor)
  }

  .button-inactive{
    cursor: none !important;
    pointer-events: none !important;
    background-color: rgba(128,128,128,0.5) !important;
  }

  .blog-cards {
    place-items: center;
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) { 
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
