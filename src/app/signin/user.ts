export class User{
    constructor(
        public name: string,
        public username: String,
        public email: String,
        public date: Date,
        public password: string,
        public confirmpassword: string  
    ){ }
}