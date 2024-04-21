// const User = {
//     name: 'nishanth',
//     email: 'nishanth@gmail.com',
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: 'nishanth', isPaid: true, email: 'nishanth@gmail.com'}
// createUser(newUser)


// function createCourse(): {name: string, price: number}{
//     return {name: 'nodejs', price:50000}
// }

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name:'nishanth',email: 'nishanth@gmail.com', isActive: true} 
// }

// createUser({name:'nishanth',email: 'nishanth@gmail.com', isActive: true})

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creaditCardDetails?: number
}

let myUser: User = {
    _id: '123',
    name: 'nishanth',
    email: 'nishanth@gmail.com',
    isActive: true
}

myUser.email = 'nishi@gmail.com'
// myUser._id = '12' ** this is not allowed
// if id would be array, can we push value to array in case of READONLY?

type cardNumber = {
    cardnumber: number
}

type cardDate = {
    carddate: number
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}