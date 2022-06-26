import fs from 'fs';
import chalk from 'chalk';

export const getNotes = () => {
    return "Your notes...."
}

export const addNote = (title, body) => {
    const notes = loadNotes()

    // handle duplicate titles
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    //if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New notes added!'))
    } else {
        console.log(chalk.yellowBright.bold('Note title taken!!'))
    }
}

export const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.red.bold.strikethrough("Note removed!"))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.italic.inverse("No note found!"))
    }
}

export const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse.blueBright('Your Notes!'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

export const readNotes = (title) => {
    const notes = loadNotes()
    const searchNotes = notes.find((note) => note.title === title)

    if (searchNotes) {
        console.log(chalk.green.italic(searchNotes.title)+': '+chalk.white(searchNotes.body))
    } else {
        console.log(chalk.red.italic.inverse("No note found!"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}