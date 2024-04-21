//let user: (string | number)[] = [1,'nishi']

let user: [string, number, boolean]

user = ["nishi", 12, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [122, "ex@gmail.com"]

newUser[1] = "example@gmail.com"
// newUser.push(true)