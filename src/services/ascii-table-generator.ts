export default class AsciiTableGenerator
{
    createTable(input: string): string {
        // set up the style
        const cTL = "", cTM = "", cTR = "";
        let cML = "", cMM = "", cMR = "";
        const cBL = "", cBM = "", cBR = "";
        let hdV = "", hdH = "";
        let spV = "", spH = "";

        const headerStyle = "top";
        const hasHeaders = headerStyle == "top";
        const autoFormat = false;
        const separator = "\t";

        const rows = input.split(/[\r\n]+/);
        if (rows[rows.length - 1] == "") {
            // extraneous last row, so delete it
            rows.pop();
        }

        // calculate the max size of each column
        const colLengths = [];
        const isNumberCol = [];
        for (let i = 0; i < rows.length; i++) {
            if (separator == "\t") {
                rows[i] = rows[i].replace(/( {4})/g, "\t");
            } else {
                //Tab is not the separator, replace tabs with single characters to keep correct spacing
                rows[i] = rows[i].replace(/\t/g, "    ");
            }
            const cols = rows[i].split(separator);
            for (let j = 0; j < cols.length; j++) {
                const data = cols[j];
                const isNewCol = colLengths[j] == undefined;
                if (isNewCol) {
                    isNumberCol[j] = true;
                }
                // keep track of which columns are numbers only
                if (autoFormat) {
                    if (hasHeaders && i == 0) {
                        ; // a header is allowed to not be a number (exclude spreadsheet because the header hasn't been added yet
                    } else if (isNumberCol[j] && !data.match(/^(\s*-?(\d|,| |[.])*\s*)$/)) { //number can be negative, comma/period-separated, or decimal
                        isNumberCol[j] = false;
                    }
                }
                if (isNewCol || colLengths[j] < data.length) {
                colLengths[j] = data.length;
                }
            }
        }

        const hasHeaderSeparators = true; // Defaults to including a separator line btwn header and data rows
        const hasLineSeparators = false; // Defaults to no separator lines btwn data rows
        const hasTopLine = false; // Defaults to including the topmost line
        const hasBottomLine = false; // Defaults to including the bottom-most line
        const hasLeftSide = true; // Defaults to including the left side line
        const hasRightSide = true; // Defaults to including the right side line
        const topLineUsesBodySeparators = false; // Defaults to top line uses the same separators as the line between header and body
        let align = "l"; // Default alignment: left-aligned

        // Add comment/remark indicators for use in code":
        const commentbefore = "";
        const commentafter  = "";
        const prefix = "";
        const suffix = "";

        // Map of variable locations in the output:
        //
        // [cTL]   [hdH]  [cTM]   [hdH]  [cTR]
        // [hdV] Header 1 [hdV] Header 2 [hdV]
        // [cML]   [hdH]  [cMM]   [hdH]  [cMR]
        // [spV] Value 1  [spV] Value 2  [spV]
        // [cML]   [spH]  [cMM]   [spH]  [cMR]
        // [spV] Value 1a [spV] Value 2a [spV]
        // [cBL]   [spH]  [cBM]   [spH]  [cBR]

        // ascii mysql style
        // cTL = "+"; cTM = "+"; cTR = "+";
        // cML = "+"; cMM = "+"; cMR = "+";
        // cBL = "+"; cBM = "+"; cBR = "+";

        // hdV = "|"; hdH = "-";
        // spV = "|"; spH = "-";

        // ascii - compact
        // hasTopLine = false;
        // hasBottomLine = false;
        cML = " "; cMM = " "; cMR = " ";
        hdV = " "; hdH = "-";
        spV = " "; spH = "-";

        // output the text
        let output = "";

        // echo comment wrapper if any
        output += commentbefore + "\n";

        // output the top most row
        // Ex: +---+---+
        if (hasTopLine ) {
            let topLineHorizontal;
            if (topLineUsesBodySeparators || !hasHeaders) {
                topLineHorizontal = spH;
            } else {
                topLineHorizontal = hdH;
            }
            output += this.getSeparatorRow(colLengths, cTL, cTM, cTR, topLineHorizontal, prefix, suffix)
        }

        for (let i = 0; i < rows.length; i++) {
            // Separator Rows
            if (hasHeaders && hasHeaderSeparators && i == 1 ) {
                // output the header separator row
                output += this.getSeparatorRow(colLengths, cML, cMM, cMR, hdH, prefix, suffix)
            } else if ( hasLineSeparators && i < rows.length ) {
                // output line separators
                if( ( !hasHeaders && i >= 1 ) || ( hasHeaders && i > 1 ) ) {
                    output += this.getSeparatorRow(colLengths, cML, cMM, cMR, spH, prefix, suffix)
                }
            }

            for (let j = 0; j <= colLengths.length; j++) {
                // output the data
                if (j == 0) {
                    output += prefix;
                }
                const cols = rows[i].split(separator);
                let data = cols[j] || "";
                if (autoFormat) {
                    if (hasHeaders && i == 0) {
                        align = "c";
                    } else if (isNumberCol[j]) {
                        align = "r";
                    } else {
                        align = "l";
                    }
                }
                let verticalBar;
                if (hasHeaders && i == 0 ) {
                    verticalBar = hdV;
                } else {
                    verticalBar = spV;
                }
                if ( j < colLengths.length ) {
                    data = this._pad(data, colLengths[j], " ", align);
                    if (j == 0 && !hasLeftSide) {
                        output += "  " + data + " ";
                    } else {
                        output += verticalBar + " " + data + " ";
                    }
                } else if (hasRightSide) {
                    output += verticalBar + suffix + "\n";
                } else {
                    output += suffix + "\n";
                }

            }
        }

        // output the bottom line
        // Ex: +---+---+
        if (hasBottomLine ) {
            output += this.getSeparatorRow(colLengths, cBL, cBM, cBR, spH, prefix, suffix)
        }

        // echo comment wrapper if any
        output += commentafter + "\n";

        return output;
    }

    getSeparatorRow(lengths: number[], left: string, middle: string, right: string, horizontal: string, prefix: string, suffix: string) {
        let rowOutput = prefix;
        for (let j = 0; j <= lengths.length; j++) {
            if ( j == 0 ) {
                rowOutput += left + this._repeat(horizontal, lengths[j] + 2);
            } else if ( j < lengths.length ) {
                rowOutput += middle + this._repeat(horizontal, lengths[j] + 2);
            } else {
                rowOutput += right + suffix + "\n";
            }
        }
        return rowOutput;
    };

    _trim(str: string) {
        const rgx = /^\s*(.*?)\s*$/;
        const result = str.match(rgx);
        return result ? [1] : str;
    }

    defValue(value: string, defaultValue: string) {
        return (typeof value === "undefined") ? defaultValue : value;
    }

    _pad(text: string, length: number, char: string, align: string) {
        // align: r l or c
        char = this.defValue(char, " ");
        align = this.defValue(align, "l");
        const additionalChars = length - text.length;
        let result = "";
        switch (align) {
            case "r":
                result = this._repeat(char, additionalChars) + text;
                break;
            case "l":
                result = text + this._repeat(char, additionalChars);
                break;
            case "c": {
                const leftSpaces = Math.floor(additionalChars / 2);
                const rightSpaces = additionalChars - leftSpaces;
                result = this._repeat(char, leftSpaces) + text + this._repeat(char,rightSpaces);
                break;
            }
            default:
                // assert(false);
                break;
        }
        return result;
    }

    _repeat(str: string, num: number) {
        return new Array(num + 1).join(str);
    }
}
