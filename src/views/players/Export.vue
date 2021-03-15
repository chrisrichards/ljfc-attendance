<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  <span>Export players from {{ team.name }}</span>
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
                      <div class="mt-1 rounded-md shadow-sm">
                        <div class="rounded-md shadow-sm">
                            <textarea id="csv" v-model="csv"  @focus="$event.target.select()" autofocus rows="20" class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8 pt-5">
                <div class="flex justify-end">
                  <span class="inline-flex rounded-md shadow-sm">
                    <button type="button" @click="back" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                      Back
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
import PlayersExporter from "../..//services/PlayersExporter";
import router from "../..//router/index";
import store from "../..//store/index";
import { defineComponent, ref } from "vue";

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

    const exporter = new PlayersExporter();
    const csv = exporter.export(team);

    const back = (): void => {
      router.push({ path: `/teams/${team.id}/players` });
    };

    return {
      team,
      csv,
      back
    };
  }
});
</script>
