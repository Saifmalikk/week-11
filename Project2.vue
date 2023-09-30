<template>
  <div class="project-container">
    <h1 class="project-title">Project 2: Interactive Web Application</h1>
    <p class="project-description">
      Developed a dynamic web application allowing users to create, edit, and
      share interactive content. Implemented real-time collaboration features
      and responsive design.
    </p>
    <div class="project-details">
      <h2 class="details-title">Details</h2>
      <ul class="details-list">
        <li><strong>Client:</strong> ABC Company</li>
        <li><strong>Technologies:</strong> Vue.js, Node.js, MongoDB</li>
        <li><strong>Tasks:</strong> Full-stack Development, Real-time Features</li>
      </ul>
    </div>
    <div class="project-actions">
      <button class="action-button" @click="openDemo">View Demo</button>
      <a class="action-button" href="#" target="_blank">GitHub Repo</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project2',
  methods: {
    openDemo() {
      // Logic to open the project demo link
      window.open('https://example.com/project2-demo', '_blank');
    }
  }
};
</script>

<style scoped>
.project-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.project-title {
  font-size: 36px;
  margin-bottom: 15px;
  color: #007bff;
}

.project-description {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.project-details {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.details-title {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
}

.details-list {
  list-style: none;
  padding: 0;
  font-size: 18px;
  color: #555;
}

.details-list li {
  margin-bottom: 10px;
}

.project-actions {
  margin-top: 30px;
}

.action-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 15px;
}

.action-button:hover {
  background-color: #0056b3;
}
</style>
