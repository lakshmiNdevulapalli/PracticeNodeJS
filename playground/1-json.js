const fs = require('fs');
const { json } = require('stream/consumers');

// const book = {
//     title: 'Harry Potter',
//     author: 'JK Rowling'
// }

// const bookJson = JSON.stringify(book)

// /* console.log(bookJson)

// const parseData = JSON.parse(bookJson)

// console.log(parseData)
// console.log(parseData.author) */

// fs.writeFileSync('1-json.json', bookJson)

/*const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title) */

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data)

data.name = "Bala"
data.age = 30

const overrideData = JSON.stringify(data)

fs.writeFileSync('1-json.json', overrideData)