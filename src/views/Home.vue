<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="_post"
      v-for="(_post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>More Recent Notes</h3>
        <div class="blog-cards">
          <BlogCard
            :post="_post"
            v-for="(_post, index) in blogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Publish/Organize your notes. Register on YouNotes today.</h2>
        <router-link class="router-btn" to="#"
          >Register Now<Arrow class="arrow arrow-light"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import BlogPost from "../components/BlogPost.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "app-home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a filler title",
          blogHtml: "This is a filler log post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a filler title",
          blogHtml: "This is a filler log post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
    computed:{
      blogCards(){
        return this.$store.state.blogCards;
      } 
    }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.blog-card-wrap {
  .container {
    padding: 0 50px;
  }
  h3 {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 5px;
    display: flex;
    justify-content: center;
      flex-direction: column;

    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 50px;
      flex-direction: row;
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      text-align: left;
      width: 100%;
    }
 
    .router-btn {
      transition: 500ms ease all;
      cursor: pointer;
      margin-top: 24px;
      padding: 12px 24px;
      background-color: #303030;
      color: var(--whiteColor);
      border-radius: 20px;
      border: none;
      font-size: 12px;
      text-decoration: none;
      display: flex;
      text-transform: uppercase;

      &:focus {
        outline: none;
      }
      &:hover {
        background-color: var(--accentColor);
      }
      @media (min-width: 800px) {
        margin-left: auto;
        font-size: 14px;
      }
    }
  }
}
</style>
