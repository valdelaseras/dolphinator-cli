#! /usr/bin/env node

import Chalk from 'chalk';
import { program } from 'commander';
import { encode } from './commands/encode.js';
import { decode } from './commands/decode.js';

program
    .option( '-e, --encode', 'encode to dolphin')
    .option('-d, --decode', 'decode from dolphin')
    .option('-D, --dolphin', 'see a dolphin')
    .argument('[input]')
    .action(( input ) => {
        if ( program.opts().encode ) {
            console.log( Chalk.cyan.bold( encode( input )));
        } else if ( program.opts().decode ) {
            console.log( Chalk.cyan.bold( decode( input )));
        } else if ( program.opts().dolphin ) {
            console.log( Chalk.bold(`
                                  __         
                               _.-~  )
                    _..--~~~~,'   ,-/     _
                 .-' . . . .'   ,-','    ,' )
               ,' . . . _   ,--~,-'__..-'  ,'
             ,' . . .  (@)' ---~~~~      ,'
            / . . . . '~~             ,-'
           / . . . . .             ,-'
          ;  . . . .  - .        ,'
         :  . . . .       _     /
        .  . . . .          \`-.:
       .  . . ./  - .          )
      .   . . |  _____..---.._/ ____ Seal _
~---~~~~----~~~~             ~~

Special shout-out to（✿ ͡◕ ᴗ◕)つ━━✫・*。
${Chalk.hex('#CA09BC').bold('EEEEEEEEEeEeEeEE')}${Chalk.hex('#A318BF').bold('EEEEEEEEEeeEeeee')}${Chalk.hex('#7C27C2').bold('EEEEEEEEEeeEEEEe')}${Chalk.hex('#5535C5').bold('EEEEEEEEEeeeEEee')}${Chalk.hex('#2E44C8').bold('EEEEEEEEEeeeEeEE')}${Chalk.hex('#0753CB').bold('EEEEEEEEEeeEEeEe')}${Chalk.hex('#1478e3').bold('EEEEEEEEEeeeEEeE')}`))
        } else {
            console.log('Uh oh, command not recognized. Check out -h or --help for assistance');
        }
    })
    .version('1.0.0')
    .addHelpText('before', `
https://dolphinonkeys.com for ଘ(੭ºัᴗºั)━☆ﾟ*:. 
${Chalk.bgBlueBright(' °˖✧ The Dolphinator ✧˖° ')}${Chalk.bgMagentaBright(' online ')}
`)
    .addHelpText('after', `
${Chalk('Example usage:')}
${Chalk.cyan.bold('dolphin8 -e "encode this string"')}
${Chalk.cyan.bold('dolphin8 --decode "EEEEEEEEEeeEeEEEEEEEEEEEEeeEeEEe"')}`)

program.parse();
