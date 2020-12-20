# termcolor
Terminal color.

## example

```
deno run example.ts
```

or

```js
import { termcolor } from 'https://github.com/Azulamb/termcolor/raw/main/mod.ts'

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
```
