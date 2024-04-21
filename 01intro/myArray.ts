const superHeros: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []

type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = []

allUsers.push({name: 'nishanth', isActive: true})

superHeros.push('spiderman')
heroPower.push(2)

console.log(allUsers)
console.log(superHeros)
console.log(heroPower)