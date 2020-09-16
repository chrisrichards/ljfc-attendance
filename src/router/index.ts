import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

import Events from "../views/events/List.vue";
import CreateEvent from "../views/events/Create.vue";
import ShowEvent from "../views/events/Show.vue";

import Parents from "../views/parents/List.vue";
import CreateParent from "../views/parents/Create.vue";
import ShowParent from "../views/parents/Show.vue";

import Teams from "../views/teams/List.vue";
import CreateTeam from "../views/teams/Create.vue";
import ShowTeam from "../views/teams/Show.vue";

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
    component: CreateEvent
  },
  {
    path: "/events/show",
    name: "ShowEvent",
    component: ShowEvent
  },
  {
    path: "/parents",
    name: "Parents",
    component: Parents
  },
  {
    path: "/parents/create",
    name: "CreateParent",
    component: CreateParent
  },
  {
    path: "/parents/show",
    name: "ShowParent",
    component: ShowParent
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams
  },
  {
    path: "/teams/create",
    name: "CreateTeam",
    component: CreateTeam
  },
  {
    path: "/teams/show",
    name: "ShowTeam",
    component: ShowTeam
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
