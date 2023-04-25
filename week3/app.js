const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  // res.json([{name:'jpohn'}, {name: 'suzan'}])
  //res.json(products)
  res.send('<h1> Home page </h1><a href="/api/products">products </a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image } // 5:39
  })
  res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params //5.44
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!productID) {
    return res.status(404).send('Product does not exist')
  }
  console.log(singleProduct);
  res.json(singleProduct)

})

app.get('/api/products/:productID/reviews/:reviewID', (rec, res) => {
  console.log(req.query)
  res.send('hello world')
})

app.get('api/v1/query', (req, res) => {
  //console.log(req.query);

  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
