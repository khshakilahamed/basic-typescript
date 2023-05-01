// ----------------- null -----------------
const searchName = (value: string | null) => {
    if (value === null) {
        console.log('There is nothing to search');
    }
    else {
        console.log("Searching...");
    }
}

// searchName('Kh. Shakil');
searchName(null);


// ----------------- unknown -----------------
//  Kmh^-1 --> ms^-1
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed} ms^-1`);
    }

    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ');

        const convertedSpeed = (parseInt(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed} ms^-1`);
    }

    else {
        console.log('There is wrong type');
    }
}

getMyCarSpeed(10);
getMyCarSpeed('10 Kmh^-1');
getMyCarSpeed(true);


// ----------------- never -----------------
function throwError(message: string): never {
    throw new Error(message);
}

throwError("Error hoyeche");