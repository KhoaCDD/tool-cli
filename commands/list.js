
import chalk from 'chalk';
import { exec } from 'child_process';


export function list () {
    // const data = [{
    //     text, //string, the text of the todo task
    //     done, //boolean, whether the todo task is marked done or not
    // }]
    const todoList = [{
        index: 1,
        text: "aaaa22"
    }]

    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index}. ${task.text}`)
                )
            }
        })
    } else {
        //user does not have tasks in todoList
        console.log(
        chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}

export function add (projectName) {
    //get the current todo-list
    const todoList = [{
        index: 1,
        text: "aaaaa",
        done: false
    }]

    if (!todoList) {
        //default value for todos-list
        todosList = []
    }

    //push the new task to the todos-list
    todoList.push({
        text: task,
        done: false
    })

    //set todos-list in conf

    //display message to user
    console.log(
        chalk.green.bold('Task has been added successfully!')
    )
}

export function markDone({tasks}) {
    let todosList = config.get('todo-list')

    if (todosList) {
        //loop over the todo list tasks
        todosList = todosList.map((task, index) => {
            //check if the user specified the tasks to mark done
            if (tasks) {
                //check if this task is one of the tasks the user specified
                if (tasks.indexOf(index.toString()) !== -1) {
                    //mark only specified tasks by user as done
                    task.done = true
                }
            } else {
                //if the user didn't specify tasks, mark all as done
                task.done = true
            }
            return task
        });

        //set the new todo-list
        config.set('todo-list', todosList)
     
    var command = "git clone https://gitlab.com/khoacdd/gin-oauth2.git"
    var child = exec(command, function(err, stdout, stderr){
        if(err != null){
            return cb(new Error(err), null);
        }else if(typeof(stderr) != "string"){
            return cb(new Error(stderr), null);
        }else{
            return cb(null, stdout);
        }
    });
    console.log(child)

    }

    //show the user a message
    console.log(
        chalk.green.bold('Tasks have been marked as done successfully')
    )
}