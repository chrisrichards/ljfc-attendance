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
        </div>
        <div class="pt-5">
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
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Save
              </button>
            </span>
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <button
                @click="saveAndEmail"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
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
import { defineComponent, reactive, ref, watch } from 'vue'

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

    const onSelectParent = (player: Player): void => {
      const selected = !player.selected
      if (!selected) return
      player.selected = selected
      player.selfAssessment = selected
    }

    const onSelectPlayer = (player: Player): void => {
      const selected = !player.selected

      player.parent1.selected = selected
      if (!selected) player.parent2.selected = selected

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
      teamId,
      team,
      teams,
      onSelectParent,
      onSelectPlayer,
      allPlayersSelected,
      selectAllPlayers,
      save,
      saveAndEmail,
    }
  },
})
</script>
