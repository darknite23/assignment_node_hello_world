
var ldsh = require('lodash');
var jSON = require('./data/logs');


var info = require('./lib/info');

//info("INFO");

var warning = require('./lib/warning');

//warning("WARNING");

var error = require('./lib/error');

//error("ERROR");


//json
// json level to pass thru the function. 



ldsh.each(jSON, function(el) {
   if(el.level === "warning"){
       warning(el.message);
   } else if(el.level === "info"){
        info(el.message);
   } else {
       error(el.message);//
   }

});


