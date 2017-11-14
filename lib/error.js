//takes one parameter as the message and outputs it at the info level : so info color. (blue)
var chalk = require('chalk');

module.exports = function error(message){
        console.log(chalk.red(message));
}