<template>
  <div class="about-view">
    <h2>About Me</h2>
    <div class="profile">
      <img src="profile.jpg" alt="Profile Picture" class="profile-picture" />
      <div class="profile-details">
        <p><strong>{{ firstName }} {{ lastName }}</strong></p>
        <p>{{ occupation }}</p>
        <p>{{ location }}</p>
      </div>
    </div>
    <p class="about-description">
      Write a brief introduction about yourself here. Mention your interests,
      skills, and experience.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      occupation: 'Web Developer',
      location: 'City, Country',
    };
  },
};
</script>

<style scoped>
/* Specific styles for the AboutView */
.about-view {
  text-align: center;
  padding: 40px;
}

.about-view h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.profile-picture {
  max-width: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-details {
  text-align: left;
}

.profile-details p {
  margin: 0;
  font-size: 18px;
  color: #666;
}

.about-description {
  font-size: 16px;
  color: #333;
  line-height: 1.5;
}
</style>
