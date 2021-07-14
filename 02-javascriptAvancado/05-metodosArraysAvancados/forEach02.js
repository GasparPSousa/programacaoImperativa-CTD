/* 
    - ForEach()


*/

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']


// socialNetworks.forEach((socialNetwork, index, array) => {
//     console.log(index, socialNetwork, array)
// })


// De outra forma mais prática e reutilizável
const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
};

socialNetworks.forEach(logArrayInfo)