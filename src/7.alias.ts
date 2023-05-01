type CrushType = {
    name: string,
    age?: number, // Optional type
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: 'Moyna Pakhi',
    age: 22,
    profession: 'Web Developer',
    address: 'Uganda'
}

const crush2: CrushType = {
    name: 'Tia Pakhi',
    profession: 'Next Level web developer',
    address: 'Mexico'
}

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = true;

type CourseNameType = string;

const courseName: CourseNameType = 'Next Level Web Development';

type OperationType = (x: number, y: number) => number;

const calculate = (
    num1: number, // 10
    num2: number, // 20
    operation: OperationType // (x, y) => x + y
) => {
    // console.log(operation);
    return operation(num1, num2);
}

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x / y);
calculate(10, 20, (x, y) => x * y);