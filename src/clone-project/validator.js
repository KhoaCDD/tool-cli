import validate from 'validate-npm-package-name';

export function validateCloneTemplateProjectParam(params) {
    if (!params.fromProject) {
        console.log(
            chalk.red.bold(`Value for argument 'fromProject' cannot be empty`),
          );
          return false
    }
    if (params.toProject) {
        const validateResult = validate(params.toProject)
        if (!validateResult.validForNewPackages) {
            console.log(
                chalk.red.bold('New project\'s name is invalid'),
              );
              return false
        }
    }
    return true
}