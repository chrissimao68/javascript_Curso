//Exercicio de digitar emails
let prompt = require(`prompt-sync`)({ sigint: true });
let email = [], dig
for (let i = 0; i < 5; i++) {
    let dig = String(prompt(`Digite ${i + 1}º email: `))
    email[i] = dig
}
console.log(email)