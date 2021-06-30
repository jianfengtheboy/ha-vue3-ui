<template>
  <section class="main-content">
    <router-view :key="key" v-slot="{ Component }">
      <transition name="slide">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'appMain',
  setup() {
    const route = useRoute()
    const key = computed(() => route.path)

    return {
      key
    }
  }
})
</script>

<style lang="scss" scoped>
.main-content {
  height: calc(100% - 50px);
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}
.slide-enter-to, .slide-leave {
  opacity: 1;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}
</style>
