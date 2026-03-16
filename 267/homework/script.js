import { db, group, countGroupByPrice, maxPrice, addProduct, stockPriceSum, stockCount, returnAll } from './db.cjs'

const btn = document.getElementById('btn')

let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    inp1 = inp1.value
    inp2 = inp2.value
    console.log(inp1, inp2)
})