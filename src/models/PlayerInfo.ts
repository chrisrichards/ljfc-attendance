import { Player } from '@/models//Player';

export default class PlayerInfo {
    name = "";
    parent1Name = "";
    parent1Email = "";
    parent1Phone = "";
    parent2Name = "";
    parent2Email = "";
    parent2Phone = "";

    constructor(player: Player) {
        this.name = player.name;
        this.parent1Name = player.parent1.name;
        this.parent1Phone = player.parent1.phone;
        this.parent1Email = player.parent1.email;
        this.parent2Name = player.parent2.name;
        this.parent2Phone = player.parent2.phone;
        this.parent2Email = player.parent2.email;
    }
}