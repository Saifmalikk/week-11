<template>
  <main class="container">
    <PopUpMessage ref="popUpMessage"></PopUpMessage>
    <h1 class="page-title">Contact Me</h1>
    <div class="grid-2-col">
      <div class="message-wrapper">
        <div class="pd-blk"></div>
        <p class="message">Have a <u>question</u> or a <u>project</u> in mind? Don't hesitate to send me a <u>message!</u>
        </p>
        <SocialLinksVue v-if="!isSmallScreen" />
      </div>
      <div class="form-wrapper">
        <div class="pd-blk"></div>
        <form ref="contactForm" @submit="submitForm">
          <input type="text" id="name" placeholder="Name" v-model="name" required>
          <input type="email" id="email" placeholder="Email" v-model="email" required>
          <textarea name="Message" id="message" rows="5" placeholder="Message" v-model="message" required></textarea>
          <button type="submit" class="btn-default btn-form">Send Message</button>
        </form>
      </div>
    </div>
    <SocialLinksVue v-if="isSmallScreen" />

    <AppFooter />
  </main>
</template>

<script>
import SocialLinksVue from '@/components/SocialLinks.vue';
import PopUpMessage from '@/components/PopUpMessage.vue';
import AppFooter from '@/components/AppFooter.vue';
import { pushFeedback } from '@/utils/database'

export default {
  name: "ProjectsView",
  components: {
    SocialLinksVue,
    PopUpMessage,
    AppFooter
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  computed: {
    isSmallScreen() {
      return window.innerWidth <= 768;
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      // Check form validity
      if (!this.$refs.contactForm.checkValidity()) {
        this.$refs.contactForm.reportValidity();
        return; // Do not proceed with submission
      }
      const feedback = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      pushFeedback(feedback)
        .then(() => {
          this.$refs.popUpMessage.show("Message Sent!", 5000);
          this.name = '';
          this.email = '';
          this.message = '';
        })
        .catch((error) => {
          this.$refs.popUpMessage.show(error, 5000);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
.grid-2-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.message-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.message {
  width: 80%;
  font-size: 3.2rem;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 60%;
}

input,
textarea {
  background-color: $c-bg;
  margin: 2.2rem 0;
  padding: 1.6rem 1.6rem;
  border: none;
  border-bottom: 3px solid #E1E1E1;
  resize: none;
  color: white;
  outline: none;
}

input:focus,
textarea:focus {
  border-bottom: 3px solid $c-primary;
}

.btn-form {
  margin-top: 5rem;
  background-color: $c-primary;
  font-size: 2rem;
  border-radius: 1rem;
  padding: 1.6rem;
  text-align: center;
}

.pd-blk {
  padding-block: 4rem;
}

@media screen and (max-width: 768px) {
  .grid-2-col {
    grid-template-columns: 1fr;
  }
}
</style>