import * as TC16 from './color16.ts'
import * as TC256 from './color256.ts'
import { FullColor } from './fullcolor.ts'
export * from './types.ts'

export const termcolor =
{
    tc16: TC16.TermColor,
    tc256: TC256.TermColor,
    full: FullColor,
};
