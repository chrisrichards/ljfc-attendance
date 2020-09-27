<template>
  <div class="relative bg-gray-200 overflow-hidden">
    <Nav></Nav>
    <main class="mx-auto max-w-screen-xl px-4 pb-6">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Nav from "@/components/Nav.vue"; // @ is an alias to /src

@Options({
  components: {
    Nav
  }
})
export default class Home extends Vue {}
</script>
