<template>
    <div class="resume-container">
      <h1 class="resume-title">My Resume</h1>
      <section class="resume-section">
        <h2 class="section-title">Education</h2>
        <div class="resume-item">
          <h3 class="resume-subtitle">Bachelor of Science in Computer Science</h3>
          <p class="resume-details">XYZ University, Graduated in 20XX</p>
        </div>
      </section>
      <section class="resume-section">
        <h2 class="section-title">Work Experience</h2>
        <div class="resume-item">
          <h3 class="resume-subtitle">Web Developer</h3>
          <p class="resume-details">ABC Company, 20XX - Present</p>
          <ul class="responsibilities">
            <li>Develop and maintain responsive web applications using Vue.js and Node.js.</li>
            <li>Collaborate with cross-functional teams to analyze user requirements and design solutions.</li>
          </ul>
        </div>
      </section>
      <section class="resume-section">
        <h2 class="section-title">Skills</h2>
        <ul class="skills-list">
          <li>HTML, CSS, JavaScript</li>
          <li>Vue.js, React.js</li>
          <li>Node.js, Express.js</li>
          <li>Database Management (SQL, MongoDB)</li>
          <li>Responsive Design</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Resume',
  };
  </script>
  
  <style scoped>
  .resume-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .resume-title {
    font-size: 36px;
    margin-bottom: 20px;
    color: #007bff;
  }
  
  .resume-section {
    margin-bottom: 30px;
  }
  
  .section-title {
    font-size: 24px;
    margin-bottom: 15px;
    color: #333;
  }
  
  .resume-item {
    margin-bottom: 15px;
  }
  
  .resume-subtitle {
    font-size: 20px;
    margin-bottom: 10px;
    color: #555;
  }
  
  .resume-details {
    font-size: 16px;
    color: #777;
  }
  
  .responsibilities {
    margin-top: 10px;
    margin-left: 20px;
  }
  
  .skills-list {
    list-style: none;
    padding: 0;
  }
  
  .skills-list li {
    font-size: 18px;
    margin-bottom: 10px;
    color: #555;
  }
  </style>
  