import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Events from '../views/events/List.vue'
import EditEvent from '../views/events/Edit.vue'

import Teams from '../views/teams/List.vue'
import EditTeam from '../views/teams/Edit.vue'
import DeleteTeam from '../views/teams/Delete.vue'

import Players from '../views/players/List.vue'
import EditPlayer from '../views/players/Edit.vue'
import ExportPlayers from '../views/players/Export.vue'
import ImportPlayers from '../views/players/Import.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/events/create',
    name: 'CreateEvent',
    component: EditEvent,
  },
  {
    path: '/events/:id/edit',
    name: 'EditEvent',
    component: EditEvent,
    props: true,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
  },
  {
    path: '/teams/create',
    name: 'CreateTeam',
    component: EditTeam,
  },
  {
    path: '/teams/:id/edit',
    name: 'EditTeam',
    component: EditTeam,
    props: true,
  },
  {
    path: '/teams/:id/delete',
    name: 'DeleteTeam',
    component: DeleteTeam,
    props: true,
  },
  {
    path: '/teams/:teamId/players',
    name: 'Players',
    component: Players,
    props: true,
  },
  {
    path: '/teams/:teamId/players/create',
    name: 'CreatePlayer',
    component: EditPlayer,
    props: true,
  },
  {
    path: '/teams/:teamId/players/:id/edit',
    name: 'EditPlayer',
    component: EditPlayer,
    props: true,
  },
  {
    path: '/teams/:teamId/players/export',
    name: 'ExportPlayers',
    component: ExportPlayers,
    props: true,
  },
  {
    path: '/teams/:teamId/players/import',
    name: 'ImportPlayers',
    component: ImportPlayers,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
