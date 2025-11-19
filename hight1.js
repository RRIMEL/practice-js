const height = [45, 55, 65, 67, 68, 69, 73];

function getmax(number){
    let max = number[0]
    for(const num of number){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const max = getmax(height)
console.log('max value of the array is :', max);