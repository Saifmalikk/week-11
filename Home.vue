<template>
  <div class="container">
    <h1>Welcome to My Portfolio</h1>
    <p>Hello, I'm [Your Name]. I'm a passionate web developer.</p>
    <p>Explore my projects, skills, and get in touch!</p>

    <section class="contact-form">
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>

        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 36px;
  margin-bottom: 15px;
}

.contact-form {
  margin-top: 30px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
