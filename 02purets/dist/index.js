"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Bangalore"
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
// }
// const nishanth = new User("nishanth@gmail.com","nishanth")
// // nishanth.city = "bangalore"
// console.log(nishanth)
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1
        this._courseCount = 1;
        this.city = "Bangalore";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const nishanth = new User("nishanth@gmail.com", "nishanth");
// nishanth.name 
console.log(nishanth);
