<template>
  <div class="teams">
    <h1>This is the teams page</h1>
    <div id="nav">
      <router-link to="/teams/create">Create Team</router-link> |
      <router-link to="/teams/show">Show Team</router-link>
    </div>
    <router-view />
  </div>
</template>
