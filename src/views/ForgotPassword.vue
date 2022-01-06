<template>
  <div class="reset-password">
    <Modal v-if="this.modalActive" v-on:close-modal="closeModal" />
    <Loading v-if="loading"/>
    <div class="form-wrap">
      <form class="forgot">
        <h2>Reset Password</h2>
        <p>Forgot Password? Enter email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="email" placeholder="Email" v-model="email" />
            <Email class="icon" />
          </div>
        </div>
        <button>Submit</button>
        <div class="angle"></div>
      </form>
      <div class="bg"></div>
    </div>
  </div>
</template>
<script>
import Email from "../assets/Icons/envelope-regular.svg";
import Loading from '../components/Loading.vue';
import Modal from "../components/Modal.vue";

export default {
  components: { Email, Modal, Loading },
  name: "app-forgot",
  data() {
    return {
      email: "",
      modalActive: true,
      modalMessage: "",
      loading:null,
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .forgot {
      h2 {
        margin-bottom: 8px;
      }
      p {
        margin-bottom: 32px;
      }
    }
  }
}
</style>
