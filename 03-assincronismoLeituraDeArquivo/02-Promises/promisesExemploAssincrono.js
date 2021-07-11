// Exemplo uma promise com uma operação assíncrona.

// Vamos fazer uma requisição para uma API que tras uma imagem aleatória de um cachorro a cada request.

const url = 'https://dog.ceo/api/breeds/image/random'

const dogImg = document.querySelector('[data-js="dog-img"')

// console.log(dogImg)

const validadeHTTPStatus = dogData => {
    if(!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    return dogData.json()
}

const setDogImg = ({ message: url}) => {
    dogImg.setAttribute('src', url)
}

const handleRequestError = error => {
    console.log(error.message)
}

// O método fetch() faz uma requisição HTTP e traz os dados da URL que especificamos como argumento.

fetch(url)
    .then(validadeHTTPStatus)
    .then(setDogImg)
    .catch(handleRequestError)
