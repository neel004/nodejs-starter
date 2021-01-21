const fs = require('fs');


const loadNotes = () =>{
    try{
        const data_buffer =  fs.readFileSync('notes.json')
        const j_data_buffer = data_buffer.toString()
        return JSON.parse(j_data_buffer)
    }catch(e){
        return []
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const find_index = notes.findIndex((note)=>note.title === title)
    if(typeof(notes[find_index])==='undefined'){
        console.log('No Note Found With Provided Title')
    }else{
        console.log(notes[find_index])
    }
}

const addNotes = (title,body) => {
    const notes = loadNotes()
    const dup_notes = notes.filter((note)=>note.title === title)
    debugger //node inspect command.....
    if(dup_notes.length === 0 ){
        notes.push({
            title: title,
            body : body
        })
        console.log('Note Added')
        saveNotes(notes)
    }else{
        console.log('Note title taken')
    }
   
}

const saveNotes =  (notes)=>{
    const j_data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',j_kdata)
}
//write('new.txt',"First note, second note");
//read("new.txt");
const removeNote = (title) => {
    const notes = loadNotes()
    // const find_index = notes.findIndex(x=>x.title === title)
    // notes.splice(find_index,1)
    const updated_notes = notes.filter((notes)=>notes.title != title)
    saveNotes(updated_notes)
}
const getAllNotes = ()=>{
    const notes = loadNotes()
    notes.forEach((note) =>console.log(note.title));
}
module.exports = {
    readNotes : readNotes,//read
    addNote : addNotes,   //write
    removeNote : removeNote,//remove
    getAllNotes : getAllNotes//list
}