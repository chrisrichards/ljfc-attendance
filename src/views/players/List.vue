<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  {{ team.name }}
                </h3>
              </div>
              <div class="ml-4 mt-2 flex-shrink-0">
                <span class="inline-flex rounded-md shadow-sm">
                  <router-link :to="{ name: 'ImportPlayers', params: { teamId: team.id }}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150 ml-2">Import</router-link>
                </span>
                <span class="inline-flex rounded-md shadow-sm">
                  <router-link :to="{ name: 'ExportPlayers', params: { teamId: team.id }}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150 ml-2">Export</router-link>
                </span>
                <span class="inline-flex rounded-md shadow-sm">
                  <button @click="showCreatePlayer" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 ml-2">
                    Add player
                  </button>
                </span>
              </div>
            </div>
          </div>

          <ul>
            <li v-for="player in team.players" :key="player.id" :team="player">
              <div class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                      {{ player.name }}
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                        <span class="truncate">Parents: </span>
                      </div>
                      <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                        <span class="truncate">{{ player.parent1.name }}</span>
                      </div>
                      <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                        <span class="truncate">{{ player.parent2.name }}</span>
                      </div>
                    </div>
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                      <div class="flex items-center text-sm">
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="button" @click="showEditPlayer(player.id)" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                              <!-- Heroicon name: edit -->
                              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              edit
                            </button>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm ml-2">
                            <button type="button" @click="removePlayer(player.id)" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                              <!-- Heroicon name: edit -->
                              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              delete
                            </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import router from "@/router/index";
import store from "../../store/index";
import { defineComponent, ref } from "vue";
import { Player } from '@/models/Player';
import { TeamPlayer } from '@/models/TeamPlayer';

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

    return {
      team,
      showCreatePlayer,
      showEditPlayer,
      removePlayer
    };
  }
});
</script>
