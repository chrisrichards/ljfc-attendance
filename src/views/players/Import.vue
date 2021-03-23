<template>
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
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="sm:col-span-6">
          <label for="csv" class="block text-sm font-medium text-gray-700"> CSV </label>
          <div class="mt-1">
            <textarea
              id="csv"
              v-model="csv"
              autofocus
              placeholder="name,parent1Name,parent1Email,parent1Phone,parent2Name,parent2Email,parent2Phone"
              rows="20"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            ></textarea>
          </div>
          <p class="mt-2 text-sm text-gray-500">
            Import players from a CSV file or copy and paste from Excel. e.g.
          </p>
          <p class="mt-2 text-sm text-gray-500">
            name,parent1Name,parent1Email,parent1Phone,parent2Name,parent2Email,parent2Phone<br />
            Lionel Messi,Jorge Messi,jorge@barcelonafc.com,01234 567890,,,
          </p>
        </div>
        <div class="pt-5">
          <div class="flex justify-end">
            <router-link
              :to="{ name: 'Players', params: { teamId: team.id } }"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </router-link>
            <button
              type="submit"
              @click="submit"
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import router from '../..//router/index'
import store from '../..//store/index'
import { defineComponent, ref } from 'vue'
import PlayersImporter from '../..//services/PlayersImporter'

export default defineComponent({
  props: {
    teamId: String,
  },
  setup(props) {
    const team = store.state.teams.find((t) => t.id === Number(props.teamId))
    if (!team) {
      console.log('unable to find team')
      return
    }

    const csv = ref('')

    const submit = (): void => {
      const importer = new PlayersImporter()
      importer.import(team, csv.value)

      router.push({ path: `/teams/${team.id}/players` })
    }

    return {
      team,
      csv,
      submit,
    }
  },
})
</script>
