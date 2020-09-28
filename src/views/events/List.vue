<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Events
                </h3>
              </div>
              <div class="ml-4 mt-2 flex-shrink-0">
                <span class="inline-flex rounded-md shadow-sm">
                  <button @click="showCreateEvent" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700">
                    Add event
                  </button>
                </span>
              </div>
            </div>
          </div>

          <ul>
            <li v-for="event in events" :key="event.id" :event="event">
              <div class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                      {{ event.date }}
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <div class="mr-6 flex items-center text-sm leading-5 text-gray-500">
                        <span class="truncate">
                          {{ event.team.players.filter(p => p.selected === true).length }} attendees
                        </span>
                      </div>
                    </div>
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                      <div class="flex items-center text-sm">
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="button" @click="emailEvent(event.id)" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                              <!-- Heroicon name: mail -->
                              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              email
                            </button>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm ml-2">
                            <button type="button" @click="showEditEvent(event.id)" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                              <!-- Heroicon name: edit -->
                              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              edit
                            </button>
                        </span>
                        <span class="inline-flex rounded-md shadow-sm ml-2">
                            <button type="button" @click="removeEvent(event.id)" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                              <!-- Heroicon name: trash -->
                              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              delete
                            </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Event } from "@/models/Event";
import { Parent } from "@/models/Parent";
import EmailGenerator from "@/services/EmailGenerator";
import router from "@/router/index";
import store from "../../store/index";
import { defineComponent, ref } from "vue";

export default defineComponent({
  
  setup() {
    const events = ref(store.state.events);

    const showCreateEvent = (): void => {
      router.push({ path: "/events/create" });
    };

    const showEditEvent = (id: number): void => {
      router.push({ path: `/events/edit/${id}` });
    };

    const removeEvent = (id: number): void => {
      store.dispatch("removeEvent", id);
    };

    const emailEvent = (id: number): void => {
      const event = store.getters.getEventById(id);
      const emailGenerator = new EmailGenerator();
      emailGenerator.generateEmail(event);
    };

    return {
      events,
      showCreateEvent,
      showEditEvent,
      removeEvent,
      emailEvent
    };
  }
});
</script>
