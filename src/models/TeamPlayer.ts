import { Player } from './Player';

import { Team } from "@/models/Team";

export class TeamPlayer {
    team = new Team();
    player = new Player();

    constructor(team: Team, player: Player) {
        this.team = team;
        this.player = player;
    }
}