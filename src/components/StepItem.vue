<template>
  <div>
    <div
      v-if="state == StepItemState.NotStarted"
      class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
      aria-hidden="true"
    >
      <div class="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400"></div>
    </div>

    <span
      v-if="state == StepItemState.Current"
      class="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
      aria-hidden="true"
    >
      <span class="absolute h-4 w-4 rounded-full bg-indigo-200"></span>
      <span class="relative block w-2 h-2 bg-indigo-600 rounded-full"></span>
    </span>

    <span
      v-if="state == StepItemState.Completed"
      class="flex-shrink-0 relative h-5 w-5 flex items-center justify-center"
    >
      <!-- Heroicon name: solid/check-circle -->
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { StepItemState } from '../models/StepItemState'

export default defineComponent({
  props: {
    state: StepItemState,
  },
  setup(props) {
    console.log('stepItem: state=' + props.state)
    const state = props.state
    return { StepItemState, state }
  },
})
</script>
