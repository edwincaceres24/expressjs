const express = require("express")
const app = express()
const port = 3000
const faker = require("faker")


app.get('/',(req,res)=>{ //We always use req and response as paramenters
		res.send('Basic Express Setup')
})

app.get('/products/filter',(req,res)=>{ //Put specific routes before dynamuc routes
	res.send("I'm a filter")	
})

app.get('/products/:id',(req,res)=>{
		const {id} = req.params;

		res.json([{
				id,
				name : "Edwin",
				profile: "Javascript Developer"
		},
		{
				name: "Nathalie",
				profile: "Data"
		}])
})

app.get('/products',(req,res)=>{
	const products = []
	const {size} = req.query

	for (let index = 0; index < size; index++){
			products.push({
				name: faker.commerce.productName(),
				price: parseInt(faker.commerce.price(),10),
				image: faker.image.imageUrl()
			})
	}
	res.json(products)
})

app.get('/users/:profileId/products/:productId',(req,res)=>{
	const { profileId, productId  } = req.params;
		res.json({
				profileId,
				productId,
				name: 'Emilia',
				profile: 'Lego Developer'
		})
})

app.delete('/user',(req,res)=>{
		res.send('Got a DELETE request at /user')})

app.listen(port, ()=>{
		console.log(`Listening port ${port}`) //We use a callback just to confirm that we're listening the port
})
