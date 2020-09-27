<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Add event
                </h3>
              </div>
            </div>
          </div>
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <form>
                  <div>
                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div class="sm:col-span-4">
                        <label for="date" class="block text-sm font-medium leading-5 text-gray-700">
                          Date
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                          <input id="date" type="date" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" v-model="event.date">
                        </div>
                      </div>
                      <div class="sm:col-span-4">
                        <label for="team" class="block text-sm font-medium leading-5 text-gray-700">
                          Team
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                          <select v-model="teamId" id="teams" class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            <option :value=0>Please select a team</option>
                            <option v-for="team in teams" :key="team.id" :value="team.id">
                              {{ team.name }}
                            </option>
                          </select>
                        </div>
                      </div>                      
                    </div>
                <div class="mt-8 pt-8">
                  <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Players
                    </h3>
                  </div>
                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div v-for="player in event.team.players" v-bind:key="player.id" class="sm:col-span-6">
                          <div class="mt-4 relative flex items-start">
                            <div class="flex items-center h-5">
                              <input id="player" v-model="player.selected" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                            </div>
                            <div class="ml-3 text-sm leading-5">
                              <label for="player" class="font-medium text-gray-700">{{player.name}}</label>
                            </div>
                          </div>
                          <div class="ml-8">
                            <div class="mt-4 relative flex items-start" v-if="Parent.isPresent(player.parent1)">
                              <div class="flex items-center h-5">
                                <input id="player.parent1" v-model="player.parent1.selected" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                              </div>
                              <div class="ml-3 text-sm leading-5">
                                <label for="player.parent1" class="font-medium text-gray-700">{{player.parent1.name}}</label>
                              </div>
                            </div>
                            <div class="mt-4 relative flex items-start" v-if="Parent.isPresent(player.parent2)">
                              <div class="flex items-center h-5">
                                <input id="player.parent2" v-model="player.parent2.selected" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                              </div>
                              <div class="ml-3 text-sm leading-5">
                                <label for="player.parent2" class="font-medium text-gray-700">{{player.parent2.name}}</label>
                              </div>
                            </div>
                            <div class="mt-4 relative flex items-start">
                              <div class="flex items-center h-5">
                                <input id="player.selfAssessment" v-model="player.selfAssessment" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                              </div>
                              <div class="ml-3 text-sm leading-5">
                                <label for="player.selfAssessment" class="font-medium text-gray-700">I can confirm we have completed the self assessment</label>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>

                  </div>
                  <div class="mt-8">
                    <div class="flex justify-end">
                      <span class="inline-flex rounded-md shadow-sm">
                        <button type="button" @click="cancel" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                          Cancel
                        </button>
                      </span>
                      <span class="ml-3 inline-flex rounded-md shadow-sm">
                        <button @click="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                          Save
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Event } from "@/models/Event";
import { Parent } from "@/models/Parent";
import { Team } from "@/models/Team";
import router from "@/router/index";
import store from "@/store/index";
import { state } from "@/store/State";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    id: String
  },
  setup(props) {
    const getTeamOrDefault = (teams: Team[]): Team => {
      if (teams.length === 1) {
        return Team.clone(teams[0]);
      }
      return new Team();
    }

    const team = getTeamOrDefault(store.state.teams);
    const teams = ref(store.state.teams);
    const teamId = ref(team.id || 0);

    let e = new Event(undefined, undefined, Team.clone(team));

    if (props.id) {
      const orig = store.getters.getEventById(Number(props.id));
      e = Event.clone(orig);
    }

    const event = ref(e);

    watch(teamId, (newTeamId, prevTeamId) => {
      if (newTeamId === 0) {
        event.value.team = new Team();
      }
      else {
        const t = store.getters.getTeamById(newTeamId);
        event.value.team = Team.clone(t);
        console.log("event.team.players.length=" + event.value.team.players.length);
      }
    })

    const submit = (): void => {
      if (props.id) {
        store.dispatch("updateEvent", event.value);
      }
      else {
        store.dispatch("addEvent", event.value);
      }
      router.push({ path: '/events' });
    };

    const cancel = (): void => {
      router.push({ path: '/events' });
    };

    return {
      event,
      Parent,
      teamId,
      team,
      teams,
      submit,
      cancel
    };
  }
});
</script>
