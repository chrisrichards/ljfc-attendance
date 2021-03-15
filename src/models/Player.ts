import { Parent } from './Parent';

export class Player {
    id: number | undefined = undefined;
    name = "";
    parent1 = new Parent();
    parent2= new Parent();
    selected = false;
    selfAssessment = false;

    constructor(id: number | undefined = undefined, name = "", parent1 = new Parent(), parent2= new Parent(), selected = false, selfAssessment = false) {
        this.id = id;
        this.name = name;
        this.parent1 = parent1;
        this.parent2 = parent2;
        this.selected = selected;
        this.selfAssessment = selfAssessment;
    }

    public static update(thisArg: Player, p: Player): void {
        thisArg.name = p.name;
        Parent.update(thisArg.parent1, p.parent1)
        Parent.update(thisArg.parent2, p.parent2)
        thisArg.selected = p.selected;
        thisArg.selfAssessment = p.selfAssessment;
    }

    public static clone(thisArg: Player): Player {
        return new Player(thisArg.id, thisArg.name, Parent.clone(thisArg.parent1), Parent.clone(thisArg.parent2), thisArg.selected, thisArg.selfAssessment);
    }
}