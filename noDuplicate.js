const birianikhur = ['abul', 'babul', 'cabul', 'labul', 'cabul', 'kabul', 'abul', 'tabul'];
const number = [1, 34, 24, 52, 24, 1, 64, 34, 1];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }

    }
    return unique;
}

const uniqueArray = noDuplicate(birianikhur);
console.log(uniqueArray);