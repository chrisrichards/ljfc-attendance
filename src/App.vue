<template>
  <div class="bg-gray-200">
    <Nav></Nav>
    <router-view />
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
