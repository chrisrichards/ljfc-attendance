<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Teams
                </h3>
              </div>
              <div class="ml-4 mt-2 flex-shrink-0">
                <span class="inline-flex rounded-md shadow-sm">
                  <button @click="showCreateTeam" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700">
                    Add team
                  </button>
                </span>
              </div>
            </div>
          </div>

          <ul>
            <li v-for="team in teams" :key="team.id" :team="team">
              <div class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                      {{ team.name }}
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                        <span class="truncate">
                          <router-link :to="{ name: 'Players', params: { teamId: team.id }}">{{ team.players.length }} players</router-link>
                        </span>
                      </div>
                    </div>
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                      <div class="flex items-center text-sm">
                        
                        <span class="inline-flex rounded-md shadow-sm">
                          <router-link :to="{ name: 'Players', params: { teamId: team.id }}"  class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                              <!-- Heroicon name: user group -->
                              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              players
                          </router-link>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm ml-2">
                            <button type="button" @click="showEditTeam(team.id)" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                              <!-- Heroicon name: edit -->
                              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              edit
                            </button>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm ml-2">
                            <button type="button" @click="removeTeam(team.id)" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
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
import router from "../../router/index";
import store from "../../store/index";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const teams = ref(store.state.teams);

    const showCreateTeam = (): void => {
      router.push({ path: "/teams/create" });
    };

    const showEditTeam = (id: number): void => {
      router.push({ path: `/teams/${id}/edit` });
    };

    const removeTeam = (id: number): void => {
      store.dispatch("removeTeam", id);
    };

    return {
      teams,
      showCreateTeam,
      showEditTeam,
      removeTeam
    };
  }
});
</script>
