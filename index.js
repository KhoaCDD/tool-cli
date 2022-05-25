#! /usr/bin/env node

import { program } from 'commander';
import minimist from 'minimist'

import { createProject } from './src/clone-project/clone-project.js'
import { validateCloneTemplateProjectParam } from './src/clone-project/validator.js'

program
    .command('create')
    .description('Init a project')
    .option('--from-project <fromProject>')
    .option('--to-project <toProject>')
    .action((params) => {
        console.log("\n\n\n\n", params)
        const isValidParams = validateCloneTemplateProjectParam(params)
        if (!isValidParams) return
        createProject(params)
    })
program.parse()