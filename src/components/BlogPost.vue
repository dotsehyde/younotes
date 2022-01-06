<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">
          {{ post.title }}
        </h2>
        <h2 v-else>
          {{ post.title }}
        </h2>
        <p v-if="post.welcomeScreen">
          {{ post.blogPost }}
        </p>
        <p class="content-preview" v-else>{{ post.blogHtml }}</p>
        <router-link v-if="post.welcomeScreen" class="link link-light" :to="{name:'Login'}">
          Login/Register<Arrow class="arrow arrow-light" />
        </router-link>
        <router-link v-else class="link" to="#">
          Open Note<Arrow class="arrow" />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
        alt=""
      />
      <img
        v-else
        :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "blog-post",
  components: { Arrow },
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }
}

.blog-content {
  display: flex;
  flex-direction: column;
  flex: 4;
  justify-content: center;
  align-items: center;
  order: 2;
  @media (min-width: 700px) {
    order: 1;
  }
  @media (min-width: 800px) {
    flex: 3;
  }
  div {
    max-width: 375px;
    padding: 72px 24px;
    @media (min-width: 700px) {
      padding: 0 24px;
    }
  }
  h2 {
    font-size: 32px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 24px;
    @media (min-width: 700px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
  }
  .content-preview {
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    width: 250px;
    text-overflow: ellipsis;
    max-height: 24px;
  }
  .link {
    display: inline-flex;
    align-content: center;
    margin-top: 32px;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: 0.5s ease all;
    &:hover {
      border-bottom-color: var(--accentColor);
    }
  }
  .link-light {
    &:hover {
      border-bottom-color: var(--whiteColor);
    }
  }
}

.blog-photo {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  order: 1;
  flex: 3;
  @media (min-width: 700px) {
    order: 2;
  }
  @media (min-width: 800px) {
    flex: 4;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.no-user:first-child{
    .blog-content{
        background: var(--primaryColor);
        color:var(--whiteColor);
    }
}
</style>
