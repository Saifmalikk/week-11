<template>
  <div class="about-container">
    <h1 class="about-title">About Me</h1>
    <div class="about-content">
      <img src="/path/to/your/profile-picture.jpg" alt="Profile Picture" class="profile-picture">
      <p>
        Hi there! I'm Saif Malik, a passionate web developer with a keen interest in creating
        interactive and user-friendly websites and applications. I have [X years] of experience
        in web development and have worked on a variety of projects spanning different technologies
        and industries.
      </p>
      <p>
        My skills include front-end and back-end development, responsive design, and database
        management. I'm proficient in technologies such as HTML, CSS, JavaScript, Vue.js, Node.js,
        and SQL.
      </p>
    </div>
    <div class="contact-info">
      <h2>Contact Information</h2>
      <ul class="info-list">
        <li><strong>Email:</strong> example@example.com</li>
        <li><strong>Phone:</strong> +1 (123) 456-7890</li>
        <li><strong>LinkedIn:</strong> linkedin.com/in/your-profile</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.about-title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #007bff;
}

.about-content {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

.contact-info {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.info-list {
  list-style: none;
  padding: 0;
  font-size: 18px;
  color: #555;
}

.info-list li {
  margin-bottom: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-picture {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
