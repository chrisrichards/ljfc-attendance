import { parse } from "papaparse";
import store from "@/store/index";
import { Player } from "@/models/Player";
import { Team } from "@/models/Team";
import { TeamPlayer } from '@/models/TeamPlayer';

export default class PlayersImporter {
    public import(team: Team, csv: string): void {
        const result = parse(csv, { header: true });
        if (result.errors.length != 0) {
            return;
        }

        result.data.forEach(d => {
            const data = d as any;
            const player = new Player();
            player.name = data.name;
            player.parent1.name = data.parent1Name;
            player.parent1.phone = data.parent1Phone;
            player.parent1.email = data.parent1Email;
            player.parent2.name = data.parent2Name;
            player.parent2.phone = data.parent2Phone;
            player.parent2.email = data.parent2Email;

            const teamPlayer = new TeamPlayer(team, player);
            store.dispatch("addPlayer", teamPlayer);
        });
    }
}