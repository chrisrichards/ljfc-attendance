import { getTransitionRawChildren } from 'vue';

export class Row {
    player = "";
    parentName = "";
    parentPhone = "";
    parentEmail = "";
    selfAssessed = "";

    constructor(player: string, parentName: string, parentPhone: string, parentEmail: string, selfAssessed: string) {
        this.player = player;
        this.parentName = parentName;
        this.parentPhone = parentPhone;
        this.parentEmail = parentEmail;
        this.selfAssessed = selfAssessed;
    }
}