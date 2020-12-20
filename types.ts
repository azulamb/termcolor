export interface TerminalColorList
{
    reset: string;
    front: string[];
    back: string[];
}

export interface TerminalColorTable
{
    reset: string;
    front: { [ key: string ]: string, default: string, };
    back: { [ key: string ]: string, default: string, };
}

export interface TerminalColor
{
    // Color data list.
    colors(): { r: number, g: number, b: number }[];

    // ANSI Escape code.
    terminalColors(): TerminalColorList;

    // ANSI Escape code(key is color code: XXXXXX)
    terminalColorTable(): TerminalColorTable;
}
