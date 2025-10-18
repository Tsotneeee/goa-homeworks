function func(num:number):number {
    return num
}

const func2 = (num:number):number => num

function func3(res:Promise<string>):0|1|"fail"|"success"{
    return 1
}

let arr: [number, number] [] = [[1,3],[2,2]]

let arr2: number[] = [1,2,5,4]

interface people {
    name:string,
    age:number
}

let obj:people = {
    name:"tsotne",
    age:15
}