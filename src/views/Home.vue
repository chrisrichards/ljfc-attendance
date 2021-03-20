<template>
  <div class="mt-8 text-center">
    <h2
      class="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-2xl sm:leading-none md:text-3xl"
    >
      Welcome to the Littleton Junior Football Club Attendance App
    </h2>
    <p
      class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
    >
      This app helps you complete the attendance register and email it to the club.
    </p>
    <p
      class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
    >
      To get started follow the steps below:
    </p>

    <div class="py-12 px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center" aria-label="Progress">
        <ol class="space-y-6">
          <li>
            <router-link :to="{ name: 'CreateTeam' }" class="group">
              <div class="flex items-start">
                <step-item :state="stepItemStates[0]" />
                <p
                  class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900 text-left"
                >
                  Add a team
                </p>
              </div>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Players', params: { teamId: team.id } }" class="group">
              <div class="flex items-start">
                <step-item :state="stepItemStates[1]" />
                <p
                  class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900 text-left"
                >
                  Add players and parent contact details to the team
                </p>
              </div>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Events' }" class="group">
              <div class="flex items-start">
                <step-item :state="stepItemStates[2]" />
                <p
                  class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900 text-left"
                >
                  Add an event, select the players and parents in attendance and whether they have
                  self assessed
                </p>
              </div>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'EditEvent', params: { id: event.id } }" class="group">
              <div class="flex items-start">
                <step-item :state="stepItemStates[3]" />
                <p
                  class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900 text-left"
                >
                  Email the event to LJFC
                </p>
              </div>
            </router-link>
          </li>
        </ol>
      </nav>
    </div>

    <p
      class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
    >
      If you have your players and parent contact details in Excel or spreadsheet, you can import
      them. Fist create a team, then click on the 'Players' button and click on the 'Import' button.
      Copy the data from Excel / spreadsheet and paste it into the CSV data field and click the
      'Import' button.
    </p>
    <p
      class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
    >
      Once you've created a team and players, you can create events by going to the Events page and
      clicking 'Add event'. The date will default to the current date, and you check the players and
      parents in attendance. Click 'Save' to create the event, and then click 'email' to create an
      email populated with a list of all attendees that can be sent to the club.
    </p>
    <p
      class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
    >
      Please note that all data is stored in the browser, no data is stored on a server. To pass the
      player and parent contact details to someone else, export the player list and email the CSV
      data to the other person who can then import the data.
    </p>
    <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8" v-if="!hasTeam">
      <div class="rounded-md shadow">
        <router-link
          :to="{ name: 'CreateTeam' }"
          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
        >
          Get started
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '../store/index'
import { defineComponent, ref } from 'vue'
import StepItem from '@components/StepItem.vue'
import { Event } from '../models/Event'
import { StepItemState } from '../models/StepItemState'
import { Team } from '../models/Team'

export default defineComponent({
  components: {
    StepItem,
  },
  setup() {
    const hasTeam = store.state.teams.length > 0
    const team = hasTeam ? getTeam() : new Team()

    const hasEvent = store.state.events.length > 0
    const event = hasEvent ? getEvent() : new Event()

    function getTeam(): Team {
      return store.state.teams[0]
    }

    function getEvent(): Event {
      return store.state.events[0]
    }

    function getStepItemStates(): StepItemState[] {
      if (!hasTeam) {
        return [
          StepItemState.Current,
          StepItemState.NotStarted,
          StepItemState.NotStarted,
          StepItemState.NotStarted,
        ]
      }

      const hasPlayers = team.players.length > 0
      if (!hasPlayers) {
        return [
          StepItemState.Completed,
          StepItemState.Current,
          StepItemState.NotStarted,
          StepItemState.NotStarted,
        ]
      }

      if (!hasEvent) {
        return [
          StepItemState.Completed,
          StepItemState.Completed,
          StepItemState.Current,
          StepItemState.NotStarted,
        ]
      }

      if (!store.state.hasEmailed) {
        return [
          StepItemState.Completed,
          StepItemState.Completed,
          StepItemState.Completed,
          StepItemState.Current,
        ]
      }

      return [
        StepItemState.Completed,
        StepItemState.Completed,
        StepItemState.Completed,
        StepItemState.Completed,
      ]
    }

    function addPlayersState(): StepItemState {
      return hasTeam ? StepItemState.Completed : StepItemState.NotStarted
    }

    const stepItemStates = getStepItemStates()

    return {
      hasTeam,
      team,
      event,
      stepItemStates,
    }
  },
})
</script>
