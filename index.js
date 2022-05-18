#! /usr/bin/env node

import { program } from 'commander';
import minimist from 'minimist'

import { list, add, markDone } from './commands/list.js'

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action((tasks) => {
        console.log(minimist(process.argv.slice(3)))
        markDone(tasks)
    })

program.parse()