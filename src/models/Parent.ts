export class Parent {
    name = "";
    email = "";
    phone = "";
    selected = false;

    constructor(name = "", email = "", phone = "", selected = false) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.selected = selected;
    }

    static isPresent(thisArg: Parent): boolean {
        return thisArg.name !== "";
    }

    static update(thisArg: Parent, p: Parent): void {
        thisArg.name = p.name;
        thisArg.email = p.email;
        thisArg.phone = p.phone;
        thisArg.selected = p.selected;
    }

    static clone(thisArg: Parent): Parent {
        return new Parent(thisArg.name, thisArg.email, thisArg.phone, thisArg.selected);
    }
}
