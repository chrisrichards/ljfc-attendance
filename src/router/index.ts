import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

import Events from "../views/events/List.vue";
import EditEvent from "../views/events/Edit.vue";

import Teams from "../views/teams/List.vue";
import EditTeam from "../views/teams/Edit.vue";

import Players from "../views/players/List.vue";
import EditPlayer from "../views/players/Edit.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/events",
    name: "Events",
    component: Events
  },
  {
    path: "/events/create",
    name: "CreateEvent",
    component: EditEvent
  },
  {
    path: "/events/edit/:id",
    name: "EditEvent",
    component: EditEvent,
    props: true
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams
  },
  {
    path: "/teams/create",
    name: "CreateTeam",
    component: EditTeam
  },
  {
    path: "/teams/edit/:id",
    name: "EditTeam",
    component: EditTeam,
    props: true
  },
  {
    path: "/teams/:teamId/players",
    name: "Players",
    component: Players,
    props: true
  },
  {
    path: "/teams/:teamId/players/create",
    name: "CreatePlayer",
    component: EditPlayer,
    props: true
  },
  {
    path: "/teams/:teamId/players/edit/:id",
    name: "EditPlayer",
    component: EditPlayer,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
