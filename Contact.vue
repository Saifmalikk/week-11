<template>
  <div class="contact-container">
    <h1 class="contact-title">Get in Touch</h1>
    <p class="contact-description">
      Have a project in mind or want to collaborate? Feel free to reach out to me. I'm always
      interested in working on new and exciting projects.
    </p>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData);
      // You can add logic to send the form data to your backend or API endpoint here
    },
  },
};
</script>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.contact-title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #007bff;
}

.contact-description {
  font-size: 18px;
  margin-bottom: 30px;
  color: #333;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
  color: #555;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
