<template>
  <div class="relative pt-6 pb-2 sm:pb-6 bg-ljfc-black">
    <nav class="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
          <router-link to="/" aria-label="Home">
            <img class="h-8 w-auto sm:h-10" src="../assets/logo.png" alt="Littleton Junior Football Club logo">
          </router-link>
          <div class="-mr-2 flex items-center md:hidden">
            <button @click="toggleIsMenuOpen()" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden space-x-10 md:flex md:ml-10">
          <router-link to="/" class="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">Home</router-link>
          <router-link to="/events" class="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">Events</router-link>
          <router-link to="/teams"  class="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">Teams</router-link>
          <!-- <router-link to="/about"  class="font-medium text-white hover:text-gray-300 transition duration-150 ease-in-out">About</router-link> -->
        </div>
      </div>
    </nav>

    <transition
      enter-active-class="transition ease-out duration-150 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
     >
        <div v-if="isMenuOpen" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
            <div class="rounded-lg shadow-md">
                <div class="rounded-lg bg-gray-800 shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                    <div class="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="../assets/logo.png" alt="Littleton Junior Football Club logo">
                        </div>
                        <div class="-mr-2">
                        <button @click="toggleIsMenuOpen()" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div class="space-y-1 px-2 pt-2 pb-3">
                        <router-link to="/" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Home</router-link>
                        <router-link to="/events" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Events</router-link>
                        <router-link to="/teams"  @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Teams</router-link>
                        <!-- <router-link to="/about"  @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">About</router-link> -->
                    </div>
                </div>
            </div>
        </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
      setup() {
        const isMenuOpen = ref(false);

        const toggleIsMenuOpen = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        return {
            isMenuOpen,
            toggleIsMenuOpen
        };
    }
});
</script>