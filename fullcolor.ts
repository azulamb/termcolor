export const FullColor =
{
    reset: '\x1b[0m',
    back: ( r: number, g: number, b: number ) =>
    {
        return `\x1b[48;2;${ r };${ g };${ b }m`;
    },
    front: ( r: number, g: number, b: number ) =>
    {
        return `\x1b[38;2;${ r };${ g };${ b }m`;
    },
};