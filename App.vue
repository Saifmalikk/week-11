<template>
  <div>
    <AppHeader ref="headerComponent" v-show="this.$route.path !== '/resume'" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
  },
}

</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>