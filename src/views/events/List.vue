<template>
  <div class="bg-white shadow sm:rounded-md">
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
        <div class="ml-4 mt-2">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Events</h3>
        </div>
        <div class="ml-4 mt-2 flex-shrink-0">
          <span class="inline-flex rounded-md shadow-sm">
            <router-link
              :to="{ name: 'CreateEvent' }"
              class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
            >
              Add event
            </router-link>
          </span>
        </div>
      </div>
    </div>
    <ul class="divide-y divide-gray-200">
      <li v-for="event in events" :key="event.id" :event="event">
        <router-link :to="{ name: 'EditEvent', params: { id: event.id } }">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="min-w-0 flex-shrink-0 px-1">
                <div>
                  <p class="text-sm font-medium text-indigo-600 truncate">{{ event.date }}</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <span class="truncate"
                      >{{
                        event.team.players.filter((p) => p.selected === true).length
                      }}
                      attendees</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '../../store/index'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const events = store.state.events.sort((a, b) => (a.date < b.date ? 1 : -1))

    return {
      events,
    }
  },
})
</script>
