let score: number | string = 33

score = 44
score = "55"
console.log(score)

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let role: User | Admin = {name: "Nishanth", id:12}

role = {username: "Nishanth", id:22}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB's id is ${id}`)
// }

getDbId(2)
getDbId("3")

function getDbId(id: number | string){
    if(typeof id === 'string'){
        id.toLocaleLowerCase()
    }
}


//arrays

const data: (string | number | boolean)[] = [1,2,3,"4",true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"
export {}