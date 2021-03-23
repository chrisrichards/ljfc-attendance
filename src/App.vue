<template>
  <div class="relative bg-gray-200">
    <Nav></Nav>
    <main class="mx-auto max-w-screen-xl md:px-4 md:pb-6">
      <div class="max-w-7xl mx-auto lg:px-8">
        <div class="md:px-4 md:py-6">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Nav from '@components/Nav.vue' // @ is an alias to /src

@Options({
  components: {
    Nav,
  },
})
export default class Home extends Vue {}
</script>
