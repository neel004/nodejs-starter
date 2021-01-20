const fs = require('fs');

const read = function (a){
    console.log(fs.readFileSync(a, encoding= "UTF8"));
}

const write = function(a,txt){
    fs.appendFileSync(a,txt);
}
//write('new.txt',"First note, second note");
//read("new.txt");
module.exports = read ;