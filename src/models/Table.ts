import {Row} from "@/models/Row";

export class Table {
    rows = Array<Row>();

    build(): string {
        const newLine = "%0d%0a";

        const colWidths = this.getColWidths();
        let content = "";

        this.rows.forEach(r => {
            content += this.pad(r.player, colWidths[0]);
            content += this.pad(r.parentName, colWidths[1]);
            content += this.pad(r.parentPhone, colWidths[2]);
            content += this.pad(r.parentEmail, colWidths[3]);
            content += r.selfAssessed;
            content += newLine;
        });

        return content;
    }

    getColWidths(): Array<number> {
        const colWidths = [0,0,0,0,0];

        this.rows.forEach(r => {
            if (r.player.length > colWidths[0]) colWidths[0] = r.player.length;
            if (r.parentName.length > colWidths[1]) colWidths[1] = r.parentName.length;
            if (r.parentPhone.length > colWidths[2]) colWidths[2] = r.parentPhone.length;
            if (r.parentEmail.length > colWidths[3]) colWidths[3] = r.parentEmail.length;
            if (r.selfAssessed.length > colWidths[4]) colWidths[4] = r.selfAssessed.length;
        })

        return colWidths;
    }

    pad(value: string, width: number): string {
        const numSpaces = width - value.length;
        const spaces = new Array(numSpaces + 3).join(" ");
        return value + spaces;
    }
}