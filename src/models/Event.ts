import { Team } from './Team'

export class Event {
  id: number | undefined
  date = new Date().toISOString().substr(0, 10)
  type: string | undefined
  location: string | undefined
  team = new Team()
  covidrep: string | undefined
  leadCoachName: string | undefined
  leadCoachNumber: string | undefined

  constructor(team: Team) {
    this.id = undefined
    this.date = new Date().toISOString().substr(0, 10)
    this.type = undefined
    this.location = undefined
    this.team = Team.clone(team)
    this.covidrep = undefined
    this.leadCoachName = undefined
    this.leadCoachNumber = undefined
  }

  static update(thisArg: Event, e: Event) {
    thisArg.date = e.date
    thisArg.type = e.type
    thisArg.location = e.location
    thisArg.team = e.team
    thisArg.covidrep = e.covidrep
    thisArg.leadCoachName = e.leadCoachName
    thisArg.leadCoachNumber = e.leadCoachNumber
  }

  static clone(src: Event) {
    let event = new Event(src.team)
    event.id = src.id
    event.date = src.date
    event.type = src.type
    event.location = src.location
    event.covidrep = src.covidrep
    event.leadCoachName = src.leadCoachName
    event.leadCoachNumber = src.leadCoachNumber
    return event
  }
}
