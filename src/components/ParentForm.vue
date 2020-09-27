<template>
  <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
    <div class="sm:col-span-4">
      <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Name</label>
      <div class="mt-1 rounded-md shadow-sm">
        <input
          id="name"
          v-model="name"
          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
    </div>

    <div class="sm:col-span-4">
      <label for="phone" class="block text-sm font-medium leading-5 text-gray-700">Phone</label>
      <div class="mt-1 rounded-md shadow-sm">
        <input
          id="phone"
          v-model="phone"
          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
    </div>

    <div class="sm:col-span-4">
      <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
      <div class="mt-1 rounded-md shadow-sm">
        <input
          id="email"
          type="email"
          v-model="email"
          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
    phone: String,
    email: String
  }
})
export default class ParentForm extends Vue {
  name!: string;
  phone!: string;
  email!: string;
}
</script>
