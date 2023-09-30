<template>
    <div class="container grid">
      <div class="container-pagination" ref="container" @wheel="handleScroll" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd" :style="{ height: containerHeight + 'px' }">
  
        <!-- Game -->
        <section class="page-1" id="page1" ref="page1" :style="{ height: containerHeight + 'px' }">
          <h1 class="page-title">C++ Game</h1>
          <div class="grid-template-2-col">
            <div class="grid-col">
              <div class="pd-blk-4"><!-- Padding Block --></div>
              <p class="project-description">Engineered an engaging RPG-style top-down point and shoot game entirely from
                the ground up, employing C++ programming language alongside the utilization of an open-source software
                development kit (SDK) called Splashkit.</p>
              <div class="pd-blk-5"><!-- Padding Block --></div>
              <img class="img-project" src="@/assets/img-project/game_title.png">
              <!-- <img class="img-project" src="https://images2.imgbox.com/af/fe/nHdn1K6H_o.png" alt="image host" /> -->
  
            </div>
            <div class="grid-col details" v-if="!isSmallScreen">
              <div class="pd-blk-8"><!-- Padding Block --></div>
              <p class="project-accomplishments">Key Accomplishments:</p>
              <ul class="project-accomplishments">
                <li>Engineered a finite state machine, employing procedural programming logic, to ensure smooth
                  game flow.
                </li><br>
                <li>Implemented Json data parsing, enabling seamless recovery of save data and player progress.
                </li><br>
                <li>Devised an accurate AABB collision model, enhancing entity interaction.</li><br>
                <li>Leveraged existing tile sets to craft expansive and visually captivating world maps.</li><br>
                <li> Utilized vector physics principles to enable fluid movement within a 360-degree 2D space.</li>
              </ul>
            </div>
          </div>
        </section>
  
        <!-- Polars -->
        <section class="page-2" id="page2" ref="page2" :style="{ height: containerHeight + 'px' }">
          <h1 class="page-title">Polars</h1>
          <div class="grid-template-2-col">
            <div class="grid-col">
              <div class="pd-blk-4"><!-- Padding Block --></div>
              <p class="project-description">Developed a cutting-edge Mobile Device Data Processing program utilizing
                Polars, a powerful Python-based dataframe library specifically designed for handling extensive data
                manipulation tasks. The project revolved around processing a massive dataset exceeding 4 terabytes in size,
                requiring advanced filtering, sorting, and logical expressions.</p>
              <div class="pd-blk-5"><!-- Padding Block --></div>
              <img class="img-project" src="@/assets/img-project/mobile_device_data.png">
            </div>
            <div class="grid-col details" v-if="!isSmallScreen">
              <div class="pd-blk-8"><!-- Padding Block --></div>
              <p class="project-accomplishments">Key Accomplishments:</p>
              <ul class="project-accomplishments">
                <li>Acquired expertise in Polars by leveraging existing knowledge of pandas, effectively transitioning to
                  the new library.</li><br>
                <li>Significantly optimized data processing efficiency, reducing the processing time from 2 days down to 7
                  hours.</li><br>
                <li>Implemented lambda expressions to manipulate data on-the-fly during the reading process, enhancing
                  performance and flexibility.</li><br>
                <li>Leveraged the capabilities of the Polars Lazy API to streamline data operations and improve overall
                  program efficiency.</li><br>
              </ul>
            </div>
          </div>
        </section>
  
        <!-- Automated Email -->
        <section class="page-3" id="page3" ref="page3" :style="{ height: containerHeight + 'px' }">
          <h1 class="page-title">Automated Email</h1>
          <div class="grid-template-2-col">
            <div class="grid-col">
              <div class="pd-blk-4"><!-- Padding Block --></div>
              <p class="project-description">Implemented an advanced automated email program using Python, which utilised
                SMTP and Google Mail services. This facilitated the seamless delivery of email messages in HTML format. The
                HTML and CSS code was written from scratch, tailored specifically for email clients, ensuring optimal
                rendering across various platforms.</p>
              <div class="pd-blk-5"><!-- Padding Block --></div>
              <img class="img-project" src="@/assets/img-project/email_code.png">
            </div>
            <div class="grid-col details" v-if="!isSmallScreen">
              <div class="pd-blk-8"><!-- Padding Block --></div>
              <p class="project-accomplishments">Key Accomplishments:</p>
              <ul class="project-accomplishments">
                <li>Designed and constructed the HTML and CSS code required for the email content.</li><br>
                <li>Integrated SMTP (Simple Mail Transfer Protocol) functionality into the program, enabling it to send
                  email messages via Google Mail servers with heightened security and reliability.</li><br>
                <li>Deployed the automated program in PythonAnywhere free services to run seamlessly on a daily schedule,
                  delivering emails efficiently and consistently without any manual intervention.</li><br>
              </ul>
            </div>
          </div>
        </section>
  
        <section class="page-4" id="page4" ref="page4" :style="{ height: containerHeight + 'px' }">
          <h1 class="page-title">UpBank API</h1>
          <div class="grid-template-2-col">
            <div class="grid-col">
              <div class="pd-blk-4"><!-- Padding Block --></div>
              <p class="project-description">Implemented an automated transaction tracking system using the UpBank banking
                API and a Webhook hosted on an Nginx local server. This recorded transactions made on my account using
                Python, the UpBank API and a Webhook. Overall I created an efficient solution to monitor spending patterns
                effortlessly.</p>
              <div class="pd-blk-5"><!-- Padding Block --></div>
              <img class="img-project" src="@/assets/img-project/upbank_api.png">
            </div>
            <div class="grid-col details" v-if="!isSmallScreen">
              <div class="pd-blk-8"><!-- Padding Block --></div>
              <p class="project-accomplishments">Key Accomplishments:</p>
              <ul class="project-accomplishments">
                <li>Developed a Webhook to facilitate real-time communication between the UpBank API and an Nginx server.
                </li><br>
                <li>Implemented robust account authentication protocols, ensuring the privacy and security of sensitive
                  financial information.</li><br>
                <li>Integrated the output from the UpBank API with Google Sheets, enabling automatic recording and
                  organization of transaction data in an Excel file.</li><br>
              </ul>
            </div>
          </div>
        </section>
      </div>
  
      <nav class="quick-menu-bar">
        <ul class="text-wrapper">
          <li :class="{ active: currentPage === 1 }">
            <a @click="clickToPage(1)"><span class="number">1.</span>Game</a>
          </li>
          <li :class="{ active: currentPage === 2 }">
            <a @click="clickToPage(2)"><span class="number">2.</span>Polars</a>
          </li>
          <li :class="{ active: currentPage === 3 }">
            <a @click="clickToPage(3)"><span class="number">3.</span>Auto Email</a>
          </li>
          <li :class="{ active: currentPage === 4 }">
            <a @click="clickToPage(4)"><span class="number">4.</span>Bank API</a>
          </li>
          <li v-if="!isSmallScreen">
            <a href="https://github.com/Bryce-Pillwein" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#FFFFFF" aria-hidden="true"
                class="icon-github">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                </path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProjectsView",
    data() {
      return {
        containerHeight: 0,
        headerHeight: 0,
        currentPage: 1,
        totalPages: 4,
        scrolling: false,
        touchStartY: 0,
        touchEndY: 0,
        touchThreshold: 5,
      };
    },
    mounted() {
      this.calculatePageElementHeights();
      window.addEventListener('resize', this.calculatePageElementHeights);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.calculatePageElementHeights);
    },
    computed: {
      isSmallScreen() {
        return window.innerWidth <= 768;
      }
    },
    methods: {
      // Calculate Page Functions
      calculatePageElementHeights() {
        const headerComponent = this.$root.$refs.headerComponent;
        if (headerComponent) {
          this.headerHeight = headerComponent.$el.offsetHeight;
          const screenHeight = window.innerHeight;
          this.containerHeight = (screenHeight - this.headerHeight);
          // console.log(headerHeight);
        }
      },
      // Pagnation Functions Touch Move (Phone)
      handleTouchStart(event) {
        this.touchStartY = event.touches[0].clientY;
        this.touchEndY = this.touchStartY;
      },
      handleTouchMove(event) {
        this.touchEndY = event.touches[0].clientY;
      },
      handleTouchEnd() {
        const deltaY = this.touchEndY - this.touchStartY;
        if (Math.abs(deltaY) >= this.touchThreshold) {
          if (deltaY > 0) {
            this.scrollToPrevPage();
          } else if (deltaY < 0) {
            this.scrollToNextPage();
          }
        }
        this.touchStartY = 0;
        this.touchEndY = 0;
      },
      // Pagnation Functions Mouse Wheel (Computer)
      handleScroll(event) {
        event.preventDefault();
        if (!this.scrolling) {
          this.scrolling = true;
          const delta = Math.sign(event.deltaY);
  
          if (delta > 0) {
            this.scrollToNextPage();
          } else if (delta < 0) {
            this.scrollToPrevPage();
          }
  
          setTimeout(() => {
            this.scrolling = false;
          }, 500); // Set a delay to prevent rapid scrolling
        }
      },
      scrollToNextPage() {
        const nextPage = this.currentPage + 1;
        const pageElement = this.$refs["page" + nextPage];
  
        if (nextPage <= this.totalPages && pageElement) {
          this.scrollToPage(pageElement);
          this.currentPage = nextPage;
        }
      },
      scrollToPrevPage() {
        const prevPage = this.currentPage - 1;
        const pageElement = this.$refs["page" + prevPage];
  
        if (prevPage >= 1 && pageElement) {
          this.scrollToPage(pageElement);
          this.currentPage = prevPage;
        }
      },
      scrollToPage(element) {
        const screenOffsetTop = this.isSmallScreen ? (this.headerHeight + 50) : this.headerHeight
  
        this.$refs.container.scrollTo({
          top: element.offsetTop - screenOffsetTop,
          behavior: "smooth",
        });
      },
      clickToPage(pageNumber) {
        const pageElement = this.$refs["page" + pageNumber];
        this.scrollToPage(pageElement);
        this.currentPage = pageNumber;
      }
    },
  
  };
  </script>
  
  <style lang="scss" scoped>
  .container-pagination {
    overflow-y: hidden;
  }
  
  .grid {
    display: grid;
    grid-template-columns: 1fr 50px;
    grid-row: 1fr;
  }
  
  .page-1,
  .page-2,
  .page-3 {
    width: 100%;
    scroll-snap-align: start;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }
  
  .grid-template-2-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  
  .grid-col {
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .details {
    width: 70%;
  }
  
  .project-description {
    font-size: 1.6rem;
    padding: 1.6rem 2.4rem;
  }
  
  .project-accomplishments {
    font-size: 1.4rem;
    color: rgb(150, 150, 150);
    list-style: none;
    padding: 0;
  }
  
  .project-accomplishments li::before {
    content: '⮚ ';
  }
  
  .quick-menu-bar {
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 85%;
    background-color: #1E1E1E;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-end;
    overflow: hidden;
  }
  
  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    list-style: none;
    gap: clamp(1.6rem, 3vh, 4rem);
    padding: 0;
    margin: 0;
    width: 70%;
  }
  
  .text-wrapper li {
    cursor: pointer;
    display: flex;
    align-items: center;
    writing-mode: vertical-lr;
    text-align: center;
    font-size: 1.4rem;
    color: rgb(230, 230, 230);
    padding: 1rem 0rem;
    width: 100%;
    position: relative;
  }
  
  .text-wrapper li:hover {
    color: $c-primary; // rgb(30, 214, 255);
  }
  
  .text-wrapper li.active {
    border-left: 3px solid $c-primary;
  }
  
  .number {
    color: $c-primary;
  }
  
  .icon-github {
    width: 32px;
    padding: 0;
    margin-bottom: 3.8rem;
    margin-top: 1.6rem;
  }
  
  .icon-github:hover {
    fill: $c-primary;
  }
  
  .img-project {
    max-width: 400px;
  }
  
  .reset-padding {
    padding-block: 0;
    padding: 0;
  }
  
  .pd-blk-4 {
    padding-block: 4rem;
  }
  
  .pd-blk-5 {
    padding-block: 5rem;
  }
  
  .pd-blk-8 {
    padding-block: 8rem;
  }
  
  @media screen and (max-width: 768px) {
  
    .grid {
      grid-template-areas: "the-nav" "the-content";
      grid-template-columns: 1fr;
      grid-row: 50px 1fr;
    }
  
    .container-pagination {
      grid-area: the-content;
    }
  
    .quick-menu-bar {
      grid-area: the-nav;
    }
  
    .grid-template-2-col {
      grid-template-columns: 1fr;
    }
  
    .quick-menu-bar {
      flex-direction: row;
      width: 100%;
      height: 50px;
      background-color: $c-bg;
      border-radius: 0;
      justify-content: space-evenly;
      align-self: center;
    }
  
  
    .text-wrapper {
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
    }
  
    .text-wrapper li {
      writing-mode: horizontal-tb;
      padding: 0rem;
      width: auto;
    }
  
    .text-wrapper li.active {
      border-left: none;
      border-bottom: 3px solid $c-primary;
    }
  
    .img-project {
      max-width: 300px;
    }
  
    .pd-blk-4 {
      padding-block: 1rem;
    }
  
    .pd-blk-5 {
      padding-block: 3rem;
    }
  
  }
  </style>