import { Event } from "@/models/Event";
import { Team } from "@/models/Team";

export const state = {
    teams: Array<Team>(),
    events: Array<Event>()
}
  
export type State = typeof state