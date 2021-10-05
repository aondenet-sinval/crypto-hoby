const readline = require('readline-sync');
const crypto = require('crypto');
//Você quer algo mais seguro então importe salt aleatório:
let token = crypto.randomBytes(6).toString('hex');
//const token = require('aleat');
let salt = token;

const username = readline.question('Defina um login: ');
let password = readline.question('Defina one password: ');

let hash = crypto.pbkdf2Sync(password, salt,  
1000, 64, `sha512`).toString(`hex`);

password = hash

module.exports = {
	username,
	password
}