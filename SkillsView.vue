<template>
    <div class="skills-view">
      <h1 class="skills-title">My Skills</h1>
      <div class="skills-list">
        <div class="skill-category">
          <h2 class="category-title">Front-end Development</h2>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>Vue.js, React, Angular</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2 class="category-title">Back-end Development</h2>
          <ul>
            <li>Node.js, Express.js</li>
            <li>Python, Django</li>
            <li>RESTful APIs</li>
            <li>Database Management (SQL, MongoDB)</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2 class="category-title">Tools & Technologies</h2>
          <ul>
            <li>Git, GitHub</li>
            <li>Webpack, Babel</li>
            <li>npm, Yarn</li>
            <li>Testing Frameworks (Jest, Mocha)</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillsView',
  };
  </script>
  
  <style scoped>
  .skills-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .skills-title {
    font-size: 36px;
    margin-bottom: 20px;
    color: #007bff;
  }
  
  .skills-list {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  
  .skill-category {
    width: 30%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .category-title {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
    font-size: 16px;
    margin-bottom: 5px;
    color: #666;
  }
  </style>
  