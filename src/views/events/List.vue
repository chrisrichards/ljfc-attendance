<template>
  <div class="events">
    <h1>This is the events page</h1>
    <div id="nav">
      <router-link to="/events/create">Create Event</router-link> |
      <router-link to="/events/show">Show Event</router-link>
    </div>
    <router-view />
  </div>
</template>
