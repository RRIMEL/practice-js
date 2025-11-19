function layeardDiscountedtotal ( quantity){
    const first100Price = 100;
    const second100Price =90;
    const above200Prise = 70;

    if(quantity<=100){
        const total = quantity * first100Price
        return total;
    }
    else if (quantity <=200){
        const first100total =100 * first100Price;
        const remainingQuantity = quantity -100;
        const remainingTotal = remainingQuantity * second100Price;
        const total =first100total + remainingTotal
        return total;
    }
    else{
        const first100total =100 * first100Price;
        const second100total =100 * second100Price;
        const remainingQuantity= quantity -200;
        const remainingTotal = remainingQuantity + above200Prise;
        const total = first100total + second100total + remainingTotal;
        return total;
    }
}
const total = layeardDiscountedtotal(230);
console.log(total)