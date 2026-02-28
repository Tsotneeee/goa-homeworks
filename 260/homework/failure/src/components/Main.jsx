import { useState } from 'react'
import axios from 'axios'
import Card from './card'

function Main() {
    const [stats, setStats] = useState({count: 0, priceSum: 0})
    const [products, setProducts] = useState([])

    const [productTitle, setProductTitle] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productCount, setProductCount] = useState(0)
    
    async function fetchStats(){
        const res = await axios.get('http://localhost:3000/stats')
        setStats(res.data)
    }

    fetchStats()

    async function fetchProducts() {
        const res = await axios.get('http://localhost:3000/products')
        setProducts(res.data)
    }

    async function addProduct() {
        const res = await axios.post('http://localhost:3000/products', {
            title: productTitle,
            description: productDescription,
            price: productPrice,
            count: productCount
        })
        fetchProducts()
    }

  return (
    <>
        <div className=' justify-around flex'>
            <p className=' text-gray-50 text-3xl'>whole stock: {stats.count}</p>
            <p className=' text-gray-50 text-3xl'>price sum: {stats.priceSum}</p>
        </div>
        <button className=' border-2 text-white' onClick={addProduct}>add product</button>
        <form className=' text-white' action="" method="post">
            <label htmlFor="title">Title: </label><input type="text" id="title" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} />
            <label htmlFor="description">Description: </label><input type="text" id="description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
            <label htmlFor="price">Price: </label><input type="number" id="price" value={productPrice} onChange={(e) => setProductPrice(Number(e.target.value))} />
            <label htmlFor="count">Count: </label><input type="number" id="count" value={productCount} onChange={(e) => setProductCount(Number(e.target.value))} />
        </form>
        <div >
            {products.map((product) => <Card id={product.id} title={product.title} description={product.description} price={product.price} count={product.count}/>)}
        </div>
    </>
  )
}

export default Main