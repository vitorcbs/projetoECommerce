export class User {
    email: string;
    password: string;
    profilePicture?: string;
    updateAt?: Date;

    constructor(email: string, password: string){
        this.email = email,
        this.password = password
    }
}
