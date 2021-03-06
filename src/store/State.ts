import { Event } from '../models/Event'
import { Team } from '../models/Team'

export const state = {
  nextId: Number(),
  teams: Array<Team>(),
  events: Array<Event>(),
  hasEmailed: false,
}

export type State = typeof state
