<template>
  <div class="bg-white shadow sm:rounded-md">
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
        <div class="ml-4 mt-2">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            <span v-if="player.id !== undefined">Edit player</span>
            <span v-else>Add player</span>
          </h3>
        </div>
        <div v-if="player.id !== undefined" class="ml-4 mt-2 flex-shrink-0">
          <span class="inline-flex rounded-md">
            <router-link
              :to="{ name: 'DeletePlayer', params: { teamId: team.id, id: player.id } }"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:shadow-outline-gray active:bg-gray-200 transition ease-in-out duration-150 ml-2"
            >
              Remove
            </router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label for="first_name" class="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    v-model="player.name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Parents</h3>
            </div>
            <div>
              <h4 class="text-lg leading-6 font-medium text-gray-400 mt-4">Parent 1</h4>
            </div>
            <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label for="parent1.name" class="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="parent1.name"
                    id="parent1.name"
                    v-model="player.parent1.name"
                    required
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="parent1.phone" class="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div class="mt-1">
                  <input
                    type="tel"
                    name="parent1.phone"
                    id="parent1.phone"
                    v-model="player.parent1.phone"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="parent1.email" class="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div class="mt-1">
                  <input
                    type="email"
                    name="parent1.email"
                    id="parent1.email"
                    v-model="player.parent1.email"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div class="mt-8">
              <h4 class="text-lg leading-6 font-medium text-gray-400 mt-4">Parent 2</h4>
            </div>
            <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label for="parent2.name" class="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="parent2.name"
                    id="parent2.name"
                    v-model="player.parent2.name"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="parent2.phone" class="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div class="mt-1">
                  <input
                    type="tel"
                    name="parent2.phone"
                    id="parent2.phone"
                    v-model="player.parent2.phone"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="parent2.email" class="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div class="mt-1">
                  <input
                    type="email"
                    name="parent2.email"
                    id="parent2.email"
                    v-model="player.parent2.email"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
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
              :disabled="!saveEnabled"
              @click="submit"
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
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
import { Player } from '../../models/Player'
import { TeamPlayer } from '../..//models/TeamPlayer'
import router from '../..//router/index'
import store from '../..//store/index'
import { computed, defineComponent, ref } from 'vue'

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

    let p = new Player()

    if (props.id) {
      const orig = team.players.find((p) => p.id == Number(props.id))
      if (orig) {
        p = Player.clone(orig)
      }
    }

    const player = ref(p)

    const submit = (): void => {
      if (props.id) {
        const teamPlayer = new TeamPlayer(team, player.value)
        store.dispatch('updatePlayer', teamPlayer)
      } else {
        const teamPlayer = new TeamPlayer(team, player.value)
        store.dispatch('addPlayer', teamPlayer)
      }
      router.push({ path: `/teams/${team.id}/players` })
    }

    const saveEnabled = computed((): boolean => {
      return player.value.name !== '' && player.value.parent1.name !== ''
    })

    return {
      team,
      player,
      saveEnabled,
      submit,
    }
  },
})
</script>
