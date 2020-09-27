<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Add player
                </h3>
              </div>
            </div>
          </div>
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <form>
              <div>
                <div>
                  <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                      <label for="name" class="block text-sm font-medium leading-5 text-gray-700">
                        Name
                      </label>
                      <div class="mt-1 rounded-md shadow-sm">
                        <input id="name" v-model="player.name" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-8 pt-8">
                  <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Parents
                    </h3>
                  </div>
                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                      <div class="sm:col-span-4">
                        <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Name</label>
                        <div class="mt-1 rounded-md shadow-sm">
                          <input
                            id="name"
                            v-model="player.parent1.name"
                            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-4">
                        <label for="phone" class="block text-sm font-medium leading-5 text-gray-700">Phone</label>
                        <div class="mt-1 rounded-md shadow-sm">
                          <input
                            id="phone"
                            v-model="player.parent1.phone"
                            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
                        <div class="mt-1 rounded-md shadow-sm">
                          <input
                            id="email"
                            type="email"
                            v-model="player.parent1.email"
                            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                      <div class="sm:col-span-4">
                        <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Name</label>
                        <div class="mt-1 rounded-md shadow-sm">
                          <input
                            id="name"
                            v-model="player.parent2.name"
                            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-4">
                        <label for="phone" class="block text-sm font-medium leading-5 text-gray-700">Phone</label>
                        <div class="mt-1 rounded-md shadow-sm">
                          <input
                            id="phone"
                            v-model="player.parent2.phone"
                            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
                        <div class="mt-1 rounded-md shadow-sm">
                          <input
                            id="email"
                            type="email"
                            v-model="player.parent2.email"
                            class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="mt-8 pt-5">
                <div class="flex justify-end">
                  <span class="inline-flex rounded-md shadow-sm">
                    <button type="button" @click="cancel" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                      Cancel
                    </button>
                  </span>
                  <span class="ml-3 inline-flex rounded-md shadow-sm">
                    <button type="button" @click="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
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
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Player } from "@/models/Player";
import { Team } from "@/models/Team";
import router from "@/router/index";
import store from "@/store/index";
import { defineComponent, ref } from "vue";
import { TeamPlayer } from '@/models/TeamPlayer';

export default defineComponent({
  props: {
    teamId: String,
    id: String
  },
  setup(props) {
    const team =  store.state.teams.find(t => t.id === Number(props.teamId));
    if (!team) {
      console.log("unable to find team");
      return;
    }

    let p = new Player();

    if (props.id) {
      const orig = team.players.find(p => p.id == Number(props.id));
      if (orig) { 
        p = Player.clone(orig);
      }
    }

    const player = ref(p);

    const submit = (): void => {
      console.log("submit");
      if (props.id) {
        const teamPlayer = new TeamPlayer(team, player.value);
        store.dispatch("updatePlayer", teamPlayer);
      }
      else {
        console.log("submit: addPlayer");
        const teamPlayer = new TeamPlayer(team, player.value);
        store.dispatch("addPlayer", teamPlayer);
      }
      router.push({ path: `/teams/${team.id}/players` });
    };

    const cancel = (): void => {
      router.push({ path: `/teams/${team.id}/players` });
    };

    return {
      team,
      player,
      submit,
      cancel
    };
  }
});
</script>
