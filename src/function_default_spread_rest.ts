// normal function
function add2(num1: number, num2: number = 10) {
    return num1 + num2;
}

add2(1, 20);

// spread Operator
const myFriends2 = ['chandler', 'joey', 'ross'];
const newFriends = ['Monica', 'Rachel', 'Pheobe'];
const myBestFriend = {
    fullName: "Dont Know",
    age: 22
}

myFriends2.push(...newFriends);

console.log(myFriends2);


// rest Operator
// const greetFriends = (friend1: string, friend2: string, friend3: string): void => console.log(`Hi ${friend1}\n ${friend2}\n ${friend3}`)
// greetFriends("Kh.", "Shakil", "Ahamed");


const greetFriends = (...friends: string[]): void => {
    // console.log(friends)
    friends.map((friend) => console.log(`Hi ${friend}`));
}

greetFriends("Kh.", "Shakil", "Ahamed");


// array and object destructing
const [bestFriend] = myFriends2;
const {fullName} = myBestFriend;

console.log(fullName);

