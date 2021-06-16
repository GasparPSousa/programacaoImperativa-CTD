let fizzBuzzDinamica = (number1, number2, wordComplete, word1, word2) => {
    for(let j = 1; j <= 100; j++) {
        if ((j % number1 == 0) && (j % number2 == 0)) {
            console.log(wordComplete)

        } else if (j % number1 == 0) {
            console.log(word1)

        } else if (j % number2 == 0) {
            console.log(word2)
            
        } else {
            console.log(j)
        }
    }
}

fizzBuzzDinamica(2, 5, 'Flamengo', 'Fla', 'Mengo')