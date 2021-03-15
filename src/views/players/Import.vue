<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  <span>Import players to {{ team.name }}</span>
                </h3>
              </div>
            </div>
          </div>
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <form>
              <div>
                <div>
                  <div class="mt-6">
                    <div class="sm:col-span-3">
                      <label for="csv" class="block text-sm font-medium leading-5 text-gray-700">
                        CSV
                      </label>
                      <div class="mt-1 rounded-md">
                        <div class="rounded-md">
                            <textarea id="csv" 
                              v-model="csv"
                              placeholder="name,parent1Name,parent1Email,parent1Phone,parent2Name,parent2Email,parent2Phone"
                              rows="20" 
                              class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </textarea>
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Import players from a CSV file or copy and paste from Excel. e.g.</p>
                        <p class="mt-2 text-sm text-gray-500">
                          name,parent1Name,parent1Email,parent1Phone,parent2Name,parent2Email,parent2Phone<br />
                          Lionel Messi,Jorge Messi,jorge@barcelonafc.com,01234 567890,,,
                        </p>
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
                      Import
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import router from "../..//router/index";
import store from "../..//store/index";
import { defineComponent, ref } from "vue";
import PlayersImporter from "../..//services/PlayersImporter";

export default defineComponent({
  props: {
    teamId: String
  },
  setup(props) {
    const team =  store.state.teams.find(t => t.id === Number(props.teamId));
    if (!team) {
      console.log("unable to find team");
      return;
    }

    const csv = ref("");

    const submit = (): void => {
      const importer = new PlayersImporter();
      importer.import(team, csv.value);

      router.push({ path: `/teams/${team.id}/players` });
    };

    const cancel = (): void => {
      router.push({ path: `/teams/${team.id}/players` });
    };

    return {
      team,
      csv,
      submit,
      cancel
    };
  }
});
</script>
