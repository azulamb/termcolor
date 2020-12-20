import { TerminalColorTable, TerminalColor } from './types.ts';

export class TermColor implements TerminalColor
{
    private table =
    [
        { r: 0,   g: 0,   b: 0,   front: '30m', back: '40m',  name: 'black' },
        { r: 128, g: 0,   b: 0,   front: '31m', back: '41m',  name: 'maroon' },
        { r: 0,   g: 128, b: 0,   front: '32m', back: '42m',  name: 'green' },
        { r: 128, g: 128, b: 0,   front: '33m', back: '43m',  name: 'olive' },
        { r: 0,   g: 0,   b: 128, front: '34m', back: '44m',  name: 'navy' },
        { r: 128, g: 0,   b: 128, front: '35m', back: '45m',  name: 'purple' },
        { r: 0,   g: 128, b: 128, front: '36m', back: '46m',  name: 'teal' },
        { r: 192, g: 192, b: 192, front: '37m', back: '47m',  name: 'silver' },
        { r: 128, g: 128, b: 128, front: '90m', back: '100m', name: 'gray' },
        { r: 255, g: 0,   b: 0,   front: '91m', back: '101m', name: 'red' },
        { r: 0,   g: 255, b: 0,   front: '92m', back: '102m', name: 'lime' },
        { r: 255, g: 255, b: 0,   front: '93m', back: '103m', name: 'yellow' },
        { r: 0,   g: 0,   b: 255, front: '94m', back: '104m', name: 'blue' },
        { r: 255, g: 0,   b: 255, front: '95m', back: '105m', name: 'magenta' },
        { r: 0,   g: 255, b: 255, front: '96m', back: '106m', name: 'cyan' },
        { r: 255, g: 255, b: 255, front: '97m', back: '107m', name: 'white' },
    ];

    constructor()
    {
        const prefix = '\x1b[';
        this.table.forEach( ( color ) =>
        {
            color.back = prefix + color.back;
            color.front = prefix + color.front;
        } );
    }

    public colors() { return this.table.map( ( color ) => { return { r: color.r, g: color.g, b: color.b }; } ); }

    public terminalColors()
    {
        const back: string[] = [];
        const front: string[] = [];

        this.table.forEach( ( color ) =>
        {
            back.push( color.back );
            front.push( color.front );
        } );

        return {
            reset: '\x1b[0m',
            front: front,
            back: back,
        };
    }

    public terminalColorTable()
    {
        const back: { [ key: string ]: string, default: string, } = { default: '', };
        const front: { [ key: string ]: string, default: string, } = { default: '', };

        this.table.forEach( ( color ) =>
        {
            const code = color.r.toString( 16 ).padStart( 2, '0' ) +
                color.g.toString( 16 ).padStart( 2, '0' ) +
                color.b.toString( 16 ).padStart( 2, '0' );
            back[ code ] = color.back;
            front[ code ] = color.front;
        } );

        return {
            reset: '\x1b[0m',
            front: front,
            back: back,
        };
    }
}
