<template>
  <div>
    <main class="container main">
      <div class="content">
        <p>Hi, my name is</p>
        <h1 class="text-m">Bryce Pillwein</h1>
        <h1 class="text-l">SOFTWARE<br>DEVELOPER</h1>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: "HomeView",
  components: { AppFooter }
};
</script>

<style lang="scss" scoped>
main {
  height: 80vh;
  display: flex;
  align-items: center;
}

.content {
  margin-left: 4rem;
}

.text-m {
  font-size: 4rem;
  color: $c-primary;
}

.text-l {
  font-size: 6.4rem;
  letter-spacing: 1.4rem;
}

.background-decor {
  position: fixed;
  overflow: hidden;
  opacity: 0.7;
  -webkit-filter: blur(3px);
  filter: blur(3px);
  width: 800px;
  height: 250px;

  bottom: -50px;
  right: -100px;
  z-index: 0;
}

.img-code-snippet {
  z-index: 0;
  position: absolute;
}

@media screen and (max-width: 768px) {
  main {
    justify-content: center;
  }

  .content {
    margin-left: 0rem;
  }

  .text-m {
    font-size: 3rem;
    color: $c-primary;
  }

  .text-l {
    font-size: 5rem;
    letter-spacing: 1rem;
  }
}

@media screen and (max-width: 350px) {
  .text-l {
    font-size: 4.5rem;
    letter-spacing: .5rem;
  }
}
</style>