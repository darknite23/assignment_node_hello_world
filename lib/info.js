//takes one parameter as the message and outputs it at the info level : so info color. (blue)
var chalk = require('chalk');

module.exports = function info(message){
        console.log(chalk.blue(message));
}