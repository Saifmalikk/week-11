<template>
  <div class="skills-container">
    <h1 class="skills-title">My Skills</h1>
    <ul class="skills-list">
      <li class="skill-item">HTML5</li>
      <li class="skill-item">CSS3</li>
      <li class="skill-item">JavaScript</li>
      <li class="skill-item">Vue.js</li>
      <li class="skill-item">React.js</li>
      <li class="skill-item">Node.js</li>
      <li class="skill-item">Express.js</li>
      <li class="skill-item">SQL</li>
      <li class="skill-item">MongoDB</li>
      <li class="skill-item">Responsive Design</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped>
.skills-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.skills-title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #007bff;
}

.skills-list {
  list-style: none;
  padding: 0;
}

.skill-item {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
  background-color: #ffffff;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.skill-item:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
