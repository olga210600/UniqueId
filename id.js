const getUniqueId = (a) => {
    const getRandomNum = (min, max) =>{
    let randomIndex = min + Math.random() * (max + 1 - min);
    return Math.floor(randomIndex);
    }
    const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

    for (let i = 0; i < a; i++){
    const randomNum = getRandomNum(0,9)
    const randomLetInd = getRandomNum(0,52)
    const randomLetter = letters[randomLetInd];

    arrayUniqueId.push(randomNum);
    arrayUniqueId.push(randomLetter);
    }
}

const arrayUniqueId = [];

getUniqueId(5);

console.log(arrayUniqueId.join(''))





