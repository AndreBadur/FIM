export class Login {
    constructor(
        public userEmail: string,
        public userPassword: string,
    ) {
        this.userEmail = userEmail
        this.userPassword = userPassword
    }
}
