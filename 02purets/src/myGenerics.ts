const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: number | boolean): number | boolean | string {
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

// identityThree(true)
// identityThree(2)
// identityThree("3")
// identityThree("nishanth")

function identityFour<T>(val: T): T{
    return val
}

interface Bottle {
    brand: string,
    price: number
}

identityFour<Bottle>({brand: "bisleri", price: 10})

function getSearchProducts<T>(products: T[]): T {
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database> (valueOne: T, valueTwo: U): object{
    return {
        valueOne,
        valueTwo
    }
}

anotherFunction(2,{connection:'http:locahost:27017:dbname', username: 'nishanth', password:'nishi@123'})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}