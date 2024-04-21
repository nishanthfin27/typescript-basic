interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
 
const user1: Admin = {dbId: 11, email: 'nishi@gmail.com', userId: 1122, 
role: "admin",
startTrial: () => {
    return "trial started"
},
getCoupon: (name: 'nishanth', off: 10) => {
    return 10
},
githubToken: "github"
}

user1.email = 'nishanth@gmail.com'
// user1.dbId = 22