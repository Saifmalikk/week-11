<template>
    <div class="project-container">
      <h1 class="project-title">Project 3: E-commerce Platform</h1>
      <p class="project-description">
        Built a robust e-commerce platform featuring user authentication, product
        catalog, cart management, and secure payment gateways. Implemented
        real-time order tracking and customer reviews.
      </p>
      <div class="project-details">
        <h2 class="details-title">Details</h2>
        <ul class="details-list">
          <li><strong>Client:</strong> E-commerce Innovations</li>
          <li><strong>Technologies:</strong> React.js, Node.js, Firebase</li>
          <li><strong>Tasks:</strong> Full-stack Development, Payment Integration</li>
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
    name: 'Project3',
    methods: {
      openDemo() {
        // Logic to open the project demo link
        window.open('https://example.com/project3-demo', '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .project-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
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
  