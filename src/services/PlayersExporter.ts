import { unparse } from "papaparse";
import PlayerInfo from "@/models/PlayerInfo";
import { Team } from "@/models/Team";


export default class PlayersExporter {
    public export(team: Team): string {
        const players = Array<PlayerInfo>();
        team.players.forEach(p => {
            const info = new PlayerInfo(p);
            players.push(info);
        });
    
        return unparse(players);
    }
}
