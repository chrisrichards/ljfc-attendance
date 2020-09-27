import { Team } from "@/models/Team";

export class Event {
    id: number | undefined;
    date = new Date().toISOString().substr(0, 10);
    team = new  Team();

    constructor(id: number | undefined, date = new Date().toISOString().substr(0, 10), team = new Team()) {
        this.id = id;
        this.date = date;
        this.team = team;
    }

    static update(thisArg: Event, e: Event) {
        thisArg.date = e.date;
        thisArg.team = e.team;
    }

    static clone(thisArg: Event) {
        return new Event(thisArg.id, thisArg.date, Team.clone(thisArg.team));
    }
}
