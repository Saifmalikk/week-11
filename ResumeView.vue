<template>
  <main class="CV-body">
      <div class="grid">
          <section class="side-menu">
              <div class="fixed-menu-content">
                  <img src="@/assets/headshot.png" class="headshot" alt="Profile Image">
                  <h1 class="profile-name">Bryce</h1>
                  <h1 class="profile-name">Pillwein</h1>
                  <ul class="menu-list" role="list">
                      <li><a href="#PAGE-WORK">EXPERIENCE</a></li>
                      <li><a href="#PAGE-EDUCATION">EDUCATION</a></li>
                      <li><a href="#PAGE-SKILLS">SKILLS</a></li>
                      <li><a href="#PAGE-CONTACT">CONTACT</a></li>
                  </ul>


              </div>
          </section>

          <section>
              <header class="flex-header">
                  <h1 class="header-title">Resume</h1>
                  <router-link to="/"><button class="btn-back">Go Back</button></router-link>
              </header>

              <div id="PAGE-WORK" class="content-page">
                  <h1 class="content-title">WORK EXPERIENCE</h1>
                  <!-- Market Analyst -->
                  <div class="exp-module">
                      <h1 class="exp-title">Market Analyst</h1>
                      <h3 class="exp-year">Geo | Melbourne, Vic | 2021 — Current</h3>
                      <ul class="exp-list">
                          <li>
                              <strong>Sales Impact Analysis: </strong>I am responsible for calculating the potential
                              cannibalization, or sales impact, of new stores for our clients within their existing
                              network. This involves conducting rigorous statistical analysis to quantify the effects of
                              new store openings on existing locations, allowing our clients to optimise their expansion
                              strategies.
                          </li>
                          <li>
                              <strong>Predictive Sales Forecasting: </strong>One of my core responsibilities is to develop
                              predictive sales forecasting models tailored to each client's unique needs. These models
                              leverage census data, site data, precinct characteristics and market conditions to generate
                              accurate forecasts, enabling our clients to advance their store network.
                          </li>
                          <li>
                              <strong>Client Relationship Management: </strong>Maintaining strong client relationships is
                              integral to our success. I actively engage with our clients, serving as a trusted advisor
                              and ensuring that our solutions align with their business goals.
                          </li>
                          <li>
                              <strong>Comprehensive Reporting: </strong>I specialise in creating comprehensive reports
                              that offer in-depth insights into potential sites for our clients. These reports include
                              detailed market analyses, sales projections and competitive assessments, providing our
                              clients with a holistic view of their investment opportunities.
                          </li>
                          <li>
                              <strong>Collaboration with Mapping Team: </strong>Collaboration with our mapping team is
                              essential to our success. Together, we ensure the seamless integration of geocoding and
                              mapping data into our market analysis process, enabling us to provide clients with visually
                              intuitive and data-rich reports that enhance their decision-making capabilities.
                          </li>
                      </ul>
                  </div>

                  <!-- Production Process Work -->
                  <div class="exp-module">
                      <h1 class="exp-title">Production Process Worker</h1>
                      <h3 class="exp-year">Nuttelex | Melbourne, Vic | 2019 — 2021</h3>
                      <ul class="exp-list">
                          <li>
                              <strong>Machine Operation: </strong>I operated a variety of machinery involved in the
                              margarine production process, particularly the packaging procedure. My duties included
                              setting up and calibrating machines, monitoring their performance, and making adjustments as
                              needed to maintain optimal production conditions.
                          </li>
                          <li>
                              <strong>Quality Assurance: </strong>Ensuring the highest level of product quality was
                              paramount in my role. I consistently adhered to stringent quality control procedures,
                              conducting frequent inspections and quality checks throughout the production process.
                          </li>
                          <li>
                              <strong>Team Collaboration: </strong>I worked closely with a diverse team of production
                              personnel, fostering a culture of teamwork and collaboration. Effective communication and
                              cooperation were essential to ensuring smooth operations and achieving production goals.
                          </li>

                      </ul>
                  </div>

                  <!-- Traffic Controller -->
                  <div class="exp-module">
                      <h1 class="exp-title">Traffic Controller</h1>
                      <h3 class="exp-year">SuperSealing | Melbourne, Vic | 2017 — 2019</h3>
                      <ul class="exp-list">
                          <li>
                              <strong>Traffic Management: </strong>I was responsible for managing and controlling traffic
                              at various work sites and road construction zones. This included setting up, maintaining,
                              and removing traffic control devices to create safe work environments.
                          </li>
                          <li>
                              <strong>Safety Compliance: </strong>Ensuring the safety of both road users and construction
                              workers was my top priority. I diligently followed all safety protocols, guidelines, and
                              regulations.
                          </li>
                          <li>
                              <strong>Communication: </strong>Effective communication was essential in my role. I
                              coordinated with fellow traffic controllers, construction crews, and, when necessary, law
                              enforcement personnel to ensure the smooth and safe flow of traffic. Clear and concise
                              communication was critical in preventing accidents and maintaining efficient traffic flow.
                          </li>
                      </ul>
                  </div>
              </div>



              <div id="PAGE-EDUCATION" class="content-page">
                  <h1 class="content-title">EDUCATION</h1>

                  <!-- Bachelor of IT -->
                  <div class="edu-module">
                      <h1 class="exp-title">Bachelor of Information Technology</h1>
                      <h3 class="exp-year">Deakin University | 2022 — Current</h3>
                      <p class="ele-edu">
                          In pursuit of my Bachelor of Information Technology degree at Deakin University, I am
                          gaining in-depth knowledge and practical skills in various aspects of IT. My coursework
                          includes subjects such as software development, database management, cybersecurity, and web
                          technologies. This program equips me with the expertise required to excel in the rapidly
                          evolving field of information technology.
                      </p>
                  </div>

                  <!-- Grad dip of Psych -->
                  <div class="edu-module">
                      <h1 class="exp-title">Graduate Diploma of Psychological Science (Honors Equivalent)</h1>
                      <h3 class="exp-year">Deakin University | 2019</h3>
                      <p class="ele-edu">I successfully completed a Graduate Diploma of Psychological Science at Deakin
                          University. This program provided me with a comprehensive understanding of psychological
                          principles and research methodologies. It served as a foundation for my academic and
                          professional journey in the field of psychology.</p>
                  </div>

                  <!-- Bachelor of Psych -->
                  <div class="edu-module">
                      <h1 class="exp-title">Bachelor of Psychological Science</h1>
                      <h3 class="exp-year">Deakin University | 2016 — 2019</h3>
                      <p class="ele-edu">
                          My Bachelor of Psychological Science degree at Deakin University was a transformative
                          experience that allowed me to delve into the fascinating realm of psychology. This program
                          provided a solid grounding in core psychological theories, research methods, and practical
                          applications. It laid the foundation for my pursuit of advanced studies in psychology and
                          equipped me with a deep understanding of human behaviour.</p>
                  </div>

                  <!-- Year 12 -->
                  <div class="edu-module">
                      <h1 class="exp-title">Year 12</h1>
                      <h3 class="exp-year">St Joseph's College | 2015 | ATAR: 87.6</h3>
                      <p class="ele-edu">
                          In my final year of secondary education at St Joseph's College, I achieved an impressive
                          ATAR score of 87.6. This score reflects my dedication to academic excellence and my
                          commitment to achieving high standards in my studies.
                          <br><br>
                          <strong>Certificate of Excellence in Psychology</strong>: I received a Certificate of
                          Excellence in Psychology. This certificate is awarded to the top ranked student within the
                          field of study, underscoring my passion for the subject and my early interest in the field
                          of psychology.
                      </p>
                  </div>



              </div>


              <div id="PAGE-SKILLS" class="content-page">
                  <h1 class="content-title">SKILLS</h1>
                  <div class="exp-module">
                      <!-- Web -->
                      <h1 class="skill-title">Web Development</h1>
                      <p class="ele">Proficient in creating dynamic and user-centric web applications using
                          technologies like Vue, HTML5, CSS3, SASS, and JavaScript.</p>

                      <!-- Application Development -->
                      <h1 class="skill-title">Application Development</h1>
                      <p class="ele">Experienced in developing software applications with expertise in Python, C#,
                          C++, and JavaScript.</p>

                      <!-- Microsoft Office -->
                      <h1 class="skill-title">Microsoft Office</h1>
                      <p class="ele">Proficient in Microsoft Office Suite, including Word, Excel, PowerPoint, and
                          Outlook.</p>

                      <!-- Version Control -->
                      <h1 class="skill-title">Version Control</h1>
                      <p class="ele">Skilled in utilising version control systems like GitHub for efficient project
                          management and collaborative development.</p>

                      <!-- Data Analysis -->
                      <h1 class="skill-title">Data Analysis</h1>
                      <p class="ele">Experienced in data analysis and manipulation using Python, including Pandas
                          and Polars libraries.</p>

                      <!-- Database Management -->
                      <h1 class="skill-title">Database Management</h1>
                      <p class="ele">Knowledge of SQL for database manipulation and integration into web
                          applications.</p>


                      <!-- Game Development -->
                      <h1 class="skill-title">Game Development</h1>
                      <p class="ele">Experienced in creating games using SplashKit, Pygame and MonoGame.</p>

                      <!-- Cloud Services -->
                      <h1 class="skill-title">Cloud Services</h1>
                      <p class="ele">killed in leveraging cloud services for tasks like automated email and data
                          processing.</p>

                      <!-- Cross-platform Development -->
                      <h1 class="skill-title">Cross-platform Development</h1>
                      <p class="ele">Proficient in creating cross-platform executables using PyQt and PyInstaller.
                      </p>

                      <!-- Team Collaboration -->
                      <h1 class="skill-title">Team Collaboration</h1>
                      <p class="ele">Effective in fostering efficient teamwork and collaborative project
                          management.</p>

                  </div>
              </div>


              <div id="PAGE-CONTACT" class="content-page">
                  <h1 class="content-title">CONTACT</h1>
                  <div class="contact-grid">
                      <p class="cta-text">
                          I highly value your input and am eager to connect with you. Whether you have questions,
                          feedback, or
                          collaboration ideas, please don't hesitate to reach out.
                          <br><br>
                          You can contact me via email at or if you prefer, feel free to give me a call.
                          <br><br>
                          I genuinely appreciate your interest in connecting, and I look forward to our conversation. I'm
                          committed to providing you with a prompt and helpful response to any inquiries you may have.
                      </p>

                      <div class="cta-container">
                          <h1 class="d-title">Details</h1>
                          <!-- Email -->
                          <div class="icon-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                                  class="icon">
                                  <path
                                      d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                              </svg>
                              <p class="info">dev-pillwein@gmail.com</p>
                          </div>

                          <!-- Phone -->
                          <div class="icon-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                                  class="icon">
                                  <path
                                      d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                              </svg>
                              <p class="info">0473 019 316</p>
                          </div>

                          <div class="btn-wrapper">
                              <router-link to="/contact">
                                  <button class="contact-page-btn">Contact Form</button>
                              </router-link>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
      </div>
  </main>
</template>


<script>
export default {
  name: "Resume",
  data() {
      return {

      };
  }
}
</script>

<style lang="scss" scoped>
.CV-body {
  background-color: rgb(255, 255, 255);
  color: black;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 4fr;
}

// Side Bar Menu
.side-menu {
  background-color: rgb(20, 20, 20);
  position: relative;
}

.fixed-menu-content {
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  top: 0;
  width: 100%;
}

.headshot {
  width: 250px;
  padding: 1rem 0rem 0rem 3rem;
  height: auto;
  background-color: rgb(59, 59, 59);
  border-radius: 2rem;
  margin: 1rem;
}

.profile-name {
  font-size: 3rem;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.menu-list {
  padding: 0;
  margin-top: 4rem;

  li {
      font-size: 2rem;
      cursor: pointer;
      font-weight: 600;
      margin-top: 2rem;
      color: white;

      a:hover {
          color: $c-primary;
      }
  }
}


// Header
.flex-header {
  width: 100%;
  background-color: rgb(245, 245, 245);
  padding: 3rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  color: rgb(100, 100, 100);
  font-size: 2.4rem;
  font-weight: 500;
}

.btn-back {
  border: none;
  outline: none;
  border-radius: .5rem;
  padding: 1rem 2rem;
  background-color: rgb(33, 33, 33);
  color: white;
}

.btn-back:hover {
  background-color: $c-primary;
}

// Content
.content-page {
  --max-width: 80%;
  --padding: 1rem;
  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
  border-bottom: 1px solid rgb(150, 150, 150);
}

.content-title {
  font-size: 4rem;
  color: black;
  font-weight: 500;
  margin-top: 4rem;
}

.exp-module {
  margin-top: 3rem;
  margin-bottom: 9rem;
}

.exp-title {
  color: black;
  font-size: 2rem;
  font-weight: 600;
}

.exp-year {
  color: black;
  font-size: 1.8rem;
  font-weight: 400;
}

.exp-list {
  list-style-type: none;

  li {
      margin-top: 2rem;
      text-align: justify;
  }
}

.skill-title {
  color: black;
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 1.2rem;
}

.ele {
  color: black;
  padding-left: 2rem;
}

.ele-edu {
  color: black;
  margin-top: 0.5rem;
  padding-left: 2rem;
  text-align: justify;
}

.edu-module {
  margin-top: 2rem;
  margin-bottom: 5rem;
}

// Contact Page
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  margin-bottom: 10rem;
}

.cta-text {
  color: black;
  text-align: justify;
  padding: 1rem 3rem;
}

.cta-container {
  margin: 0 auto;
  padding: 1rem 3rem;
}

.d-title {
  color: black;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
}

.icon-flex {
  display: flex;
  align-items: center;
}

.icon {
  fill: black;
  width: 30px;
  height: 30px;
}

.info {
  color: black;
  font-size: 2.5rem;
  padding: 2rem;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.contact-page-btn {
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  padding: .85rem 2rem;
  background-color: rgb(219, 37, 79);
  color: white;
  font-size: 2rem;
}

.contact-page-btn:hover {
  background-color: rgb(164, 44, 72);
}

@media screen and (max-width: 768px) {

  ul,
  .ele-edu,
  .cta-text {
      padding: 0;
  }

  .grid {
      grid-template-columns: 1fr;
  }

  .side-menu {
      display: none;
  }

  .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 5rem;
  }

  .icon {
      width: 25px;
      height: 25px;
  }

  .info {
      font-size: 2rem;
  }

  .cta-container {
      padding: 0;
  }
}
</style>