// const validator = require('validator');
const yargs = require('yargs')
const notes = require('./notes.js');
const chalk = require('chalk')
// console.log(process.argv)
// customise yargs version
    yargs.version('1.1.1')
    //create add command
    yargs.command({
        command : 'add',
        builder : {
            body:{
                describe : 'Note Body',
                demandOption : true,
                type : 'string'
            },
            title : {
                describe : 'Note title',
                demandOption : true,
                type : 'string'
            }
        },
        describe : 'Add a new note',
        handler(argv){
            notes.addNote(argv.title,argv.body)
        }
    })
    //create remove command
    yargs.command({
        command : 'remove',
        builder :{
            title : {
                describe : 'Note title',
                demandOption : true,
                type : 'string'
            }
        },
        describe : 'remove note',
        handler(argv){
            notes.removeNote(argv.title)
        }
    })

    //creating read command
    yargs.command({
        command : 'read',
        builder : {
            title :{
                describe : 'Note title',
                demandOption : true,
                type : 'string'
            }
        },
        describe : 'read note',
        handler(argv){
            notes.readNotes(argv.title)
        }
    })

    //creating list command 
    yargs.command({
        command: 'list',
        describe : 'list all notes',
        handler(){
            notes.getAllNotes()
        }
    })
// add ,remove ,read ,list
// console.log(yargs.argv)
yargs.parse()