import { termcolor } from './mod.ts'

const block = '▄▀';

console.log( '16 colors.' );
const c16 = ( new termcolor.tc16() ).terminalColors();
for ( let i = 0 ; i < 16 ; ++i )
{
    Deno.stdout.writeSync( ( new TextEncoder() ).encode( `${ c16.back[ i ] }${ block }` ) );
}
console.log( c16.reset );
for ( let i = 0 ; i < 16 ; ++i )
{
    Deno.stdout.writeSync( ( new TextEncoder() ).encode( `${ c16.front[ i ] }${ block }` ) );
}
console.log( c16.reset );

console.log( '256 colors.' );
const c256 = ( new termcolor.tc256() ).terminalColors();
for ( let i = 0 ; i < 256 ; )
{
    Deno.stdout.writeSync( ( new TextEncoder() ).encode( `${ c256.back[ i ] }${ block }` ) );
    if ( ++i % 16 === 0 ) { console.log( c256.reset ); }
}
console.log( c256.reset );
for ( let i = 0 ; i < 256 ; )
{
    Deno.stdout.writeSync( ( new TextEncoder() ).encode( `${ c256.front[ i ] }${ block }` ) );
    if ( ++i % 16 === 0 ) { console.log( c256.reset ); }
}
console.log( c256.reset );

const c = ( new termcolor.tc256() ).colors();
for ( let i = 0 ; i < 256 ; )
{
    Deno.stdout.writeSync( ( new TextEncoder() ).encode( `${ c256.back[ i ] } \x1b[48;2;${ c[ i ].r  };${ c[ i ].g };${ c[ i ].b }m ` ) );
    if ( ++i % 16 === 0 ) { console.log( c256.reset ); }
}
console.log( c256.reset );
