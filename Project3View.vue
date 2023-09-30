<template>
  <div class="project3-view">
    <div class="project-details">
      <h1 class="project-title">Project 3: Yet Another Example Project</h1>
      <p class="project-description">
        This is another sample project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
        a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum.
      </p>
      <router-link to="/projects">
        <button class="back-button">Back to Projects</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project3View',
};
</script>

<style scoped>
.project3-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.project-details {
  text-align: center;
  max-width: 600px;
}

.project-title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #007bff;
}

.project-description {
  font-size: 18px;
  margin-bottom: 30px;
  color: #333;
}

.back-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
