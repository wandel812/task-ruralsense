import { v4 as uuidv4 } from 'uuid';

enum UserRole {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
}

type User = {
    id: string;
    firstName: string;
    lastName: string;
    isActivated: boolean;
    role: UserRole;
}


const fetchUserData = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(generateUserData()), 1000);
    })
}

function generateUserData(): User[] {
    return ([
        {
            id: uuidv4(),
            firstName: "Alice",
            lastName: "Smith",
            isActivated: true,
            role: UserRole.ADMIN
        },
        {
            id: uuidv4(),
            firstName: "Bob",
            lastName: "Smith",
            isActivated: false,
            role: UserRole.MANAGER
        },
        {
            id: uuidv4(),
            firstName: "Nelly",
            lastName: "Kit",
            isActivated: true,
            role: UserRole.ADMIN
        },
        {
            id: uuidv4(),
            firstName: "Aaa",
            lastName: "Aaaaa",
            isActivated: true,
            role: UserRole.MANAGER
        },
        {
            id: uuidv4(),
            firstName: "Ccc",
            lastName: "Ccccc",
            isActivated: false,
            role: UserRole.ADMIN
        },
        {
            id: uuidv4(),
            firstName: "Ddd",
            lastName: "Ddddd",
            isActivated: true,
            role: UserRole.MANAGER
        },
        {
            id: uuidv4(),
            firstName: "Eee",
            lastName: "Eeeee",
            isActivated: false,
            role: UserRole.ADMIN
        },
        {
            id: uuidv4(),
            firstName: "Fff",
            lastName: "Fffff",
            isActivated: false,
            role: UserRole.MANAGER
        },
        {
            id: uuidv4(),
            firstName: "Ggg",
            lastName: "Ggggg",
            isActivated: true,
            role: UserRole.ADMIN
        },


    ])
}

export { UserRole, fetchUserData };
export type { User };


