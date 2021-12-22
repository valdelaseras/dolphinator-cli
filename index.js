#! /usr/bin/env node

import Chalk from 'chalk';
import { program } from 'commander';
import { encode } from './commands/encode.js';
import { decode } from './commands/decode.js';

program
    .option( '-e, --encode', 'encode to dolphin')
    .argument('<input>')
    .action(( input ) => {
        console.log( Chalk.cyan.bold( encode( input )));
    })

program
    .option('-d, --decode', 'decode from dolphin')
    .argument('<input>')
    .action(( input ) => {
        console.log( Chalk.cyan.bold( decode( input )));
    })

program
    .version('1.0.0')
    .addHelpText('after', Chalk.cyan(`
dolphin8 -e "encode this string" 
dolphin8 -x -d "decode this string"
dolphin8 --decode "decode this string" 
`))

program.parse( process.argv );
