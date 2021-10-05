const readline = require('readline-sync')
const crypto = require('crypto')

let salt = 'f844b09ff50c'

const username = readline.question('Defina um login: ')
let password = readline.question('Defina one password: ')

let hash = crypto.pbkdf2Sync(password, salt,  
1000, 64, `sha512`).toString(`hex`);

password = hash

module.exports = {
	username,
	password
}