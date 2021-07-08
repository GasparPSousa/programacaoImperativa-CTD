// Data 07/07/2021
// Aula 14 - JSON
// ex03.js

// Objetivo da Aplicação: ESCREVENDO arquivos(teste.txt) = writeFileSync
// fs = file sistem
// apaga o arquivo que já existe (sobreescreve o arquivo)

const fs = require('fs');

let frutas = '{"fruta" : "banana", "preco" : 5.00, "tipo" : ["prata", "maça", "nanica", "da terra", "ouro"], "origem" : "Brasil" }';

fs.writeFileSync('teste.txt', frutas);

// LEITURA de arquivos - 'Precisa colocar o utf-8 para conseguir ler'
let lerJson= fs.readFileSync('teste.txt', 'utf-8')
console.log(lerJson)


// Converter objJSON para objJS
let converterlerJsonParaJS = JSON.parse(lerJson)
console.log(converterlerJsonParaJS)
 

// trabalhar, poupar, investir, repetir