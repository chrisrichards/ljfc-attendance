<template>
  <div class="parents">
    <h1>This is the parents page</h1>
    <div id="nav">
      <router-link to="/parents/create">Add Parent</router-link> |
      <router-link to="/parents/show">Show Parent</router-link>
    </div>
    <button @click="addParent('Joe Blogs', '01234 098765', 'joe@bloggs.com')">
      Add parent
    </button>
    <router-view />

    <div v-for="parent in parents" :key="parent.id" :parent="parent">
      <p>{{ parent.id }}</p>
      <p>{{ parent.name }}</p>
      <p>{{ parent.phone }}</p>
      <p>{{ parent.email }}</p>
      <button @click="removeParent(parent.id)">Remove</button>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../../store/index";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const parents = ref(store.state.parents);

    const addParent = (name: string, phone: string, email: string): void => {
      store.dispatch("addParent", { name, phone, email });
    };

    const removeParent = (id: number): void => {
      store.dispatch("removeParent", id);
    };

    return {
      parents,
      addParent,
      removeParent
    };
  }
});
</script>
