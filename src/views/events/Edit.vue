<template>
  <div class="bg-white shadow sm:rounded-md">
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
        <div class="ml-4 mt-2">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            <span v-if="event.id !== undefined">Edit event</span>
            <span v-else>Add event</span>
          </h3>
        </div>
        <div v-if="event.id !== undefined" class="ml-4 mt-2 flex-shrink-0">
          <span class="inline-flex rounded-md">
            <router-link
              :to="{ name: 'DeleteEvent', params: { id: event.id } }"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:shadow-outline-gray active:bg-gray-200 transition ease-in-out duration-150 ml-2"
            >
              Remove
            </router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <form
        @submit="save"
        method="post"
        action="/events"
        autocomplete="on"
        class="space-y-8 divide-y divide-gray-200"
      >
        <div>
          <div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-1">
                <label for="event.date" class="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <div class="mt-1">
                  <input
                    id="event.date"
                    name="event.date"
                    type="date"
                    v-model="event.date"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="event.location" class="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <div class="mt-1">
                  <input
                    id="event.location"
                    name="event.location"
                    type="text"
                    autocomplete="on"
                    v-model="event.location"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label for="event.team" class="block text-sm font-medium text-gray-700">
                  Team
                </label>
                <div class="mt-1">
                  <select
                    v-model="teamId"
                    id="event.team"
                    name="event.team"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option :value="0">Please select a team</option>
                    <option v-for="team in teams" :key="team.id" :value="team.id">
                      {{ team.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="event.type" class="block text-sm font-medium text-gray-700">
                  Type of event
                </label>
                <div class="mt-1">
                  <input
                    id="event.type"
                    name="event.type"
                    type="text"
                    autocomplete="on"
                    placeholder="e.g. Training session or Match"
                    v-model="event.type"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label for="event.leadCoachName" class="block text-sm font-medium text-gray-700">
                  Lead Coach
                </label>
                <div class="mt-1">
                  <input
                    id="event.leadCoachName"
                    name="event.leadCoachName"
                    type="text"
                    autocomplete="on"
                    v-model="event.leadCoachName"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="event.leadCoachNumber" class="block text-sm font-medium text-gray-700">
                  Lead Coach Contact Number
                </label>
                <div class="mt-1">
                  <input
                    id="event.leadCoachNumber"
                    name="event.leadCoachNumber"
                    type="tel"
                    autocomplete="on"
                    v-model="event.leadCoachNumber"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <fieldset>
              <legend class="text-base font-medium text-gray-900">Players</legend>
              <div class="mt-4 relative flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="select-all-players"
                    type="checkbox"
                    v-model="allPlayersSelected"
                    @click="selectAllPlayers(event.team.players)"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="select-all-players" class="font-medium text-gray-700">
                    Select All
                  </label>
                </div>
              </div>
              <div
                v-for="player in event.team.players"
                v-bind:key="player.id"
                class="mt-4 mb-8 space-y-4"
              >
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      :id="'player[' + player.id + ']'"
                      v-model="player.selected"
                      @click="onSelectPlayer(player)"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label :for="'player[' + player.id + ']'" class="font-medium text-gray-700">{{
                      player.name
                    }}</label>
                  </div>
                </div>
                <div v-if="Parent.isPresent(player.parent1)">
                  <div class="ml-8 mt-4 relative flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        :id="'player[' + player.id + '].parent1'"
                        v-model="player.parent1.selected"
                        @click="onSelectParent(player)"
                        type="checkbox"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        :for="'player[' + player.id + '].parent1'"
                        class="font-medium text-gray-700"
                      >
                        {{ player.parent1.name }}
                      </label>
                    </div>
                  </div>
                </div>
                <div v-if="Parent.isPresent(player.parent2)">
                  <div class="ml-8 mt-4 relative flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        :id="'player[' + player.id + '].parent2'"
                        v-model="player.parent2.selected"
                        @click="onSelectParent(player)"
                        type="checkbox"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        :for="'player[' + player.id + '].parent2'"
                        class="font-medium text-gray-700"
                      >
                        {{ player.parent2.name }}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="ml-8 mt-4 relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      :id="'player[' + player.id + '].selfAssessment'"
                      v-model="player.selfAssessment"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      :for="'player[' + player.id + '].selfAssessment'"
                      class="font-medium text-gray-700"
                    >
                      I can confirm we have completed the self assessment
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <label for="event.covidrep" class="block text-sm font-medium text-gray-700">
                COVID Rep
              </label>
              <div class="mt-1">
                <select
                  v-model="event.covidrep"
                  id="event.covidrep"
                  name="event.covidrep"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Please select a parent / carer</option>
                  <option v-for="parent in parents" :key="parent.id" :value="parent.name">
                    {{ parent.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-5">
          <div v-if="!saveEnabled" class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <!-- Heroicon name: solid/exclamation -->
                <svg
                  class="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-yellow-700">
                  Please select the players present and a COVID Rep
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <span class="inline-flex rounded-md shadow-sm">
              <router-link
                :to="{ name: 'Events' }"
                class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
              >
                Cancel
              </router-link>
            </span>
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                :disabled="!saveEnabled"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 disabled:opacity-50 transition duration-150 ease-in-out"
              >
                Save
              </button>
            </span>
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <button
                :disabled="!saveEnabled"
                @click="saveAndEmail"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 disabled:opacity-50 transition duration-150 ease-in-out"
              >
                Save & Email
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Event } from '../../models/Event'
import { Parent } from '../..//models/Parent'
import { Player } from '../..//models/Player'
import { Team } from '../..//models/Team'
import EmailGenerator from '../..//services/EmailGenerator'
import router from '../..//router/index'
import store from '../..//store/index'
import { computed, defineComponent, reactive, ref, watch } from 'vue'

export default defineComponent({
  props: {
    id: String,
  },
  setup(props) {
    const getTeamOrDefault = (teams: Team[]): Team => {
      if (teams.length === 1) {
        return Team.clone(teams[0])
      }
      return new Team()
    }

    const team = getTeamOrDefault(store.state.teams)
    const teams = store.state.teams
    const teamId = ref(team.id || 0)

    let e = new Event(team)

    if (props.id) {
      const orig = store.getters.getEventById(Number(props.id))
      e = Event.clone(orig)
    }

    const event = ref(e)

    watch(teamId, (newTeamId, prevTeamId) => {
      if (newTeamId === 0) {
        event.value.team = new Team()
      } else {
        const t = store.getters.getTeamById(newTeamId)
        event.value.team = Team.clone(t)
      }
    })

    const removeEvent = (id: number): void => {
      store.dispatch('removeEvent', id)
    }

    const resetCovidrep = (player: Player) => {
      if (
        player.parent1.name == event.value.covidrep ||
        player.parent2.name == event.value.covidrep
      ) {
        event.value.covidrep = undefined
      }
    }

    const onSelectParent = (player: Player): void => {
      const selected = !player.selected
      if (!selected) {
        resetCovidrep(player)
        return
      }
      player.selected = selected
      player.selfAssessment = selected
    }

    const onSelectPlayer = (player: Player): void => {
      const selected = !player.selected

      player.parent1.selected = selected
      if (!selected) {
        resetCovidrep(player)
        player.parent2.selected = selected
      }
      player.selfAssessment = selected
    }

    let allPlayersSelected = ref(false)

    const selectAllPlayers = (players: Player[]): void => {
      allPlayersSelected.value = !allPlayersSelected.value
      const selected = allPlayersSelected.value

      players.forEach((p) => {
        p.selected = selected
        p.parent1.selected = selected
        if (!selected) p.parent2.selected = selected
        p.selfAssessment = selected
      })
    }

    const parents = computed(() => {
      let selectedParent1s = event.value.team.players
        .filter((p) => p.parent1.selected)
        .map((p) => p.parent1)
      let selectedParent2s = event.value.team.players
        .filter((p) => p.parent2.selected)
        .map((p) => p.parent2)
      return selectedParent1s
        .concat(selectedParent2s)
        .sort((p1, p2) => (p1.name > p2.name ? 1 : -1))
    })

    const saveEnabled = computed((): boolean => {
      const selectedPlayersCount = event.value.team.players.filter((p) => p.selected).length
      return (
        selectedPlayersCount > 0 && event.value.covidrep != undefined && event.value.covidrep != ''
      )
    })

    const doSave = (): void => {
      if (props.id) {
        store.dispatch('updateEvent', event.value)
      } else {
        store.dispatch('addEvent', event.value)
      }
    }

    const saveAndEmail = (): void => {
      doSave()

      const emailGenerator = new EmailGenerator()
      emailGenerator.generateEmail(event.value)
      store.dispatch('hasEmailed', true)

      router.push({ path: '/events' })
    }

    const save = (): void => {
      doSave()
      router.push({ path: '/events' })
    }

    return {
      event,
      Parent,
      parents,
      teamId,
      team,
      teams,
      onSelectParent,
      onSelectPlayer,
      allPlayersSelected,
      selectAllPlayers,
      saveEnabled,
      save,
      saveAndEmail,
    }
  },
})
</script>
