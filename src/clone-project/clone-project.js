import chalk from 'chalk';
import { exec } from 'child_process';
import * as util from 'util';
import * as fs from 'fs';
import { GITLAB_GROUP_URL, CLONE_COMMAND } from './constants.js'

const execPromise = util.promisify(exec);


// eslint-disable-next-line import/prefer-default-export
export async function createProject({ fromProject = '', toProject = '', }) {
  if (toProject) {
     // check if new project 's name existed
    if (fs.existsSync(`./${toProject}`)) {
      console.log(
        chalk.red.bold(`A folder named ${toProject} have already existed`),
      );
      return
    }
  } else {
    console.log(
      chalk.yellow.bold(`Argument 'toProject' isn't provided.Set ${fromProject} as new project's name `),
    );
    toProject = fromProject
  }

  const cloneResponse = await runCommandGitClone(fromProject, toProject);
  console.log(cloneResponse)
  if (!cloneResponse) {
    return
  }
  if (fromProject !== toProject) {
    updatePackageJsonFile(toProject)
  }
  // show the user a message
  console.log(
    chalk.green.bold('Tasks have been marked as done successfully'),
  );
}

async function runCommandGitClone(templateName, newProjectName) {
  try {
    const command = `${CLONE_COMMAND} ${GITLAB_GROUP_URL}/${templateName}.git ${newProjectName}`;
    await execPromise(command)

    return true;
  } catch ({stderr, err}){
    console.log(
        chalk.red.bold(err)
      );
    return false
  }
}
function updatePackageJsonFile(newProjectName) {
  if (!fs.existsSync(`./${newProjectName}/package.json`)) {
    console.log(
      chalk.yellow(`File package.json isn't detected, process is considered done!`),
    );
    return
  }
  const rawdata = fs.readFileSync(`./${newProjectName}/package.json`);
  const parsedData = JSON.parse(rawdata);
  parsedData.name = newProjectName;
  const data = JSON.stringify(parsedData, null, '\t');
  fs.writeFileSync(`./${newProjectName}/package.json`, data);
}

async function runCommandGitCloneTest(templateName, newProjectName) {
  try {
    const command = `${CLONE_COMMAND} ${GITLAB_GROUP_URL}/${templateName}.git ${newProjectName}`;
    await execPromise(command)
    return true;
  } catch ({stderr, err}){
    console.log(
        chalk.red.bold(err)
      );
    return false
  }
}
