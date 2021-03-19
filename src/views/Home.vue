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
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12 px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center" aria-label="Progress">
        <ol class="space-y-6">
          <!-- <li>
            **** Complete Step ***
            <a href="#" class="group">
              <span class="flex items-start">
                <span class="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                  <svg
                    class="h-full w-full text-indigo-600 group-hover:text-indigo-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900">
                  Add a team
                </span>
              </span>
            </a>
          </li>

          <li>
            *** Current Step ***
            <a href="#" class="flex items-start" aria-current="step">
              <span
                class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                aria-hidden="true"
              >
                <span class="absolute h-4 w-4 rounded-full bg-indigo-200"></span>
                <span class="relative block w-2 h-2 bg-indigo-600 rounded-full"></span>
              </span>
              <span class="ml-3 text-base font-medium text-indigo-600">
                Add players and parent contact details to the team
              </span>
            </a>
          </li> -->

          <li>
            <!-- Upcoming Step -->
            <a href="#" class="group">
              <div class="flex items-start">
                <div
                  class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                </div>
                <p class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900">
                  Add a team
                </p>
              </div>
            </a>
          </li>

          <li>
            <!-- Upcoming Step -->
            <a href="#" class="group">
              <div class="flex items-start">
                <div
                  class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                </div>
                <p class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900">
                  Add players and parent contact details to the team
                </p>
              </div>
            </a>
          </li>

          <li>
            <!-- Upcoming Step -->
            <a href="#" class="group">
              <div class="flex items-start">
                <div
                  class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                </div>
                <p class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900">
                  Add an event, select the players and parents in attendance and whether they have
                  self assessed
                </p>
              </div>
            </a>
          </li>

          <li>
            <!-- Upcoming Step -->
            <a href="#" class="group">
              <div class="flex items-start">
                <div
                  class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
                </div>
                <p class="ml-3 text-base font-medium text-gray-500 group-hover:text-gray-900">
                  Email the event to LJFC
                </p>
              </div>
            </a>
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

export default defineComponent({
  setup() {
    const hasTeam = ref(store.state.teams.length > 0)

    return {
      hasTeam,
    }
  },
})
</script>
