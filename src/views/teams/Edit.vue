<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  <span v-if="team.id !== undefined">Edit team</span>
                  <span v-else>Add team</span>
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
                        <div class="sm:col-span-3">
                          <label for="name" class="block text-sm font-medium leading-5 text-gray-700">
                            Name
                          </label>
                          <div class="mt-1 rounded-md shadow-sm">
                            <input id="name" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" v-model="team.name">
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
import { Team } from "@/models/Team";
import router from "@/router/index";
import store from "@/store/index";
import { state } from "@/store/State";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    id: String
  },
  setup(props) {
    let t = new Team();

    if (props.id) {
      const orig = store.getters.getTeamById(Number(props.id));
      if (orig) t = Team.clone(orig);
    }

    const team = ref(t);

    const submit = (): void => {
      if (props.id) {
        store.dispatch("updateTeam", team.value);
      }
      else {
        store.dispatch("addTeam", team.value);
      }
      router.push({ path: '/teams' });
    };

    const cancel = (): void => {
      router.push({ path: '/teams' });
    };

    return {
      team,
      submit,
      cancel
    };
  }
});
</script>
