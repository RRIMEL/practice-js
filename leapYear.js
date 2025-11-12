function isLeapYear(year) {
    if(year % 100 !== 0 && year % 4 ===0){
        return true;
    }
    else if (year %100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isleap = isLeapYear(2974);
const isleap2 = isLeapYear(2000);
const isleap3 = isLeapYear(2012);
console.log(isleap, isleap2, isleap3);