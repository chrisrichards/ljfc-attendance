<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="max-w-none mx-auto">
      <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Remove player</h3>
        </div>
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <form class="space-y-8 divide-y divide-gray-200">
            <div class="space-y-8 divide-y divide-gray-200">
              <div class="sm:col-span-12">
                <p>
                  Are you sure you want to remove {{ player.name }} from the {{ team.name }} team?
                </p>
              </div>
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
                  Remove
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Player } from '../../models/Player'
import { TeamPlayer } from '../..//models/TeamPlayer'
import router from '../../router/index'
import store from '../../store/index'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    teamId: String,
    id: String,
  },
  setup(props) {
    const team = store.state.teams.find((t) => t.id === Number(props.teamId))
    if (!team) {
      console.log('unable to find team')
      return
    }

    const player = team.players.find((p) => p.id == Number(props.id))

    const submit = (): void => {
      const teamPlayer = new TeamPlayer(team, player)
      store.dispatch('removePlayer', teamPlayer)
      router.push({ path: `/teams/${team.id}/players` })
    }

    return {
      team,
      player,
      submit,
    }
  },
})
</script>
