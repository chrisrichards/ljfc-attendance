<template>
    <div class="bg-white shadow sm:rounded-md">
      <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div class="ml-4 mt-2">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ team.name }}
            </h3>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0 md:hidden">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="relative inline-block text-left">
              <div>
                <button type="button" @click="toggleIsMenuOpen()" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
                  Actions
                  <!-- Heroicon name: solid/chevron-down -->
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>                
              <transition
              enter-active-class="transition ease-out duration-100"
              enter-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
              >
                <div v-if="isMenuOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none md:hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div class="py-1" role="none">
                    <router-link :to="{ name: 'EditTeam', params: { id: team.id }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Rename</router-link>
                    <router-link :to="{ name: 'DeleteTeam', params: { id: team.id }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Delete</router-link>
                  </div>
                  <div class="py-1" role="none">
                    <router-link :to="{ name: 'ImportPlayers', params: { teamId: team.id }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Import</router-link>
                    <router-link :to="{ name: 'ExportPlayers', params: { teamId: team.id }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Export</router-link>
                  </div>
                  <div class="py-1" role="none">
                    <router-link :to="{ name: 'CreatePlayer', params: { teamId: team.id }}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Add player</router-link>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="ml-4 mt-2 flex-shrink-0 hidden md:flex">
            <span class="inline-flex rounded-md">
              <router-link :to="{ name: 'EditTeam', params: { id: team.id }}" class="inline-flex items-center px-4 py-2 border border-transparent text-xs md:text-sm leading-5 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:shadow-outline-gray active:bg-gray-200 transition ease-in-out duration-150 ml-2">Rename</router-link>
            </span>
            <span class="inline-flex rounded-md">
              <router-link :to="{ name: 'DeleteTeam', params: { id: team.id }}" class="inline-flex items-center px-4 py-2 border border-transparent text-xs md:text-sm leading-5 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:shadow-outline-gray active:bg-gray-200 transition ease-in-out duration-150 ml-2">Delete</router-link>
            </span>
            <span class="inline-flex rounded-md">
              <router-link :to="{ name: 'ImportPlayers', params: { teamId: team.id }}" class="inline-flex items-center px-4 py-2 border border-transparent text-xs md:text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150 ml-2">Import</router-link>
            </span>
            <span class="inline-flex rounded-md">
              <router-link :to="{ name: 'ExportPlayers', params: { teamId: team.id }}" class="inline-flex items-center px-4 py-2 border border-transparent text-xs md:text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150 ml-2">Export</router-link>
            </span>
            <span class="inline-flex rounded-md">
              <router-link :to="{ name: 'CreatePlayer', params: { teamId: team.id }}" class="relative inline-flex items-center px-4 py-2 border border-transparent md:text-sm text-xs leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 ml-2">
                Add player
              </router-link>
            </span>
          </div>
        </div>
      </div>
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <ul class="divide-y divide-gray-200">
          <li v-for="player in team.players" :key="player.id" :team="player">
            <router-link :to="{ name: 'EditPlayer', params: { teamId: team.id, id: player.id } }">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="min-w-0 flex-1 flex items-center">
                  <div class="min-w-0 flex-shrink-0 px-1">
                    <div>
                      <p class="text-sm font-medium text-indigo-600 truncate">{{ player.name }}</p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <div class="sm:flex">
                          <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                            <span class="truncate">{{ player.parent1.name }}</span>
                          </div>
                          <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                            <span class="truncate">{{ player.parent2.name }}</span>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script lang="ts">
import router from "../..//router/index";
import store from "../../store/index";
import { defineComponent, ref } from "vue";
import { Player } from '../../models/Player';
import { TeamPlayer } from '../../models/TeamPlayer';

export default defineComponent({
  props: {
    teamId: String,
    id: String
  },
  setup(props) {

    const index = store.state.teams.findIndex(t => t.id === Number(props.teamId));
    const team = store.state.teams[index];

    const showCreatePlayer = (): void => {
      router.push({ path: `/teams/${team.id}/players/create` });
    };

    const showEditPlayer = (id: number): void => {
      router.push({ path: `/teams/${team.id}/players/${id}/edit` });
    };

    const removePlayer = (id: number): void => {
      const player = new Player(id);
      const teamPlayer = new TeamPlayer(team, player);
      store.dispatch("removePlayer", teamPlayer);
    };

    const isMenuOpen = ref(false);
    
    const toggleIsMenuOpen = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      team,
      showCreatePlayer,
      showEditPlayer,
      removePlayer,
      isMenuOpen,
      toggleIsMenuOpen      
    };
  }
});
</script>
