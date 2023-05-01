type NoobDeveloper = {
    name: string;
}

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

// enum Level {
//     junior = 'junior',
//     mid = 'mid',
//     senior = 'senior'
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    // level: string;
    level: 'junior' | 'mid' | 'senior';
    // level: Level;
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Kh. Shakil',
    expertise: 'Javascript',
    experience: 1,
}

const developer: NextLevelDeveloper = {
    name: "Kh. Shakil",
    expertise: 'TypeScript',
    experience: 2,
    leadershipExperience: 1,
    level: 'junior',
    // level: Level.junior,
}