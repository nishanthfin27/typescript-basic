function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){
    return true
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return false
}

// function getValue(myVal: number): string{
//     if(myVal > 5){
//         return true
//     }

//     return '200 ok'
// }

const getHello = (s: string): string => {
    return ""
}

const heros = ['thor', 'spiderman', 'ironman']

heros.map((hero: string): string => { return `hero is ${hero}`})

function consoleError(errMsg: string): void{
    console.log(errMsg)
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)
}

let value = addTwo(6)
console.log(addTwo(5))
console.log(getUpper('Hello Nishanth'))
console.log(signUpUser('nishanth','nishanth@gmail.com',true))
console.log(loginUser('nishanth','nishanth@gmail.com'))
console.log(consoleError)
console.log(handleError)


export {}