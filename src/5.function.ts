// normal function
function add(num1: number, num2: number) {
    return num1 + num2;
}

add(2, 1);


// arrow function
const addArrow = (num1: number, num2: number) => {
    return num1 + num2;
}

// callback function
const arr = [1, 3, 4];

const newArray = arr.map((elem: number) => elem * elem);


const person: {
    name: string,
    balance: number,
    // addBalance(money: number): string
    addBalance(money: number): void
} = {
    name: 'shakil',
    balance: 5,
    addBalance(money: number) {
        // return `My New Balance is ${this.balance + money}`;
        console.log(`My New Balance is ${this.balance + money}`);
    }
}