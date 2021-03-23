<template>
  <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        <span v-if="team.id">Edit team</span>
        <span v-else>Add team</span>
      </h3>
    </div>
    <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="sm:col-span-4">
          <label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
          <div class="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="team-name"
              v-model="team.name"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div class="pt-5">
          <div class="flex justify-end">
            <router-link
              v-if="team.id === undefined"
              :to="{ name: 'Teams' }"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </router-link>
            <router-link
              v-if="team.id != undefined"
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
import { Team } from '../..//models/Team'
import router from '../..//router/index'
import store from '../../store/index'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    id: String,
  },
  setup(props) {
    let t = new Team()

    if (props.id) {
      const orig = store.getters.getTeamById(Number(props.id))
      if (orig) t = Team.clone(orig)
    }

    const team = ref(t)

    const submit = (): void => {
      if (props.id) {
        store.dispatch('updateTeam', team.value)
        router.push({ name: 'Players', params: { teamId: team.value.id } })
      } else {
        store.dispatch('addTeam', team.value)
        router.push({ name: 'Teams' })
      }
    }

    return {
      team,
      submit,
    }
  },
})
</script>
