import { argv } from 'process'
import yargs from 'yargs'
import { addNote, listNotes, readNotes, removeNotes } from './notes.js'

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        addNote(argv.title, argv.body)
       
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List the note',
    handler() {
        listNotes()
    }
})

//create read command 
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder: {
        title: {
            describe: 'Read Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNotes(argv.title)
    }
})

yargs.parse()