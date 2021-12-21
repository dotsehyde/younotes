<template>
  <div class="blog-card">
    <div v-show="editPost" class="icons">
      <div class="icon">
        <Edit class="edit" />
      </div>
      <div class="icon">
        <Delete class="del" />
      </div>
    </div>
    <img :src="require(`../assets/blogCards/${post.photo}.jpg`)" alt="" />
    <div class="info">
      <h4>{{ post.title }}</h4>
      <h6>{{ post.date }}</h6>
      <router-link to="#" class="link"
        >Open Note<Arrow class="arrow"
      /></router-link>
    </div>
  </div>
</template>
<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";

export default {
  name: "blog-card",
  props: ["post"],
  components: { Arrow, Edit, Delete },
  computed:{
    editPost(){
      return this.$store.state.editPost;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: var(--whiteColor);
  min-height: 350px;
  transition: 0.5s ease all;
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: rotateZ(-1deg) scale(1.01);
  }
}
.icons {
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 50;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--whiteColor);
    transition: 0.5s ease all;
    &:hover {
      background-color: var(--accentColor);
      .edit,
      .del {
        path {
          fill: var(--whiteColor);
        }
      }
    }
    &:nth-child(1) {
      margin-right: 8px;
    }
    .edit,
    .del {
      pointer-events: none;
      height: 15px;
      width: auto;
    }
  }
}

img {
  display: block;
  border-radius: 8px 8px 0 0;
  z-index: 1;
  width: 100%;
  min-height: 200px;
  object-fit: cover;
}

.info {
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  padding: 32px 16px;
  color: #000;
  h4 {
    padding-bottom: 8px;
    font-size: 20px;
    font-weight: 300;
  }
  h6 {
    padding-bottom: 16px;
    font-size: 12px;
    font-weight: 400;
  }
  .link {
    display: inline-flex;
    align-items: center;
    margin-top: auto;
    font-weight: 500;
    font-size: 12px;
    padding-top: 20px;
    padding-bottom: 4px;
    transition: 0.5s ease-in all;
    &:hover{
        color:var(--accentColor);
    }
    .arrow{
        width: 10px;
    }
  }
}
</style>
