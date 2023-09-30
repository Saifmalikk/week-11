<template>
    <div class="project-container">
      <h1 class="project-title">Project 1: Creative Website Redesign</h1>
      <p class="project-description">
        Redesigned the client's website to enhance user experience and improve
        visual appeal. Implemented responsive design and interactive elements.
      </p>
      <div class="project-details">
        <h2 class="details-title">Details</h2>
        <ul class="details-list">
          <li><strong>Client:</strong> XYZ Company</li>
          <li><strong>Technologies:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Tasks:</strong> Frontend Development, UI/UX Design</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Project1',
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
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .project-container {
      padding: 15px;
    }
  
    .project-title {
      font-size: 30px;
    }
  
    .project-description {
      font-size: 16px;
    }
  
    .details-title {
      font-size: 20px;
    }
  
    .details-list {
      font-size: 16px;
    }
  }
  </style>
  