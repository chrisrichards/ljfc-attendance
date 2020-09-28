import { Player } from '@/models//Player';

export class Team {
    id: number | undefined = undefined;
    name = "";
    players = Array<Player>();

    constructor(id: number | undefined = undefined, name = "", players = Array<Player>()) {
        this.id = id;
        this.name = name;
        this.players = players;
    }

    public static update(thisArg: Team, t: Team): void {
        thisArg.name = t.name;
    }

    public static clone(thisArg: Team): Team {
        return new Team(thisArg.id, thisArg.name, thisArg.players.map(p => Player.clone(p)));
    }    
}