import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import { Event } from '../models/Event'
import { Player } from '../models/Player'
import { Team } from '../models/Team'
import { TeamPlayer } from '../models/TeamPlayer'
import { State, state } from './State'

const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage,
})

export default createStore({
  state,
  getters: {
    getEventById(state: State, getters: any) {
      return (id: number) => {
        return state.events.find((e) => e.id === id)
      }
    },
    getTeamById(state: State, getters: any) {
      return (id: number) => {
        return state.teams.find((t) => t.id === id)
      }
    },
  },
  mutations: {
    init(state) {
      if (state.nextId === 0) state.nextId = 1
    },
    // events
    addEvent(state, event: Event) {
      event.id = state.nextId++
      state.events.push(event)
    },
    updateEvent(state, event: Event) {
      const e = state.events.find((e) => e.id === event.id)
      if (e) Event.update(e, event)
    },
    removeEvent(state, id: number) {
      const index = state.events.findIndex((e) => e.id === id)
      state.events.splice(index, 1)
    },

    // players
    addPlayer(state, teamPlayer: TeamPlayer) {
      console.log('store: addPlayer')

      const team = state.teams.find((t) => t.id === teamPlayer.team.id)
      if (!team) return

      teamPlayer.player.id = state.nextId++
      team?.players.push(teamPlayer.player)
    },
    updatePlayer(state, teamPlayer: TeamPlayer) {
      const team = state.teams.find((t) => t.id === teamPlayer.team.id)
      const player = team?.players.find((p) => p.id === teamPlayer.player.id)
      if (player) Player.update(player, teamPlayer.player)
    },
    removePlayer(state, teamPlayer: TeamPlayer) {
      const team = state.teams.find((t) => t.id === teamPlayer.team.id)
      const index = team?.players.findIndex((p) => p.id === teamPlayer.player.id)
      if (index != -1) {
        team?.players.splice(index as number, 1)
      }
    },

    // teams
    addTeam(state, team: Team) {
      team.id = state.nextId++
      state.teams.push(team)
    },
    updateTeam(state, team: Team) {
      const index = state.teams.findIndex((d) => d.id === team.id)
      const t = state.teams[index]
      Team.update(t, team)
    },
    removeTeam(state, id: number) {
      const index = state.teams.findIndex((d) => d.id === id)
      state.teams.splice(index, 1)
    },
    hasEmailed(state, value: boolean) {
      state.hasEmailed = value
    },
  },
  actions: {
    init({ commit }) {
      commit('init', event)
    },
    // events
    addEvent({ commit }, event: Event) {
      commit('addEvent', event)
    },
    updateEvent({ commit }, event: Event) {
      commit('updateEvent', event)
    },
    removeEvent({ commit }, event: Event) {
      commit('removeEvent', event)
    },

    // players
    addPlayer({ commit }, teamPlayer: TeamPlayer) {
      commit('addPlayer', teamPlayer)
    },
    updatePlayer({ commit }, teamPlayer: TeamPlayer) {
      commit('updatePlayer', teamPlayer)
    },
    removePlayer({ commit }, teamPlayer: TeamPlayer) {
      commit('removePlayer', teamPlayer)
    },

    // teams
    addTeam({ commit }, team: Team) {
      commit('addTeam', team)
    },
    updateTeam({ commit }, team: Team) {
      commit('updateTeam', team)
    },
    removeTeam({ commit }, id: number) {
      commit('removeTeam', id)
    },

    // hasEmailed
    hasEmailed({ commit }, value: boolean) {
      commit('hasEmailed', value)
    },
  },
  modules: {
    // parents: parents
  },
  plugins: [vuexLocal.plugin],
})
