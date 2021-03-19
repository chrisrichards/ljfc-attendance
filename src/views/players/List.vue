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
                                <span class="truncate">Parents: </span>
                              </div>
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

    return {
      team,
      showCreatePlayer,
      showEditPlayer,
      removePlayer
    };
  }
});
</script>
